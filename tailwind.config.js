/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            keyframes: {
                "slide-down": {
                    "0%": { transform: "translateY(-125%)", opacity: 0 },
                    "100%": { transform: "translateY(0)", opacity: 1 },
                },
                "birthday-in": {
                    "0%": {
                        top: "50%",
                        transform: "translate(-50%, -50%) scale(0) ",
                        opacity: 0,
                    },
                    "100%": {
                        top: "50%",
                        transform: "translate(-50%, -50%) scale(1.5) ",
                        opacity: 1,
                    },
                },
                "birthday-out": {
                    "0%": {
                        top: "50%",
                        transform: "translate(-50%, -50%) scale(1.5)",
                    },
                    "100%": {
                        top: "-25%",
                        transform: "translate(-50%, 50%) scale(1)",
                    },
                },
                "last-birthday-in": {
                    "0%": {
                        top: "-25%",
                        transform: "translate(-50%, 50%) scale(1)",
                    },
                    "100%": {
                        top: "50%",
                        transform: "translate(-50%, -80%) scale(1.5) ",
                    },
                },

                "fade-out": {
                    "0%": { opacity: 1 },
                    "100%": { opacity: 0 },
                },
                "fade-in": {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },

                "slide-left": {
                    "0%": { transform: "translateX(-125%)", opacity: 0 },
                    "100%": { transform: "translateX(0)", opacity: 1 },
                },
                "slide-right": {
                    "0%": { transform: "translateX(125%)", opacity: 0 },
                    "100%": { transform: "translateX(0)", opacity: 1 },
                },
                wiggle: {
                    "0%, 100%": { transform: "rotate(-5deg)" },
                    "50%": { transform: "rotate(5deg)" },
                },
            },
            fontFamily: {
                fira: ["Fira Code", "monospace"],
                alkatra: ["Alkatra", "cursive"],
            },
        },
    },
    plugins: [],
};
