//import React from 'react';
//import '../../App.css';

//export default function Services() {
  //return <h1 className='services'>Courses</h1>;
//}

import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
import img8 from './images/13.jpg';
import img6 from './images/7.jpg';
import img7 from './images/6.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Different Programs Offered in The College Of Technology</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              //src='images/img-9.jpg'
              src={img6}
              text='COMPUTER ENGINEERING'
              label='Adventure'
              path='/services'
            />
            <CardItem
              //src='images/img-9.jpg'
              src={img7}
              text='ELECTRICAL ENGINEERING'
              label='Adventure'
              path='/services'
            />
            <CardItem
              //src='images/img-2.jpg'
              src={img8}
              text='MECHANICAL ENGINEERING'
              label='Studies'
              path='/services'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;

