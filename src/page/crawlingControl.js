const cheerio = require('cheerio');
const _ = require('lodash');

let $ = null;
let result = [];
let site = null;

const findChildren = (child) => {
  const children = $(child).children().toArray();

  if (children.length <= 0) {
    if (children.length === 0) {
      result.push(child);
    }
  } else {
    if ($(child).text().length > 0) {
      const extraChild = child;
      for (let i = 0; i < children.length; i += 1) {
        if (children[i].type !== 'text') {
          delete $(extraChild).children[i];
          extraChild.newText = $(extraChild).text();
          // console.log('tt', $(extraChild).text());
        }
      }
      result.push(extraChild);
    }
    for (let i = 0; i < children.length; i += 1) {
      findChildren(children[i]);
    }
  }
};

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
    result = [];
    site = url;
    const template = `<body${post}</body>`;
    $ = cheerio.load(template);
    const test = $('body').children().toArray();
    for (let i = 0; i < test.length; i += 1) {
      findChildren(test[i]);
    }

    const item = [];
    for (let i = 0; i < result.length; i += 1) {
      let thisName = '';
      if (result[i].children.length > 0) {
        try {
          let newText = '';
          // console.log(result[i].children.length, 'aa', result[i].children[0].data.toString());
          for (let j = 0; j < result[i].children.length; j += 1) {
            if (result[i].children[j].type !== 'text') {
              newText += result[i].children[j].children[0].data.toString();
            } else {
              newText += result[i].children[j].data.toString();
            }
          }
          thisName = newText;
        } catch (e) {}
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

