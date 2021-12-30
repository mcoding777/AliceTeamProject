from flask import Flask, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_restx import Resource, Api
from models import Corona, db
import config


def create_app():
    app = Flask(__name__)
    api = Api(app)
    app.secret_key = "secret!key"
    # Config 설정
    app.config.from_object(config)
    db.init_app(app)

    # with app.app_context():
    # db.create_all()

    @api.route('/corona')
    class Coronahandler(Resource):
        def get(self):
            data = Corona.query.all()
            result = [_data.serialize() for _data in data]
            print(data[0])
            print(result)
            return jsonify(result=result)

    return app


if __name__ == "__main__":
    create_app().run(debug=True)
