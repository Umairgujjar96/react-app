// import React, { useState } from 'react';
// import './App.css';

// const Todo = () => {
    
//     const [todo, setTodo] = useState('');
//     const [todos, setTodos] = useState([]);
//     const[editlist,seteditlist]=useState(null);

//     const addTodo = (e) => {
//         e.preventDefault();
//         if(todo){
//             const update=todos.map(todo,i=>i==setTodos
//             setTodos([...todos, todo]);
            
//         }
//         setTodo('');
//     }

//     const deleteitem=(todo)=>{
//         let details=todos.filter((item)=>item !==todo);
//         // let details=todos.filter((x)=>{
//         //     return x!==todo;
//         // })
        
//     }

//     const update=(index)=>{
//         setTodos(index);
//         setTodos(todo[index])
//     }

//     return(
//     <div className='container py-5 mt-5 border rounded'>
//     <h1 className='text-center tho'>Todo App</h1>
//     <form onSubmit={addTodo} className='mt-5'>
//         <div className='input-group mb-3'>
//         <input type="text" className='form-control p-3' placeholder="Enter Something!" aria-label="Recipient's username" aria-describedby="button-addon2" value={todo} onChange={(e) => setTodo(e.target.value)}></input>
//         <button class="btn btn-primary" type="submit button" id="button-addon2"><i class="fa-solid fa-plus"></i></button>
//         </div>
        
//     </form>
//     <div className=' mt-5'>
//         {todos.map(todo => (
//             <div className='cartt border rounded p-3 ho' style={{overflow:'hidden',maxHeight: '200px'}} key={todo}>
//             {todo}
//             <button onClick={()=>{deleteitem(todo)}} className='btn btn-danger btn-sm float-end'><i class="fa-solid fa-remove"></i></button>
//             <button onClick={()=>update(todo)} className='btn btn-info btn-sm float-end'><i className='fa-solid fa-edit'></i></button>
//             </div>
//         ))}

//     </div>


    

//     </div>
// )}

// export default Todo;






// // onClick={() => setTodos(todos.filter(t => t!== todo))}





import React, { useState } from 'react';
import './App.css';

const Todo = () => {
    
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const addTodo = (e) => {
        e.preventDefault();
        if(todo) {
            if (editIndex !== null) {
                const updatedTodos = todos.map((item, index) => index === editIndex ? todo : item
                );
                setTodos(updatedTodos);
                setEditIndex(null);
            } else {
                setTodos([...todos, todo]);
            }
            setTodo('');
        }
    }

    const deleteItem = (todoToDelete) => {
        const filteredTodos = todos.filter(todo => todo !== todoToDelete);
        setTodos(filteredTodos);
    }

    const editItem = (index) => {
        setTodo(todos[index]);
        setEditIndex(index);
    }

    return(
    <div className='container py-5 mt-5 border rounded'>
        <h1 className='text-center tho'>Todo App</h1>
        <form onSubmit={addTodo} className='mt-5'>
            <div className='input-group mb-3'>
                <input type="text" className='form-control p-3' placeholder="Enter Something!" aria-label="Recipient's username" aria-describedby="button-addon2" value={todo} onChange={(e) => setTodo(e.target.value)}
                />
                <button className="btn btn-primary" type="submit" id="button-addon2">
                    {editIndex !== null ? "Update" : <i className="fa-solid fa-plus"></i>}
                </button>
            </div>
        </form>
        <div className='mt-5'>
            {todos.map((todo, index) => (
                <div className='cartt border rounded p-3 ho' style={{overflow: 'hidden', maxHeight: '200px'}} key={index}>
                    {todo}
                    <button 
                        onClick={() => deleteItem(todo)} 
                        className='btn btn-danger btn-sm float-end'><i className="fa-solid fa-remove"></i>
                    </button>
                    <button 
                        onClick={() => editItem(index)} className='btn btn-info btn-sm float-end'>
                        <i className='fa-solid fa-edit'></i>
                    </button>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Todo;
