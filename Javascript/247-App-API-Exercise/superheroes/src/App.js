import React from 'react';
import logo from './logo.svg';//<--Need logo here !! -->
import './App.css';

class App extends Component {
  constructor () {
      super ()
      this.state = {
          iss: [],
          searchfield: ''
      }
  }

componentDidMount () {
  fetch('http://api.open-notify.org/iss-now.json')
  .then(response=> response.json()); 
}

render () {
  // const { iss, searchfield } = this.state;    
  // const filterediss = iss.filter(robot => {
  //     return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  //     })
      return (!iss.length) ?
      <h1>Loading...</h1> :
      (
          <div className='tc'>   
              <h1 className='f1'>ISS Station</h1>
               {
                // <p> coordinates and location of station go here </p>
               
                //coordinates and location of station go here (station API)
               //map goes here
               //
               // <--Below from robots-->
               /* <SearchBox searchChange={this.onSearchChange}/>
               <Scroll>
               <CardList iss={filteredRobots} />
               </Scroll> */}
          </div>
              );
      
      }
  }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
