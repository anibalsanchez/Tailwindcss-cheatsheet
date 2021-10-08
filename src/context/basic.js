export let basic = {
  spacing: [
    "0",
    "px",
    "0.5",
    "1",
    "1.5",
    "2",
    "2.5",
    "3",
    "3.5",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "14",
    "16",
    "20",
    "24",
    "28",
    "32",
    "36",
    "40",
    "44",
    "48",
    "52",
    "56",
    "60",
    "64",
    "72",
    "80",
    "96",
  ],

  colors: [
    "gray",
    "red",
    // "orange",
    "yellow",
    "green",
    // "teal",
    "blue",
    "indigo",
    "purple",
    "pink",
  ],

  pseudoClass: [
    "responsive",
    "focus",
    "hover",
    "active",
    "group-hover",
    "group-focus",
    "focus-within",
    "focus-visible",
    "motion-safe",
    "motion-reduce",
    "disabled",
    "visited",
    "checked",
    "first",
    "last",
    "odd",
    "even",
  ],
  functions: ["tailwind", "apply", "layer", "responsive", "variants", "screen"],
  variants: {
    "all-utility": ["responsive"],
    "background-color": ["hover", "focus"],
    "border-color": ["hover", "focus"],
    "box-shadow": ["hover", "focus"],
    "font-weight": ["hover", "focus"],
    opacity: ["hover", "focus"],
    outline: ["focus"],
    "text-color": ["hover", "focus"],
    "text-decoration": ["hover", "focus"],
  },
  opacity: [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100],
  colorsNum: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
};
