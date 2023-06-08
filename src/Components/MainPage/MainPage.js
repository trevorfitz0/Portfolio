import React from 'react'
import './MainPage.css'
import Header from '../Header/Header'

function MainPage() {

  return (
    <div className='main'>
        <Header/>
        <div className='title-area'>
            <ul className='title'>
                <b className='t'>T</b>
                <b className='r'>R</b>
                <b className='e'>E</b>
                <b className='v'>V</b>
                <b className='o'>O</b>
                <b className='r2'>R</b>
            </ul>
        </div>
    </div>
  )
}

export default MainPage