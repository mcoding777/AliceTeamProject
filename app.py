from flask import Flask, jsonify, make_response, session, request
from decimal import Decimal
import math
import json
from flask.json.tag import PassDict
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
from flask_restx import Resource, Api, reqparse
from six import string_types
from models import Corona, Contents, db
import config
import flask.json
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
    # @api.doc(params={"movie": "movie", "market": "market"})
    # @api.param('movie', "market")
    class Market(Resource):
        def get(self):
            # category_data = request.args.get('movie', type=str)
            # review = request.args.get('market', type=str)
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
            # result_2015 = [r.serialize() for r in movie_2015]
            numbers = db.session.query(Contents).filter_by(category="Movie").count()
            drama = db.session.query(Contents).filter_by(category="Movie", genre2="Drama").count()
            etc = db.session.query(Contents).filter_by(category="Movie", genre2="ets").count()
            comedy = db.session.query(Contents).filter_by(category="Movie", genre2="Comedy").count()
            fantasy = db.session.query(Contents).filter_by(category="Movie", genre2="Fantasy").count()
            crime = db.session.query(Contents).filter_by(category="Movie", genre2="Crime").count()
            action = db.session.query(Contents).filter_by(category="Movie", genre2="Action").count()

            genre_percent = {"drama" : (drama/numbers)*100, "etc": (etc/numbers)*100, "comedy":(comedy/numbers)*100, "fantasy":(fantasy/numbers)*100,"crime":(crime/numbers)*100, "action":(action/numbers)*100}
            movie_num = {2015: movie_2015, 2016: movie_2016, 2017: movie_2017,
                         2018: movie_2018, 2019: movie_2019, 2020: movie_2020, 2021: movie_2021}

            return make_response(jsonify({"movie_num": movie_num, "genre_percent":genre_percent}), 200)

    @api.route('/tv-series/market')
    # @api.doc(params={"tv-series": "category", "market": "review"})
    # @api.param('tv-series', "market")
    class Market(Resource):
        def get(self):
            # category_data = request.args.get('tv-series', type=str)
            # review = request.args.get('market', type=str)
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
            
            numbers = db.session.query(Contents).filter_by(category="Series").count()
            drama = db.session.query(Contents).filter_by(category="Series", genre2="Drama").count()
            etc = db.session.query(Contents).filter_by(category="Series", genre2="ets").count()
            comedy = db.session.query(Contents).filter_by(category="Series", genre2="Comedy").count()
            fantasy = db.session.query(Contents).filter_by(category="Series", genre2="Fantasy").count()
            crime = db.session.query(Contents).filter_by(category="Series", genre2="Crime").count()
            action = db.session.query(Contents).filter_by(category="Series", genre2="Action").count()
            genre_percent = {"drama" : (drama/numbers)*100, "etc": (etc/numbers)*100, "comedy":(comedy/numbers)*100, "fatnasy":(fantasy/numbers)*100,"crime":(crime/numbers)*100, "action":(action/numbers)*100}
            # result_2015 = [r.serialize() for r in movie_2015]
            drama_num = {2015: drama_2015, 2016: drama_2016, 2017: drama_2017,
                         2018: drama_2018, 2019: drama_2019, 2020: drama_2020, 2021: drama_2021}

            return make_response(jsonify({"tvseries_num": drama_num, "genre_percent":genre_percent}), 200)

    @api.route('/tv-series/k-contents/{class}')
    @api.doc(params={"class": "SeriesA,SeriesB,SeriesC,SeriesD 중 하나"})
    @api.param("class")
    class K_contents(Resource):
        def get(self):
            classname = request.args.get('class', type=str)
            posters = db.session.query(Contents.poster_url, Contents.imdb_url).filter_by(
                category="Series", group_name=classname).order_by(func.rand()).limit(5).all()
            poster_list = [p[0] for p in posters]
            imdb_list = [p[1] for p in posters]
            numbers = db.session.query(Contents).filter_by(category="Series", group_name=classname).count()
            popularity = db.session.query(func.avg(Contents.popularity)).filter_by(
                category="Series", group_name=classname).first()[0]
            award = db.session.query(func.avg(Contents.award)).filter_by(
                category="Series", group_name=classname).first()[0]
            global_score = db.session.query(func.avg(Contents.global_score)).filter_by(
                category="Series", group_name=classname).first()[0]
            # print(popularity, award, global_score)
            scores = (db.session.query(func.avg(Contents.score)).filter_by(
                category="Series", group_name=classname)).first()[0]
            numbers = db.session.query(Contents).filter_by(category="Series").count()
            class_numbers =db.session.query(Contents).filter_by(category="Series", group_name=classname).count()
            total_scores = (db.session.query(func.avg(Contents.total_score)).filter_by(
                category="Series", group_name=classname)).first()[0]
            

            return jsonify({"score": scores, "award": award, "global": global_score, "popularity": popularity, "poster": poster_list, "imdb": imdb_list, "total_score":total_scores, "total_numbers" : 489, "category_numbers":numbers, "class_numbers":class_numbers})

    @api.route('/movie/k-contents/{class}')
    @api.doc(params={"class": "MovieA,MovieB,MovieC,MovieD 중 하나"})
    @api.param("class")
    class K_contents(Resource):
        def get(self):
            classname = request.args.get('class', type=str)
            posters = db.session.query(Contents.poster_url, Contents.imdb_url).filter_by(
                category="Movie", group_name=classname).order_by(func.rand()).limit(5).all()
            poster_list = [p[0] for p in posters]
            imdb_list = [p[1] for p in posters]
            #poster_split = [p.split(',')[0] for p in poster_list]
            # numbers = db.session.query(Contents).filter_by(
            #     category="Series", group_name=classname).count()
            popularity = db.session.query(func.avg(Contents.popularity)).filter_by(
                category="Movie", group_name=classname).first()[0]
            award = db.session.query(func.avg(Contents.award)).filter_by(
                category="Movie", group_name=classname).first()[0]
            global_score = db.session.query(func.avg(Contents.global_score)).filter_by(
                category="Movie", group_name=classname).first()[0]
            #global_list = str(global_score).split('.')[0]
            # print(popularity, award, global_score)
            scores = (db.session.query(func.avg(Contents.score)).filter_by(
                category="Movie", group_name=classname)).first()[0]
            
            numbers = db.session.query(Contents).filter_by(category="Movie").count()
            class_numbers =db.session.query(Contents).filter_by(category="Movie", group_name=classname).count()
            total_scores = (db.session.query(func.avg(Contents.total_score)).filter_by(
                category="Movie", group_name=classname)).first()[0]

            return jsonify({"score": scores, "award": award, "global": global_score, "popularity": popularity, "poster": poster_list, "imdb": imdb_list, "total_score":total_scores, "total_numbers":489, "category_numbers":numbers, "class_numbers":class_numbers})

    return app


if __name__ == "__main__":
    create_app().run(debug=True)
