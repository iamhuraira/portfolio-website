import React from 'react'

const Tile = ({title, mediumTitle, desc}) => {
  return (
    <div style={{
        background:'#ffff',
        padding:'20px',
        width:'360px',
        marginBottom: "15px"
    }}>
        <p className='primaryColor font-16 uppercase  bold-500'>{title}</p>
        <p className='textColor font-14 mtb-10 bold-600 uppercase '>{mediumTitle}</p>
        <p className='grey font-12 '>{desc}</p>
    </div>
  )
}

export default Tile