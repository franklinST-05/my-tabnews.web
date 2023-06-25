/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#22f',
                secondary: '#1F2937',
                'secondary-ab': '#111827',
                success: '#2f2',
                danger: '#f22',
                warn: '#ff1',
                info: '#58f',
                light: '#fff',
                dark: '#000',
            },
            textColor: {
                desc: '#668'
            }
        },
    },
    plugins: [],
};
