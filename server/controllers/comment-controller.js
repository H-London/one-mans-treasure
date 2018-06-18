const db = require('../../database/Comments');
const util = require('../services/utility.js');

module.exports = {
  comments: {
    post: function(req, res) {
      db.saveComment(req.body).then(savedComment => {
        res.status(201).send(savedComment);
      }).catch(error => {
        res.status(404).send(error);
      });
    },
    get: function(req, res) {
      db.findCommentsList().then(commentsList => {
        res.status(201).send(commentsList);
      }).catch(error => {
        res.status(404).send(error);
      });
    }
  }
};
