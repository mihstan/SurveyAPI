The Application has the following REST API endpoints:

1.Get surveys
GET http://localhost:3000/surveys

2.Get survey by serveyId(autoincremented in mongoDB, not ht mongoDB _id)
GET http://localhost:3000/surveys/{surveyId}

3.Update survey
PUT http://localhost:3000/surveys/{surveyId}

4.Create survey(only servey title and startDate are taken into account)
POST http://localhost:3000/surveys

5.Delete survey by serveyId
DELETE http://localhost:3000/surveys/{surveyId}

6.Get survey detail(returns title and startDate of a given surveyId)
GET http://localhost:3000/surveys/{surveyId}/details

7.Get survey questions only, based on surveyId
GET http://localhost:3000/surveys/{surveyId}/questions

8.Delete a survey question by surveyId and questionId
DELETE http://localhost:3000/surveys/{surveyId}/questions/remove/{questionId}

9.Create a question
POST http://localhost:3000/questions

10.Get all questions
GET http://localhost:3000/questions

11.Get a question by questionId(autoincremented)
GET http://localhost:3000/questions/{questionId}

12.Update a question(update a question by provided questionId)
PUT http://localhost:3000/questions/{questionId}

13.Delete a question by questionId
DELETE http://localhost:3000/questions/{questionId}

