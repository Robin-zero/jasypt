## jasypt-js

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/jasypt-js.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/jasypt-js

org.jasypt.util.text.BasicTextEncryptor for Node.js and Browser

### 背景

`Spring Boot` 集成 `jasypt` 对配置项进行加密，为了与 `Java` 体系保持一致，于是有了 `jasypt-js`

### 使用

#### SDK 使用

##### For NodeJS

``` js
'use strict';

const Jasypt = require('jasypt-js');
const jasypt = new Jasypt();
// 设置秘钥
jasypt.setPassword('G0CvDz7oJn60');
// 加密
const encryptMsg = jasypt.encrypt('admin');
// 解密
const decryptMsg = jasypt.decrypt(encryptMsg);
```

##### For Browser

``` js
'use strict';

import Jasypt from 'jasypt-js';
const jasypt = new Jasypt();
// 设置秘钥
jasypt.setPassword('G0CvDz7oJn60');
// 加密
const encryptMsg = jasypt.encrypt('admin');
// 解密
const decryptMsg = jasypt.decrypt(encryptMsg);
```

#### 命令行

``` sh
$ jasypt -h

Usage: jasypt [options]

Options:
  -v, --version               output the version number
  -p, --password <pwd>        The secret key
  -e, --encrypt <msg>         Text to be encrypting
  -d, --decrypt <encryptMsg>  Text to be decrypting
  -h, --help                  output usage information

Examples:

  $ jasypt -p 0x1995 -e admin
  $ jasypt -p 0x1995 -d nsbC5r0ymz740/aURtuRWw==
```

#### 解密加密项 for Spring Boot

``` js
// 对配置项的ENC(xxx)进行解密
const data = {
  code: 42,
  test: {
    db: 'ENC(c0KA89TBZ6TbLn7E6RIiFQ==)',
    pwd: {
      a: 'ENC(c0KA89TBZ6TbLn7E6RIiFQ==)'
    },
    asad: {
      pwd: {
        str: 'str',
        host: 'ENC(c0KA89TBZ6TbLn7E6RIiFQ==)',
        pwd: 'ENC(c0KA89TBZ6TbLn7E6RIiFQ==)'
      }
    },
    items: [{
      user: 'user1',
      pwd: 'ENC(c0KA89TBZ6TbLn7E6RIiFQ==)'
    }, {
      user: 'user2',
      pwd: 'ENC(c0KA89TBZ6TbLn7E6RIiFQ==)'
    }, {
      user: 'user3',
      pwd: 'ENC(c0KA89TBZ6TbLn7E6RIiFQ==)'
    }],
  }
};

const jasypt = new Jasypt();
jasypt.setPassword('P8dEw34TgvbY');
jasypt.decryptConfig(data);
```

``` js
// 解密出来的内容
const data = {
  code: 42,
  test: {
    db: 'admin',
    pwd: {
      a: 'admin'
    },
    asad: {
      pwd: {
        str: 'str',
        host: 'admin',
        pwd: 'admin'
      }
    },
    items: [{
      user: 'user1',
      pwd: 'admin'
    }, {
      user: 'user2',
      pwd: 'admin'
    }, {
      user: 'user3',
      pwd: 'admin'
    }],
  }
};
```
