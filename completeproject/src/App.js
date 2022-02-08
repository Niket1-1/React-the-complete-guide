import logo from './logo.svg';
import './App.css';
import AddUser from './Componenets/Users/AddUsers';
import UsersList from './Componenets/Users/UseraList';
function App() {
  return (
    <div>
    <AddUser />
    <UsersList users={[]} />
    </div>
  );
}

export default App;
