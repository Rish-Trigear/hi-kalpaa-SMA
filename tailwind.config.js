// config.js

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        hiKalpaaSky: "#c3ebfa",
        hiKalpaaSkyLight: "#edf9fd",
        hiKalpaaPurple: "#cfceff",
        hiKalpaaPurpleLight: "#f1f0ff",
        hiKalpaaYellow: "#fae27c",
        hiKalpaaYellowLight: "#fefce8",
      },
    },
  },
  plugins: [],
};
