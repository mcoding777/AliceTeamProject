# RDS db 연결
aws_db = {
    "user": "sebas",
    "password": "sebaschan",
    "host": "sebas-db.cwtjdyjp19qi.us-east-2.rds.amazonaws.com",
    "port": "3306",
    "database": "Sebas",
}

SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_DATABASE_URI = "mysql+pymysql://sebas:sebaschan@sebas-db.cwtjdyjp19qi.us-east-2.rds.amazonaws.com:3306/Sebas?charset=utf8"
