import React from 'react'
import PropTypes from 'prop-types';

export const Iconos = ({type}) => {
  const returnIcon = {
    loading: () => { return (
      <div className='icon' aria-label='loading'>
        <i className="fa-spin fa-solid fa-circle-notch"></i>
      </div>
    ) 
    },
    notFound: () => {
      return (
        <>
          <i className="fa-regular fa-circle-xmark"></i>
        </>
      )
    }, 
    empty: () => {
      return (
        <div className='icon' aria-label='empty'>
          <i className="fa-regular fa-images"></i>
          <p>No hay gifs aqui :0</p>
        </div>
      )
    }
  }

  return (
    <>
      {returnIcon[type]()}
    </>
  )
  
};

Iconos.propTypes = {
  type: PropTypes.string.isRequired
};