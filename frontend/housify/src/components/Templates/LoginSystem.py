from flask import Flask, render_template,request,flash,redirect,url_for,session
import os
import sqlite3

currentlocation = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__)

@app.route()
def LoginForm():
    return render_template('LoginForm.js')

@app.route("/", methods = ["POST"])
def checklogin():
    UN = request.form['Email']
    PW = request.form['Password']

    sqlconnection = sqlite3.Connection(currentlocation + "\login.db")
    cursor = sqlconnection.cursor
    query1 = "SELECT Email, Password From WHERE Email = {e} AND Password = {pw})".format(e = UN, pw = PW)

    rows = cursor.execute(query1)
    rows = rows.fetchall()
    if len(rows) ==1:
     return render_template("Home.js")
    else:
        return redirect("/SignupForm")

@app.route("/SignupForm", method = ["GET", "POST"])
def signuppage():
    if request.method == "POST":
        dEM = request.form['dEmail']
        dPW = request.form['dPassword']
        sqlconnection = sqlite3.Connection(currentlocation + "\login.db")
        cursor = sqlconnection.cursor()
        query1 = "INSERT INTO Users Values ('{em}', '{p}')".format(em = dEM, p = dPW)
        cursor.execute(query1)
        sqlconnection.commit()
    return redirect("/Home.js")

if __name__ == '__main__':
    app.run(debug=True)