import React, { useState }  from 'react';

import { Button } from '../ui/Button';

import './steps.css';

const Steps = ({steps}) => {
  const [ currentStep, setCurrentStep ] = useState(0);

  if(!steps) {
    return null;
  }

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
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
        { currentStep > 0 ? <Button onClick={prev}>Prev</Button> : null }
        { currentStep < steps.length - 1 ? <Button onClick={next}>Next</Button> : null }
      </div>
    </div>
  )
}

export default Steps;