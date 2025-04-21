import { useState } from "react";

const LoginForm=()=>{
    
    const[formData, setFormData] = useState({
        uemail: '',
        upass: '',
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
        let storeduemail = localStorage.getItem('uemail')
        let storedupass = localStorage.getItem('upass')
        console.log(storeduemail, storedupass)
        
        if(!formData.uemail) newErrors.uemail = 'Email is required :('
        if(formData.uemail !== storeduemail) newErrors.uemail = "Email is incorrect :("
        if(!formData.upass) newErrors.upass = 'Password is required :('
        if(formData.upass !== storedupass) newErrors.upass = 'Password is incorrect ('
        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors=validate()
        setErrors(validateErrors);
        if(Object.keys(validateErrors).length ===0){
            console.log(formData.uemail, formData.upass);
            
            setSuccessMsg("LogIN done successfully ♥")
        }
        else{
            setSuccessMsg("LogIN failed :(")
        }
    }

    return(
        <div className="container d-flex justify-content-center">
        <div className="row">
            <h2 className="text-center">Register Form</h2>
        
        <form className="row g-3" onSubmit={handleSubmit}>

            {successMsg && <h3><mark>{successMsg}</mark></h3>}
            
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
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" for="gridCheck">
                    Check me out
                </label>
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">LOG-IN</button>
            </div>
                </form>
            </div>
            </div> 
        
    )
}

export default LoginForm;