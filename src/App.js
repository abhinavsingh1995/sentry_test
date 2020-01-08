import React from 'react';
import * as Sentry from '@sentry/browser';
import './App.css';

function methodDoesNotExist(){
  // eslint-disable-next-line no-throw-literal
  try{
    var err = 'Sentry test';
    throw err;
  }catch{
    //nothing
    Sentry.captureException(err);
    console.log("DONE!!");
  }
};


// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
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
//       </header> */}
//       <button onClick={methodDoesNotExist}>Break the world</button>;
//       <p>Form below</p>
//       <form>
//         NAME: <input type="text" id="name" placeholder="NAME" /> <br/>
//         Email: <input type="email" id="email" placeholder="EMAIL" /><br/>
//         COMMENT: <input type="text" id="comments" placeholder="COMMENT"/><br/>
//         <button id="submit" onClick={s}>Send-TO-Sentry</button>
//       </form>
//     </div>
//   );
// }

function sendToSentry(){

  // create a new XMLHttpRequest
  var xhr = new XMLHttpRequest()

  // get a callback when the server responds
  // xhr.addEventListener('load', () => {
  //   // update the state of the component with the result here
  //   console.log(xhr.responseText)
  // })
  // open the request with the verb and the url
  xhr.open('POST', 'https://sentry.io/api/0/projects/imi_org_slug/imi_proj_slug/user-feedback/');

  xhr.setRequestHeader('Authorization','Bearer 1c0932a0af29448fb969324713fac8a7e09901c042e54c1f90a6475017e9cda8');
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  // send the request
  xhr.send(JSON.stringify({ 
    "comments": "Its broken",
    "email":"bahin@shoa.com",
    "event_id":"213cb4911fb5461191e1b97dac6aa230",
    "name":"abhinav"
  }))
  console.log(xhr.responseText);
  console.log("done");
};

class App extends React.Component{
  render(){
    return(
      <div className="App">
      <button onClick={methodDoesNotExist}>Break the world</button>;
      <p>Form below</p>
      <form>
        NAME: <input type="text" id="name" placeholder="NAME" /> <br/>
        Email: <input type="email" id="email" placeholder="EMAIL" /><br/>
        COMMENT: <input type="text" id="comments" placeholder="COMMENT"/><br/>
        <button type="button" id="submit" onClick={sendToSentry}>Send-TO-Sentry</button>
      </form>
    </div>
    )
  }
}

export default App;
