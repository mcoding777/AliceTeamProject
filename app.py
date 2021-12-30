from models import HowtoUse
import pymysql
from flask import Flask
from flask_restx import Resource, Api
from db_connect import db
from models import HowtoUse
import config

app = Flask(__name__)
api = Api(app)
db.init_app(app)
app.secret_key = "secret!key"
app.config.from_object(config)


@api.route('/corona')
class corona(Resource):
    def get(self):
        data = HowtoUse.query.order_by(HowtoUse.year.desc()).all()
        return {'corona_list': data}


if __name__ == '__main__':
    app.run(debug=True)
