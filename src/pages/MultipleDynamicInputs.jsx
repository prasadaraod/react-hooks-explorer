import React, { useState } from 'react'

const MultipleDynamicInputs = () => {
    // const [firstName, setFirstName] = useState("");
    const [formData, setFormData] = useState({firstName:"",lastName:"",email:""});
    const handleChange =(e)=> {
        // console.log(e.target);
        // console.log(e.target.value);
        const {name,value} = e.target;
        console.log(name);
        console.log(value);
        // setFirstName(e.target.value);
        // setFirstName(value);
        setFormData((prev)=>({...prev,[name]:value}));
        console.log("formdata",formData);

    }
  return (
    <form>
        <label>First Name</label><input name="firstName" onChange={handleChange} /> <br></br>
        <label>Last Name</label><input name="lastName" onChange={handleChange} /> <br></br>
        <label>Email</label><input name="email" onChange={handleChange} />
    </form>
  )
}

export default MultipleDynamicInputs