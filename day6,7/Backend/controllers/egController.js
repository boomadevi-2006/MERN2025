const user=require('../models/userModels')
const bcrypt=require('bcrypt');
exports.getRoute= async (req,res)=>{
    const response=await user.find();
    res.status(201).json({data:response})
}
exports.getRouteById= async (req,res)=>{
    const userData=await user.findById(req.params.id);
    res.status(201).json({userData});
}
exports.signupRoute=async (req,res)=>{
    const {username,password} = req.body;
    const exist= await user.findOne({username});
    if(exist) return res.status(401).json({
        messege:"User already exist"
    })
    const hashedPassword=await bcrypt.hash(password,10)
    const newUser =new user({username,password:hashedPassword})
    await newUser.save();
    res.status(201).json({user:newUser})
}
exports.loginRoute=async (req,res)=>{
    const {username,password}=req.body;
        const exist= await user.findOne({username});
    if(!exist) return res.status(401).json({
        messege:"User Not found"
    })
    const valid = await bcrypt.compare(password,exist.password);
    if(!valid) res.status(401).json({message:"password invalid"})
        res.status(201).json({message:"login succesfull"})
    }
exports.putRoute=async(req,res)=>{
    const {username,password} = req.body;
    const update= await user.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!update) return res.status(401).json({
        messege:"User not exist"
    })
    res.status(201).json({update})
}
exports.deleteRoute=async (req,res)=>{
    const deleteuser= await user.findByIdAndDelete(req.params.id);
    if(!deleteuser) return res.status(401).json({
        messege:"User not exist"
    })
    res.status(201).json({deleteuser})
}