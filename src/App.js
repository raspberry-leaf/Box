import Main from "./components/Main";

const App = (props) => {

  return (
   	<Main data={props.data} rate={props.rate}/>
  );
}

export default App;
