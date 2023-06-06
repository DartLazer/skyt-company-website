/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{html,js,vue}", "./components/**/*.{html,js,vue}", "./utils/**/*.{html,js,vue}"],
    theme: {
        extend: {
            colors: {
                'color1': '#5DA9A6', //Dusty Teal (#5DA9A6) - Accent color for buttons, links, and CTAs, offering a modern yet more subdued alternative.
                'color1highlight': '#F4F1DE',
                'color2': '#57D9A3', //Mint Green (#57D9A3) - Highlighting important information, adding a fresh and modern touch.
                'color3': '#1D3C58', //Dark Navy Blue (#1D3C58) - Primary background color, representing professionalism and trustworthiness.
                'color4': '#F2F2F2', //Soft Gray (#F2F2F2) - Secondary background color for certain sections or as a background for cards.
                'color5': '#FF6B6B', //Coral (#FF6B6B) - Secondary CTAs or other elements that need to stand out, complementing the dusty teal.
                'color6': '#4A4A4A' //Dark Gray (#4A4A4A) - Text and other essential content, ensuring readability and a clean look.
            },
            // that is animation class
            animation: {
                fadeTest: 'fadeIn100 5s ease-in',
                fadeIn: 'fadeIn100 3s ease-in-out',
                fadeInDelay: 'fadeIn 3s ease-in-out',
                pulseSlow: 'pulse 5s ease-in infinite'
            },

            // that is actual animation
            keyframes: theme => ({
                fadeIn100: {
                    '0%': {opacity: 0},
                    '100%': {opacity: 100},
                },
            }),
        },
    },
    plugins: [
        require("tailwindcss-animation-delay"),
        require('@tailwindcss/forms'),
    ],

}
