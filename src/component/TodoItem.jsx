import react from "react";

function Todoitem(props){

    return(<div onClick={()=>props.onChecked(props.id)}>
        <li className="list">{props.text}</li>
    </div>)
}

export default Todoitem;