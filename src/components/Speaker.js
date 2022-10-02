import React, {useState} from 'react'
import { Editable, withReact, Slate } from "slate-react";
import { createEditor } from "slate";
import "../styles/speaker.css"

export default function Speaker(props) {
  
  const initialValue = [
    {
      type: "paragraph",
      children: [{text: props.text}],
    },
  ];
  
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <div className="sp-container">
      <div className="sp-head">
        <img src={props.image} alt="speaker" className="sp-img" />
        <span className="sp-name">{props.name}</span>
        <span className="sp-time">{props.time}</span>
      </div>
      <div className="sp-text-container">
        <Slate
          editor={editor}
          value={initialValue}
        >
          <Editable />
        </Slate>
      </div>
    </div>
  );
}
