const mdLinks = {};
const path = require('path');
const file = require('fs');
const route = process.argv[2];

mdLinks.correctFile = route => file.stat(route, (err)=>{
    if (err === null) {
        console.log("El archivo es valido");
    } else if (err.code == 'ENOENT') {
        console.log ("El archivo no existe");
    };
});

mdLinks.mdSearch = route => path.extname(route) === '.md';
console.log('¿Existen archivos Markdown?: ' + mdLinks.mdSearch(route));

mdLinks.foundUrls = route => file.readFile(route, 'utf8', (error,mdInfo) => {
        if (error) {
            throw error;
        }
        const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
        const linksFound = mdInfo.match(regex);
        console.log('Estos son los link que se localizan en tu archivo md: \n ', linksFound);
    });

mdLinks.correctFile(route);
mdLinks.mdSearch(route);
mdLinks.foundUrls(route);

module.exports = mdLinks;

