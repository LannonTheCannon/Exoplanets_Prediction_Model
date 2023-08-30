from flask import Flask, render_template, request, jsonify
import json

exoplanets_container = 'data/cleaned_exoplanet_2.txt'
with open(exoplanets_container, 'r') as file:
    exoplanets_json = file.read()
    exoplanets = json.loads(exoplanets_json)

app = Flask(__name__)

@app.route('/')
def setup_page():
    return render_template('button.html')

# Exoplanet Blog
@app.route('/exoplanet_catalog')
def exoplanet_catalog():
    return render_template('exoplanet.html', exoplanets=exoplanets)

@app.route('/exoplanet/<int:index>')
def show_exoplanet(index):
    exoplanet = exoplanets[index]
    return render_template('exoplanet_detail.html', exoplanet=exoplanet)

# Exoplanet Blog
@app.route('/dashboard')
def dashboard():
    total_exoplanets = 5250
    avg_distance = 2164.59
    most_recent_year = 2023
    oldest_discovery_year = 1992
    return render_template('dashboard_with_chartjs.html', exoplanets=exoplanets, total_exoplanets=total_exoplanets, avg_distance=avg_distance, most_recent_year=most_recent_year, oldest_discovery_year=oldest_discovery_year)

if __name__ == '__main__':
    app.run(debug=True, port=5007)
