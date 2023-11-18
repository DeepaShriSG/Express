import userModel from "../models/User.js";
import Auth from "../common/auth.js";
const getUsers = async (req, res) => {
  try {
    let users = await userModel.find();
    res.status(201).send({
      message: "Data is Fetched Successfully",
      users,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error,
    });
  }
};

const getUsersById = async (req, res) => {
  try {
    let users = await userModel.find({ _id: req.params.id });
    res.status(201).send({
      message: "Data is Fetched Successfully",
      users,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error,
    });
  }
};

const createUsers = async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      req.body.password = await Auth.hashPassword(req.body.password);
      await userModel.create(req.body);
      res.status(201).send({
        message: "User created successfully",
      });
    } else {
      res.status(400).send({
        message: `User with ${req.body.email} already exists`,
        error: error.message,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const editUser = async (req, res) => {
  try {
    let user = await userModel.findOne({ _id: req.params.id });
    if (user) {
      let { firstName, lastName, email, password, status, role } = req.body;
      // await userModel.updateOne({_id:req.params.id},{
      //     $set:req.body
      // }) not recomended
      user.firstName = firstName ? firstName : user.firstName;
      user.lastName = lastName ? lastName : user.lastName;
      user.email = email ? email : user.email;
      user.password = password ? password : user.password;
      user.status = status ? status : user.status;
      user.role = role ? role : user.role;

      await user.save();

      res.status(200).send({
        message: "User Data Saved",
      });
    } else {
      res.status(400).send({ message: "Invalid User" });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    let user = await userModel.findOne({ _id: req.params.id });
    if (user) {
      await userModel.deleteOne({ _id: req.params.id });
      res.status(200).send({ message: "User Deleted Successfully" });
    } else {
      res.status(400).send({ message: "Invalid User" });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const login = async(req,res)=>{
  try {
    let user = await userModel.findOne({ email: req.body.email });
    if(user){
         let hashCompare = await Auth.hashCompare(req.body.password,user.password)
         if(hashCompare){

          let token = await Auth.createToken({
            firstName: user.firstName,
            lastName : user.lastName,
            email: user.email,
            role:user.role
            
          })
          res.status(201).send({
            message: "User Logged in successfully",
            token
          });
         }
         else{
            res.status(400).send({
            message: `Account with ${req.body.email} entered Invalid password`
            
          });
         }
    }
    else{
      res.status(400).send({
        message: `Account with ${req.body.email} is invalid doesn't exists`,
       
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

export default {
  getUsers,
  getUsersById,
  createUsers,
  editUser,
  deleteUser,
  login
};
