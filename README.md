# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start:dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### How it works
'please bare with my styles as I am focused on implementation'
1. Once you have started front end using npm run start:dev. You can see your app in browser with port number 3000.
2. Intinally you will able to see the main page having home, login, signup.
3. If you are not registerd yet please go and register. (make sure your backend is running)
4. Once you have given proper info you can able to redirect to login page. (if not you have to saticify the input validations)
5. In login you are able to see the username and password to login. Once you have given correct credentials you are able to see the welcome page.
6. In welcome page you can find the cities data coming from the external api (rapidapi). you can filter by using country name.
7. Here I have not implemented save option due to time contraints. 

### process of frontend
 1. I have connetced front end with backend using CORS.
 2. Once you have register, All data from the frontend taken to the axios and post it inot the backed db via api endpoint. Duplicate gmail ids not accepted.
 3. Before it will check the validations both on front and server side.
 4. Once data store into the db you will go and check the login page.
 5. In login page if you have given proper username and password, Using api endpoint it will verify weather you have given correct credentials, If yes, you are able to login and You can see the token stored into the localstorage(you can see it by inspect). 
 6. Once token is generated you are fully protected and you can see the welcome page with some data coming from external api.
 7. Here I just created one small search option you can search by using country name.
 ### Packages
 
 Main packages are 
 1. axios
 2. react-router-dom
 
### TODO
1. take the input data and simply log it into the console. Its not a big task for me. But I need to store it into the database so it takes some time.
2. Styles can be improve.
3. I could make it more validations and error handlings both on (prod and dev) side.
4. I could implement mailtrap for password change. 
5. Sorry for not implementing those cause due to not enough time. 
6. Mainly I took more time to learn NestJS cause its new to me. 

If you need any clarifications regarding proceess of implementation, I am here to explain you.



  

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

