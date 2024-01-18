import React, { useState } from 'react';

const UserForm = (props) => {
    const [F_name, setF_name] = useState("");
    const [L_name, setL_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    return (
        <form>
            <div>
                <label>f_name: </label>
                <input type="text" onChange={(e) => setF_name(e.target.value)} />
                {F_name.length >= 2 ? "" : <p style={{backgroundColor: "red"}} >First name should be at least 2 characters long</p>}
            </div>
            <div>
                <label>l_name: </label>
                <input type="text" onChange={(e) => setL_name(e.target.value)} />
                {L_name.length >= 2 ? "" : <p style={{backgroundColor: "red"}}>last name should be at least 2 characters long</p>}
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                {email.length >= 2 ? "" : <p style={{backgroundColor: "red"}}>Email should be at least 2 characters long</p>}
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
                {password.length >= 8 ? "" : <p style={{backgroundColor: "red"}}>Password should be at least 8 characters long</p>}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                {ConfirmPassword === password ? "" : <p style={{backgroundColor: "red"}}>Confirm Password should be at least 8 characters long</p>}
            </div>
            <div>
                <p>form data</p>
                <p>
                    First Name
                    {JSON.stringify(F_name)}
                </p>
                <p>
                    Last Name
                    {JSON.stringify(L_name)}
                </p>
                <p>
                    Email
                    {JSON.stringify(email)}
                </p>
                <p>
                    Password
                    {JSON.stringify(password)}
                </p>
                <p>
                    Confrim Password
                    {JSON.stringify(ConfirmPassword)}
                </p>
            </div>
        </form>

    );
};

export default UserForm;
