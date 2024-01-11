import React from 'react'
import IconClose from './Xbutton'

const ErrorMessaage = () => {
  return (
    <div className='error-container error'>
        <div className='btn-x'>
        <IconClose />
        </div>
        <div >
        <span>Error!</span>
        <p>All fields are mandatory</p>

        </div>
       
    </div>
  )
}

export default ErrorMessaage
