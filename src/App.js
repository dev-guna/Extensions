import * as React from 'react';
import './App.css';

function App() {

 return (
   <>
    <div className='small-popup'>
    <span className="control-label">Extension</span>
    <label className="switch" id="switch">
    <input id="guna" type="checkbox" data-sts="0" />
    <span className="slider"></span>
    </label>
    </div>
   </>
  );
}

export default App;
