import './App.css';
import User from './components/User';

const name = "Mehmet";

function App(){
  return(
    <>
      <User name = "Emre" isLoggedIn = {false} />
    </>
  );
}

export default App;
