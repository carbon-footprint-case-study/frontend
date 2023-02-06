import React from 'react'
// import { Margin } from '@mui/icons-material'
// import { margin } from '@mui/system'
// import { alignPropType } from 'react-bootstrap/esm/types'


function InfoLayout(props) {
    const image = props.image
    const title = props.title
    const subTitle = props.subTitle
    const para = props.para
  return (
    <>
    <img src = {image} className = "info-card" />
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
    <p>{para}</p>
    </>
  )
}

export default InfoLayout