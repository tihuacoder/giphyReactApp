import React from 'react'
// import PropTypes from 'prop-types'

const GifGridItem = ({id, title, url}) => {
  return (
    <div className='card animate__animated animate__bounce animate__fadeIn'>
        <img src={url} alt={title}></img>
        <p>{title}</p>

    </div>
  )
}

// GifGridItem.propTypes = {}

export default GifGridItem