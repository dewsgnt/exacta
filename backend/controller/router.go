package controller

import(
	"exacta/backend/repository"
	"github.com/gin-gonic/gin"
	"fmt"
	"net/http"

)

type API struct{
	usersRepo repository.UserRepositoryImpl
	quizRepo repository.QuizRepositoryImpl
	gin *gin.Engine
}


func NewAPI(usersRepo repository.UserRepositoryImpl, quizRepo repository.QuizRepositoryImpl) API{
	gin := gin.Default()
	api := API{
		usersRepo,
		quizRepo,
		gin,
	}

	v1 := gin.Group("/api/v1")

	//users
	v1.POST("/users/regist", api.POST(api.PostUserRegist))
	v1.POST("/users/login", api.POST(api.LoginUser))
	v1.POST("/users/logout", api.POST(api.LogoutUser))

	//quiz
	v1.GET("/home/categories", api.GET(api.GetCategories))
	v1.GET("home/quizzes", api.GET(api.GetQuizByCategoryIdWithPagination))
	v1.POST("home/submitanswer", api.POST(api.SubmitAnswersAttempts))

	return api
}

func (api *API) Handler() *gin.Engine {
	return api.gin
}
func (api *API) Start() {
	fmt.Println("starting web server at https://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}