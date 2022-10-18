import nunjucks from 'nunjucks';
import * as fs from 'node:fs';
import { parse } from './index.js';
import * as marked from 'marked';

const wrapInCodeBlock = (source, language) => '\n```' + language + '\n' + source + '\n```';

const codeFile = process.argv[2];
const templateFile = process.argv[3];
const snippets = parse(fs.readFileSync(codeFile, 'utf8'));
const template = fs.readFileSync(templateFile, 'utf8');

const out = nunjucks.renderString(template, {
    snippets: Object.fromEntries(
        snippets.map(snippet => [snippet.name, wrapInCodeBlock(snippet.source, 'js')])
    )
});

console.log("<style>pre {color: white; background: #333; padding: 8px; border-radius: 8px}</style>")
marked.parse(out, (err, html) => {
    console.log(html);
});