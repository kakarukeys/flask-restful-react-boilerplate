import os

from flask import Flask, render_template, send_from_directory
from flask.ext import restful


app = Flask(__name__)
api = restful.Api(app)

class HelloWorld(restful.Resource):
    def get(self):
        return {"messages": ["I left a message", "I left a second message"]}

api.add_resource(HelloWorld, '/api/query')

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == "__main__":
    # serve files for running tests in browser
    bdd_dir = os.path.abspath(__file__ + "/../../../bdd/")

    @app.route("/bdd/<path:path>")
    def send_bdd_file(path):
        return send_from_directory(bdd_dir, path)

    app.run(debug=True)
