# @jdists/mustache

mustache as jdists processor

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coverage-image]][coverage-url]

* @see [jdists](https://github.com/zswang/jdists)

* @see [mustache](https://github.com/janl/mustache.js)

## Example

```html
<!--data>
kids:
  - name: Jimmy
    age: '12'
  - name: Sally
    age: '4'
</data-->

<!--jdists encoding="mustache" data="?data"-->
<ul>
  {{#kids}}
  <li>{{name}} is {{age}}</li>
  {{/kids}}
</ul>
<!--/jdists-->

<!--mustache data="?data"-->
<ul>
  {{#kids}}
  <li>{{name}} is {{age}}</li>
  {{/kids}}
</ul>
<!--/mustache-->
```

## License

MIT © [zswang](http://weibo.com/zswang)

[npm-url]: https://badge.fury.io/js/%40jdists%2Fmustache
[npm-image]: https://badge.fury.io/js/%40jdists%2Fmustache.svg
[travis-url]: https://travis-ci.org/jdists/mustache
[travis-image]: https://travis-ci.org/jdists/mustache.svg?branch=master
[coverage-url]: https://coveralls.io/github/jdists/mustache?branch=master
[coverage-image]: https://coveralls.io/repos/jdists/mustache/badge.svg?branch=master&service=github