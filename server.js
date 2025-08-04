const express = require ("express")
const becryptjs= require ("bcryptjs")
const jwt = require ("jwtwebtoken")
const user = require ("model/user")
const router = express.Router()

router.post ("/register",("req,res"))
const {uername,password, confrirmpassword} = req.body

try{
    const hashPassword =await  becryptjs.hash(password,10)
const user = await user.create(user,email,password.hash)
res.json({"User Created Successfully"});

}
catch(err){
res.status(400).json({error:err.message})
}


