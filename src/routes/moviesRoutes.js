const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const { body } = require("express-validator");
const validator = [
    body('title').notEmpty().withMessage("Campo obligatorio"),
    body('rating').notEmpty().isNumeric().withMessage("Campo obligatorio"),
    body('awards').notEmpty().isNumeric().withMessage("Campo obligatorio"),
    body('length').notEmpty().isNumeric().withMessage("Campo obligatorio"),
    body('release_date').notEmpty().isDate().withMessage("Campo obligatorio"),
]

module.exports = validator;

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);
router.get('/movies/create', moviesController.add);
router.post('/movies/create',  moviesController.create);

router.get('/movies/edit/:id', moviesController.edit);

router.put('/movies/edit/:id', moviesController.update);

router.delete('/movies/delete/:id ', moviesController.destroy);



module.exports = router;