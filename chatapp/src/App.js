import React from 'react'
import Room from './pages/Room'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { AuthProvider } from './AuthService'
import LoggedinRoute from './pages/LoggedinRoute'
//http:/localhost:ポート番号/ roomコンポーネント
//http:/localhost:ポート番号/login loginコンポーネント
//http:/localhost:ポート番号/ Signupコンポーネント

const App = () => {
    return (
        <>
            <AuthProvider>
                <h1>chat app</h1>
                <Router>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={SignUp} />
                        <LoggedinRoute exact path="/" component={Room} />
                    </Switch>
                </Router>
            </AuthProvider>
        </>
    )
}//h1からが子要素（children）
export default App
