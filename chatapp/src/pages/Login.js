import React, { useContext, useState } from 'react'
import firebase from '../config/firebase'
import { AuthContext } from '../AuthService'
import { Redirect } from 'react-router-dom'



function Login({ history }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const user = useContext(AuthContext)


    if (user) { //既にログインしている場合にそのままルームにリダイレクトする処理
        return <Redirect to='/' />
    }
    const handleSubmit = e => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/") //リダイレクトされる（履歴が残らない）
            })
            .catch(error => {
                console.log(error)
                return (
                    <p>ログインできませんでした。</p>
                )


            })

    }
    //error文を表示させる
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={e => { setEmail(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='email'
                        placeholder='password'
                        onChange={e => { setPassword(e.target.value) }} />
                </div>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login