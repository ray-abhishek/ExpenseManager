from flask import Blueprint 
from flask import Flask 
from flask import request 
from flask_cors import CORS, cross_origin
import json
import csv 
import math 
#from updateSummary import updateSummaryStats

expenses = Blueprint('expenses',__name__)
CORS(expenses)
@expenses.route('/add', methods=['POST'])
@cross_origin()
def createExpenseAndUpdateSummary():
    name = request.json['name']
    amount = request.json['amount']
    date = request.json['date']

    headers = ['id','name','amount','date']
    expensesFileHandlerReader = open('./backend/expenses.csv','r')
    expensesFileHandlerWriter = open('./backend/expenses.csv','a')
    expensesReader = csv.DictReader(expensesFileHandlerReader)
    expensesWriter = csv.DictWriter(expensesFileHandlerWriter, fieldnames=headers)

    idCount=1
    userList = []
    for row in expensesReader:
        #print(row, " is row at idCount ",idCount)
        userList.append(row)
        idCount+=1

    amountType = 'expense'
    expensesWriter.writerow({"id":idCount, "name":name,"amount": amount, "date": date})
    userList.append({"id":idCount, "name":name, "amount":amount, "date": date})
    updateSummaryStats(amount,amountType)

    expensesFileHandlerReader.close()
    expensesFileHandlerWriter.close()

    return json.dumps({"message":"Added Expense Successfully", "data":userList})


@expenses.route('/view')
@cross_origin()
def fetchExpenses():

    expensesFileHandlerReader = open('./backend/expenses.csv','r')
    expensesReader = csv.DictReader(expensesFileHandlerReader)

    userList = []
    for row in expensesReader:
        userList.append(row)

    expensesFileHandlerReader.close()

    return json.dumps({"message":"Fetched Expenses Successfully", "data":userList})


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