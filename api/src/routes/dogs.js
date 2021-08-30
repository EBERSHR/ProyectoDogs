const { Router } = require('express');
const axios = require('axios');
const { Dog, Temperament } = require('../db');
const { elementAttributeModified } = require('jsdom/lib/jsdom/living/named-properties-window');

let arrayDeDatos = [];

const router = Router();

router.get('/', (req, res) => {
    const { name, limit, page } = req.query;

    // parametro de búsqueda por nombre
    if (name) {
        // http://localhost:3001/dogs/?name=Nombre
        //https://api.thedogapi.com/v1/breeds/search?q={raza_perro}

        axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
            .then((response) => {
                res.send(response.data);
            })
        // res.send('Consulta por query que contenga la palabra ingresada');
    }

    // parámetros de paginación
    if (limit && page) {
        let allDogs = [];
        console.log('PAGE LIMIT', page, limit)

        // Dog.sync()
        //     .then(async () => {
        //         const allDogs = await Dog.findAll({
        //             limit: limit,
        //             offset: page * limit
        //         })

        allDogs = arrayDeDatos.slice(page, limit);
        // allDogs = arrayDeDatos.slice(2, 8);
                res.send(allDogs);

            // });
        // res.send('paginado')
    }

    // Sin parámetros 
    if (!limit && !page && !name) {

        // Función que graba todos los datos desde la api hasta la base de datos
        const getApiDogs = () => {
            const url = 'https://api.thedogapi.com/v1/breeds?api_key=25cce4cd-f5ef-4319-acaa-e1be82e3064a';
            axios.get(url)
                .then((response) => {

                    // response.data.map(element => {
                    //     Dog.sync()
                    //         .then(async () => {
                    //             const dogSaved = await Dog.create(
                    //                 {
                    //                     id: element.id,
                    //                     nombre: element.name,
                    //                     altura: element.height.metric,
                    //                     peso: element.weight.metric,
                    //                     vida: element.life_span,
                    //                     image: element.image.url
                    //                 }
                    //             )
                    //             console.log(dogSaved);
                    //         });
                    //     Temperament.sync()
                    //         .then(async () => {
                    //             const tempSaved = await Temperament.create(
                    //                 {
                    //                     nombre: element.temperament
                    //                 }
                    //             )
                    //         });
                    // });
                    arrayDeDatos = [];
                    let obj = { };
                    response.data.forEach(element => {
                        obj = {
                            id: element.id,
                            nombre: element.name,
                            altura: element.height.metric,
                            peso: element.weight.metric,
                            vida: element.life_span,
                            image: element.image.url,
                            temperament: element.temperament
                        }
                        arrayDeDatos.push(obj);
                    });
                    res.send(arrayDeDatos);
                })
                .catch((error) => { console.log(error) });

        }
        getApiDogs()

        // Verifico la base de datos y si está vacía grabo todos los dato desde la api
        // Dog.sync()
        //     .then(async () => {
        //         const allDogs = await Dog.findAll()
        //         if (allDogs.length > 500) {
        //             res.send(allDogs);
        //         } else {
        //             getApiDogs()
        //         }

        //     });
    }
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    arrayDeDatos.forEach(element => {
        if (element.id === id) {
            res.send(element)
        }
    });


    // http://localhost:3001/dogs/:1

    // Dog.sync()
    //     .then(async () => {
    //         const idDogs = await Dog.findByPk(id)
    //         if (idDogs) {
    //             res.send(idDogs);
    //         } else {
    //             res.json({
    //                 err: 404,
    //                 message: ' El id solicitado no existe'
    //             });
    //         }
    //     });
});

router.post('/', (req, res) => {
    const { nombre, altura, peso, vida, image, temperamento } = req.body;

    Dog.sync()
        .then(async () => {
            const dogSaved = await Dog.create(
                {
                    nombre: nombre,
                    altura: altura,
                    peso: peso,
                    vida: vida,
                    image: image
                }
            )
            console.log(dogSaved);
        });
    Temperament.sync()
        .then(async () => {
            const tempSaved = await Temperament.create(
                {
                    nombre: temperamento
                }
            )
        });

    console.log(req.body);
    res.json(req.body);
});

module.exports = router;