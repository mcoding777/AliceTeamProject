from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import decimal
import flask.json

#app = Flask(__name__)
db = SQLAlchemy()
#app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://sebas:sebaschan@sebas-db.cwtjdyjp19qi.us-east-2.rds.amazonaws.com:3306/Sebas?charset=utf8"


class Corona(db.Model):
    __table__name = 'Corona'
    years = db.Column(db.Integer, primary_key=True, nullable=False)
    movie_cost = db.Column(db.Integer, nullable=False)
    ott_cost = db.Column(db.BigInteger, nullable=False)

    def serialize(self):
        return {"years": self.years, "movie_cost": self.movie_cost, "ott_cost": self.ott_cost}


class Contents(db.Model):
    __table__name = 'Contents'
    id = db.Column(db.Integer, nullable=False,
                   autoincrement=True, primary_key=True,)
    name = db.Column(db.String(100), nullable=False)
    group_name = db.Column(db.String(10), nullable=False)
    category = db.Column(db.String(10), nullable=False)
    genre = db.Column(db.String(20), nullable=False)
    genre2 = db.Column(db.String(20), nullable=False)
    actors = db.Column(db.String(500), nullable=False)
    summary = db.Column(db.String(1000), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    score = db.Column(db.DECIMAL(6, 4), nullable=False)
    award = db.Column(db.Integer, nullable=False)
    global_score = db.Column(db.Integer, nullable=False)
    popularity = db.Column(db.Integer, nullable=False)
    total_score = db.Column(db.DECIMAL(6, 4), nullable=False)
    imdb_url = db.Column(db.String(200), nullable=False)
    poster_url = db.Column(db.String(200), nullable=False)

    def serialize(self):
        return {"id": self.id, "name": self.name, "group_name": self.group_name, "category": self.category,
                "genre": self.genre, "genre2": self.genre2, "actors": self.actors, "summary": self.summary, "year": self.year,
                "score": self.score, "award": self.award, "global": self.global_score, "popularity": self.popularity, "total_score": self.total_score,
                "imdb_url": self.imdb_url, "poster_url": self.poster_url}

    # class MyJSONEncoder(flask.json.JSONDecoder):
    #     def default(self, obj):
    #         if isinstance(obj, decimal.Decimal):
    #             return str(obj)
    #         return super(MyJSONEncoder, self).default(obj)


# db.create_all()
# if __name__ == "__main__":
    # app.run(debug=True)
