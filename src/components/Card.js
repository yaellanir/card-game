import React, {useState} from 'react';
import './Card.css';

const Card = ({backImg}) => {
  const [cardFlipped, setCardFlipped] = useState(false);
  const flipCard = () => {
    setCardFlipped(prev => !prev);
  };

  return ( 
  <div className='card' onClick={flipCard}>
    {cardFlipped && <img src="https://images.unsplash.com/photo-1668881233694-1825a663b2a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="Front Img" />}
    {!cardFlipped && <img src={backImg} alt="Back Img" />}
  </div>
);
}
 
export default Card;