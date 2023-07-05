import React, { useEffect, useState } from 'react';

const App = () => {
  const [conseil, setConseil] = useState('');
  
  useEffect(() => {
    fetchConseil();
    
  },);  
  const fetchConseil = async () => {
     return await fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json()).then((d) => setConseil(d.slip.advice))//d.slip.advice
  }
  
    
  
  return (
    <div className='app'>
      <div className='card'>
        <h1 className='heading'>{conseil}</h1>
        <button className='button' onClick={fetchConseil}>
          <span>Encore</span>
        </button>
      </div>
    </div>
  );
}

export default App;
