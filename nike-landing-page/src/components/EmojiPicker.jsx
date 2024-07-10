import React, { useState } from 'react'

function EmojiPicker({arr}) {

    const list = arr
    const [selectedEmoji, setSelectedEmoji] = useState('');
    // const [arr, setArr] = useState('');

    function pickedEmoji(emo){
        setSelectedEmoji(emo)
    }

  return (
    <div>
    {list.map((val, index)=> <span key={index} onClick={()=> pickedEmoji(val)}>{val}</span>)}
    <h2>Selected emoji : {selectedEmoji} </h2>
    </div>
  )
}

export default EmojiPicker