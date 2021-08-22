const { Router } = require('express');
const { Temperament } = require('../db');


const router = Router();

router.get('/temperaments', (req, res) => {

    Temperament.sync()
    .then(() => {
        Temperament.findAll(
            {
                attributes: ['id', 'nombre']
            }
        )
        .then((response) => {
            res.send(response);
        });

    });

});


module.exports = router;