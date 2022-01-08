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
import re
app = Flask(__name__)

#deploy test2
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
            # category_data = request.args.get('movie', type=str)
            # review = request.args.get('market', type=str)
            movie_years = db.session.query(Contents.year, func.count(Contents.year)).filter_by(category="movie").group_by(Contents.year).all()
            movie_num = dict(movie_years)

            numbers = db.session.query(Contents).filter_by(category="Movie").count()
            #장르별 숫자 받아오기
            genre2 = db.session.query(Contents.genre2, func.count(Contents.genre2)).filter_by(category="movie").group_by(Contents.genre2).all()
            genre_list = {}
            for gen in genre2 :
                genre_list[gen[0]] = (gen[1]/numbers)*100
            genre_list['Etc'] = genre_list.pop('ets')
            genre_list['Fantasy'] = 0.0
            
            #장르별 점수 받아오기
            score_list = (db.session.query(Contents.genre2, func.avg(Contents.score), func.avg(Contents.award), func.avg(Contents.global_score), func.avg(Contents.popularity), func.avg(Contents.total_score)).filter_by(category="Movie").group_by(Contents.genre2)).all()
            genre_score = []
            for score in score_list :
                dic = {score[0]:{"score": score[1], "award": score[2], "global": score[3], "popularity": score[4], "total_score": score[5]}}
                genre_score.append(dic)
            
            return make_response(jsonify({"movie_num": movie_num, "genre_percent":genre_list, "genre_score":genre_score}), 200)

    @api.route('/tv-series/market')
    @api.doc(params={"tv-series": "category", "market": "review"})
    @api.param('tv-series', "market")
    class Market(Resource):
        def get(self):
            # category_data = request.args.get('tv-series', type=str)
            # review = request.args.get('market', type=str)
            drama_years = db.session.query(Contents.year, func.count(Contents.year)).filter_by(category="Series").group_by(Contents.year).all()
            drama_num = dict(drama_years)
            
            numbers = db.session.query(Contents).filter_by(category="Series").count()
            #장르별 숫자 받아오기
            genre2 = db.session.query(Contents.genre2, func.count(Contents.genre2)).filter_by(category="Series").group_by(Contents.genre2).all()
            genre_list = {}
            for gen in genre2 :
                genre_list[gen[0]] = (gen[1]/numbers)*100
            genre_list['Etc'] = genre_list.pop('ets')

            #장르별 점수 받아오기
            score_list = (db.session.query(Contents.genre2, func.avg(Contents.score), func.avg(Contents.award), func.avg(Contents.global_score), func.avg(Contents.popularity), func.avg(Contents.total_score)).filter_by(category="Series").group_by(Contents.genre2)).all()
            genre_score = []
            for score in score_list :
                dic = {score[0]:{"score": score[1], "award": score[2], "global": score[3], "popularity": score[4], "total_score": score[5]}}
                genre_score.append(dic)

            return make_response(jsonify({"tvseries_num": drama_num, "genre_percent":genre_list,"genre_score":genre_score}), 200)

    @api.route('/tv-series/k-contents/{class}')
    @api.doc(params={"class": "SeriesA,SeriesB,SeriesC,SeriesD 중 하나"})
    @api.param("class")
    class K_contents(Resource):
        def get(self):
            classname = request.args.get('class', type=str)
            #포스터와 idmb 리스트 받아오기
            posters = db.session.query(Contents.poster_url, Contents.imdb_url).filter_by(
                category="Series", group_name=classname).all()
            poster_list = [re.sub("http://|https://", "", p[0]) for p in posters]
            imdb_list = [p[1] for p in posters]
            
            #드라마 컨텐츠 숫자, 클래스내 컨텐츠 숫자
            numbers = db.session.query(Contents).filter_by(category="Series").count()
            class_numbers =db.session.query(Contents).filter_by(category="Series", group_name=classname).count()
            
            #전체 점수 평균 계산(점수 항목/클래스 콘텐츠 숫자)
            score_list = (db.session.query(func.avg(Contents.score), func.avg(Contents.award), func.avg(Contents.global_score), func.avg(Contents.popularity), func.avg(Contents.total_score)).filter_by(category="Series", group_name=classname)).first()       
            return jsonify({"score": score_list[0], "award": score_list[1], "global": score_list[2], "popularity": score_list[3], "poster": poster_list, "imdb": imdb_list, "total_score":score_list[4], "total_numbers" : 489, "category_numbers":numbers, "class_numbers":class_numbers})

    @api.route('/movie/k-contents/{class}')
    @api.doc(params={"class": "MovieA,MovieB,MovieC,MovieD 중 하나"})
    @api.param("class")
    class K_contents(Resource):
        def get(self):
            classname = request.args.get('class', type=str)
            #포스터와 imdb 링크 받아오기
            posters = db.session.query(Contents.poster_url, Contents.imdb_url).filter_by(
                category="Movie", group_name=classname).order_by(func.rand()).all()
            poster_list = [re.sub("http://|https://", "", p[0]) for p in posters]
            imdb_list = [p[1] for p in posters]
            
            #전체 점수 평균 계산(점수 항목/클래스 콘텐츠 숫자)
            score_list = (db.session.query(func.avg(Contents.score), func.avg(Contents.award), func.avg(Contents.global_score), func.avg(Contents.popularity), func.avg(Contents.total_score)).filter_by(category="Movie", group_name=classname)).first()

            #드라마 컨텐츠 숫자, 클래스내 컨텐츠 숫자
            numbers = db.session.query(Contents).filter_by(category="Movie").count()
            class_numbers =db.session.query(Contents).filter_by(category="Movie", group_name=classname).count()

            return jsonify({"score": score_list[0], "award": score_list[1], "global": score_list[2], "popularity": score_list[3], "poster": poster_list, "imdb": imdb_list, "total_score":score_list[4], "total_numbers" : 489, "category_numbers":numbers, "class_numbers":class_numbers})

    return app


if __name__ == "__main__":
    create_app().run(debug=True)
