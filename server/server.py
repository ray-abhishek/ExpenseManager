from flask import Flask 
from flask import request 
from flask_cors import CORS, cross_origin
import json
import csv 
import math 
from blueprint_earnings import earnings 
from blueprint_expenses import expenses 
from blueprint_categories import categories

app = Flask(__name__)
CORS(app)
app.register_blueprint(earnings,url_prefix="/earnings")
app.register_blueprint(expenses,url_prefix="/expenses")
app.register_blueprint(categories,url_prefix="/categories")


@app.route('/')
def hello():
    return "Hello!"

 
@app.route('/view')
def fetchAll():

    summaryFileHandler = open('./backend/summary.csv','r')
    summaryReader = csv.DictReader(summaryFileHandler)
    
    userList = []
    for row in summaryReader:
        userList.append(row)

    if len(userList)==0:
        userList = [{
            "earned" : 0,
            "spent" : 0,
            "balance" : 0
        }]

    print(userList," is user list")
    summaryFileHandler.close()
    return json.dumps({"totalEarned":userList[0]['earned'], "totalSpent":userList[0]['spent'],"balanceAmount":userList[0]['balance']})




