from flask import Flask, jsonify, make_response, session, request
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from flask_restx import Resource, Api, reqparse
from six import string_types
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

    @api.route('/category/review')
    @api.doc(params={"category": "movie", "review": "market"})
    @api.param('category', "review")
    class Market(Resource):
        def get(self):
            category_data = request.args.get('category', type=str)
            review = request.args.get('review', type=str)
            print(category_data)
            movie_2015 = db.session.query(Contents).filter_by(
                category="movie").all()
            # result_2015 = [r.serialize() for r in movie_2015]
            print(movie_2015)

            return category
    return app


if __name__ == "__main__":
    create_app().run(debug=True)
