"use strict";
var mustache = require("mustache");
module.exports = (function (content, attrs, scope) {
    if (!content) {
        return content;
    }
    var data = null;
    if (attrs.data) {
        data = scope.execImport(attrs.data);
    }
    return mustache.render(content, data);
});
