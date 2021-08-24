import { JString } from "./JString";

let hello = 'hello';
let world = 'world';

let helloWorldText = `${hello} ${world}`;
console.log('typescript', helloWorldText);

let helloWorldClrText = JString.format('hello {0}',['world']);

console.log('clrmethod', helloWorldClrText);