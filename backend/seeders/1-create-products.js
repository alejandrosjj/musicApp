'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Products', [{
            name: 'Un Verano Sin Ti',
            price: 23.47,
        },
        {
            name: 'Primer Dia de Clases',
            price: 20.52
        },
        {
            name: 'X 100PRE (vinilo)',
            price: 36.45
        },
        {
            name: 'Oasis',
            price: 21.53
        },
        {
            name: 'YHLQMDLG',
            price: 24.05
        },
        {
            name: 'Las que no iban a salir',
            price: 21.99
        },
        {
            name: 'MiCRODOSIS',
            price: 20.53
        },
        {
            name: 'El último tour del mundo',
            price: 22.53
        },

        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Products', null, {});
    }
};
