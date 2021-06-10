import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😂": "Face with Tears of Joy",
  "🤓": "Nerd Face"
};

/* 
  Converting keys of emojiDictionary into 
  an array. 
*/
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setmeaning] = useState("Please enter an input");

  function onChangeEventHandler(event) {
    var userInput = event.target.value;
    meaning = emojiDictionary[userInput];

    /* Condition for invalid input */
    if (meaning === undefined) {
      meaning = "Sorry I dont know !";
    }
    /* Condition for empty input */
    if (userInput === "") {
      meaning = "Please enter an input";
    }
    setmeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Inside Out!</h1>
      <input className="inputElement" onChange={onChangeEventHandler}></input>
      <h2>{meaning}</h2>
      <h3> Emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

/*
 * In react instead of class
 * we use className.
 *
 * Also to update a value
 * on the Dom, we use use state.
 * UseState()
 * returns an array that consists of
 * a variable and a method .
 * useState() is used for initializing
 * the value
 *
 * Writing something in one curly braces
 * means we are writing javascript
 *
 * What is map in js?
 * map is like a for loop in js
 *
 */
