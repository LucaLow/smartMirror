# Greets user

from flask import Flask, render_template, request, url_for, jsonify
import datetime as dt
import meteomatics.api

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def Index():

    return render_template("Index.html")