import { useState } from "react";
import LoginForm from "./Login";

const RegisterForm=()=>{
    
    const[formData, setFormData] = useState({
        fname:'',
        lname: '',
        uemail: '',
        upass: '',
        ucpass:'',
    })

    const [errors, setErrors] = useState({});
    const [successMsg, setSuccessMsg] = useState('');
    const handleChange=(e) => {
        setFormData(
            {...formData, [e.target.name]:e.target.value}
        )
    }

    const validate =() => {
        let newErrors = {}
        const letters=/^[A-Az-z]+$/;
        if(!formData.fname) newErrors.fname = 'First Name is required :(';
        if((formData.fname).length<2) newErrors.fname = 'First name must be greater than 5 chars'
        if(!letters.test(formData.fname)) newErrors.fname="Firt Name cant be empty _"

        if(!formData.lname) newErrors.lname = 'Last Name is required :(';
        if((formData.lname).length<6) newErrors.lname = 'Last name must be greater than 5 chars'
        if(!letters.test(formData.lname)) newErrors.lname="Last Name cant be empty _"

        if(!formData.uemail) newErrors.uemail = 'Email is required'
        if(!formData.upass) newErrors.upass = 'Password is required'
        if((formData.upass).length<8    ) newErrors.upass = 'Password must be a 8 chars length'
        if(!formData.ucpass) newErrors.ucpass = 'Confirm Password is required'
        if(formData.upass !== formData.ucpass) newErrors.ucpass = 'Passwords do not match'

        
        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors=validate()
        setErrors(validateErrors);
        if(Object.keys(validateErrors).length ===0){
            console.log(formData.uemail, formData.upass);
            localStorage.setItem('uemail', formData.uemail);
            localStorage.setItem('upasss', formData.upass);

            setSuccessMsg("Registration done successfully ♥")
            window.location.href=window.location.href+LoginForm()
        }
        else{
            setSuccessMsg("Registration failed :(")
        }
    }

    return(
        <div className="container d-flex justify-content-center">
        <div className="row">
            <h2 className="text-center">Register Form</h2>
        
        <form className="row g-3" onSubmit={handleSubmit}>

            {successMsg && <h3><mark>{successMsg}</mark></h3>}

            <div className="col-md-6">
            <label for="inputEmail4" className="form-label">First Name</label>
                <input type="text" name="fname" className="form-control" placeholder="First name" aria-label="First name" onChange={handleChange}/>
                {errors.fname && <p><mark>{errors.fname}</mark></p>}
            </div>
            <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Last Name</label>
                <input type="text" name="lname" className="form-control" placeholder="Last name" aria-label="Last name"onChange={handleChange} />
                {errors.lname && <p><mark>{errors.lname}</mark></p>}
            </div>
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" name="uemail" className="form-control" id="inputEmail4" onChange={handleChange}/>
                {errors.uemail && <p><mark>{errors.uemail}</mark></p>}
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label">Password</label>
                <input type="password" name="upass" className="form-control" id="inputPassword4" onChange={handleChange}/>
                {errors.upass && <p><mark>{errors.upass}</mark></p>}
            </div>
            
            <div className="col-12">
                <label for="inputAddress" className="form-label">Confrim Password</label>
                <input type="password" name="ucpass" className="form-control" id="inputAddress" onChange={handleChange}/>
                {errors.ucpass && <p><mark>{errors.ucpass}</mark></p>}
            </div>
            <div className="col-12">
                <label for="inputAddress2" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div className="col-md-6">
                <label for="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="col-md-4">
                <label for="inputState" className="form-label">State</label>
                <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>Maharashtra</option>
                <option>Goa</option>
                <option>Gujrat</option>
                </select>
            </div>
            <div className="col-md-2">
                <label for="inputZip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip"/>
            </div>
            <div className="col-12">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" for="gridCheck">
                    Check me out
                </label>
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
                </form>
            </div>
            </div> 
        
    )
}

export default RegisterForm;