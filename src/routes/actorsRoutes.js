const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actorsController');

router.get('/actors', actorsController.list);

router.get('/actors/detail/:id', actorsController.detail);

router.get('/actors/topFive', actorsController.best);

router.get('/actors/create', actorsController.add);

router.post('/actors/create', actorsController.create);

router.get('/actors/edit/:id', actorsController.edit);

router.put('/actors/edit/:id', actorsController.update);

router.delete('/actors/delete/:id ', actorsController.destroy);

module.exports = router;