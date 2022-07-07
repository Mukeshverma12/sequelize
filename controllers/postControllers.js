const validators=require('fastest-validator');
const models = require("../models");
function getallpost(req, res) {
  models.Post.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function createpost(req, res) {
  const post = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.image_url,
    categoryId: req.body.categoryId,
    userId: 1,
  };
  models.Post.create(post)
    .then((result) => {
      res.status(201).send({
        status: "created successfully",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: err,
      });
    });
}

function updatepost(req, res) {
  const id = req.params.id;
  const post = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.image_url,
    categoryId: req.body.categoryId,
    userId: 1,
  };
  const userId = 1;
  models.Post.update(post, {
    where: {
      id: id,
      userId: userId,
    },
  })
    .then((result) => {
      res.status(201).send({
        status: "update successfully",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: err,
      });
    });
}

function deletepost(req, res) {
  const id = req.params.id;
  const userId = 1;
  models.Post.destroy({
    where: {
      id: id,
      userId: userId,
    },
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function getbyid(req, res) {
  const id = req.params.id;
  models.Post.findByPk(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

module.exports = {
  getallpost,
  updatepost,
  createpost,
  deletepost,
  getbyid,
};
