const mdLinks = require('../');

describe('mdLinks', () => {
  it('should return be true for a valid .md file', () => {
    expect(mdLinks.mdSearch('../README.md')).toBe(true);
  });
  it('should return be false for a valid .md file', () => {
    expect(mdLinks.mdSearch('../index.js')).toBe(false);
})
});

describe('mdLinks', () => {
  it('should read and impress the links on the .md file', () => {
    mdLinks.foundUrls('route',(mdInfo)=>{
      expect(mdinfo).toBe('Estos son los links que contine el archivo .md');
    });
  });
});


