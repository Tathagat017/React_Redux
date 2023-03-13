
import './App.css';
import AllRoutes from './AllRoutes/Routes';
import Routes from './AllRoutes/Routes';
import Counter from './components/Counter';
import Todo from './components/Todo';
import Privateroute from './AllRoutes/Privateroute';

function App() {
  return (
    <div className="App">
     
     <Counter/>
    <AllRoutes/>
  
    </div>
  );
}

export default App;
