
import pymysql
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restx import Resource, Api
from db_connect import db
from models import Corona
import config

app = Flask(__name__)
api = Api(app)
db.init_app(app)
app.secret_key = "secret!key"
app.config.from_object(config)


@api.route('/corona')
class Coronahandler(Resource):
    def get(self):
        data = db.session.query(Corona).all()
        print("오빠 사랑해요~")
        print(data)
        return {'corona_list': data}


if __name__ == '__main__':
    app.run(debug=True)
