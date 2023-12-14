import { EmojiContext } from "./EmojiContext";
import { useContext } from "react";

function Emoji() {
  const { emoji, handleEmoji } = useContext(EmojiContext);

  return (
    <div className="componentBox">
      <button value={emoji} onClick={handleEmoji}>
        What's your mood?
      </button>
      <div>{emoji}</div>
    </div>
  );
}

export default Emoji;
