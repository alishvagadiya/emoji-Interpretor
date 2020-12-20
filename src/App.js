import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😂": "Face with Tears of Joy",
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "😭": "Loudly Crying Face",
  "😊": "Smiling Face with Smiling Eyes",
  "💕": "Two Hearts",
  "👌": "Ok Hand",
  "😒": "Unamused Face",
  "😏": "Smirking Face",
  "🎶": "Musical Notes",
  "😉": "Winking Face",
  "☺️": "Smiling Face",
  "🙈": "See-No-Evil Monkey",
  "✌️": "Victory Hand",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "💖": "Sparkling Heart",
  "👍": "Thumbs Up",
  "😩": "Weary Face",
  "🙏": "Folded Hands",
  "😎": "Smiling Face with Sunglasses",
  "😁": "Beaming Face with Smiling Eyes",
  "💯": "Hundred Points",
  "💔": "Broken Heart",
  "💓": "Beating Heart",
  "😃": "Grinning Face with Big Eyes",
  "💚": "Green Heart",
  "♻️": "Recycling Symbol",
  "😆": "Grinning Squinting Face",
  "☃️": "Snowman",
  "👑": "Crown",
  "🔫": "Pistol",
  "👈": "Backhand Index Pointing Left",
  "😫": "Tired Face",
  "😻": "Smiling Cat Face with Heart-Eyes",
  "😚": "Kissing Face with Closed Eyes",
  "♣️": "Club Suit",
  "🎥": "Movie Camera",
  "⚓": "Anchor",
  "😀": "Grinning Face",
  "😤": "Face with Steam from Nose",
  "🕷️": "Spider"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [output, setoutput] = useState("");

  function changeHandler(event) {
    var input = event.target.value;
    var output = emojiDictionary[input];
    if (input === "") {
      output = "";
    }
    if (output === undefined) {
      output = "we dont have this emoji in our database";
    }
    setoutput(output);
  }

  function emojiClickHandler(emoji) {
    var output = emojiDictionary[emoji];
    setoutput(output);
  }

  return (
    <div className="App">
      <h1>Know emojis!</h1>
      <input
        placeholder="Enter emoji here"
        type="text"
        onChange={changeHandler}
      ></input>
      <div className="outputDiv container">
        <h1 id="op">{output}</h1>
      </div>
      <div className="container margingTop">
        <h3>emoji we know</h3>
        {emojiWeKnow.map((emoji) => {
          return (
            <a href="#op" key={emoji} onClick={() => emojiClickHandler(emoji)}>
              {emoji}
            </a>
          );
        })}
      </div>
    </div>
  );
}
