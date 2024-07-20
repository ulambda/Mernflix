import React, { useState } from 'react'
import titleStore from 'store/title'

export default function RegisterPage() {

  const {setPageTitle} = titleStore();

  useState(() => {
      setPageTitle("Registor");
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = (event: React.FormEvent) => {
    event.preventDefault(); //prevent page from refreshing
    const account = {username,password}
    //hash the password in js

    const hashedPassword = password.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0)
    }, 0)

    alert (`${username} ${hashedPassword}`)


  }
  
  return <>
    <div>
        <h1>Register</h1>
        <form className="grid" onSubmit={createAccount}>
            <input type="text" placeholder="Username" value = {username}
              onChange = {(event) => setUsername(event.target.value)}
            />
            
            <input type="password" placeholder="Password" value = {password}
              onChange = {(event) => setPassword(event.target.value)}
            />
            <button>Register</button>
        </form>
    </div>
  </>
}
