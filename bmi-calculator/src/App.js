import React, { useState } from "react";
import './index.css'



function App() {

  // state
  const [weight, setWeight] = useState(0)
  const [heigt, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')


 

  let calcBmi = (event) => {
    // prevent submitting
    event.preventDefault()

    if (weight === 0 || heigt === 0) {
      alert('please enter a valid weight and heigt')
    }
    else {
      let bmi = (weight / (heigt * heigt) * 703)
      setBmi(bmi.toFixed(1))

      // logic for message
      if (bmi < 25){
        setMessage('You are underweight')

    } else if (bmi >= 25 && bmi < 30) {
      setMessage('You are a healthy weight')
    }else{
      setMessage('You are overweight')
    }
    }
  }

  let imgSrc = ''

  let reload = () => {
    window.location.reload()
  }



  return (
    <div className='App'>
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Enter your Weight (lbs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Enter your Height (in)</label>
            <input value={heigt} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>

        </form>
        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
        
      </div>

    </div>
  );
}

export default App;
