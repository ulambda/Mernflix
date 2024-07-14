import React from 'react'

import BtnCSS from './Btn.module.css'



export default function CircleIconBtn(props : {
  icon: { icon: any; };children: React.ReactNode
}) {

  const { icon } = props.icon ;

  return (
    <button className={BtnCSS.button}>
        <span className="material-symbols-outlined">{icon}</span>
    </button>
  )
}
