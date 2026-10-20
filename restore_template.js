import fs from 'fs';

fs.copyFileSync('template.html', 'index.html');
console.log('Restored index.html from template.html for Vite compilation.');
