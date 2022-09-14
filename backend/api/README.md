# Backend - Trivia API

## Setting up the Backend

### Install Dependencies

1. **Python 3.7** - Follow instructions to install the latest version of python for your platform in the [python docs](https://docs.python.org/3/using/unix.html#getting-and-installing-the-latest-version-of-python)

2. **Virtual Environment** - We recommend working within a virtual environment whenever using Python for projects. This keeps your dependencies for each project separate and organized. Instructions for setting up a virual environment for your platform can be found in the [python docs](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

3. **PIP Dependencies** - Once your virtual environment is setup and running, install the required dependencies by navigating to the `/backend` directory and running:

```bash
pip install -r requirements.txt
```

#### Key Pip Dependencies

- [Flask](http://flask.pocoo.org/) is a lightweight backend microservices framework. Flask is required to handle requests and responses.

- [SQLAlchemy](https://www.sqlalchemy.org/) is the Python SQL toolkit and ORM we'll use to handle the lightweight SQL database. You'll primarily work in `app.py`and can reference `models.py`.

- [Flask-CORS](https://flask-cors.readthedocs.io/en/latest/#) is the extension we'll use to handle cross-origin requests from our frontend server.

### Set up the Database

With Postgres running, create a `trivia` database:

```bash
createbd trivia
```

Populate the database using the `trivia.psql` file provided. From the `backend` folder in terminal run:

```bash
psql trivia < trivia.psql
```

### Run the Server

From within the `./src` directory first ensure you are working using your created virtual environment.

To run the server, execute:

```bash
flask run --reload
```

The `--reload` flag will detect file changes and restart the server automatically.

## API Reference

### General

- Base URL: this app is hosted locally under the port 5000. The API base URL is `http://localhost:5000/api/v1`
- Authentication: this app doesn't require any authentication or API tokens.
- You must set the header: `Content-Type: application/json` with every request.

### Error Handlers

if any errors accured, the API will return a json object in the following format:

```
{
    "success": False,
    "error": 404,
    "message": "resource not found"
}
```

The following errors will be reported:

- 400: `bad request`
- 404: `resource not found`
- 405: `method not allowed`
- 422: `unprocessible`

### Endpoints

#### GET `/categories`

- Fetches a dictionary of categories in which the keys are the ids and the value is the corresponding string of the category.
- Request Arguments: None
- Returns: An object with a single key, categories, that contains an object of id: category_string key:value pairs.
- example: `curl http://localhost:5000/api/v1/categories -H "Content-Type: application/json"`

```
{'1' : "Science",
'2' : "Art",
'3' : "Geography",
'4' : "History",
'5' : "Entertainment",
'6' : "Sports"}
```

#### GET `/questions`

- Fetches a dictionary of paginated questions, as well as a list of category dictionaries, in which the keys are the category ids and the values are the corresponding category strings.
- Request Arguments:
  - optional URL queries:
    - `page`: an optional integer for a page number, which is used to fetch 10 questions for the corresponding page.
    - default: `1`
- Returns: An object with 3 keys:
  - `questions`: a list that contains paginated questions objects, that coorespond to the `page` query.
    - int:`id`: Question id.
    - str:`question`: Question text.
    - int:`difficulty`: Question difficulty.
    - int:`category`: question category id.
  - `categories`: a dictionary that contains objects of id: category_string key:value pairs.
  - int:`total_questions`: an integer that contains total questions
- example: `curl http://localhost:5000/api/v1/categories -H "Content-Type: application/json"`

```
{
  "categories": {
    "1": "Science",
    "2": "Art",
    "3": "Geography",
    "4": "History",
    "5": "Entertainment",
    "6": "Sports"
  },
  "questions": [
    {
      "answer": "Apollo 13",
      "category": 3,
      "difficulty": 4,
      "id": 2,
      "question": "What movie earned Tom Hanks his third straight Oscar nomination, in 1996?"
    },
    {
      "answer": "Tom Cruise",
      "category": 5,
      "difficulty": 4,
      "id": 4,
      "question": "What actor did author Anne Rice first denounce, then praise in the role of her beloved Lestat?"
    },
    {
      "answer": "Maya Angelou",
      "category": 4,
      "difficulty": 2,
      "id": 5,
      "question": "Whose autobiography is entitled 'I Know Why the Caged Bird Sings'?"
    },
    {
      "answer": "Edward Scissorhands",
      "category": 5,
      "difficulty": 3,
      "id": 6,
      "question": "What was the title of the 1990 fantasy directed by Tim Burton about a young man with multi-bladed appendages?"
    },
    {
      "answer": "Muhammad Ali",
      "category": 4,
      "difficulty": 1,
      "id": 9,
      "question": "What boxer's original name is Cassius Clay?"
    },
    {
      "answer": "Brazil",
      "category": 6,
      "difficulty": 3,
      "id": 10,
      "question": "Which is the only team to play in every soccer World Cup tournament?"
    },
    {
      "answer": "Uruguay",
      "category": 6,
      "difficulty": 4,
      "id": 11,
      "question": "Which country won the first ever soccer World Cup in 1930?"
    },
    {
      "answer": "George Washington Carver",
      "category": 4,
      "difficulty": 2,
      "id": 12,
      "question": "Who invented Peanut Butter?"
    },
    {
      "answer": "Lake Victoria",
      "category": 5,
      "difficulty": 2,
      "id": 13,
      "question": "What is the largest lake in Africa?"
    },
    {
      "answer": "The Palace of Versailles",
      "category": 2,
      "difficulty": 3,
      "id": 14,
      "question": "In which royal palace would you find the Hall of Mirrors?"
    }
  ],
  "success": true,
  "total_questions": 20
}
```

#### GET `/categories/<int:id>/questions`

- Fetches a dictionary of paginated questions that are in the category specified in the URL parameters.
- Request Arguments:
  - optional URL queries:
    - `page`: an optional integer for a page number, which is used to fetch 10 questions for the corresponding page.
    - default: `1`
- Returns: An object with 3 keys:
  - str:`current_category`: a string that contains the category type for the selected category.
  - `questions`: a list that contains paginated questions objects, that coorespond to the `page` query.
    - int:`id`: Question id.
    - str:`question`: Question text.
    - int:`difficulty`: Question difficulty.
    - int:`category`: question category id.
  - int:`total_questions`: an integer that contains total questions in the selected category.
- example: `curl http://localhost:5000/api/v1/categories/1/questions -H "Content-Type: application/json"`

```
{
  "current_category": "Science",
  "questions": [
    {
      "answer": "The Liver",
      "category": 3,
      "difficulty": 4,
      "id": 20,
      "question": "What is the heaviest organ in the human body?"
    },
    {
      "answer": "Alexander Fleming",
      "category": 1,
      "difficulty": 3,
      "id": 21,
      "question": "Who discovered penicillin?"
    },
    {
      "answer": "Blood",
      "category": 1,
      "difficulty": 4,
      "id": 22,
      "question": "Hematology is a branch of medicine involving the study of what?"
    },
    {
      "answer": "Me, duh!",
      "category": 1,
      "difficulty": 5,
      "id": 24,
      "question": "Who invented electricity?"
    }
  ],
  "success": true,
  "total_questions": 4
}
```

#### DELETE `/questions/<int:id>`

- Deletes the question by the id specified in the URL parameters.
- Request Arguments: None
- Returns: A dictionary that contain deleted: question_id key:value pair.
- example: `curl -X DELETE http://localhost:5000/api/v1/questions/20 -H "Content-Type: application/json"`

```
{
    "deleted": 2,
    "success": true
}
```

#### POST `/questions/search`

- search for a question.
- Request Arguments:
  - Json object:
    - str:`searchTerm`: a string that contains the search term to search with.
- returns: an object with the following:
  - `questions`: a list that contains paginated questions objects, durrived from the search term.
    - int:`id`: Question id.
    - str:`question`: Question text.
    - int:`difficulty`: Question difficulty.
    - int:`category`: question category id.
  - int:`total_questions`: an integer that contains total questions returned from the search.
- example: `curl -X POST http://localhost:5000/api/v1/questions -H "Content-Type: application/json" -d '{"searchTerm": "title"}'`

```
{
    "questions": [
        {
            "answer": "Maya Angelou",
            "category": 3,
            "difficulty": 2,
            "id": 5,
            "question": "Whose autobiography is entitled 'I Know Why the Caged Bird Sings'?"
        },
        {
            "answer": "Edward Scissorhands",
            "category": 2,
            "difficulty": 3,
            "id": 6,
            "question": "What was the title of the 1990 fantasy directed by Tim Burton about a young man with multi-bladed appendages?"
        }
    ],
    "success": true,
    "total_questions": 2
}
```

#### POST `/questions`

- posts a new question.
- Request Arguments:
  - Json object:
    - str:`question`: A string that contains the question text.
    - str:`answer`: A string that contains the answer text.
    - int:`difficulty`: An integer that contains the difficulty, please note that `difficulty` can be from 1 to 5.
    - int:`category: An integer that contains the category id.
- Returns: an object with the following keys:
  - int:`id`: an integer that contains the ID for the created question.
  - str:`question`: A string that contains the text for the created question.
  - `questions`: a list that contains paginated questions objects.
    - int:`id`: Question id.
    - str:`question`: Question text.
    - int:`difficulty`: Question difficulty.
    - int:`category`: question category id.
  - int:`total_questions`: an integer that contains total questions.
- example: `curl -X POST http://localhost:5000/api/v1/questions -H "Content-Type: application/json" -d '{ "question": "What is the application used to build great python backends?", "answer": "Flask", "difficulty": 2, "category": 1}'`

```
{
    "id": 34,
    "question": "What is the application used to build great python backends?",
    "questions": [
        {
            "answer": "Apollo 13",
            "category": 5,
            "difficulty": 4,
            "id": 2,
            "question": "What movie earned Tom Hanks his third straight Oscar nomination, in 1996?"
        },
        {
            "answer": "Tom Cruise",
            "category": 5,
            "difficulty": 4,
            "id": 4,
            "question": "What actor did author Anne Rice first denounce, then praise in the role of her beloved Lestat?"
        },
        {
            "answer": "Muhammad Ali",
            "category": 4,
            "difficulty": 1,
            "id": 9,
            "question": "What boxer's original name is Cassius Clay?"
        },
        {
            "answer": "Brazil",
            "category": 6,
            "difficulty": 3,
            "id": 10,
            "question": "Which is the only team to play in every soccer World Cup tournament?"
        },
        {
            "answer": "Uruguay",
            "category": 6,
            "difficulty": 4,
            "id": 11,
            "question": "Which country won the first ever soccer World Cup in 1930?"
        },
        {
            "answer": "George Washington Carver",
            "category": 4,
            "difficulty": 2,
            "id": 12,
            "question": "Who invented Peanut Butter?"
        },
        {
            "answer": "Lake Victoria",
            "category": 3,
            "difficulty": 2,
            "id": 13,
            "question": "What is the largest lake in Africa?"
        },
        {
            "answer": "The Palace of Versailles",
            "category": 3,
            "difficulty": 3,
            "id": 14,
            "question": "In which royal palace would you find the Hall of Mirrors?"
        },
        {
            "answer": "Agra",
            "category": 3,
            "difficulty": 2,
            "id": 15,
            "question": "The Taj Mahal is located in which Indian city?"
        },
        {
            "answer": "Escher",
            "category": 2,
            "difficulty": 1,
            "id": 16,
            "question": "Which Dutch graphic artist\u2013initials M C was a creator of optical illusions?"
        }
    ],
    "success": true,
    "total_questions": 27
}
```

#### POST `/quizzes`

- allows the user to play the quiz game, returning a random question that is not in the previous_questions list.
- Request Arguments:
  - Json object:
    - `previous_questions`: A list that contains the IDs of the previous questions. If starting the game for the first time, you can post an empty list.
    - `quiz_category`: A dictionary that contains the category id and category type.
      - int:`id`: the category id to get the random question from.  
        use `0` to get a random question from all categories.
      - str:`type`: an optional value for the category type.  
        Please note that this variable is provided only for convenience, and it will not have any effect on getting the question.
- returns: a question dictionary that has the following data: - int:`id`: An integer that contains the question ID. - str:`question`: A string that contains the question text. - str:`answer`: A string that contains the answer text. - int:`difficulty`: An integer that contains the difficulty. - int:`category: An integer that contains the category ID.
- Examples:
  - request a random question with previous questions and the category "science":  
    `curl -X POST http://localhost:5000/api/v1/quizzes -H "Content-Type: application/json" -d '{"previous_questions": [21], "quiz_category": {"type": "Science", "id": 1}}'`
  - request with no previous questions, for a random question from all categories:  
     `curl -X POST http://localhost:5000/api/v1/quizzes -H "Content-Type: application/json" -d '{"previous_questions": [], "quiz_category": {"id": 0}}'`
    Sample return:

```
{
    "question": {
        "answer": "Flask",
        "category": 1,
        "difficulty": 2,
        "id": 42,
        "question": "What is the application used to build great python backends?"
    },
    "success": true
}
```

## Testing

The app uses `unittest` for testing all functionalities. Create a testing database and store the URI in the `TEST_DATABASE_URI` environment.
To run the tests, run

```
bash
# if exists, drop the testing database and create it again
dropdb trivia_test
createdb trivia_test
# restore the trivia dump file to the testing database
psql trivia_test < trivia.psql
# finally, from the `backend` directory, run
python test_flaskr.py
```
