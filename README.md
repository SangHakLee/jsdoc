# JSDoc
https://sanghaklee.gitlab.io/jsdoc

**TOC**
<!-- TOC -->

- [JSDoc](#jsdoc)
    - [jsdoc/function.js](#jsdocfunctionjs)
        - [@function](#function)
        - [{!string}](#string)
        - [{?number}](#number)
        - [{string=}](#string)
        - [{?{callback: function}=}](#callback-function)
        - [@example](#example)
        - [@returns](#returns)
- [Docdash](#docdash)

<!-- /TOC -->


## jsdoc/function.js
### @function
**` * @function`**
- Global tagging

### {!string}
**`  * @property {!string} path object path`**
- Not Null String

### {?number}
**`  * @property {?number} code=0 status code`**
- Null or Number

### {string=}
**` * @param {string=} encoding=utf-8 file encoding`**
- Optional

### {?{callback: function}=}
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

### @example
사용 예를 나타낸다.

### @returns
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

# Docdash
- [docdash](https://github.com/clenemt/docdash)
- [countly-docdash](https://github.com/Countly/countly-docdash)
- [@mocha/docdash](https://github.com/mochajs/mocha-docdash)