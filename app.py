from flask import Flask, render_template, session

app = Flask(__name__)
app.secret_key = 'YOUR_SECRET_KEY'

@app.route('/')
def index():
    if 'count' not in session:
        session['count'] = 0
    session['count'] += 1
    return render_template('index.html', count=session['count'])

if __name__ == '__main__':
    app.run()
