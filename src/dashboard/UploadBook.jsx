import React, { useState } from 'react'

import {  Textarea } from "flowbite-react";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
const UploadBook = () => {
  const bookCategories =[
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibligraphy",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir","Business",
    "Children Books",
    "Travel","Religion",
    "Art and Design"

  ]
  const [selectedBookCategory,setSelectedBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectedValue = (event)=>{
    setSelectedBookCategory(event.target.value);
  }
  const handleBooksSubmit=(event)=>{
    event.preventDefault();
    const form =event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
  
  const bookObj={
    bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
  }
  console.log(bookObj)
  fetch("https://mern-bookproject-backend.onrender.com/uploaded-book",{
    method:"POST",
    header:{
      "Content-type":"application/json",

    },
    body:JSON.stringify(bookObj)
  }).then(res=>res().json()).then(data=>{
    alert("Book uploaded successfully!")
    form.reset();
  })
}
  return (
    <div className='px-4 my-12'>
   <h2 className='mb-8 text-3xl font-bold'>Upload A book</h2>
     
     <form onSubmit={handleBooksSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" 
       name='bookTitle' type="text" placeholder="Book Name" required />
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" 
       name='authorName' type="text" placeholder="Author Name" required />
      </div>
    
      </div>
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="image URL" />
        </div>
        <TextInput id="imageURL" 
       name='imageURL' type="text" placeholder="Book image URL" required />
     
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Categories" />
        </div>
        <select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
 {
  bookCategories.map((option)=><option key={option} value={option}>{option}</option>)
 }
        </select>
      </div>

  </div>
  <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription"
        name='bookDescription'  placeholder="Leave a comment..." required rows={4} />
       
      </div>
      <div>
     
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" type="text" placeholder="book pdf url" required />
      </div>
{/*     
      <Button type="submit" className='mt-5'>Upload Book</Button> */}
      <Button type="submit" className=' bg-blue-700 text-center flex justify-center items-center h-10'>Upload Book</Button>


    </form>

    </div>
  )
}

export default UploadBook