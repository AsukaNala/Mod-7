import { createContext, useContext, useState } from "react";

export const EmojiContext = createContext();

export function EmojiProvider(props) {
  const [emoji, setEmoji] = useState("😀");

  const handleEmoji = () => {
    let newEmoji = "😀";
    if (emoji === "😀") newEmoji = "🌜";
    else if (emoji === "🌜") newEmoji = "🎃";

    setEmoji(newEmoji);
  };

  return (
    <EmojiContext.Provider value={{ emoji, handleEmoji }}>
      {props.children}
    </EmojiContext.Provider>
  );
}
