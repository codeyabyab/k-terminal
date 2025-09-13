import Themes from "../../../themes.json";

const helpText = `Usage: theme [arg]
Args:
  - ls: list all themes
  - set: set a theme

Example:
  theme ls       # to list all themes
  theme set Gruvbox # to set a theme`;

export const theme = async (args = [], setTheme) => {
  if (args.length === 0) {
    return helpText;
  }

  switch (args[0].toLowerCase()) {
    case "ls": {
      
      const themeNames = Themes.map((t) => t.name).join(", ");
      console.log(themeNames); 

      return `Available themes:\n${themeNames}`;
    }

    case "set": {
      const selectedTheme = args[1];
      if (!selectedTheme) {
        return "Please provide a theme name. Example: theme set Gruvbox";
      }

      if (typeof setTheme !== "function") {
        return "Theme function not available!";
      }

      const resultMessage = setTheme(selectedTheme);
      return <pre>{resultMessage}</pre>;
    }

    default:
      return helpText;
  }
};
