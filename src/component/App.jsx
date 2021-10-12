import React,{useState} from "react";
import Todoitem from "./TodoItem";

function App(){

  const [inputText,setInputText]=useState("");
  const [item,setItem]=useState([]);

  function handleChanged(e){
       const newValue=e.target.value;
       setInputText(newValue);
  }
  function handleclicked(){
      setItem(preValue=>{
          return [...preValue,inputText];
      })
      setInputText("");
  }

 function deleteItem(id){
   setItem(preValue=>{
     return preValue.filter((item,index)=>{
       return index !== id
     });
   });
 }

  return(<div className="container">
    <div className="heading">
      <h1>To-Do-List</h1></div>
    <div className="form">
      <input type="text" onChange={handleChanged} value={inputText}/>
      <button onClick={handleclicked} type="submit">
        <span>Add</span>
      </button>
    </div>
    <div>
      <ul>
        {item.map((itemTodo,index)=>{
          return <Todoitem
          text={itemTodo}
          key={index}
          id={index}
          onChecked={deleteItem}/>
        })}
      </ul>
    </div>
  </div>)
}

export default App;