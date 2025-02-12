'use strict';

const Jasypt = require('../jasypt.cjs.js');
const jasypt = new Jasypt();
// 设置秘钥
jasypt.setPassword('G0CvDz7oJn60');
// 加密
const encryptMsg = jasypt.encrypt('admin');
console.log(encryptMsg);
// 解密
const decryptMsg = jasypt.decrypt(encryptMsg);
console.log(decryptMsg);
