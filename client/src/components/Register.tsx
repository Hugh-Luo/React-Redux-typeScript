import React, {useState} from 'react';
import axios from 'axios'

const Register : React.FC = () => {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')


    const HandleEmailChange = (e:any) => {
        // console.log(e.target.value)
        const updateEmail = e.target.value;
        setEmail(updateEmail)
    }

    const HandlePasswordChange = (e:any) => {
        // console.log(e.target.value)
        const updatePassword = e.target.value;
        setPassword(updatePassword)
    }

    const HandleSubmit = (e:any) => {

        e.preventDefault()
        setEmail(email)
        setPassword(password)

        const register_info = {
            email : email,
            password : password
        }

        // console.log(register_info)

        const url = 'http://localhost:5000/user/register'
        axios.post(url, register_info)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))

        setEmail('')
        setPassword('')
    }



    return (
        <div id='Register'>
            <form onSubmit={HandleSubmit}>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" onChange={HandleEmailChange} value={email} id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" onChange={HandlePasswordChange} value={password} id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Register;