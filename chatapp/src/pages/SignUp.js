import React, { useState } from 'react'
import firebase from '../config/firebase'

const SignUp = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [name, setname] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {//登録成功したらthenの処理が行われる
                console.log(name)//user登録されて
                user.updateProfile({
                    displayName: name
                })

            })
            .catch(error => {//errorが起きた時の処理
                console.log(error)
            })



    }
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        name='email'
                        type='email'
                        id='email'
                        placeholder='Email'
                        onChange={e => { setemail(e.target.value) }}
                    />
                </div>
                <div>
                    <label htmlFor='name'>name</label>
                    <input
                        name='name'
                        type='name'
                        id='name'
                        placeholder='name'
                        onChange={e => { setname(e.target.value) }}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        name='password'
                        type='password'
                        id='password'
                        placeholder='Password'
                        onChange={e => { setpassword(e.target.value) }}
                    />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
