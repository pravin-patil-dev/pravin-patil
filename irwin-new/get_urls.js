const fs = require('fs'); 
const html = fs.readFileSync('faculty.html', 'utf8'); 
const urls = html.match(/(https?:\/\/[^\s"'<>()\\]+\.(jpg|png|jpeg|webp))/gi);
if (urls) {
  console.log([...new Set(urls)].join('\n'));
} else {
  console.log('No matches');
}
