import * as assert from 'node:assert';
import test from 'node:test';

import { parse } from './index.js';

const source1 = `
    
    //@snippet foo
    for (let i = 0; i < 10; i++) {
    //@endsnippet
    }

    //@snippet bar
    function foo() {

    }
    //@endsnippet
    const notSnippet_1 = '//@snippet blah';
    const notSnippet_2 = '//@endsnippet';

    //@snippet baz
    const abc = '//@endsnippet';
    console.log(":)");
    //@endsnippet
    
`;


const snippetBar = `    function foo() {

    }`;
const snippetBaz = `    const abc = '//@endsnippet';
    console.log(":)");`

test('parsing snippets', () => {
    const snippets = parse(source1);

    assert.deepStrictEqual(snippets, [
        {name: 'foo', source: '    for (let i = 0; i < 10; i++) {'},
        {name: 'bar', source: snippetBar},
        {name: 'baz', source: snippetBaz},
    ]);
});