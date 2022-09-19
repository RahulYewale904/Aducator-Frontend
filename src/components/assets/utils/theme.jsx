import {
  largeFontSize,
  xlFontSize,
  semiLargeFontSize,
  mediumFontSize,
  semiMediumFontSize,
  smallFontSize,
  tinyFontSize,
  smallestFontSize,
  xxlFontSize,
} from "./fontSizes";

const theme = {
  colors: {
    black: "#000",
    white: "#fff",
    white1: "#F6F6F6",
    white2: "#E4E4E4",
    lightGray: "#c4c4c4",
    mediumGray: "#ACACAC",
    darkGray: "#868686",
    red: "#ed1c24",
    green: "#6EEDB0",
    yellow: "#FFE899",
    purple: "#C7CEEA",
    primaryBackground: "#181818",
    blackColor: "#0d0d0d",
    white3: "#efefef",
  },
  fontSizes: {
    h1: xxlFontSize,
    h2: xlFontSize,
    h3: largeFontSize,
    h4: semiLargeFontSize,
    text: mediumFontSize,
    subtext: semiMediumFontSize,
    small: smallFontSize,
    tiny: tinyFontSize,
    smallest: smallestFontSize,
  },
  fontFamilies: {
    font: "Roboto",
  },
};

export { theme };
