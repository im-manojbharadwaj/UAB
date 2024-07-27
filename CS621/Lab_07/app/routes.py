from flask import Blueprint, render_template, url_for, flash, redirect, request
from app import db, bcrypt
from app.models import User
from flask_login import login_user, current_user, logout_user, login_required

main = Blueprint('main', __name__)

@main.route("/signup", methods=['GET', 'POST'])
def signup():
    if current_user.is_authenticated:
        return redirect(url_for('main.home'))
    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        email = request.form['email']
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        user = User.query.filter_by(email=email).first()
        if user:
            flash('Email address already exists. Please choose a different one.', 'danger')
            return redirect(url_for('main.signup'))

        if password != confirm_password:
            flash('Passwords do not match. Please try again.', 'danger')
            return redirect(url_for('main.signup'))

        if len(password) < 8:
            flash('Password must be at least 8 characters long.', 'danger')
            return redirect(url_for('main.signup'))

        new_user = User(first_name=first_name, last_name=last_name, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()

        flash('Your account has been created! You can now log in.', 'success')
        return redirect(url_for('main.thankyou'))

    return render_template('signup.html', title='Sign Up')

@main.route("/signin", methods=['GET', 'POST'])
def signin():
    if current_user.is_authenticated:
        return redirect(url_for('main.secret_page'))
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        user = User.query.filter_by(email=email).first()
        if user and user.check_password(password):
            login_user(user)
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for('main.secret_page'))
        else:
            flash('Login unsuccessful. Please check email and password.', 'danger')
    return render_template('signin.html', title='Sign In')

@main.route("/logout")
def logout():
    logout_user()
    return redirect(url_for('main.signin'))

@main.route("/secret_page")
@login_required
def secret_page():
    return render_template('secretpage.html', title='Secret Page')

@main.route("/thankyou")
def thankyou():
    return render_template('thankyou.html', title='Thank You')

@main.route("/")
def home():
    return redirect(url_for('main.signin'))