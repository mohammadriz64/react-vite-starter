import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addNewCard } from '../../features/card/cardSlice';
import './card.scss';

export const UserCard = () => {
  const { data: cardData } = useSelector(state => state.cardReducer);
  const dispatch = useDispatch();
  console.log("card", cardData);

  const handleAddCard = () => {
    const card = {
      name: "JavaScript",
      age: 29,
      gender: "Language",
    };
    dispatch(addNewCard(card))
  }
  return (
    <section className='card-header'>
      {
        cardData.length > 0 ? cardData.map((card) => (
          <div className='card-body'>
            <span className='label'>Name : <span className='value1'>{card.name} </span> </span>
            <span className='label'>Age : <span className='value2'>{card.age}</span> </span>
            <span className='label'>Gender : <span className='value3'>{card.gender}</span> </span>
            <button className='add-card' onClick={handleAddCard}>Add new Card</button>
          </div>
        )) : null
      }
    </section>
  )
}
