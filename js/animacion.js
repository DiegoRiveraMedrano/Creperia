document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los títulos de los menús
    const titles = document.querySelectorAll('.menu__cdulces--title, .menu__csaladas--title, .menu__marquesitas--title, .menu__waffles--title');

    titles.forEach(title => {
        title.addEventListener('click', () => {
            // Obtener el box correspondiente al título clicado
            const boxClass = title.className.replace('--title', '--box');
            const box = document.querySelector(`.${boxClass}`);

            // Si el box ya tiene la clase 'active', se la quitamos y terminamos
            if (box.classList.contains('menu__c--active')) {
                box.classList.remove('menu__c--active');
                return;
            }

            // Quitamos la clase 'active' de todos los boxes
            document.querySelectorAll('.menu__cdulces--box, .menu__csaladas--box, .menu__marquesitas--box, .menu__waffles--box').forEach(item => {
                item.classList.remove('menu__c--active');
            });

            // Añadimos la clase 'active' al box correspondiente
            box.classList.add('menu__c--active');
        });
    });
});
