import os

from flask import Flask, render_template, send_from_directory
from flask.ext import restful


app = Flask(__name__)
api = restful.Api(app)

class HelloWorld(restful.Resource):
    def get(self):
        return {"hello": "world"}

api.add_resource(HelloWorld, '/api/query')

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == "__main__":
    # serve static files for development purpose
    build_dir = os.path.abspath(__file__ + "/../../build/")

    @app.route('/<path:path>')
    def send_build_file(path):
        return send_from_directory(build_dir, path)

    app.run(debug=True)
