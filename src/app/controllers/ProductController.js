
const { mongooseToObject } = require('../../util/mongoose')
const { mutipleMongoosetoObject } = require('../../util/mongoose')

const Product = require('../models/Product');
const Category = require('../models/Category')
const Login = require('../models/Login')




class ProductController {

    index(req, res, next) {
        if (Login.findOne({ name: req.query.name, password: req.query.password })) {
            Product.find({})
                .then(products => {
                    res.render('product', {
                        products: mutipleMongoosetoObject(products)
                    });
                })
                .catch(next);
        } else {

        }

    }

    show(req, res, next) {
        Product.findOne({ name: req.params.name })
            .then(product => {
                res.render('./product/productDetail', { product: mongooseToObject(product) })
            })
            .catch(next);
    }

    // GET  /product/create
    create(req, res, next) {
        Category.find({})
            .then(category => {
                res.render('product/createProduct', {
                    category: mutipleMongoosetoObject(category)
                })
            })

    }


    //POST /product/store
    store(req, res, next) {
        req.body.img = req.file.filename;
        const product = new Product(req.body);
        product.save()
            .then(() => res.redirect('/product'))
            .catch(error => {

            })

    }

    edit(req, res, next) {
        Product.findById(req.params.id)
            .then(product => res.render('product/editProduct', {
                product: mongooseToObject(product)
            }))
    }


    update(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/product'))
            .catch(next)
    }

    delete(req, res, next) {
        Product.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) {

                res.redirect('/product');
            }
            else {
                console.log("An error occured during the Delete Process" + err);
            }
        })
    }

    search(req, res, next) {
        if(Product.find({name: req.query.proName})) {
            console.log('asdasd')
        }else{
            console.log('fail')
        }


    }




}

module.exports = new ProductController;