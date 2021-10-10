import React,{useState} from "react";

function App(){
const [inputText,setInputText]=useState("");
const [item,setItem]=useState([]);
const [sty,setStyle]=useState();

const strikeline={textDecoration:"line-through"};

function handleChanged(e){
  const newVal=e.target.value;
  setInputText(newVal);
}
function handleClicked(){
  setItem(preVal=>{
    return [...preVal,inputText];
  })
  setInputText("");
}
  return(<div className="container">
    <h1 className="heading"></h1>
    <div className="form">
      <input type="text" onChange={handleChanged} value={inputText}/>
      <button onClick={handleClicked} type="submit">
        <span>Add</span>
      </button>
    </div>
    <div>
      <ul>
        {item.map(itemTodo=><li style={sty} onClick={(e)=>setStyle(strikeline)}>{itemTodo}</li>)}
      </ul>
    </div>
  </div>)
}

export default App;