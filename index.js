const mdLinks = {};
const path = require('path');
const file = require('fs');
const route = process.argv[2];

mdLinks.mdSearch = route => path.extname(route) === '.md';
console.log('¿Existen archivos Markdown? ' + route); 

mdLinks.foundUrls = (route, callback) => {
    file.readFile(route, 'utf8', (error, mdInfo) => {
        if (error) {
            throw error;
        }
        const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
        const found = mdInfo.match(regex);
        const urls = [];
        for (let i = 0; i < found.length; i++) {
            urls.push(found[i]);
        console.log(mdLinks.foundUrls);
        };
        callback(mdInfo);
});
};







module.exports = mdLinks;