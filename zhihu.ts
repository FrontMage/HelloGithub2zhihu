import * as puppeteer from 'puppeteer';
import * as chalk from 'chalk';
import * as prompts from 'prompts';
import * as fs from 'fs';
const log = console.log;

const homePage = 'https://www.zhihu.com/';

function sleep(ms: number = 0): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
async function uploadArticle() {
  const cfg = {
    timeout: 30000,
    ignoreHTTPSErrors: true,
    devtools: false,
    headless: false,
    args: []
  };
  // linux上如果内核版本不够高，就不能用沙箱模式
  cfg.args = ['--no-sandbox', '--disable-setuid-sandbox'];
  const browser = await puppeteer.launch(cfg);
  // 导航至页面
  let page = await browser.newPage();
  // 启用 JavaScript 和 CSS 覆盖
  await Promise.all([page.setJavaScriptEnabled(true)]);

  log(chalk.default.green('Go to home page...'));
  await page.goto(homePage);
  await sleep(1000);
  // 点击登录按钮
  await page.click(
    '#root > div > main > div > div > div > div.SignContainer-inner > div.SignContainer-switch > span'
  );
  await sleep(1000);
  // 点击扫描二维码登录
  await page.click(
    '#root > div > main > div > div > div > div.SignContainer-inner > div.Login-content > form > div.Login-footer > span.Login-qrcode > button'
  );
  // 等待用户扫描完毕
  const valiCode = await prompts({
    type: 'text',
    name: 'valiCode',
    message: '扫描完成后请输入y'
  });
  console.log(valiCode.valiCode);
  if (valiCode.valiCode !== 'y') {
    await browser.close();
    return;
  }
  await sleep(1000);

  const articles = fs.readdirSync('./articles');
  const covers = fs.readdirSync('./covers');
  for (let idx = 0; idx < articles.length; idx++) {
    try {
      const title = articles[idx].split('.')[0];
      // 点击写文章按钮
      await page.click(
        '#root > div > main > div > div > div.GlobalSideBar > div > div > div:nth-child(1) > div > div.GlobalWrite-nav > a:nth-child(2)'
      );
      await sleep(1000);
      const pages = await browser.pages();
      const articlePage = pages[pages.length - 1];
      await articlePage.click('#Popover3-toggle');
      await sleep(100);
      await articlePage.click('#Popover3-content > div > button');
      await sleep(100);
      log(chalk.default.green('Uploading markdown'));
      // 上传文件
      const input = await articlePage.$(
        '.Modal > div > div.Modal-content > form > input[type="file"]'
      );
      await input.uploadFile(`./articles/${title}.md`);
      await articlePage.type(
        '#react-root > div > div > div.Layout-main.av-card > div:nth-child(2) > div > textarea',
        title
      );
      await sleep(3 * 60 * 1000);
      // 重试上传失败的图片
      const retryBtns = await articlePage.$$(
        '.Editable-imageUploader-retry > button'
      );
      log(chalk.default.green(`Retry all ${retryBtns.length} failed pics`));
      for (let idx = 0; idx < retryBtns.length; idx++) {
        log(chalk.default.green(`Retry ${idx + 1}th failed pics`));
        await retryBtns[idx].click();
        await sleep(10 * 1000);
      }
      log(chalk.default.green('Uploading cover...'));
      // 上传封面
      const coverInput = await articlePage.$(
        '#react-root > div > div > div.Layout-main.av-card > div.WriteCover-wrapper > div > label > input'
      );
      await coverInput.uploadFile(`./covers/${covers[idx + 1]}`);

      log(chalk.default.green('Proceed to publish'));
      // 点击发布按钮
      await articlePage.click(
        '#react-root > div > div > div.Layout-navbarHolder > header > div.Navbar-functionality > div.PublishPanel-wrapper > button'
      );
      await sleep(1000);
      // 点击下一步按钮
      log(chalk.default.green('Click next'));
      await articlePage.click(
        '#react-root > div > div > div.Layout-navbarHolder > header > div.Navbar-functionality > div.PublishPanel-wrapper > div > div > div.publish-stepOneButton > button'
      );
      await sleep(300);
      // 点击HelloGithub组织
      await articlePage.click(
        '#react-root > div > div > div.Layout-navbarHolder > header > div.Navbar-functionality > div.PublishPanel-wrapper > div > div > div.publish-content > div.publish-columnItem > label'
      );
      await sleep(300);
      // 点击确定按钮
      await articlePage.click(
        '#react-root > div > div > div.Layout-navbarHolder > header > div.Navbar-functionality > div.PublishPanel-wrapper > div > div > div.publish-buttonWrapper > button.Button.publish-button.preventCloseOnTarget'
      );
      await sleep(1000);
      await articlePage.close();
      log(chalk.default.green(`Done ${title}`));
    } catch (e) {
      log(chalk.default.red(e));
    }
  }
}

(async function() {
  await uploadArticle();
})();
