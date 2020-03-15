import React from 'react';
import heading from './pic/heading.png';
import './App.css';

function App() {
  return (
    <div class="App">
        <div class="BOX">
          <div class="header">
             <img src={heading} class="pic"/>
             <p>Dear User,log in to acces master panel!</p>
          </div>
          <div class="body">
              <input type="text" class="input1"/>
              <label class="input1Label">Role</label>
              <input type="text" class="input2"/>
              <label class="input2Label">Name</label>
              <br/><br/><br/>
              <input type="text" class="input1"/>
              <label class="input1Label">Email</label>
              <input type="password" class="input2"/>
              <label class="input2Label">Password</label>
              <br/><br/><br/>
              <input type="text" class="input1"/>
              <label class="input1Label">Mobile</label>
              <label class="container ct1">Is Active
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
               </label>
          </div>
          <div class="footer">
            <button type="submit">Cancel</button>
            <button type="submit" class="add">Add</button>
          </div>
        </div>
    </div>
  );
}

export default App;
