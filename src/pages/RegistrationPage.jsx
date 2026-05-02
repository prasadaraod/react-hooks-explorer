import React, { useState } from 'react'

const RegistrationPage = () => {
    const [formData, setFormData] = useState({ name:"",email:"",phone:"",isSubscribed:false});
    let handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e);
        console.log("form submitted");
        console.log("form data :",formData);
    }
    let handleChange = (e) => {
        const {name,value, type, checked} = e.target;
        console.log("name :",name);
        console.log("value :", value);
        setFormData((prev)=>({
            ...prev,
            [name]: type === 'checkbox' ? checked:value

        }));
    }
  return (
    <form onSubmit={handleSubmit}>
        <table>
            <thead>
                <tr>
                    <th colSpan="2"> Registration Page </th>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td> 
                        <label> Name</label>  
                    </td>
                    <td>
                        <input type='text' name="name" value={formData.name} onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <td> 
                        <label> Email </label>  
                    </td>
                    <td>
                        <input type='email' name="email" value={formData.email} onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <td> 
                        <label> phone </label>  
                    </td>
                    <td>
                        <input type='number' name="phone" value={formData.phone} onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <td> 
                        <label> &nbsp; </label>  
                    </td>
                    <td>
                        <label><input type='checkbox' name='isSubscribed' checked={formData.isSubscribed} onChange={handleChange} /> Subscribe to newsletter</label>
                    </td>
                </tr>


                <tr>
                    <td> 
                        <label> &nbsp; </label>  
                    </td>
                    <td>
                        <button> Submit </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
  )
}

export default RegistrationPage