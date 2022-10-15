import React, {useState} from "react";
import Form from "./Form";
import Comments from "./Comments";

function App() {
  const [comments, setComments] = useState([]);

  return (
    <div>
      <Form comments={comments} setComments={setComments}/>
      <hr />
      <Comments comments={comments} setComments={setComments}/>    
    </div>
  );
}

export default App;
