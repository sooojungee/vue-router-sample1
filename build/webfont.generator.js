const webfontsGenerator = require('webfonts-generator');
const iconPath = 'src/icons';
const fs = require('fs');
const _ = require('lodash');

const files = _.chain(fs.readdirSync(iconPath))
  .filter(f => f.endsWith('.svg'))
  .map(f => `${iconPath}/${f}`)
  .value();

webfontsGenerator({
  files,
  dest: 'src/svg-icons/',
  html: true, // true이면 html 미리보기를 생성해준다.
  templateOptions: {
    baseSelector: '.icon-font', //fa
    classPrefix: 'icon-font-' //fas-djWJrnwjWJrn
  }
}, function (error) {
  if (error) {
    console.log('Fail!', error);
  } else {
    console.log('Done!');
  }
});
