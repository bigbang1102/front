import axios from 'axios'
import { useState } from "react";
import { Link } from 'react-router-dom'

export default function RegisterForm() {
    const [input, setInput] = useState({
        username: '',
        password: '',
        confirmPassword: '',

    })
    const hdlChange = e => {
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const hdlSubmit = async e => {
        try {
            e.preventDefault()
            // validation
            if (input.password !== input.confirmPassword) {
                return alert('Please check confirm password')
            }
            const rs = await axios.post('http://localhost:8889/auth/register', input)
            console.log(rs)
            if (rs.status === 200) {
                alert('Register Successful')
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <div className="p-5 border w-4/6 min-w-[500px] mx-auto rounded mt-5 ">
            <div className="text-3xl mb-5">Register Form</div>
            <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">name</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        name="name"
                        value={input.name}
                        onChange={hdlChange}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">lname</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        name="lname"
                        value={input.lname}
                        onChange={hdlChange}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">username</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        name="username"
                        value={input.username}
                        onChange={hdlChange}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">password</span>
                    </div>
                    <input
                        type="password"
                        className="input input-bordered w-full max-w-xs"
                        name="password"
                        value={input.password}
                        onChange={hdlChange}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">confirmPassword</span>
                    </div>
                    <input
                        type="password"
                        className="input input-bordered w-full max-w-xs"
                        name="confirmPassword"
                        value={input.confirmPassword}
                        onChange={hdlChange}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">E-mail</span>
                    </div>
                    <input
                        type="email"
                        className="input input-bordered w-full max-w-xs"
                        name="email"
                        value={input.email}
                        onChange={hdlChange}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">address</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        name="address"
                        value={input.address}
                        onChange={hdlChange}
                    />
                </label>
                <div className="flex gap-5 ">
                    <button type="submit" className="btn btn-outline btn-info mt-7">Submit</button>
                    <button type="reset" className="btn btn-outline btn-warning mt-7">Reset</button>
                    <Link className='btn btn-outline btn-warning mt-7' to="/">เข้าสู่ระบบ</Link>
                </div>
            </form>
        </div >
    );
}
