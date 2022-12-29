package controller

import (
	"net/http"
	"strconv"

	"exacta/backend/model/domain"
	"exacta/backend/model/web"	

	"github.com/gin-gonic/gin"

)

func (api *API) GetCategories(c *gin.Context) {
	go api.AllowOrigin(c)
	categories, err := api.quizRepo.FindCategories()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"errors": err})
		return
	}

	var categoriesResponse []web.CategoryResponse

	for _, v := range categories {
		categorieResponse := convertToCategorieResponse(v)

		categoriesResponse = append(categoriesResponse, categorieResponse)
	}
	c.JSON(http.StatusOK, web.WebResponse{
		Code:    http.StatusOK,
		Message: "Success",
		Data:    categoriesResponse,
	})
}

func (api *API) GetQuizByCategoryIdWithPagination(c *gin.Context) {
	categoryId, _ := strconv.Atoi(c.Query("category_id"))
	page, _ := strconv.Atoi(c.Query("page"))
	limit, _:= strconv.Atoi(c.Query("limit"))
	questions, err := api.quizRepo.FindQuizByCategoryIdWithPagination(
		uint(categoryId), uint(page), uint(limit),
	)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"errors": err})
		return
		}
	
	category, err := api.quizRepo.FindCategoryById(uint(categoryId))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"errors": err})
		return
		}
	
	var incorrectAnswers domain.IncorrectAnswerDomain
	for _, question := range questions {
		incorrectAnswerDomain, err := api.quizRepo.FindIncorrectAnswersByQuizId(question.Id)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"errors": err})
			return
			}
	
		incorrectAnswers = incorrectAnswerDomain
	}

	QuizResponse := convertToQuizResponses(questions, incorrectAnswers, category)

	c.JSON(http.StatusOK, web.WebResponse{
		Code:    http.StatusOK,
		Message: "Success",
		Data:    QuizResponse,
	})
}	

func convertToCategorieResponse(c domain.CategoryDomain) web.CategoryResponse {
	return web.CategoryResponse{
		Id 			: c.Id,
		Name 		: c.Name,
		Description : c.Description,
	}
}

func convertToQuizResponses(questions []domain.QuizDomain, incorrectAnswer domain.IncorrectAnswerDomain, category domain.CategoryDomain) []web.QuizResponse {
	var incorrectAnswerResponses []string
	incorrectAnswerResponses = append(
		incorrectAnswerResponses, incorrectAnswer.OptionOne, incorrectAnswer.OptionTwo,
	)

	var questionResponses []web.QuizResponse
	for _, question := range questions {
		questionResponses = append(questionResponses, web.QuizResponse{
			Id:               question.Id,
			Category:         category.Name,
			Question:         question.Question,
			CorrectAnswer:    question.CorrectAnswer,
			IncorrectAnswers: incorrectAnswerResponses,
		})
	}

	return questionResponses
}