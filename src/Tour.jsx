import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [show, setShow] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {show ? info : `${info.substring(0, 120)}`}...
          <button className='info-btn' onClick={() => setShow(!show)}>
            {show ? "Show Less" : "Show More"}
          </button>
        </p>
        <button
          className=' btn btn-block delete-btn'
          type='button'
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
