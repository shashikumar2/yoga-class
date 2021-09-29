import './App.css';
import Home from './components/Home'
import ChooseClass from './components/ChooseClass'
import Stats from './components/Stats'
import Pricing from './components/Pricing'
import Message from './components/Message'
import Update from './components/Update'
import Links from './components/Links'

function App() {
  return (
   <div>
      <Home/>
      <ChooseClass/>      
      <Stats/>
      <Pricing/>
      <Message/>
      <Update/>
      <Links/>      
    </div>
  );
}

export default App;
