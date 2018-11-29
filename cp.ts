import * as fs from 'fs';

const base = './HelloGitHub/content';
const dirs = fs.readdirSync(base).filter(dir => dir.length < 5);
dirs.forEach(dir => {
  const [filename] = fs.readdirSync(`${base}/${dir}`);
  fs.copyFileSync(`${base}/${dir}/${filename}`, `./articles/${filename}`);
});

const articleBase = './articles';
const articles = fs.readdirSync(articleBase);

articles.forEach(a => {
  const content = fs.readFileSync(`${articleBase}/${a}`).toString();
  const [title, ...lines] = content.split('\n');
  const newFileName = title.replace('# ', '');
  fs.writeFileSync(`${articleBase}/${newFileName}.md`, lines.join('\n'));
  fs.unlinkSync(`${articleBase}/${a}`);
});
