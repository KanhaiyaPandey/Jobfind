/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react'
const FormRow = ({type, name, labelText}) => {
  return (
    <div className="form-row">
    <label htmlFor="name" className='form-label'>
      {labelText || name}
    </label>
    <input type={type}
     id={name}
     name={name}
     className='form-input'
     required >
     </input>
   </div>
  )
}

export default FormRow;