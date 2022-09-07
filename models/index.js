const post = require('./post');
const comment = require('./comment');
const user = require('./User');

user.hasMany(post, {
    foreignKey: 'post_id',
});

post.belongsTo(user, {
    foreignKey: 'post_id',
});

post.hasMany(comment, {
    foreignKey: 'post_id',
});

comment.belongsTo(post, {
    foreignKey: 'post_id',
});

module.exports = { user, post, comment };
