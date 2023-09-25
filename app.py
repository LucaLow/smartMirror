from flask import Flask, render_template, request, url_for, jsonify
import json
import requests
import os
app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def Index():
    with open ("widgets.json", "r") as f:
        widgets = json.load(f)
        print(widgets.keys())
    return render_template("index.html", widgets=widgets)


def get_weather_data():
    url = "https://api.openweathermap.org/data/3.0/onecall?lat=-37.88&lon=144.99&exclude=minutely,hourly&appid="+ os.environ.get('API_KEY') + "&units=metric"
    response = requests.get(url)
    return response.json()

@app.route("/weather")
def weather():
    data = get_weather_data()
    return jsonify(data)

# Json file is organised so that the key is the widget to include and the value is the position from top left in format "0, 0" as percentages so that "100, 100" is bottom right
# Json file can be edited to include more widgets