import React, { useState } from 'react'

const MultipleInputs = () => {
    const [formData,setFormData] = useState({name:"",email:"",isSubscribed:false});
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    const handleChange = (e) => {
        const {name,value,type,checked} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:type === 'checkbox'?checked:value
            })
        )
    }
  return (
    <form onSubmit={handleSubmit}>
        <h1>Multiple Inputs</h1>
        <label>Name</label> <input type='text' name='name' value={formData.name} onChange={handleChange} />  <br></br>
        <label>Email</label> <input type='text' name='email' value={formData.email} onChange={handleChange} />  <br></br>
        <label> <input type='checkbox' name='isSubscribed' checked={formData.isSubscribed} onChange={handleChange} /> Subscription</label> <br></br>
        <button >Submit</button>
    </form>
  )
}

export default MultipleInputs