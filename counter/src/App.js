import logo from './logo.svg';
import Logo from './components/logo';
import './App.css';
import Greeting from './components/greeting';
import Counter from './components/counter';

function App() {
  const Username = "Gilberto";
  return (
<div>
  <Greeting name={Username}/>
  <Logo />
  <Counter />
</div>
  )
};


export default App;
