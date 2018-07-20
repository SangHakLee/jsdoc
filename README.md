# 1. JSDoc

[![NPM](https://nodei.co/npm/jsdoc-guide.png)](https://nodei.co/npm/jsdoc-guide/)

[https://sanghaklee.gitlab.io/jsdoc](https://sanghaklee.gitlab.io/jsdoc)

**TOC**
<!-- TOC -->

- [1. JSDoc](#1-jsdoc)
    - [1.1. Usage](#11-usage)
        - [1.1.1. Install](#111-install)
        - [1.1.2. jsdoc.json](#112-jsdocjson)
        - [1.1.3. Generate document from jsdoc](#113-generate-document-from-jsdoc)
- [2. Example](#2-example)
    - [2.1. jsdoc/function.js](#21-jsdocfunctionjs)
        - [2.1.1. @function](#211-function)
        - [2.1.2. {!string}](#212-string)
        - [2.1.3. {?number}](#213-number)
        - [2.1.4. {string=}](#214-string)
        - [2.1.5. {?{callback: function}=}](#215-callback-function)
        - [2.1.6. @example](#216-example)
        - [2.1.7. @returns](#217-returns)
    - [2.2. jsdoc/class.js](#22-jsdocclassjs)
- [3. Docdash](#3-docdash)

<!-- /TOC -->

## 1.1. Usage
### 1.1.1. Install
```
$ npm i jsdoc countly-docdash
```
- `jsdoc`: 코드에서 JSDoc 추출하여 정적 사이트 생성
- `countly-docdash`: 템플릿

### 1.1.2. jsdoc.json
현재 프로젝트 `jsdoc.json` 설명 확인.

아래는 샘플
```json
{
    "tags": {
      "allowUnknownTags": false,
      "dictionaries": ["jsdoc","closure"] 
    },
    "source": {
      "include": "./jsdoc", 
      "includePattern": ".js$", 
      "exclude": ["./docs"], 
      "excludePattern": "(node_modules/|docs)"
    },
    "plugins": [
      "node_modules/jsdoc/plugins/markdown"
    ],
    "markdown":{
        "idInHeadings": true
    },
    "opts": {
      "template": "node_modules/countly-docdash", 
      "encoding": "utf8", 
      "destination": "./docs", 
      "recurse": true, 
      "tutorials": "./tutorials",
      "verbose": true
    },
    "templates": {
      "cleverLinks": true,
      "monospaceLinks": true, 
      "default": {
        "outputSourceFiles": true, 
        "includeDate": false 
      }
    },
    "docdash": { 
      "static": true,
      "sort": false,
      "search": true,
      "collapse": true
    }
}
```

### 1.1.3. Generate document from jsdoc
```bash
$ jsdoc -c jsdoc.json --readme README.md
```
- `-c`: config 파일 경로
- `--readme`: 문서 생성시 README 파일을 포함 (생성된 문서의 Home,`index.html`)

# 2. Example
## 2.1. jsdoc/function.js
### 2.1.1. @function
**` * @function`**
- Global tagging

### 2.1.2. {!string}
**`  * @property {!string} path object path`**
- Not Null String

### 2.1.3. {?number}
**`  * @property {?number} code=0 status code`**
- Null or Number

### 2.1.4. {string=}
**` * @param {string=} encoding=utf-8 file encoding`**
- Optional

### 2.1.5. {?{callback: function}=}
**` * @param {?{callback: function}=} options={} options`**
- Nested Object

```javascript
 * @param {?{callback: function}=} options={} options
 * @param {function=} options.callback callback function
```
- 첫번째 라인에서 전체 오브젝트를 정의한다
    - [@param] [오브젝트 key] [파라미터명] [파라미터 설명]
    - **{?{callback: function}=}**
        - `?` : Nullable
        - `=` : Optional
        - `options={}` : default **{}**
    - `options`라는 이름을 값는 파라미터는 Null 값이 올 수 있는 Optional한 객체이고 Null일 때 기본값으로 `{}`을 사용한다.
    `options` 객체에는 `callback`이라는 key의 function 프로퍼티가 존재한다.
- 두번째 라인에서 오브젝트 프로퍼티를 정의한다.
    - [@param] [프로퍼티 key] [프로퍼티명] [프로퍼티 설명]

### 2.1.6. @example
사용 예를 나타낸다.

### 2.1.7. @returns
`@return`와 같음

리턴 값이 단일 항목이면 아래와 같이 사용한다.
```javascript
* @returns {string} document
```

리턴 값이 obcjet이면 `@typedef`를 이용하여 리턴 객체를 정의하고 사용한다.
```javascript
/**
 * @typedef User
 * @property {string} name user's name
 * @property {number} age user's age
 */

/**
 * @returns {User}
 */
```

## 2.2. jsdoc/class.js
ES6 `class` 태그를 사용할 땐, `@class`, `@classdesc` 사용하지 않는다.

**Bad**
```javascript
/**
 * @class User
 * @classdesc User's class
 */
class User {
}
```

**Good**
```javascript
/**
 * Class User's class
 */
class User {
}
```

# 3. Docdash
- [docdash](https://github.com/clenemt/docdash)
- [countly-docdash](https://github.com/Countly/countly-docdash)
- [@mocha/docdash](https://github.com/mochajs/mocha-docdash)