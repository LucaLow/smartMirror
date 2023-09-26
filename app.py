from flask import Flask, render_template, request, url_for, jsonify
import json
import requests
import os
import spotipy
from spotipy.oauth2 import SpotifyOAuth

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def Index():
    with open ("widgets.json", "r") as f:
        widgets = json.load(f)
        print(widgets.keys())
    return render_template("index.html", widgets=widgets)


def get_weather_data():
    url = "https://api.openweathermap.org/data/3.0/onecall?lat=-37.88&lon=144.99&exclude=minutely,hourly&appid="+ os.environ.get('WEATHER_API_KEY') + "&units=metric"
    response = requests.get(url)
    return response.json()

@app.route("/weather")
def weather():
    data = get_weather_data()
    return jsonify(data)


@app.route("/spotify")
def spotify():
    # this function will get data from the spotify api about what is being played and then return that data in json form
    clientId = os.environ.get('SPOTIFY_CLIENT_ID')
    clientSecret = os.environ.get('SPOTIFY_CLIENT_SECRET')
    sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=clientId,
                                                   client_secret=clientSecret,
                                                   redirect_uri="http://localhost:5000/callback",
                                                   scope="user-read-playback-state"))
    currentTrack = sp.current_playback()

    if currentTrack is None:
        return jsonify({"message": "No track is currently playing."})

    return jsonify({
        "artist": ", ".join([artist["name"] for artist in currentTrack["item"]["artists"]]),
        "song": currentTrack["item"]["name"],
        "albumArt": currentTrack["item"]["album"]["images"][0]["url"],
        "isPlaying": currentTrack["is_playing"],
        "progress": currentTrack["progress_ms"],
        "duration": currentTrack["item"]["duration_ms"]
    })




# Json file is organised so that the key is the widget to include and the value is the position from top left in format "0, 0" as percentages so that "100, 100" is bottom right
# Json file can be edited to include more widgets