var abc = [4, 5, 9, 15];
console.log(abc);

var xyz = [11, 12, 13, 14, 15];
console.log(xyz.length);

var xya = [13, 15, 17, 19, 10, 102, 2520, 350, 88];
console.log(xya[5]);

var ccc = [
  13, 15, 17, 19, 10, 102, 2520, 350, 88, 11, 12, 13, 14, 15, 4, 5, 9, 15,
];
console.log(ccc[10]);

var aa = [5, 6, 8, 61, 654, 54, 11];

console.log(aa[4]);
aa[4] = 100;
console.log(aa);

//  find to index an element
var nmz = [5, 6, 8, 61, 654, 54, 11];
var znm = nmz.indexOf(654);
console.log(znm);

// again try all=============
var smm = [
  13, 15, 17, 19, 10, 102, 2520, 350, 88, 11, 12, 13, 14, 15, 4, 5, 9, 15,
];

var pp = smm[5];
console.log(pp);

var indexPosition = smm.indexOf(2520);
console.log(indexPosition);

var indexPosition2 = smm.indexOf(15);
console.log(indexPosition2);

smm[6] = 500;
console.log(smm);
