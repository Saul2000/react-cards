import React from 'react'
import PropTypes from 'prop-types' 

import './cards.css'

const Card = ({title, imageSource, text, url}) => {
  // console.log(props);
  return (
    <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
      <div className='overflow'>
        <img src={imageSource} alt='card-img' className='card-img-top'/>  
      </div>
      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
          {
            text ? text : 'Mejora las habilidades y conocimiento de tu personal. Obten toda la información para poner en marcha tu negocio. Cumplir metas y desarrollar habilidades específicas.'
          }
        </p>
        <a href={url} className='btn btn-outline-secondary rounded-0' target="_blank" rel='noreferrer'> Go to this website </a>
      </div>
    </div>
  )
}

Card.propTypes = {
  title : PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default Card