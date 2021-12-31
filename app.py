from flask import Flask, jsonify, make_response
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from flask_restx import Resource, Api
from models import Corona, Contents, db
import config
app = Flask(__name__)


def create_app():
    api = Api(app)
    app.secret_key = "secret!key"
    # Config 설정
    app.config.from_object(config)
    CORS(app)
    db.init_app(app)

    @api.route('/corona')
    class Coronahandler(Resource):
        def get(self):
            data = Corona.query.all()
            result = [r.serialize() for r in data]
            return make_response(jsonify(result), 200)

    @api.route('/market/movie')
    class Market(Resource):
        def get(self):
            # movie_2017 = Contents.query.filter_by(
            #     category="movie").count()
            # print(movie_2017)
            # return movie_2017
            pass
    return app


if __name__ == "__main__":
    create_app().run(debug=True)
