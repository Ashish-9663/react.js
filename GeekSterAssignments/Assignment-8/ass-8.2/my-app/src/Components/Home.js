import React from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import "./All.css";

export default function Home() {

  const isLight = useSelector((state) => state.isLight)
  return (
    <div >
      <Navbar/>
    <div className={isLight?'light':'dark'}>
    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nam exercitationem magnam temporibus pariatur voluptates repudiandae voluptatum maxime consequuntur, earum voluptas eligendi quod esse. Aut quasi corporis eligendi inventore deleniti! Cum ullam reiciendis nam, dignissimos distinctio, odit quidem, ex similique nulla delectus provident libero laudantium ducimus est quos earum esse! Eaque, quia ipsam? Fuga id est, minus dolores, libero sapiente a ipsa voluptatum amet ipsam quis, quidem illo in odit velit accusantium. Ut nisi odio perferendis quisquam ea illum perspiciatis.</p>
    </div>
    </div>
    
  )
}
