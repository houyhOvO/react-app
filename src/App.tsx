import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["New York", "San Francisco", "Sydney", "London", "Shanghai"];

  // const handleSelectedItem = (item: string) => {
  //   console.log(item)
  // }

  // return (
  //   <div>
  //     <ListGroup items={items} heading="Cities" onSelectedItem={handleSelectedItem}/>
  //   </div>
  // );
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
