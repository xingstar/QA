const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build(); // 在firefox进行测试
  try {
    await driver.get('https://www.baidu.com/'); // 测试的网址是百度
    await driver.findElement(By.name('wd')).sendKeys('javascript', Key.RETURN); // 输入框的name是wd, 搜索的内容是 javascript, 然后是回车键
    await driver.wait(until.titleIs('javascript_百度搜索'), 1000); // 之后网页的title是javascript_百度搜索， 等待时长 1000
  } finally {
    await driver.quit(); // 最后记得关闭
  }
})();