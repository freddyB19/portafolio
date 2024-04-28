from flask import Flask
from flask import jsonify

app = Flask(__name__, static_folder = 'src', static_url_path = '/src')


@app.route("/", defaults = {'path': ''})
@app.route("/<path:path>")
def catch_all(path):
	return app.send_static_file('index.html')


if __name__ == '__main__':
	app.run(debug = True)