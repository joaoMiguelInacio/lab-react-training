import { useState } from 'react';

function LikeButton() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [likes1, addLikes1] = useState(0);
  const [color1, changeColorState1] = useState(colors[0]);
  const [likes2, addLikes2] = useState(0);
  const [color2, changeColorState2] = useState(colors[0]);
  const [textcolor1, changeTextColor1] = useState('white');
  const [textcolor2, changeTextColor2] = useState('white');

  /* The 2 functions bellow look exactly the same. They should be turned into only 1, dynamic. */
  function changeColor1Function() {
    changeTextColor1('white');
    const toRemove = colors.indexOf(color1);
    colors.splice(toRemove, 1);
    let randomNumber = Math.floor(Math.random() * colors.length);
    changeColorState1(colors[randomNumber]);
    if (colors[randomNumber] === 'yellow') {
      changeTextColor1('red');
    }
  }
  function changeColor2Function() {
    changeTextColor1('white');
    const toRemove = colors.indexOf(color2);
    colors.splice(toRemove, 1);
    let randomNumber = Math.floor(Math.random() * colors.length);
    changeColorState2(colors[randomNumber]);
    if (colors[randomNumber] === 'yellow') {
      changeTextColor2('red');
    }
  }
  return (
    <div>
      <button
        style={{ backgroundColor: color1, color: textcolor1, fontSize: 30, width: 200, }}
        onClick={() => [addLikes1(likes1 + 1), changeColor1Function()]}
      >
        {likes1} Likes
      </button>
      <button
        style={{ backgroundColor: color2, color: textcolor2, fontSize: 30, width: 200, }}
        onClick={() => [addLikes2(likes2 + 1), changeColor2Function()]}
      >
        {likes2} Likes
      </button>
    </div>
  );
}

export default LikeButton;
