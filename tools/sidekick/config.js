window.hlx.initSidekick({
    project: 'Eureka',
    host: 'https://deft-hamster-eefe81.netlify.app',
    plugins: [
        { /* plugin config */
            id: 'asset-library',
            condition: true,
            button: {
                text: 'AEM Asset Library',
                isDropdown: false,
            }
        },
    ],
});
