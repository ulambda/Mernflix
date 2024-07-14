import React from 'react'

import BtnCSS from './Btn.module.css'


export default function SolidBtn(props: {children: React.ReactNode}) {

  return (
    <button className={BtnCSS.ClearBtn}>
        {props.children}
    </button>
  )
}
