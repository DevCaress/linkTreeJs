
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

const createProfile = () => {

    const profile = document.createElement('section');
    profile.id = 'profile';
    profile.innerHTML = `
        <h1> DevCaress </h1>
        <img src="assets/caress.jpg">
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


const init = () => {
    createMain();
    createUi(createProfile());
    createUi(createSn());
    createUi(createLinks());
    createUi(createFooter());
    createBtns();
}


init();