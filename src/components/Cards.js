import React from 'react'

import Card from './Card';

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id: 1,
        title: 'Consulting',
        image: image1,
        url: 'https://www.youtube.com',
        text: 'Consulting is defined as the practise of providing a third party with expertise on a matter in exchange for a fee. The service can involve either advisory or implementation services. For the consultant, taking an independent role.'
    },
    {
        id: 2,
        title: 'Coaching',
        image: image2,
        url: 'https://www.youtube.com',
        text: '‘Coaching’ is one of the essential leadership styles identified by Daniel Goleman (see our page on Leadership Styles for more and take our What Sort of Leader are You? self-assessment to find out how well-developed).'
    },
    {
        id: 3,
        title: 'Recruitment',
        image: image3,
        url: 'https://www.youtube.com',
        text: 'Recruitment refers to the process of identifying, attracting, interviewing, selecting, hiring and onboarding employees. In other words, it involves everything from the identification of a staffing need to filling it.'
    }
]

const Cards = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cards.map(card => (
                    <div className='col-md-4' key={card.id}>
                        <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards