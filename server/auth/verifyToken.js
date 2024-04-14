import  jwt  from 'jsonwebtoken'
import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'

export const authenticate = async (req,res,next)=>{
    const authToken = req.headers.authorization


    // check is token exist
    if(!authToken || !authToken.startsWith('Bearer ')){
        return res.status(401).json({status:false, message:'No token, authorization denied'})
    }

    try {
        // console.log(authToken);
        const token = authToken.split(' ')[1]


        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.userId = decoded.id
        req.role = decoded.role


        next(); //must call next function
    } catch (err) {
        if(err.name === 'TokenExpiredError'){
            return res.status(401).json({status:false, message:'Token expired'})
        }
        return res.status(401).json({status:false, message:'Invalid token'})
    }
}


export const restrict = roles=> async(req,res,next)=>{
    const userId = req.userId;
    let user;

    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if(patient){
        user = patient;
    } 
    if(doctor){
        user = doctor;
    }

    if(!roles.includes(user.role)){
        return res.status(401).json({success:false, message:"You're not authorized"})
    } 

    next(); 
}