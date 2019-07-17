const theme = {
  color: {
    topBarBgColor: "#394141",
    mainBgColor: "#454f4f",
    primaryTextColor: "white",
    secondaryTextColor: "black",
    ticketHeaderColor: "#394141",
    ticketColor: "#acb8b9",
    ticketColorHover: "#7a8586",
    ticketColor_2: "#98a4a5",
    ticketOpen: "#6B93A2",
    ticketClosed: "#546B43"
  },

  fontStyles: {
    navBarFont: "'Open Sans', sans-serif"
  },

  fontSizing: {
    l: "2rem",
    m: "1.6rem",
    s: "1.2rem"
  },

  device: {
    desktop: "(max-width: 1000px)",
    tablet: "(max-width: 800px)",
    mobile: "(max-width: 500px)"
  },

  flex: (direction = "row", align = "normal", justify = "normal") => `{
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  }`
};

export default theme;

export const {
  color,
  fontStyles,
  fontSizing,
  breakpoints,
  flex,
  device
} = theme;
