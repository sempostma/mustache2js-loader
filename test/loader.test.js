const compiler = require('./compiler.js');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

test('Inserts Mustache and outputs JavaScript', async () => {
  const { stats, result } = await compiler('./example.js');

  const { document, Node } = new JSDOM().window; /* expose for eval */
  const refHTML = fs.readFileSync(path.resolve(__dirname, './example.mustache')).toString();
  const refParent = document.createElement('div');
  refParent.innerHTML = refHTML;
  const ref = refParent.firstChild;
  eval(result); /* sets global output */

  expect(output.tagName).toBe(ref.tagName);
  expect(output.children.length).toBe(ref.children.length);
  expect(output.querySelector('img').getAttribute('src')).toBe('https://html2js.esstudio.site/android-chrome-256x256.png');
  expect(output.querySelector('a').getAttribute('title')).toBe('Title: HTML2JS is Awesome');
  expect(output.querySelector('h2').innerHTML).toBe('HTML2JS is Awesome');
});
