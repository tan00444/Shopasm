
const { mongooseToObject } = require('../../util/mongoose')
const { mutipleMongoosetoObject } = require('../../util/mongoose')

const Category = require('../models/Category');


class CategoryController {
    index(req, res, next) {
        Category.find({})
        .then(categorys => {
        res.render('category', {
        categorys: mutipleMongoosetoObject(categorys)
                });
            })
            .catch(next);
    }


    create(req, res, next) {
        res.render('category/createCategory')
    }

    store(req, res, next) {

        const category = new Category(req.body);
        category.save()
            .then(() => res.redirect('/category'))
            .catch(error => {

            })

    }


    edit(req, res, next) {
        Category.findById(req.params.id)
            .then(category => res.render('category/editCategory', {
                category: mongooseToObject(category)
            }))
    }


    update(req, res, next){
        Category.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/category'))
        .catch(next)
      }

      delete(req, res, next){
        Category.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) {
                res.redirect('/category');
            }
            else {
                console.log("An error occured during the Delete Process" + err);
            }
        })
      }

}

module.exports = new CategoryController;