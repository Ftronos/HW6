"use strict";

function replace(text) {
    return text.replace(/(\s|\W|^)'(.+)'(\s|\W|$)/gi, '$1"$2"$3');
}
