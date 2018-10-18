"use strict";

function replace(text) {
    return text.replace(/'([\b])(.+)([\b])'/gi, '$1"$2"$3');
}