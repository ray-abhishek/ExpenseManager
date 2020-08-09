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