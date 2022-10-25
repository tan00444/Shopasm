
const proRouter = require('./product')
const categoryhRoute = require('./category')
const LoginRoute = require('./login')
const registerRoute = require('./register')


function route(app){

    
    app.use('/product', proRouter);
    app.use('/category', categoryhRoute);
    app.use('/login', LoginRoute);
    app.use('/register', registerRoute);
    app.use('/', LoginRoute);

    
    



}

module.exports = route;