from flask import Flask, render_template, request, jsonify
import json

posts_container = 'data/data.txt'
with open(posts_container, 'r') as file:
    posts_json = file.read()
    posts = json.loads(posts_json)

products_container = 'data/products.txt'
with open(products_container, 'r') as file:
    products_json = file.read()
    products = json.loads(products_json)

exoplanets_container = 'data/cleaned_exoplanet_2.txt'
with open(exoplanets_container, 'r') as file:
    exoplanets_json = file.read()
    exoplanets = json.loads(exoplanets_json)

app = Flask(__name__)

@app.route('/')
def setup_page():
    return render_template('button.html')

@app.route('/video_player')
def video_player():
    return render_template('vp.html')

# Define the root route to display the blog page
@app.route('/blog')
def blog():
    # Preprocess the data before rendering the template
    for post in posts:
        post['even_odd_paragraphs'] = [{'content': p, 'even_odd': 'even' if i % 2 == 0 else 'odd'} for i, p in enumerate(post['paragraphs'])]
    return render_template('blog.html', posts=posts)

# Define a route to display a single blog post
@app.route('/post/<int:index>')
def show_post(index):
    post = posts[index]
    # Preprocess the data before rendering the template
    post['even_odd_paragraphs'] = [{'content': p, 'even_odd': 'even' if i % 2 == 0 else 'odd'} for i, p in enumerate(post['paragraphs'])]
    return render_template('post.html', post=post)

@app.route('/game_one')
def game_one():
    return render_template('game_one.html')

@app.route('/ghost')
def ghost():
    return render_template('ghost_game.html')

# Exoplanet Blog
@app.route('/exoplanet_catalog')
def exoplanet_catalog():
    return render_template('exoplanet.html', exoplanets=exoplanets)

@app.route('/exoplanet/<int:index>')
def show_exoplanet(index):
    exoplanet = exoplanets[index]
    return render_template('exoplanet_detail.html', exoplanet=exoplanet)


@app.route('/store_front')
def store_front():
    return render_template('store_front_2.html', products=products)

@app.route('/ghost_2')
def ghost2():
    return render_template('ghost_2.html')

@app.route('/generate_image')
def generate_ai():
    return render_template('ai_generator2.html')

@app.route('/wheel2')
def game_two():
    return render_template('wheel2.html')

if __name__ == '__main__':
    app.run(debug=True, port=5005)
