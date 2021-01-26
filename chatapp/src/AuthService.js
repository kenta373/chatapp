//app.juで作ったものをほかのjsにバケツ方式で渡していたが、
//リスクがあるため、それをしないで済むやり方 
import React, { useEffect, useState } from 'react'
import firebase from './config/firebase'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)//これは副作用
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user)//setuserに入れたものがデータにセットされる

        })
    }, [])//[]の中に何が変わったら実行したいかを書く、user,passwordなど
    //何も書いてないと初回のみ実行される
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )//childrenはappjsのh1以下の文
}
export {
    AuthProvider,
    AuthContext

}
//副作用とはdomの手動で変更するもののこと
//useeffect　レンダー後に何かの処理をしないといけない、ということをreactに伝える
//これを使わないとうまく処理が行かなくなる