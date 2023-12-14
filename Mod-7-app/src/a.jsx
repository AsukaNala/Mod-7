//to use this context in a component, first employ useContext hook
const { theme, darkMode } = useContext(MyThemeContext);

//then use the theme object for inline styling
<>
  <div
    className="LoginfForm2 componentVBox"
    style={{ background: theme.background, color: theme.foreground }}
  ></div>
  //or the boolean to create a CSS class
  <div className={darkMode ? "dark" : "light"}></div>
</>;
