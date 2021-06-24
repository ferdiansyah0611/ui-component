import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'
import {Redirect, Link} from "react-router-dom";
import Button from '../Button';
import Text from '../form/Text'
import File from '../form/File'

export default function(props){
  const [redirect, setredirect] = React.useState(null)
  const [img, setimg] = React.useState(null)
  const [imgDisplay, setimgDisplay] = React.useState(null)
  const [account, setaccount] = React.useState({
    username: '',
    email: '',
    password: ''
  })
  const changeUser = (e) => setaccount({username: e.target.value, email: account.email, password: account.password})
  const changeMail = (e) => setaccount({username: account.username, email: e.target.value, password: account.password})
  const changePassword = (e) => setaccount({username: account.username, email: account.email, password: e.target.value})
  const submit = (e) => {
    e.preventDefault()
    try {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
        firebase.storage().ref(`/images/${this.img.name}`).put(this.img).then(snapshot => {
          snapshot.ref.getDownloadURL().then(url => {
            firebase.auth().currentUser.updateProfile({
              displayName: this.name,
              photoURL: url
            }).then(() => {
              if(this.db){
                firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
                  id: firebase.auth().currentUser.uid,
                  name: firebase.auth().currentUser.displayName,
                  email: firebase.auth().currentUser.email,
                  photo: firebase.auth().currentUser.photoURL,
                }).then(() => {
                  setredirect(true)
                })
              }else{
                setredirect(true)
              }
            })
          })
        })
      })
    } catch(e) {
      console.error(e.message)
    }
  }
  return(
    <>
    <div className="flex justify-center w-full">
      <div className="w-4/5 sm:w-1/2 md:w-2/5 bg-white p-4 shadow-md border">
        <h5 className="text-center font-medium text-xl">Register App</h5>
        <form onSubmit={submit}>
          <div className="mt-2">
            {
              imgDisplay ?
              (
                <img src={imgDisplay} alt="avatar" className="w-full"/>
              ): ''
            }
          </div>
          <div className="mt-2">
            <p className="text-gray-500">Username</p>
            <Text
              type="text"
              place="Username"
              keyUp={changeUser}
              required={true}
            />
          </div>
          <div className="mt-2">
            <p className="text-gray-500">Email Account</p>
            <Text
              type="email"
              place="Email"
              keyUp={changeMail}
              required={true}
            />
          </div>
          <div className="mt-2">
            <p className="text-gray-500">Password Account</p>
            <Text
              type="password"
              place="Password"
              keyUp={changePassword}
              required={true}
              autoComplete={true}
            />
          </div>
          <div className="mt-2">
            <div className="flex w-full">
              <File
                multiple={false}
                accept="image/*"
                change={e => {
                  setimg(e[0])
                  setimgDisplay(URL.createObjectURL(img))
                  }
                }
              />
            </div>
          </div>
          <div className="mt-2">
            <input className="bg-white" type="checkbox" required=""/>
            <span className="ml-2">{props.aggre}</span>
          </div>
          <Button
            className="mt-2 w-full"
            size="sm"
            type="primary"
            role="submit"
          >Submit</Button>
        </form>
        <p className="mt-2">Have a account ? <Link className="hover:underline" to="/login">Login</Link></p>
      </div>
    </div>
    </>
  )
}