import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt  from 'jsonwebtoken'
import bcrypt from 'bcryptjs'



const generateToken = user=>{
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{
        expiresIn : '15d'
    })
}

export const register = async (req,res) =>{
const {email, password, name, role, photo, gender} = req.body

    try {
        let user = null;

        if(role === 'patient'){
            user = await User.findOne({email})
        }
        else if(role === 'doctor'){
            user = await Doctor.findOne({email})
        }
        
        // If user exist already
        if(user){
            return res.status(400).json({message:"User already exist"})
        }

        // hash password 
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        if(role === 'patient'){
            user = new User({
                name,
                email,
                password : hashPassword,
                photo,
                gender,
                role
            })
        }

        
        if(role==='doctor'){
            user = new Doctor({
                name,
                email,
                password : hashPassword,
                photo,
                gender,
                role
            })
        }
        await user.save();
        res.status(200).json({success : true, message:'User successfully created'})
    } catch (err) {
        console.log(err)
        res.status(500).json({success : false, message:'Internal server error, Try agian'})
    }
}

export const login = async (req,res) =>{
    const {email} = req.body;
    try {
        let user = null;

        const patient = await User.findOne({email})
        const doctor = await Doctor.findOne({email})
        if(patient){
            user = patient        }
        if(doctor){
            user = doctor
        }

        // If user doesn't exist

        if(!user){
            return res.status(404).json({success: false, message:"User not found"})

        }

        // Compare password
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)

        if(!isPasswordMatch){
            return res.status(400).json({success: false, message:"Invalid credential"})
        }

        // get token

        const token = generateToken(user);

        const {password,role, appoinment, ...rest} = user._doc
        // console.log(user, 'user')
        // console.log(user._doc, 'user doc')

        res.status(200).json({success:true, message:"Successfully login", token,role,data:{...rest}})

    } catch (error) {
        res.status(500).json({success : false, message:'Failed to login'})
    }
} 