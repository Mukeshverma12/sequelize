const models = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


function signup(req, res) {
  const saltRounds = 10;
  models.User.findOne({ where: { email: req.body.email } })
    .then((result) => {
      if (result) {
        res.status(500).json({
          data: "email already existed",
        });
      } else {
        bcryptjs.genSalt(10, function (err, salt) {
          bcryptjs.hash(req.body.password, salt, function (err, hash) {
            const user = {
              name: req.body.name,
              email: req.body.email,
              password: hash,
            };
            models.User.create(user)
              .then((result) => {
                res.status(200).json(result);
              })
              .catch((err) => {
                res.status(value).json(err);
              });
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function login(req, res) {
  models.User.findOne({
    where: {
      email: req.body.email,
    },
  }).then(user=>{
    if(user===null){
        res.status(200).send({
            data:  "invaled user"
          });
    }
    else{
        bcryptjs.compare(req.body.password,user.password).then(result=>{
            const token=jwt.sign({
                user:user.email,
                userId:user.id
            },'secret',function(err,token){
                res.status(200).send({
                    data:"successfully",
                    token:token
                });
            }
            )
        })
    }
   
  })
}

module.exports = {
  signup,
  login,
};
