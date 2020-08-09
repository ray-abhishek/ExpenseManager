from flask import Blueprint
from flask import Flask 
from flask import request 
from flask_cors import CORS, cross_origin
import json
import csv 
import math 

categories = Blueprint('categories',__name__)
CORS(categories)
@categories.route('/add', methods=['POST'])
@cross_origin()
def addCategory():
    category = request.json['category']
    categoryFileHandler = open('./backend/categories.csv','a')
    headers = ["category"]
    categoryWriter = csv.DictWriter(categoryFileHandler,fieldnames=headers)
    categoryWriter.writerow({"category":category})
    categoryFileHandler.close()
    
    return json.dumps({"message":"category has been added"})

@categories.route('/view')
@cross_origin()
def getCategories():
    categoryFileHandler = open('./backend/categories.csv','r')
    categoryReader = csv.DictReader(categoryFileHandler)
    categoryList = []
    for row in categoryReader:
        categoryList.append(row)
    
    categoryFileHandler.close()

    return json.dumps({"data":categoryList})
