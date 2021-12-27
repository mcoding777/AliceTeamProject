import flask from Flask
import sqlachemy

db = sqlachemy()

# class Movie(db.Model) :
#     __table__name = 'Netflix'
#     id  = db.Column(db.Integer, primary_key=True, nullable=False)
#     name = db.Column(db.String(20), nullable=False)

# def __init__(self, name):
#     self.name = name
