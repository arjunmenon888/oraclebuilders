import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Build your dream home.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/budget-house.jpg'
              text='There is nothing more important than a good, safe, secure home.'
              label='Budget'
              path='/services'
            />
            <CardItem
              src='images/classic-house.jpg'
              text='There is nothing like staying at home for real comfort.'
              label='Classic'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/modern-house.jpg'
              text='Home is where we should feel secure and comfortable.'
              label='Modern'
              path='/services'
            />
            <CardItem
              src='images/luxury-house.jpg'
              text='The ultimate luxury is being able to relax and enjoy your home'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='images/modern-house2.jpg'
              text='Home isn’t a place, its a feeling.'
              label='Modern'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;