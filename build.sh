mkdir -p build
node build.js examples/example1.js examples/example1.md > build/index.html
node build.js examples/example2.html examples/example2.md > build/index2.html
node screenshots.js examples/example2.html build/canvas.jpg