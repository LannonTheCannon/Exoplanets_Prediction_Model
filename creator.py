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

if __name__ == '__main__':
    app.run(debug=True, port=5006)
