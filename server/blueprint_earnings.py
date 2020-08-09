from flask import Blueprint 
from flask import Flask 
from flask import request 
from flask_cors import CORS, cross_origin
import json
import csv 
import math 
#from updateSummary import updateSummaryStats

earnings = Blueprint('earnings',__name__)
CORS(earnings)
@earnings.route('/add', methods=['POST'])
@cross_origin()
def createEarningAndUpdateSummary():
    name = request.json['name']
    amount = request.json['amount']
    date = request.json['date']

    headers = ['id','name','amount','date']
    earningsFileHandlerReader = open('./backend/earnings.csv','r')
    earningsFileHandlerWriter = open('./backend/earnings.csv','a')
    earningsReader = csv.DictReader(earningsFileHandlerReader)
    earningsWriter = csv.DictWriter(earningsFileHandlerWriter, fieldnames=headers)

    idCount=1
    userList = []
    for row in earningsReader:
        #print(row, " is row at idCount ",idCount)
        userList.append(row)
        idCount+=1

    amountType = 'earning'
    earningsWriter.writerow({"id":idCount, "name":name,"amount": amount, "date": date})
    userList.append({"id":idCount, "name":name, "amount":amount, "date": date})
    updateSummaryStats(amount,amountType)

    earningsFileHandlerReader.close()
    earningsFileHandlerWriter.close()

    return json.dumps({"message":"Fetched Earnings Successfully", "data":userList})

@earnings.route('/view')
@cross_origin()
def fetchEarnings():

    earningsFileHandlerReader = open('./backend/earnings.csv','r')
    earningsReader = csv.DictReader(earningsFileHandlerReader)

    userList = []
    for row in earningsReader:
        userList.append(row)

    earningsFileHandlerReader.close()

    return json.dumps({"message":"Fetched Earnings Successfully", "data":userList})


def updateSummaryStats(amount,amountType):

    amount = float(amount)
    summaryFileHandler = open('./backend/summary.csv','r')
    summaryReader = csv.DictReader(summaryFileHandler)
    userList = []
    for row in summaryReader:
        print(row," is ROW")
        userList.append(row)

    summaryFileHandler.close()

    earnedAmount = float(userList[0]['earned'])
    spentAmount = float(userList[0]['spent'])
    balanceAmount = float(userList[0]['balance'])

    if amountType=='expense':
        spentAmount+=amount
    elif amountType=='earning':
        earnedAmount+=amount 
    
    balanceAmount = earnedAmount-spentAmount

    summaryFileHandler = open('./backend/summary.csv','w')
    headers = ['earned','spent','balance']
    summaryWriter = csv.DictWriter(summaryFileHandler, fieldnames=headers)

    summaryWriter.writeheader()
    summaryWriter.writerow({"earned":earnedAmount,"spent":spentAmount,"balance":balanceAmount})

    summaryFileHandler.close()