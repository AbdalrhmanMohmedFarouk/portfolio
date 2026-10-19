import fs from 'fs';

let html = fs.readFileSync('dist/index.html', 'utf8');

// Extract the inlined script
const scriptMatch = html.match(/<script[^>]*>([\s\S]*?)<\/script>/);

if (scriptMatch) {
  const scriptContent = scriptMatch[1];
  // Remove script from head
  html = html.replace(scriptMatch[0], '');
  // Insert script right before </body>, after <div id="root"></div>
  html = html.replace('</body>', `<script>${scriptContent}</script>\n</body>`);
}

// Normalize all asset paths to relative paths
html = html.replace(/src="\/images\//g, 'src="images/');
html = html.replace(/href="\/favicon/g, 'href="favicon');
html = html.replace(/href="\.\/favicon-[^"]*\.svg"/g, 'href="favicon.svg"');
html = html.replace(/href="\.\/favicon-[^"]*\.png"/g, 'href="favicon.png"');
html = html.replace(/href="\.\/favicon-[^"]*\.ico"/g, 'href="favicon.ico"');
html = html.replace(/href="\/assets\//g, 'href="assets/');

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html successfully updated: script moved to body after #root!');
