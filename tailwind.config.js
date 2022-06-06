module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{html,js}",
        "./*.{html, js}",
        "./en_us/**/*.{html,js}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
