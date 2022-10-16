import React, {useState} from "react";
import Form from "./Form";
import Comments from "./Comments";
import "./styles.css";

function App() {
  const [comments, setComments] = useState([]);

  return (
    <div className="wrapper">
      <Form comments={comments} setComments={setComments}/>
      <Comments comments={comments} setComments={setComments}/>    
    </div>
  );
}

export default App;
