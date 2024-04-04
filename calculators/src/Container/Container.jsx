import React from 'react';
import '../Components/Calculator/Calculator.scss';
import Calculator from '../Components/Calculator/Calculator';


const Container = () =>{

  return(
    <>
      <div className='calculator-container'>
        <Calculator />
      </div>
    </>
  )
}

export default Container