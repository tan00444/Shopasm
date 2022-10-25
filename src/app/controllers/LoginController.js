
const Login = require('../models/Login')

class LoginController{

   
    index(req, res, next) {
        res.render('layouts/login', {layout: false})
    }

    login(req, res, next) {
        try {
        
        Login.findOne({ name: req.body.name, password: req.body.password})
        .then((result) => {
            if(result === null) {
                res.render('layouts/login', {layout: false})
            }else{
                res.redirect('/product'), {result} }
        }
        )
        .catch(next);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new LoginController;