# smartMirror

smartMirror is a lightweight, customizable smart mirror application built using Python and Flask. It integrates various data sources such as weather information from OpenWeatherMap and music playback details from Spotify, displaying them alongside a real-time clock. This project is designed to let you transform any display into an interactive smart mirror by easily configuring widgets and their positions.

## Features

- **Real-Time Clock:** Display the current time.
- **Weather Forecast:** Retrieve and display weather data using the OpenWeatherMap API.
- **Spotify Integration:** Show details of the current track playing on your Spotify account.
- **Widget-Based Layout:** Configure and position widgets on the mirror interface via a simple JSON file (`widgets.json`).

## Installation

### Prerequisites

- **Python 3.9+** – Ensure Python is installed on your system.
- **Flask** – The web framework used to serve the application.
- **spotipy** – For Spotify API integration.
- Other dependencies listed in `requirements.txt`.

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/LucaLow/smartMirror.git
   cd smartMirror
Install Python Dependencies:

It is recommended to use a virtual environment.

```bash
Copy
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
```
Set Up Environment Variables:

Create a .env file or export the following environment variables in your shell:

WEATHER_API_KEY: Your API key from OpenWeatherMap.
SPOTIFY_CLIENT_ID: Your Spotify API client ID.
SPOTIFY_CLIENT_SECRET: Your Spotify API client secret.
Run the Application:

``` bash
  Copy
  python app.py
  The application will start and can be accessed via your web browser at http://localhost:5000.
```
Configuration
Widgets: The file widgets.json defines which widgets to display and their positions. For example:

``` json
{
  "Clock": "50, 20",
  "Weather": "50, 65",
  "Spotify" : "5, 5"
}
```
The positions are specified as percentages (with "0, 0" representing the top-left and "100, 100" the bottom-right).

# Usage
Once running, the smart mirror interface will display the widgets as configured. You can further customize the look and feel by editing the templates in the templates folder and the static assets in the static folder.

# Contributing
Contributions are welcome! Feel free to fork this repository, make changes, and open a pull request. For major changes, please open an issue first to discuss what you would like to change.

# License
This project is provided "as is" without any warranties. Please check the repository for more details regarding usage and distribution.

# Contact
For any questions or feedback, please open an issue on the GitHub repository.
