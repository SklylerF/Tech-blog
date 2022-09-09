const { user } = require('../models');

const userdata = [
    {
        username_id: 'Printemps',
        email: 'printemps@yahoo.com',
        password: 'testpassword'
    },

];

const seeduser = () => user.bulkCreate(userdata);

module.exports = seeduser;
