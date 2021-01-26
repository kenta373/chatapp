import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    // 各人の認証情報を記述
    apiKey: "AIzaSyD44PETzId0XymQpFK3QlX3vxr1XK8iI6U",
    authDomain: "chat-app-98439.firebaseapp.com",
    projectId: "chat-app-98439",
    storageBucket: "chat-app-98439.appspot.com",
    messagingSenderId: "296756200377",
    appId: "1:296756200377:web:cc1f8a45a411d8fb982c68",
    measurementId: "G-1W4P9ZTKKD"
}

firebase.initializeApp(firebaseConfig)

export default firebase