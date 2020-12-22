import React, {useState} from 'react';
import axios from 'axios'

const Register : React.FC = () => {

    const [userRegister, setUserRegister] = useState({
        email:'',
        password: ''
    })


    const HandleInfoChange = (e:any) => {
        console.log(e.target.name)
        const {name, value} = e.target;

        setUserRegister(prevState => {
            return {
                ...prevState,
                [name] : value
            }
        })
    }


    const HandleSubmit = (e:any) => {

        e.preventDefault()

        setUserRegister(userRegister)

        const register_info = {
            email : userRegister.email,
            password : userRegister.password
        }

        // console.log(register_info)

        const url = 'http://localhost:5000/user/register'
        axios.post(url, register_info)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))

    }



    return (
        <div id='Register'>
            <form onSubmit={HandleSubmit}>
                <div className="form-floating mb-3">
                    <input type="email" name="email" className="form-control" onChange={HandleInfoChange} value={userRegister.email} id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" name="password" className="form-control" onChange={HandleInfoChange} value={userRegister.password} id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Register;