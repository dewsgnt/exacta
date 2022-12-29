package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3" //third party API, import indirect
)

func main(){
	db, err := sql.Open("sqlite3", "../Exacta.db")

	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS users(
			id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
			username VARCHAR(100) NOT NULL,
			email VARCHAR(100) NOT NULL UNIQUE,
			nama_sekolah VARCHAR(100) NOT NULL,
			password TEXT NOT NULL
		);
	CREATE TABLE categories(
			id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
			name VARCHAR(100) NOT NULL UNIQUE,
			description TEXT NOT NULL
		);
	CREATE TABLE IF NOT EXISTS quizzes(
			id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
			category_id integer NOT NULL,
			question TEXT NOT NULL,
			correct_answer TEXT NOT NULL,
			FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE ON UPDATE CASCADE
		);
	CREATE TABLE IF NOT EXISTS incorrect_answers(
			id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
			quiz_id integer NOT NULL,
			option_one TEXT NOT NULL,
			option_two TEXT NOT NULL,
			FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE ON UPDATE CASCADE
		);
	CREATE TABLE IF NOT EXISTS answer_attempts(
			id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
			answer TEXT NOT NULL,
			quiz_id integer NOT NULL,
			user_id integer NOT NULL,
			FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE ON UPDATE CASCADE,
			FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
		);
	CREATE TABLE IF NOT EXISTS results(
			id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
		  correct integer NOT NULL,
			wrong integer NOT NULL,
			duration VARCHAR(20) NOT NULL,
			user_id integer NOT NULL,
			category_id integer NOT NULL,
			FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
			FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE ON UPDATE CASCADE
	);

	CREATE TABLE IF NOT EXISTS auth(
		auth_id integer not null primary key AUTOINCREMENT,
		user_id integer,
		token varchar(255) not null,
		expired_at datetime not null,
		FOREIGN KEY (user_id) REFERENCES users(user_id)

	);

	INSERT INTO categories (name, description) VALUES 
	('Bilangan Bulat', '' ),
	('Statistika', ''),
	('FPB dan KPK', '');
	`)
	if err != nil {
		panic(err)
	}

	defer db.Close()
}