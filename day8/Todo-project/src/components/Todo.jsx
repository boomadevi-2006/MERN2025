import React, {useState, useEffect} from 'react'
import axios from 'axios';
const API='http://localhost:2027';
const Todo = () => {
    const [task,setTask]= useState('')
    const [todo,setTodo] = useState([])
    const[editing, setediting] = useState(null)

    const fetchTodo = async() =>{
        const response = await axios.get(`${API}/todo/get`);
        console.log(response.data);
        setTodo(response.data.data);
    }
    useEffect(()=>{
        fetchTodo()
    },[]);

    const handleAddOREdit = async(e) =>{
        e.preventDefault();
        if(editing){
            await axios.put(`${API}/todo/put/${editing._id}`,{task})
        }else{
            await axios.post(`${API}/todo/post/`,{task})
        }
        setediting(null);
        setTask('');
        fetchTodo();
    }
    const handleDelete = async(id) =>{
        await axios.delete(`${API}/todo/delete/${id}`);
        fetchTodo();
        fetchTodo();
    }

    const handleToggleStatus = async (todo) =>{
        await axios.put(`${API}/todo/put/${todo._id}`,{
            status:!todo.status
        })
        fetchTodo()
    }
  return (
    <div>
        <h2>Todo</h2>
        <input type="text" 
            value={task}
            placeholder='Enter the task'
            onChange={(e)=>setTask(e.target.value)}
        />
        <button onClick={handleAddOREdit}>{editing? "Update" : "Add"}</button>
        <h2>Todo List</h2>
        <ul>
            {todo.map((todos)=>(
                <li key={todos._id}>
                    <span onClick={()=>{handleToggleStatus(todos)}} style={{cursor:"pointer", textDecoration:todos.status?"line-through": "none"}}><p>{todos.task}</p></span>
                    <button onClick={()=>{
                        setediting(todos)
                        setTask(todos.task)}}>Edit</button>
                    <button onClick={()=>handleDelete(todos._id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo