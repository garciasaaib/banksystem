import logo from './logo.svg';
import './App.css';
import Tiempo from './components/atoms/Tiempo'


function App() {
  return (
    <div className="App">
      <Tiempo></Tiempo>
      <form>
        <label htmlFor="user">User</label>
        <input type="text" id="user" placeholder="user.."/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="password..."/>
        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}

export default App;
