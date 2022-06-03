import React from 'react'
import {colors} from '../../style';

function Button(props) {
  return (
    <a href="#"
    style={{
        boxSizing: 'border-box',
        padding: '10px 20px',
        background: props.inverse ? 'transparent' : colors.primaryColor,
        color: props.inverse ? colors.primaryColor: '#ffff',
        display:'inline-block',
        textDecoration:'none',
        borderRadius:'20px',
        boxShadow: props.inverse ? 'none' : '0 0 10px 0 #6dba6d',
        border:'1px solid',
        borderColor: props.inverse? colors.primaryColor: 'transparent',
        fontSize:'12px',
        letterSpacing:'1px',
    }}
    >
    {props.label}
    </a>
  )
}

export default Button