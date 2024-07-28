import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import './App.css'

function App() {
  // Add listgroup component
  let items = ["New York", "San Francisco", "Sydney", "London", "Shanghai"];

  const handleSelectedItem = (item: string) => {
    console.log(item)
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectedItem={handleSelectedItem}/>
    </div>
  );

  // Add alert component
  // return (
  //   <div>
  //     <Alert>
  //       Hello <span>World</span>
  //     </Alert>
  //   </div>
  // );

  // Add button component
  // const [alertVisiable, setAlertVisiablity] = useState(false);

  // return (
  //   <div>
  //     {alertVisiable && (
  //       <Alert onClose={() => setAlertVisiablity(false)}>My Alert</Alert>
  //     )}
  //     <Button onClick={() => setAlertVisiablity(true)}>My Button</Button>
  //   </div>
  // );
}

export default App;
