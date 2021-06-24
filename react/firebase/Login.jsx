import React from 'react'
import {Redirect, Link} from "react-router-dom";
import Button from '../Button';
import Text from '../form/Text'
import firebase from 'firebase/app'
import 'firebase/auth'

export default function(props){
  const [redirect, setredirect] = React.useState(null)
  const [account, setaccount] = React.useState({
    email: '',
    password: ''
  })
  const changeMail = (e) => setaccount({email: e.target.value, password: account.password})
  const changePassword = (e) => setaccount({email: account.email, password: e.target.value})
  const submit = (e) => {
    e.preventDefault()
    try {
      firebase.auth().signInWithEmailAndPassword(account.email, account.password).then(() => {
        setredirect(true)
      })
    } catch(e) {
      console.error(e.message)
    }
  }
  const facebook = (e) => {
    e.preventDefault()
    let provider = new firebase.auth.FacebookAuthProvider()
		firebase.auth().signInWithPopup(provider).then(() => {
			setredirect(true)
		})
  }
  const google = (e) => {
    e.preventDefault()
    let provider = new firebase.auth.GoogleAuthProvider()
		firebase.auth().signInWithPopup(provider).then(() => {
			setredirect(true)
		})
  }
  if(redirect){
    return <Redirect to={props.redirect}/>
  }
  return(
    <div className="flex flex-wrap bg-white border p-4 shadow-md w-full sm:w-1/2 lg:w-1/3">
      <form onSubmit={submit} className="w-full">
        <h5 className="font-bold text-center text-xl md:text-2xl mb-4">{props.title}</h5>
        <div className="mt-2">
          <p className="text-gray-500 w-full mb-2 mt-2 text-sm sm:text-base">Email Account</p>
          <Text
            type="email"
            place="Email"
            keyUp={changeMail}
            required={true}
          />
        </div>
        <div className="mt-2">
          <p className="text-gray-500 w-full mb-2 mt-2 text-sm sm:text-base">Password Account</p>
          <Text
            type="password"
            place="Password"
            keyUp={changePassword}
            required={true}
            autoComplete={true}
          />
        </div>
        <div className="mt-2">
          <input type="checkbox" required=""/>
          <span className="ml-2">{props.aggre}</span>
        </div>
        <div className="flex">
          <Button
            className="mt-2 w-full"
            type="secondary"
            role="submit"
          >Submit</Button>
        </div>
        <div className="flex w-full justify-center space-x-3 mt-4">
          <div className="border-b mb-2 w-full"></div>
          <span className="font-medium">OR</span>
          <div className="border-b mb-2 w-full"></div>
        </div>
        {
          props.provider.map((data, key) => (
            <>
            {
              data === 'facebook' ?
              (
                <Button
                  className="mt-2 w-full font-medium"
                  size="sm"
                  type="primary"
                  role="button"
                  onClick={facebook}
                >Facebook</Button>
              ): false
            }
            {
              data === 'facebook' ?
              (
                <Button
                  className="mt-2 w-full font-medium"
                  size="sm"
                  type="secondary"
                  role="button"
                  onClick={google}
                >Google</Button>
              ): false
            }
            </>
          ))
        }
      </form>
      <p className="mt-2">Don't have a account ? <Link className="hover:underline" to="/register">Register</Link></p>
    </div>
  )
}