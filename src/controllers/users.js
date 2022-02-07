const Users = require('../models/user.models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// sign up user
const createNewUser = async (req, res) => {
  const userExist = await Users.findOne({email: req.body.email});
  if(userExist) {
    res.json({
      message: `user ${req.body.name} with ${req.body.email} already exist`
    })
  }else {
    const user = await Users(req.body);
    bcrypt.hash(user.password, 10, async (err, hash) => {
      if(err) {
        console.log(err);
      }else {
        user.password = hash;
        const newUser = await user.save();
        res.json({
          message: `user ${user.name} was created successfully.`,
          data: newUser
        })
      }
    })
  }
}

// log in user
const logInUser = async (req, res) => {
  const user = await Users.findOne({email: req.body.email});
  if(user) {
    bcrypt.compare(req.body.password, user.password, (err, data) => {
      if(data) {
        const _token = jwt.sign({id: user._id }, process.env.SECRET_KEY_JWT, {expiresIn: 60*60*24*14}); 
        res.json({
          auth: true,
          message: `user ${user.name} is logged. `,
          token: _token
        })
      } else {
        res.json({
          auth: false,
          message: `your password is not correct`
        })
      }
    } )
  }else {
    res.json({
      auth: false,
      message: `your email: ${req.body.email}, is not exist, introduce a new email. `
    })
  }
}

const verifyToken = async (req, res, next) => {
  const _token = req.headers['access-token'];
  if(!_token) {
    res.json({
      auth: false,
      message: 'You have no access here, please get a token access'
    })
  } else {
    jwt.verify(_token, process.env.SECRET_KEY_JWT, (err, payload) => {
      if(err) {
        res.json({
          auth: false,
          message: 'Your Token is not valid'
        })
      } else {
        req.userId = payload;
        next();
      }
    })
    console.log('yes there is token :)');
  }
}

const getAllUser = async (req, res) => {
  const user = await Users.find();
  res.json(user);
}

const getUserById = async (req, res) => {
  // const {id} = req.params;
  const user = await Users.findOne( );
  res.json(user);
}

const removeUserById = async (req, res) => {
  const {id} = req.params;
  const removeUser = await Users.findByIdAndDelete(id);
  res.json({
    message: `user ${removeUser.name} was removed successfully.`,
    data: removeUser
  }) 
}


module.exports = {
  getAllUser,
  createNewUser,
  removeUserById,
  logInUser,
  verifyToken,
  getUserById
}