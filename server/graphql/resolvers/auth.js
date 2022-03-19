const User = require("../../models/User")

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const rootResolver = {
    Register : async (name,email,password) => {
        try {

            console.log("Hi I am being Called");

            const existingUser = await User.findOne({email : email});

            if(existingUser){
                throw new Error("User already exists..")
            }

            const newPassword = bcrypt.hash(password,12);

            const user = new User({
                name : name,
                email : email,
                password : newPassword
            })

            const result = await user.save();

            return{
                _id : result.id
            }
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    },
    
    Login : async (email,password) => {
        try {
            const user = await User.find({email : email})

            const result = bcrypt.compare(password,user.password);

            if(!result){
                throw new Error("Password is incorrect");
            }
            
            const token = jwt.sign(
                {name : user.name},
                process.env.SECRET,
                {expiresIn : "5h"}
            );

            return {
                userId : user.id,
                token : token,
                tokenExpiration : 5 
            };
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = rootResolver;