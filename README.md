# ExpenseManager
Expense Manager built using React &amp; Flask

![alt text](https://i.imgur.com/Ss6w1sD.png "Landing Page")


### Features : 
1. Adding Expense Category Wise 
2. Recording Expense Category Wise 
3. Dashboard where we can see cummulative stats like Total Money Earned, Total Spent, Balance Amount
4. Indication if Balance is less than 1000



### FRONT-END [ React , ContextAPI , axios]
1. Built the Links(Navbar)
2. Built the Routes.
3. Built the Components rendered by each Route. For Home Component, every time the component is mounted, axios.get request is sent which fetches the Summary of Money Spent, Earned and Balance. 
4. Setup Context API. All the data [ expenses, earnings, Total Money Earned, Total Money Spent, Balance Amount ] that is required by different components are stored in this AppContext. Defined two functions (one for adding expense and another for adding earning) and through useContext Hook, invoked these functions from Expense Component and Earning Component. 

### BACK-END [ Flask ]
1. Using Flask set up one route with GET method. '/view' which fetched the summary statistics like Total Earned, Total Spent, and Balance Amount from 'summary.csv'
2. Using Flask set up two routes with POST method. '/expense' will add the new item sent by the browser into the 'expenses.csv' file. '/earning' will add the new item sent by the browser into the 'earnings.csv' file. Everytime one of these two routes is executed, Summary statistics are also updated in the file 'summary.csv'. From both these routes, the newly updated list is sent back to browser. 


## Instructions to run locally

### FRONTEND
    - git clone https://github.com/ray2294/ExpenseManager.git
    - cd Vehicle-Renting-System-master/frontend
    -npm install
    -npm start

### BACKEND
**Before Proceeding to Flask, set up the mysql config in the server.py and then create databases with command given in the sql files**

    app.config['MYSQL_HOST'] = 'localhost'
    app.config['MYSQL_USER'] = 'root'
    app.config['MYSQL_PASSWORD'] = '//your password to access mysql'
    app.config['MYSQL_DB'] = '//your database'

**Setting Up flask enviornment**

    cd Vehicle-Renting-System-master/frontend
    pip install virtualenv
    source test/bin/activate
    pip install flask
    pip install flask_cors
    pip install flask-mysqldb
    export FLASK_ENV=development
    export FLASK_APP=server.py
    export FLASK_DEBUG=1
    flask run 