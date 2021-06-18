//import React from 'react';
//import '../../App.css';

//export default function Products() {
  //return <h1 className='products'>About</h1>;
//}

import React from 'react';
import Footer from '../Footer';
import '../Cards.css';
import CardItem from '../CardItem';
import img9 from './images/9.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>THE EVOLUTION OF THE COLLEGE OF TECHNOLOGY</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              //src='images/img-9.jpg'
              src={img9}
              text='A Brief Overview Of What You Have To Know About The College'
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
            <>
            <Footer />
          </>
    </div>
  );
}

export default Cards;
