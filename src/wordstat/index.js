// import * as stringStats from 'string-stats'
import defaultStringProcess from '../stringprocess'
const pattern = /[a-zA-Z0-9_\u0392-\u03c9\u00c0-\u00ff\u0600-\u06ff]+|[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;

function wordCount(str, result = {}) {
    var m = str.match(pattern);
    if (!m) {
        return 0;
    }
    for (var i = 0; i < m.length; i++) {
        if (result[m[i]]) {
            result[m[i]]++;
        } else {
            result[m[i]] = 1;
        }
    }
    return result;
};

export default function (buffer, stringprocess = []) {
    let result = {};
    let str = buffer.toString();
    stringprocess.unshift(defaultStringProcess);
    stringprocess.forEach((item)=>{str = item(str)});
    result = wordCount(str, result);
    return result;
}