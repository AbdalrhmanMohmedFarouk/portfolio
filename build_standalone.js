import fs from 'fs';

let html = fs.readFileSync('dist/index.html', 'utf8');

// Replace <script type="module" crossorigin> with <script> to enable local file:// execution
html = html.replace('<script type="module" crossorigin>', '<script>');

// Normalize favicon links
html = html.replace(/href="\.\/favicon-[^"]*\.svg"/g, 'href="favicon.svg"');
html = html.replace(/href="\.\/favicon-[^"]*\.png"/g, 'href="favicon.png"');
html = html.replace(/href="\.\/favicon-[^"]*\.ico"/g, 'href="favicon.ico"');

// Normalize image paths
html = html.replace(/src="\/images\//g, 'src="images/');
html = html.replace(/href="\/assets\//g, 'href="assets/');

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html successfully updated to uncorrupted standalone React build!');
