import fs from 'fs';

let html = fs.readFileSync('dist/index.html', 'utf8');

// Convert module script to universal standard script (runs on file:// without CORS blocks)
html = html.replace('<script type="module" crossorigin>', '<script>');

// Normalize favicon links to root favicons
html = html.replace(/href="\.\/favicon-[^"]*\.svg"/g, 'href="favicon.svg"');
html = html.replace(/href="\.\/favicon-[^"]*\.png"/g, 'href="favicon.png"');
html = html.replace(/href="\.\/favicon-[^"]*\.ico"/g, 'href="favicon.ico"');
html = html.replace(/href="\/favicon[^"]*"/g, 'href="favicon.svg"');

// Ensure image paths are relative so they work both locally and on GitHub Pages
html = html.replace(/src="\/images\//g, 'src="images/');
html = html.replace(/href="\/assets\//g, 'href="assets/');

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html successfully updated to standalone React build!');
