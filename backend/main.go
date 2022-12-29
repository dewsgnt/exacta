package main
import(
	"database/sql"
	"exacta/backend/repository"
	"exacta/backend/controller"


	_ "github.com/mattn/go-sqlite3"

)

func main(){
	db, err := sql.Open("sqlite3", "database/Exacta.db")
	if err != nil {
		panic(err)
	}
	
	usersRepo := repository.NewUserRepository(db)
	quizRepo := repository.NewQuizRepository(db)

	mainAPI := controller.NewAPI(*usersRepo, *quizRepo)

	mainAPI.Start()


}