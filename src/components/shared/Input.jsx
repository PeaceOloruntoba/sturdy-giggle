import React from 'react'

export default function Input({inputClassName, placeholder, type='text'}) {
  return (
    <input type={type} placeholder={placeholder} className={inputClassName} />
  )
}
