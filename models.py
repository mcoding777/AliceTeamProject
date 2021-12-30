from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Corona(db.Model):
    __table__name = 'Corona'
    years = db.Column(db.Integer, primary_key=True, nullable=False)
    movie_cost = db.Column(db.Integer, nullable=False)
    ott_cost = db.Column(db.BigInteger, nullable=False)

    def __init__(self, year, movie_cost, ott_cost):
        self.year = year
        self.movie_cost = movie_cost
        self.ott_cost = ott_cost


class Contents(db.Model):
    __table__name = 'Contents'
    name = db.Column(db.String(60), primary_key=True, nullable=False)
    group_name = db.Column(db.String(10), nullable=False)
    category = db.Column(db.String(10), nullable=False)
    genre = db.Column(db.String(20), nullable=False)
    genre2 = db.Column(db.String(20), nullable=False)
    actors = db.Column(db.String(200), nullable=False)
    summary = db.Column(db.String(500), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    score = db.Column(db.DECIMAL(3, 2), nullable=False)
    award = db.Column(db.Integer, nullable=False)
    global_score = db.Column(db.Integer, nullable=False)
    popularity = db.Column(db.Integer, nullable=False)
    total_score = db.Column(db.DECIMAL(3, 2), nullable=False)
    imdb_url = db.Column(db.String(200), nullable=False)
    poster_url = db.Column(db.String(200), nullable=False)

    # def __init__(self, name):
    # self.name = name
