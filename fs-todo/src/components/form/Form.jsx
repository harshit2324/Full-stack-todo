'use client'
import {useRef} from 'react'

const Form = ({children, action, className, onSubmit}) => {
  const ref = useRef(null);
  return (
   <form action={async  (formData) => {
    await action && action(formData);
    ref.current.reset();
   }} onSubmit={onSubmit} ref={ref}>
     {children}
   </form>
  )
}

export default Form