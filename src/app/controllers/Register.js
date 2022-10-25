const Login = require("../models/Login");


class RegisterController{

    index(req, res, next) {
        res.render('layouts/register', {layout: false})
    }

    insert(req, res){
        const login = new Login(req.body);
        login.save()
            .then(() => res.redirect('/login'))
            .catch(error => {
                    console.log('fail');
            })
    }

}

module.exports = new RegisterController;