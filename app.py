from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello():
    return "안녕하세요!"


if __name__ == "__main__":
    app.run(debug=True)

# app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:devpass@127.0.0.1:3306/board"
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
