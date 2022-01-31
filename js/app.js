
const createMain = () => {
    const container = document.getElementsByTagName('body')[0];
    const element = document.createElement('main');
    container.appendChild(element);
}


const createBtns = () => {
    const btns = [
        /* {
            url: 'https://wa.me/message/FZG3NUENDTJVO1',
            txt: '💰💰Preventa de cursos💰💰'
        }, */
        {
            url: 'https://nogara.dev/courses',
            txt: '💻💻Certificación de HTML y CSS GRATIS💻💻'
        },
        {
            url: 'https://nogara.dev/',
            txt: '💰💰Preventa de cursos💰💰'
        },
        {
            url: 'https://github.com/devCaress/',
            txt: '💻Proyectos y su código o repositorio💻'
        },
        {
            url: 'https://www.instagram.com/p/CXzeSvGA5Vx/',
            txt: 'Concurso para ganarte uno de mis cursos 😎😎😎'
        },
        {
            url: 'https://www.youtube.com/watch?v=c4YYycgWZ8g&t=13s',
            txt: 'Entrevistando Ingenieros recién egresados'
        },
        {
            url: 'https://talently.tech/ref/CQ9ON4',
            txt: ' 💹💹💹Consigue trabajo de forma remota 💹💹💹'
        },
        {
            url: 'https://www.youtube.com/c/NogaraDevCode',
            txt: 'Curso Desarrollo Web desde cero Youtube'
        },
        
        {
            url: 'https://nogaradevcode.com/',
            txt: 'Mi blog de programación'
        },
        
    
    ];

    const container = document.getElementById('links');

    for (const iterator of btns) {
        const element = document.createElement('a');
        element.href = iterator.url;
        element.target = '_blank';
        element.innerHTML = `
        <div class="btn"> ${iterator.txt} </div>
    `;

        container.appendChild(element);
    }
}

const refresh = () => document.getElementById('refresh').addEventListener('click', () => location.reload());


const createProfile = () => {

    const profile = document.createElement('section');
    profile.id = 'profile';
    profile.innerHTML = `
        <h1> DevCaress </h1>
        <img src="assets/caress.jpg">
        <div id="refresh">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sync-alt" class="svg-inline--fa fa-sync-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"></path></svg> 
        </div>
    `;

    return profile;
}

const createSn = () => {

    const icons = [
        {src: 'face', url: 'https://facebook.com/devcaress'},
        {src: 'insta', url: 'https://instagram.com/devcaress/'},
        {src: 'yt', url: 'https://www.youtube.com/channel/UCX1BEJAE6Mx9Tz6ty28oJWQ'},
        {src: 'linkedin', url: 'https://linkedin.com/in/daniel-enriquez-lucas/'},
        {src: 'twitter', url: 'https://twitter.com/DevCaress'},
        {src: 'tiktok', url: 'https://www.tiktok.com/@DevCaress/'},
        {src: 'telegram', url: 'https://t.me/NogaraDevCode'},
        {src: 'pinterest', url: 'https://www.pinterest.com.mx/DevCaress/'},
    ]

    const socialNetworks = document.createElement('section');
    socialNetworks.id = 'socialNetworks';

    for (const iterator of icons) {
        const element = document.createElement('a');
        element.href = iterator.url;
        element.target = '_blank';
        element.innerHTML = `<img src="assets/${iterator.src}.svg">`;
        socialNetworks.appendChild(element);
    }

    return socialNetworks;
}

const createLinks = () =>{

    const links = document.createElement('section');
    links.id = 'links';
    return links;
}

const createFooter = () =>{

    const footer = document.createElement('footer');
    footer.innerHTML = `
        
       <img src="assets/marca.png">  <p>Copyright © 2021 
       <a href="https://nogaradevcode.com/">Nogara DevCode</a>. <br>
       Todos los derechos reservados. </p>
    `;

    return footer;
}

const createUi = (element) => {

    const container = document.getElementsByTagName('main')[0];
    container.appendChild(element);

}


const init = (() => {
    createMain();
    createUi(createProfile());
    refresh();
    createUi(createSn());
    createUi(createLinks());
    createUi(createFooter());
    createBtns();
})();


/* init(); */