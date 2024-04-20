/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            maxWidth: {
                'e7xl': '1180px',
            },
            colors: {
                'dark-blue': '#003459',
                "nickel": "#667479",
                "american-silver": "#CCD1D2",
                "papaya-whip": "#FCEED5",
                "peach": "#FFE7BA",
                "rich-black": "#00171F",
                "manatee": "#99A2A5",
                "vivid": "#00A7E7",
                "oxford-blue": "#002A48",
                "bright-gray": "#EBEEEF"
            },
            boxShadow: {
                'main': '0 4px 28px -2px rgba(0, 0, 0, 0.08)',
            },
            screens: {
                'xs': '396px',
            }
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require('@headlessui/tailwindcss')
    ],
}
