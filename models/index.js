const User = require('./User');
const post = require('./post');
const comment = require('./comment');

post.hasMany(comment, {
    foreignKey: 'post_id',
});

comment.belongsTo(post, {
    foreignKey: 'post_id',
});

module.exports = { User, post, comment };
