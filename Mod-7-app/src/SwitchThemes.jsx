import { MyThemeContext, themes } from "./context/MyThemeContext";
import { useContext } from "react";

function SwitchThemes() {
  const { theme, setTheme, darkMode } = useContext(MyThemeContext);

  const handleChangeThemes = () => {
    setTheme(darkMode ? themes.light : themes.dark);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={handleChangeThemes}
        />
        Change Themes
      </label>
    </div>
  );
}

export default SwitchThemes;
