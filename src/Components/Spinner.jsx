import React from 'react'
import { SpinnerCircular } from 'spinners-react';

const Spinner = () => {
  return (
    <div className='spinner'>
        <SpinnerCircular size={90} thickness={100} speed={121} color="rgba(160, 240, 238, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" />
    </div>
  )
}

export default Spinner;
