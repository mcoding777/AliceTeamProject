from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Corona(db.Model):
    __table__name = 'Corona'
    years = db.Column(db.Integer, primary_key=True, nullable=False)
    movie_cost = db.Column(db.Integer, nullable=False)
    ott_cost = db.Column(db.BigInteger, nullable=False)

    def serialize(self):
        return {"years": self.years, "movie_cost": self.movie_cost, "ott_cost": self.ott_cost}


class Contents(db.Model):
    __table__name = 'Contents'
    id = db.Column(db.Integer, nullable=False, auto_incrent=True)
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

    def serialize(self):
        return {"id": self.id, "name": self.name, "group_name": self.group_name, "category": self.category,
                "genre": self.genre, "genre2": self.genre2, "actors": self.actors, "summary": self.summary, "year": self.year,
                "score": self.score, "award": self.award, "global": self._score, "popularity": self.popularity, "total_score": self.total_score,
                "imdb_url": self.imdb_url, "poster_url": self.poster_url}
