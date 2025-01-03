import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <main>
      <div className='title'>
        <h2>Our Tours</h2>
      </div>
      <div className='title-underline'></div>
      <div className='tours'>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </main>
  );
};

export default Tours;
