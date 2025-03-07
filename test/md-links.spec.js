const mdLinks = require('../');

describe('mdLinks', () => {

  /*it('should return be true for a valid file', () => {
    expect(mdLinks.correctFile('../README.md')).toBe(true);
  });
  it('should return be false for a invalid file', () => {
    expect(mdLinks.correctFile('../wiwuwi')).toBe(false);
  });*/

  it('should return be true for a valid .md file', () => {
    expect(mdLinks.mdSearch('../README.md')).toBe(true);
  });
  it('should return be false for a invalid .md file', () => {
    expect(mdLinks.mdSearch('../index.js')).toBe(false);
  });

  it('should read and impress the links on the .md file', () => {
    mdLinks.foundUrls("route", (mdInfo) => {
      expect(mdInfo).toBe(linksFound)
    });
  });
});