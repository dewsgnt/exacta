package repository

import (
	"database/sql"
	"exacta/backend/model/domain"
)

type QuizRepositoryImpl struct{
	db *sql.DB
}

func NewQuizRepository (db *sql.DB) *QuizRepositoryImpl {
	return &QuizRepositoryImpl{
		db : db,
	}
}

func (q *QuizRepositoryImpl) FindCategories() ([]domain.CategoryDomain, error) {
	var categories []domain.CategoryDomain

	query := `SELECT id, name, description FROM categories;`
	rows, err := q.db.Query(query)
	if err != nil {
		return categories, err
	}
	defer rows.Close()

	for rows.Next() {
		var category domain.CategoryDomain

		err := rows.Scan(
			&category.Id, 
			&category.Name, 
			&category.Description,
		)
		if err != nil {
			return categories, err
		}

		categories = append(categories, category)
	}

	if closeErr := rows.Close(); closeErr != nil {
		return nil, closeErr
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}
	return categories, nil
}

func (q *QuizRepositoryImpl) FindCategoryById(categoryId uint) (domain.CategoryDomain, error) {
	var category domain.CategoryDomain

	query := `SELECT id, name, description FROM categories WHERE id = ?;`
	row := q.db.QueryRow(query, categoryId)
	err := row.Scan(
		&category.Id, 
		&category.Name, 
		&category.Description)
	if err != nil {
		return category, err
	}

	return category, nil
}

func (q *QuizRepositoryImpl) FindQuizByCategoryIdWithPagination(categoryId, page, limit uint) ([]domain.QuizDomain, error) {
	query := `
	SELECT id, category_id, question, correct_answer FROM quizzes 
	WHERE category_id = ? ORDER BY id LIMIT ? OFFSET ?;`

	rows, err := q.db.Query(query, categoryId, limit, (page-1)*limit)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var quizzes []domain.QuizDomain
	for rows.Next() {
		var quiz domain.QuizDomain
		err := rows.Scan(
			&quiz.Id, 
			&quiz.CategoryId, 
			&quiz.Question, 
			&quiz.CorrectAnswer)
			if err != nil {
				return quizzes, err
			}

		quizzes = append(quizzes, quiz)
	}

	if closeErr := rows.Close(); closeErr != nil {
		return nil, closeErr
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return quizzes, nil
}

func (q *QuizRepositoryImpl) FindIncorrectAnswersByQuizId(quizId uint) (domain.IncorrectAnswerDomain, error) {
	query := `
	SELECT id, quiz_id, option_one, option_two FROM incorrect_answers 
	WHERE quiz_id = ?;`

	var incorrectAnswerDomain domain.IncorrectAnswerDomain
	row := q.db.QueryRow(query, quizId)
	err := row.Scan(
		&incorrectAnswerDomain.Id, &incorrectAnswerDomain.QuizId,
		&incorrectAnswerDomain.OptionOne, &incorrectAnswerDomain.OptionTwo,
	)
	if err != nil {
		return incorrectAnswerDomain, err
	}

	return incorrectAnswerDomain, nil
}