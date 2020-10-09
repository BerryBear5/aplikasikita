import React from 'react';


function CallHelloWord() {
  return <div style={{backgroundColor : 'pink'}}>
  Hello World
  </div>
}
function Alert() {
  return <button onClick={() => alert('Selamat Datang')}>Click Me </button>
}
function App() {
  return <div>
    <CallHelloWord />
    <Alert/>
  </div>
}

export default App;