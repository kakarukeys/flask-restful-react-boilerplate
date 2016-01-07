import os

from flask import Flask, render_template, send_from_directory
from flask.ext import restful


app = Flask(__name__)
api = restful.Api(app)

class HelloWorld(restful.Resource):
    def get(self):
        return {"messages": ["I left a message", "I left a second message"]}

api.add_resource(HelloWorld, '/api/query')

if __name__ == "__main__":
    # serve files for running tests in browser
    bdd_dir = os.path.join(__file__, "../../../bdd/")

    @app.route("/bdd/<path:path>")
    def send_bdd_file(path):
        return send_from_directory(bdd_dir, path)

    # serve js/css/img files
    @app.route("/static/<path:path>")
    def serve_static(path):
        return send_from_directory("static", path)

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def index(path):
        return render_template("index.html")

    app.run(debug=True)
