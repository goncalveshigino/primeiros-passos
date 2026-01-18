const { response } = require('express');

const usersGET = (req, res = response ) => {

    const { q, name = 'No Name', page, limit} = req.query

    res.json({
        msg: 'Get API -  controlador', 
        q,
        name,
        page, 
        limit
    });
}

const usersPOST = (req, res = response ) => {

    const body = req.body;

    res.json({
        msg: 'POST API -  controlador',
        body
    });
}

const usersPUT = (req, res = response ) => {

    const id = req.params.id

    res.json({
        msg: 'PUT API -  controlador',
        id
    });
}

const usersPATCH = (req, res = response ) => {

    res.json({
        msg: 'PATCH API -  controlador'
    });
}

const usersDELETE = (req, res = response ) => {

    res.json({
        msg: 'DELETE API -  controlador'
    });
}


module.exports = {
    usersGET,
    usersDELETE,
    usersPATCH,
    usersPUT,
    usersPOST
}