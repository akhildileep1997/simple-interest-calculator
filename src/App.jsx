import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  const[amount,setAmount]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const[interest,setInterest]=useState(0)

 const calculate=(e)=>{
  const output = amount*year*rate/100
  console.log(output);
  setInterest(output)
 }
 const reset = () =>{
   setInterest(0);
   setAmount(0);
   setRate(0);
   setYear(0);
 }
 
  console.log(amount,rate,year);
  return (
    <div className="App">
     <div className="container">

      {/* heading */}
      <div className="headings">
        <h1>Simple Interest Calculator</h1>
        <p>You can calculate your simple interest by no time..!</p>
      </div>

       {/* total */}
       <div className="total">
        <h2>&#8377; {interest}</h2>
        <p>Your Total Interest </p>
       </div>
      
      {/* form */}
      <div className="form">
        <form>
        <div className="input">
        <TextField value={amount || ""} onChange={(e)=>setAmount(e.target.value)} className="outlined-basic" label="Amount" variant="outlined" />
        <TextField value={rate || ""} onChange={(e)=>setRate(e.target.value)} className="outlined-basic" label="Rate" variant="outlined" />
        <TextField value={year || ""} onChange={(e)=>setYear(e.target.value)} className="outlined-basic" label="Year" variant="outlined" />
        </div>
        <div className="button">
        <Button onClick={calculate} variant="contained">Calculate</Button>
        <Button onClick={reset} variant="outlined">Reset</Button>
        </div>
        </form>
      </div>

     </div>
    </div>
  );
}

export default App;
