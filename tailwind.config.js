const colors = require("tailwindcss/colors");

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

module.exports = {
  theme: {
    screens: {
      sm: "380px",
      md: "420px",
      lg: "680px",
      // or maybe name them after devices for `tablet:flex-row`
      tablet: "1024px",
    },
    colors: {
      ...colors,
      dblue: "#4391EF",
      myellow: "#F3B33D",
      dgray: "#F2F8FF",
      mgray: "#F4F7FA",
    },
  },
};
