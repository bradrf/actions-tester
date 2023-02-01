const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const crypto = require('node:crypto');

console.log('platform:', os.platform());
console.log('run:', 7);

let ext;
switch (os.platform()) {
  case 'darwin':
    ext = 'dmg';
    break;
  case 'linux':
    ext = 'deb';
    break;
  case 'win32':
    ext = 'exe';
    break;
  default:
    console.error('unsupported platform:', os.platform());
    process.exit(1)
}

if (!fs.existsSync('release')) fs.mkdirSync('release');

const buf = crypto.randomBytes(60);
fs.writeFileSync(path.join('release', `goofy.${ext}`), buf);
