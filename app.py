from flask import Flask, jsonify, make_response
from flask_cors import CORS, cross_origin
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
    CORS(app)
    db.init_app(app)

    # with app.app_context():
    # db.create_all()

    @api.route('/corona')
    class Coronahandler(Resource):
        def get(self):
            data = Corona.query.all()
            result = [r.serialize() for r in data]
            return make_response(jsonify(result), 200)

    return app


if __name__ == "__main__":
    create_app().run(debug=True)
