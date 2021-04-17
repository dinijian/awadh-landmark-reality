import React, { Component } from 'react';
import Ready from './Components/Pages/ReadyToMove-page';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Search from './Components/Search';
import Content from './Components/Content';
import Contact from './Components/Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// const Routing = ()=>{
//   return (
//     <>    
//   <Switch>
  
//       <> 
      
//      <Content/>
    
//           <Search />
//           <About />
//           <Contact />
          
     
// </>
//   </Switch>

//             </>
            
//   )
// }
// function App() {
  
//   return (
    
//     <BrowserRouter>

//       <Navbar />
//       {/* <Ready /> */}
//       <Routing />
//     </BrowserRouter>
    
//   );
// }

class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <>
          <Route exact path="/" component={Navbar}     />
          <Route exact path="/ReadyToMove" component={Ready}     />
          <Route exact path="/" component={Content}     />
          <Route exact path="/" component={Search}     />
          <Route exact path="/" component={About}     />
          <Route exact path="/" component={Contact}     />
          </>
        </Switch>
      </Router>
    );
  }
}
export default App;
