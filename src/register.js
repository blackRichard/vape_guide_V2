import React, { useState } from 'react'
function Register() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    async function SignUP() {
        let item = { name, password, email }
        console.warn(item)
        let result = fetch("http://localhost:9000/api/register", {
            method: 'Post',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
    }
    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type="text" value={name} className="form-control" placeholder="name" onChange={(e) => setName(e.target.value)} />
            <br />
            <input type="password" value={password} className="form-control" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <input type="text" value={email} className="form-control" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <button className="btn btn-primary">Sign Up</button>
        </div>
    )
}
export default Register;