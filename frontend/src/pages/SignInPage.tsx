import React, { useState } from 'react'
import titleStore from 'store/title'


export default function SignInPage() {
    const {setPageTitle} = titleStore();

    useState(() => {
        setPageTitle("Sign In");
    });

  return <>
    <div>
        <h1>Sign In</h1>
        <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In </button>
        </form>
    </div>
  </>
}
