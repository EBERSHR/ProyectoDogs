const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const homeDogs = require('./dogs.js');
const allTemperaments = require('./temperaments.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', homeDogs);
router.use('/', allTemperaments);

module.exports = router;


