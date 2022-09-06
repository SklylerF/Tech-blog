const { user } = require('../models');

const userdata = [
    {
        name: 'Printemps',
        email: 'printemps@yahoo.com',
        password: 'testpassword'
    },
    {
        name: 'Sommer',
        email: 'printemps@yahoo.com',
        password: 'testpassword'
    },
    {
        name: 'Herfst',
        email: 'printemps@yahoo.com',
        password: 'testpassword'
    },
    {
        name: 'Invierno',
        email: 'printemps@yahoo.com',
        password: 'testpassword'
    },
];

const seeduser = () => user.bulkCreate(userdata);

module.exports = seeduser;
