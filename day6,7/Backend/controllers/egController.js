const user=require('../models/userModels')
exports.getRoute= async (req,res)=>{
    const response=await user.find();
    res.status(201).json({data:response})
}
exports.postRoute=async (req,res)=>{
    const {username,password} = req.body;
    const exist= await user.findOne({username});
    if(exist) return res.status(401).json({
        messege:"User already exist"
    })
    const newUser =new user({username,password})
    await newUser.save();
    res.status(201).json({user:newUser})
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