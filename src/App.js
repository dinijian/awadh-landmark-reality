

import Navbar from './Components/Navbar';
import About from './Components/About';
import Search from './Components/Search';
import Content from './Components/Content';
import Contact from './Components/Contact';
import {BrowserRouter, Switch} from 'react-router-dom';
const Routing = ()=>{
  return (
    <>    
  <Switch>
  
      <> 
      
     <Content/>
    
          <Search />
          <About />
          <Contact />
     
</>
  </Switch>

            </>
            
  )
}
function App() {
  
  return (
    
    <BrowserRouter>

      <Navbar />
      
      <Routing />
    </BrowserRouter>
    
  );
}
export default App;
