const cheerio = require('cheerio');
const _ = require('lodash');

let $ = null;
let site = null;

const addHttp = (attribute) => {
  let attrSite = null;

  if (!_.isNil(attribute.src)) {
    attrSite = attribute.src;
  } else if (!_.isNil(attribute.value)) {
    attrSite = attribute.value;
  } else if (!_.isNil(attribute.href)) {
    attrSite = attribute.href;
  }

  if (!_.isNil(attribute.onclick)) {
    attrSite = attribute.onclick.split('(')[1].split(')')[0];
  }
  let address;
  if (!_.isNil(attrSite) && attrSite.indexOf('http') === -1) {
    address = `${site}${attrSite}`;
  } else {
    address = `${attrSite}`;
  }
  return address;
};

module.exports = {
  findText(post, url) {
    site = url;
    const template = `<body${post}</body>`;
    $ = cheerio.load(template);
    const result = $('*').children().toArray();

    for (let i = 0; i < result.length; i += 1) {
      if (result[i].children.length > 0) {
        result[i].extraText = $(result[i]).clone().children().remove()
          .end()
          .text();
      }
    }

    const item = [];
    for (let i = 0; i < result.length; i += 1) {
      let thisName = '';
      if (result[i].children.length > 0) {
        if (!_.isNil(result[i].extraText)) {
          thisName = result[i].extraText;
        } else {
          let newText = '';
          for (let j = 0; j < result[i].children.length; j += 1) {
            if (result[i].children[j].type !== 'text') {
              newText += result[i].children[j].children[0].data.toString();
            } else {
              newText += result[i].children[j].data.toString();
            }
          }
          thisName = newText;
        }
      }
      if (result[i].name === 'a') {
        item.push({
          text: false,
          type: result[i].name,
          name: thisName,
          src: addHttp(result[i].attribs)
        });
      } else if (result[i].name === 'img') {
        item.push({
          text: false,
          type: result[i].name,
          name: result[i].attribs.alt,
          src: addHttp(result[i].attribs)
        });
      } else if (result[i].name === 'option') {
        item.push({
          text: false,
          type: result[i].name,
          name: thisName,
          src: addHttp(result[i].attribs)
        });
      } else if (result[i].name === 'script') {
        item.push({
          text: false,
          type: result[i].name,
          name: addHttp(result[i].attribs),
          src: addHttp(result[i].attribs)
        });
      } else if (result[i].name === 'iframe') {
        item.push({
          text: false,
          type: result[i].name,
          name: addHttp(result[i].attribs),
          src: addHttp(result[i].attribs)
        });
      } else if (result[i].children.length > 0) {
        item.push({
          type: result[i].name,
          name: result[i].name,
          text: true,
          children: thisName
        });
      }
    }

    return item;
  }
};

