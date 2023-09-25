from flask import Flask, render_template, request, url_for, jsonify
import json

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def Index():
    with open ("widgets.json", "r") as f:
        widgets = json.load(f)
        print(widgets.keys())
    return render_template("index.html", widgets=widgets)


# Json file is organised so that the key is the widget to include and the value is the position from top left in format "0, 0" as percentages so that "100, 100" is bottom right
# Json file can be edited to include more widgets