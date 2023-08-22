const { execSync } = require('child_process');
const fs = require('fs');
const ghpages = require('gh-pages');

try {
  console.log('Building the project...');
  execSync('npm install && npm run generate', { stdio: 'inherit' });

  console.log('Creating .nojekyll and CNAME files...');
  fs.writeFileSync('dist/.nojekyll', '');
  fs.writeFileSync('dist/CNAME', 'khusyasy.com');

  console.log('Deploying to GitHub Pages...');
  ghpages.publish('dist', { dotfiles: true }, function (err) {
    if (err) {
      console.error(`GitHub Pages Error: ${err}`);
    } else {
      console.log('Deployment to GitHub Pages completed successfully!');
    }
  });
} catch (error) {
  console.error(`Build Error: ${error.message}`);
}
