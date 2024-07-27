# Flask User Authentication System

This project is a simple user authentication system built with Flask. It includes features for user registration, login, and a protected page accessible only to authenticated users.

## Features

- User registration with email and password
- User login
- Password hashing for security
- Protected routes for authenticated users
- Bootstrap-styled responsive UI

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Python 3.8 or higher
- pip (Python package manager)

## Installation

1. Clone the repository:
- git clone https://github.com/your-username/your-repo-name.git
- `cd your-repo-name`

2. Create a virtual environment (optional but recommended):
- `conda create -n your_environment_name python==3.8`
- `conda activate your_environment_name`  # On Windows use `your_environment_name\Scripts\activate`

3. Install the required packages:
- `pip install -r requirements.txt`

## Configuration

1. The application uses a SQLite database by default. The database URI is set in `config.py`.
2. You can modify the `SECRET_KEY` in `config.py` for added security.

## Running the Application

1. Set the Flask application:
- `export FLASK_APP=run.py`  # On Windows use `set FLASK_APP=run.py`
- `export FLASK_ENV=development`  # On Windows use `set FLASK_ENV=development`

2. Initialize the database:
- `flask shell`
In the Flask shell, run:
```python
from app import db
db.create_all()
exit()
```

3. Run the application:
- `flask run`

4. Open a web browser and navigate to http://127.0.0.1:5000/
Usage
- Navigate to the Sign Up page to create a new account.
- Use the Sign In page to log into an existing account.
- Once logged in, you'll be redirected to the Secret Page.
- Use the Logout button to end your session.

## Project Structure
```
Lab_07/
│
├── app/
│   ├── __init__.py
│   ├── models.py
│   ├── routes.py
│   └── templates/
│       ├── base.html
│       ├── signup.html
│       ├── signin.html
│       ├── secretpage.html
│       └── thankyou.html
│
├── config.py
├── run.py
├── requirements.txt
└── README.md
```

## Contributing

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## Acknowledgments

- Flask: https://flask.palletsprojects.com/
- Flask-SQLAlchemy: https://flask-sqlalchemy.palletsprojects.com/
- Flask-Bcrypt: https://flask-bcrypt.readthedocs.io/
- Flask-Login: https://flask-login.readthedocs.io/
- Bootstrap: https://getbootstrap.com/