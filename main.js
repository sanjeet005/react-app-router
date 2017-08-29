import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';


class App extends React.Component {
   render() {
      return (
        <div>
         <div>
			       <ul>
               <li><Link to = "/home">Home</Link></li>
               <li><Link to = "/about">About</Link></li>
               <li><Link to = "/contact">Contact</Link></li>
            </ul>
         </div>
         <hr/>
         <div>
         	{this.props.children}
         </div>
        </div>
      )
   }
}

export default App;

export class Home extends React.Component {
   render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}


export class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
}


export class Contact extends React.Component {
   render() {
      return (
         <div>
            <h1>Contact...</h1>
         </div>
      )
   }
}


ReactDOM.render((
   <BrowserRouter>
   	 <App>
      <Route path = "/home" component = {Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
     </App>
  </BrowserRouter>
  ), document.getElementById('app')
);
