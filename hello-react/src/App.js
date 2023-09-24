import './App.css';
import User from './components/User';

const friends = [
  {
    id: 1,
    name : 'Ahmet',
  },
  {
    id: 2,
    name : 'Tayfun',
  },
  {
    id: 3,
    name : 'Gökhan',
  },

];

function App(){
  return (
    <>
      <User
        name="Emre"
        age= {27}
        isLoggedIn={true}
        friends = {friends}
      />
    </>
  );
}

export default App;
