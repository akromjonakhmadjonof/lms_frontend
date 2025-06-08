module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                rotate360: {
                    "100%": { transform: "rotate(1turn)" },
                },
            },
            animation: {
                rotate360: "rotate360 2s linear infinite",
            },
        },
    },
    plugins: [],
};
