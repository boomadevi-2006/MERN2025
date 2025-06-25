const todo=require('../models/todoModels')
exports.getTodo = async (req, res) => {
  try {
    const response = await todo.find();
    res.status(200).json({ data: response }); // 200 OK for successful fetch
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getTodoById= async (req,res)=>{
    const taskData=await todo.findById(req.params.id);
    res.status(201).json(taskData);
}
exports.postTodo=async (req,res)=>{
    const {task,status} = req.body;
    const exist= await todo.findOne({task});
    if(exist) return res.status(401).json({
        messege:"task already exist"
    })
    const newtask =new todo({task,status})
    await newtask.save();
    res.status(201).json({task:newtask})
}
exports.putTodo=async(req,res)=>{
    const update= await todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!update) return res.status(401).json({
        messege:"task not exist"
    })
    res.status(201).json({update})
}
exports.deleteTodo=async (req,res)=>{
    const deletetask= await todo.findByIdAndDelete(req.params.id);
    if(!deletetask) return res.status(401).json({
        messege:"task not exist"
    })
    res.status(201).json({deletetask})
}