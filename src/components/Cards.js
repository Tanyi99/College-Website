import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img from '../images/A1.jpg';
import img2 from '../images/A2.jpg';
import img3 from '../images/A3.jpg';
import img4 from '../images/8.jpg';
import img5 from '../images/11.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Course Programs!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              //src='images/img-9.jpg'
              src={img4}
              text='Explore the College of Technology'
              label='Adventure'
              path='/services'
            />
            <CardItem
              //src='images/img-2.jpg'
              src={img5}
              text='Explore the Pride COTECHSA'
              label='Activities'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img}
              text='Dr Sone M. Ekonde'
              label='Director'
              path='/services'
            />
            <CardItem
                src={img2}
              text='Dr Tchapga Tchito'
              label='HOD Internship'
              path='/services'
            />
            <CardItem
              src={img3}
              text='Dr Feudjou'
              label='HOD Electrical'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
