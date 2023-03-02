const _ = require('lodash');
const ucFirst = require('uppercase-first');

export default function(){
    let name="neel";
    name = _.toUpper(name);
    
    console.log(ucFirst('uppercase-first package'));

    console.log(`Hello ${name}`);
}