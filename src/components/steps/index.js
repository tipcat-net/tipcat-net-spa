import React, { useState }  from 'react';

import './steps.css';

const Steps = ({steps}) => {
  const [ currentStep, setCurrentStep ] = useState(0);

  if(!steps) {
    return null;
  }

  const next = () => {
    console.log('next')
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    console.log('prev')
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="steps">
      <div className="steps-header">
        step {currentStep + 1}
      </div>
      <div className="steps-content">
        {steps[currentStep]}
      </div>
      <div className="steps-action">
        { currentStep > 0 ? <button onClick={prev}>Prev</button> : null }
        { currentStep < steps.length - 1 ? <button onClick={next}>Next</button> : null }
      </div>
    </div>
  )
}

export default Steps;