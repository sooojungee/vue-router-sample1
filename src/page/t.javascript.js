const _ = require('lodash');

const test1 = [{ a: 1 }, { b: 2 }];
// const test2 = _.clone(test1);
// const test3 = _.cloneDeep(test1);
// console.log(test2);
// console.log(test3);
// console.log(test1[0] === test3[0]);
// console.log(test2 === test3);

// for (let i = 0; i < 2; i += 1) {
//   console.log(test1[i]._id);
// }

function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

_.assign({ 'a': 0 }, new Foo, new Bar);


const t1 = {
  signedUrl: '1',
  tags: [],
  _id: '2',
  name: '3',
  extension: '4',
  createdAt: '5',
  updatedAt: '6',
  generated: {
    fileSize: 0,
    height: 0,
    width: 0,
    links: {
      original: '7',
      t100: '8',
      t150: '9',
      t250: '0'
    }
  },
  group: null
};

const Image2 = {
  group: 'aaa',
  assign: {
    selected: false
  }
};

// console.log(_.assign(t1, _.cloneDeep(Image2)));

const aa = [
  {
    title: '11',
    width: 11,
    height: 11,
    text: '.hi'
  },
  {
    title: '22',
    width: 11,
    height: 22,
    text: '.hello'
  },
  {
    title: '33',
    width: 22,
    height: 11,
    text: '.hi'
  },
  {
    title: '44',
    width: 22,
    height: 22,
    text: '.hello'
  }
];

const bb = [
  {
    width: 22,
    height: 11
  },
  {
    width: 11,
    height: 22
  }
];

const ee = [
  {
    text: '.hi'
  }
];


const cc = [];
const dd = [];

for (let i = 0; i < aa.length; i += 1) {
  for (let j = 0; j < bb.length; j += 1) {
    if (aa[i].width === bb[j].width && aa[i].height === bb[j].height) {
      cc.push(aa[i]);
    }
  }
}

// const gg = _.forEach(aa, (a) => {
//   return _.filter(bb, (b) => {
//     console.log(b.width === a.width && b.height === a.height);
//     return b.width === a.width && b.height === a.height;
//   });
// });

const gg = _.filter(aa, (a) => {
  for (let i = 0; i < bb.length; i += 1) {
    return a.width === bb[i].width && a.height === bb[i].height;
  }
});

console.log('gg', gg);


// const gg = _.forEach(aa, (a) => {
//   return _.filter(bb, (b) => {
//     console.log(b.width === a.width && b.height === a.height);
//     return b.width === a.width && b.height === a.height;
//   });
// });
//
// console.log('gg', gg);

for (let i = 0; i < cc.length; i += 1) {
  for (let j = 0; j < ee.length; j += 1) {
    if (cc[i].text === ee[j].text) {
      dd.push(cc[i]);
    }
  }
}
// console.log(dd);

// const cc = _.chain(aa).filter(a, function() {
//   return _.filter(bb, bb)
// }).value();
// console.log(_.filter(aa, function(a) {
//   return a.width === bb.22 &&;
// }));


const skdufh = [
  {
    a: 1,
    b: 2
  },
  {
    a: 1,
    b: 2
  },
  {
    a: 1,
    b: 3
  }
];

const asdf = {
  a: {
    type: 'aa',
    text: 'a'
  },
  b: {
    type: 'fa',
    text: 'b'
  },
  c: {
    type: 'bd',
    text: 'b'
  }
};

// const kk = {
//   c: {
//     type: 'bd',
//     text: 'b'
//   }
// };
//
// const test = [
//   {
//     type: 'a',
//     text: 'aa'
//   },
//   {
//     type: 'b',
//     text: 'bb'
//   },
//   {
//     type: 'c',
//     text: 'cc'
//   },
//   {
//     type: 'c',
//     text: 'cc'
//   }
// ];
//
// const fff = _.uniqBy(test, 'type');
//
// const de = [
//   {
//     type: 'dd',
//     text: 'ddd'
//   },
//   {
//     type: 'a',
//     text: 'aa'
//   }
// ];
//
// console.log('gggg', _.differenceBy(fff, de, 'type'));
//
// const ad = [
//   {
//     type: 'd',
//     text: 'dd'
//   },
//   {
//     type: 'c',
//     text: 'cc'
//   }
// ];
//
// const testad = _.chain(test).union(ad).value();
// const zzz = _.union(test, ad);
// console.log(_.uniq(zzz));
// // console.log(testad);
//
// const dkssud = ['a', 'b'];
// const gktpdy = ['c'];
//
// console.log(_.pullAll(dkssud, gktpdy));

let logger = {
  a: 'aaaa',
  b: 'b',
  asdf: {
    ss: 'sdf'
  }
};
// const aasdf = {
//   aaaa: 'sdf'
// }
const aaa = {
  a: 'aaaa',
  b: 'b',
  c: 'c',
  aasdf: 'aaaaaa'
};
// const {
//   aasdf
// } = null;

// console.log(aasdf);

//
// function foo(a, b) {
//   console.log(a, b);
//   console.log(arguments);
// }
//
// foo('에이', '비', '아', '오', '엥');

let jj = null;
console.log(_.isNil(jj));
jj = {};
console.log(_.isNil(jj));


const aa1 = '';
console.log(_.isEmpty(aa1));
