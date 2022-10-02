import React from 'react'
import Speaker from './Speaker';
import "../styles/boxContainer.css"

export default function Box() {
  return (
    <div className="box-container">
      <span className="box-heading">Box 1</span>
      <div className="box-sub-container">
        <Speaker
          name="Speaker 1"
          time="09:45"
          text="There are many variations of Lorem Ipsum but the majority have suffered alteration. There are many variationpassages of Lorem Ipsum available, but the majority have salteration in some form, by injected humour, or randomised wowhich don't look even slightly believable. If you are going to use a passage."
          image="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        />
        <Speaker
          name="Speaker 2"
          time="06:35"
          text="There are many variations of Lorem Ipsum but the majority have suffered alteration. There are many variationpassages of Lorem Ipsum available, but the majority have salteration in some form, by injected humour, or randomised wowhich don't look even slightly believable. If you are going to use a passage."
          image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <Speaker
          name="Speaker 3"
          time="04:30"
          text="There are many variations of Lorem Ipsum but the majority have suffered alteration. There are many variationpassages of Lorem Ipsum available, but the majority have salteration in some form, by injected humour, or randomised wowhich don't look even slightly believable. If you are going to use a passage."
          image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </div>
    </div>
  );
}
