import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../AuthService'

const LoggedinRoute = ({ component: Component, ...rest }) => {
    const user = useContext(AuthContext)
    return (
        //ログインしていたら、受け取ったコンポーネントを表示
        <Route
            {...rest}
            render={props => (
                user ?
                    (
                        <Component {...props} />
                    ) : (
                        <Redirect to={'/Login'} />
                    )
            )}
        />
        //ログインして居なければ、ログインページへリダイレクトさせる
    )
}

export default LoggedinRoute