import React, { useState } from "react";
import '../CSS/signup.css';
import logo from '../img/logo.png';

const Register = (props) => {
    const [NumriPersonal, setNumriPersonal] = useState('');
    const [pass, setPass] = useState('');
    const [konfirmofjalkalimin, setKonfirmofjalkalimin] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
/*test*/
    return (
        <div className="form">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="auth-form-container">
                <h2>Regjistrohuni!</h2>
                    <form className="register-form" onSubmit={handleSubmit}>
                
                        <label htmlFor="NumriPersonal">NumriPersonal</label>
                        <input value={NumriPersonal} onChange={(e) => setNumriPersonal(e.target.value)}type="NumriPersonal" placeholder="NumriPersonal" id="NumriPersonal" name="NumriPersonal" />
                        <label htmlFor="Fjalkalimi">Fjalkalimi</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="Fjalkalimi" placeholder="********" id="Fjalkalimi" name="Fjalkalimi" />
                        <label htmlFor="name">Konfirmo Passwordin</label>
                        <input value={konfirmofjalkalimin} name="konfirmofjalkalimin" onChange={(e) => setKonfirmofjalkalimin(e.target.value)} id="konfirmofjalkalimin" placeholder="********" />
                        <button type="submit">Regjistohu</button>
                    </form>
                    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Nëse keni një llogari vazhdoni këtu.</button>
            </div>
        </div>
    )
}

export default Register;
  
