"use strict";

function replace(text) {
    return text.replace(/(\s)'(.+)'(\s)/gi, '$1"$2"$3');
}