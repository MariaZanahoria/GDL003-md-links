const mdLinks = require('../');


describe('mdLinks', () => {

  it('should return be true for a valid .md file', () => {
    expect(mdLinks('../README.md')).toBe(true);
   // console.log('');
  });
  it('should return be false for a valid .md file', () => {
    expect(mdLinks('../index.js')).toBe(false);
});
