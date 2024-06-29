import React from 'react';
import images from '../assets/book.jpg';

const About = () => {
  return (
    <div className='mt-28 px-4 lg:px24'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 my-24'>
        <img src={images} alt="" className='w-full h-auto lg:w-full' />
        <div className='lg:w-1/2 flex items-center'>
          <h2>
            A user-friendly Online Bookstore project in which users can log in or register, view the available books, select books along with their quantity, and buy them. Users can also get payment receipts after successful payment. The project can also be used by the administrator, who can add new books, remove books, increase and decrease the quantity of books, change the price of the books as well as maintain the selling history of books.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
