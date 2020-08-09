## EXPENSE TRACKER

### Features : 
1. Adding Expense Category Wise 
2. Recording Expense Category Wise 
3. Dashboard where we can see cummulative stats like Total Money Earned, Total Spent, Balance Amount
4. Indication if Balance is less than 1000

### WISHLIST : 
1. User Login/Logout
2. History Tab will show past transactions with pagination. (Paginated from backend)
3. Bill Reminders will remind you of upcoming bills

### Components : 
1. App.js will the main container.
2. NAVBAR has EXPENSE MANAGER as Title(Navbar Brand) and Two Links(Add Expense , Add Earning)
3. Clicking on Navbar Brand, will bring us to homepage('/') which will show Total Money Earned, Total Money Spent, Balance Amount 
4. 'Add Expense' will show page where you can add new expense, and view past ones.
5. 'Add Earning' will show page where you can add new earning, and view past ones. 

## PROCEDURE 

### FRONT-END [ React , ContextAPI , axios]
1. Built the Links(Navbar)
2. Built the Routes.
3. Built the Components rendered by each Route. For Home Component, every time the component is mounted, axios.get request is sent which fetches the Summary of Money Spent, Earned and Balance. 
4. Setup Context API. All the data [ expenses, earnings, Total Money Earned, Total Money Spent, Balance Amount ] that is required by different components are stored in this AppContext. Defined two functions (one for adding expense and another for adding earning) and through useContext Hook, invoked these functions from Expense Component and Earning Component. 

### BACK-END [ Flask ]
1. Using Flask set up one route with GET method. '/view' which fetched the summary statistics like Total Earned, Total Spent, and Balance Amount from 'summary.csv'
2. Using Flask set up two routes with POST method. '/expense' will add the new item sent by the browser into the 'expenses.csv' file. '/earning' will add the new item sent by the browser into the 'earnings.csv' file. Everytime one of these two routes is executed, Summary statistics are also updated in the file 'summary.csv'. From both these routes, the newly updated list is sent back to browser. 



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
