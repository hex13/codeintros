export function parse(source) {
    const lines = source.split('\n');
    const snippets = [];
    let state = '';
    let snippet;
    lines.forEach(line => {
        switch (state) {
            case 'snippet': {
                if (line.match(/^\W*\/\/@endsnippet/)) {
                    state = '';
                    snippets.push(snippet);
                } else {
                    if (snippet.source) snippet.source += '\n';
                    snippet.source += line;
                }
                break;
            }
            default: {
                const match = line.match(/^\W*\/\/@snippet +(\w+)/);
                if (match) {
                    snippet = {name: match[1], source: ''};
                    state = 'snippet';
                }
            }
        }
    });
    return snippets;
}
