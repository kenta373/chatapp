import React, { useContext, useEffect, useState } from 'react'
import firebase from '../config/firebase'
import 'firebase/firestore'
import { AuthContext } from '../AuthService'
import List from '../List'

const Room = () => {

    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')
    const user = useContext(AuthContext)

    //messagesの配列にfirebaseのオブジェクトを入れる
    //map関数を使って<li><span>user001</span><li>にいい感じに表示
    const handleSubmit = (e) => {
        e.preventDefalut() //再読み込みを止める
        if (value.trim() === '') { //空のメッセージの場合
            return
        } else {
            firebase.firestore().collection('messages').add({
                content: value,
                user: user.displayName,
                created: firebase.firestore.FieldValue.serverTimestamp()
                //メッセージを時系列にする
            })
        } //user:メッセージのように表示される
        setValue('') //送信したら空にする
    }


    //orderby（並び替えの指定）降順:desc 昇順:asc
    useEffect(() => {
        firebase.firestore().collection('messages').orderBy('created')//順番を指定
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map(doc => { return { data: doc.data(), id: doc.id } }))

            })
    }, [])


    return (
        <>
            <h2>Room</h2>
            <ul>
                {
                    messages.map(message => { //messageにオブジェクトを入れている
                        console.log()
                        return (
                            //<li key={message.id}>
                            //{message.data.user} : {message.data.content}
                            //</li>//入れたものを表示
                            <List key={message.id} name={message.data.user} content={message.data.content} />
                        )
                    })
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <textarea value={value} onChange={(e) => setValue(e.target.value)} ></textarea>
                <button type="submit">送信</button>
            </form>


            <button onClick={() => { firebase.auth().signOut() }}>Logout</button>


        </>
    )
}
export default Room