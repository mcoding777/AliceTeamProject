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

    @api.route('/movie/market')
    @api.doc(params={"movie": "movie", "market": "market"})
    @api.param('movie', "market")
    class Market(Resource):
        def get(self):
            category_data = request.args.get('category', type=str)
            review = request.args.get('review', type=str)
            print(category_data)
            movie_2015 = db.session.query(Contents).filter_by(
                category="movie", year=2015).count()
            movie_2016 = db.session.query(Contents).filter_by(
                category="movie", year=2016).count()
            movie_2017 = db.session.query(Contents).filter_by(
                category="movie", year=2017).count()
            movie_2018 = db.session.query(Contents).filter_by(
                category="movie", year=2019).count()
            movie_2019 = db.session.query(Contents).filter_by(
                category="movie", year=2019).count()
            movie_2020 = db.session.query(Contents).filter_by(
                category="movie", year=2020).count()
            movie_2021 = db.session.query(Contents).filter_by(
                category="movie", year=2021).count()
            #result_2015 = [r.serialize() for r in movie_2015]
            movie_num = {2015: movie_2015, 2016: movie_2016, 2017: movie_2017,
                         2018: movie_2018, 2019: movie_2019, 2020: movie_2020, 2021: movie_2021}

            return make_response(jsonify({"movie_num": movie_num}), 200)

    @api.route('/tvseries/market')
    @api.doc(params={"tvseries": "tvseries", "market": "market"})
    @api.param('tvseries', "market")
    class Market(Resource):
        def get(self):
            category_data = request.args.get('category', type=str)
            review = request.args.get('review', type=str)
            print(category_data)
            drama_2015 = db.session.query(Contents).filter_by(
                category="Series", year=2015).count()
            drama_2016 = db.session.query(Contents).filter_by(
                category="Series", year=2016).count()
            drama_2017 = db.session.query(Contents).filter_by(
                category="Series", year=2017).count()
            drama_2018 = db.session.query(Contents).filter_by(
                category="Series", year=2019).count()
            drama_2019 = db.session.query(Contents).filter_by(
                category="Series", year=2019).count()
            drama_2020 = db.session.query(Contents).filter_by(
                category="Series", year=2020).count()
            drama_2021 = db.session.query(Contents).filter_by(
                category="Series", year=2021).count()
            #result_2015 = [r.serialize() for r in movie_2015]
            drama_num = {2015: drama_2015, 2016: drama_2016, 2017: drama_2017,
                         2018: drama_2018, 2019: drama_2019, 2020: drama_2020, 2021: drama_2021}

            return make_response(jsonify({"tvseries_num": drama_num}), 200)
    return app


if __name__ == "__main__":
    create_app().run(debug=True)
