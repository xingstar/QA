1、测试核心概念
单元测试
性能测试
安全测试
功能测试

2、npm init -y 确认一下本地的包  卸载包可以用 npm remove 包名，比npm uninstall 包名 卸载的更干净
npm 之前的问题是本地装了一个包，后来包升级了，就可能导致本地运行错误，解决的方案就是 本地加了一个锁生成了package-lock.json文件，锁住这个包。

3、测试环境 karma 
项目中安装karma  npm install karma --save-dev 
安装全局命令，为了可以使用karma命令，不然只能这样使用karma命令./node_modules/karma/bin/karma start。   npm install -g karma-cli
karma命令一般是成对的比例 需要断言安装的包  npm install karma-jasmine jasmine-core --save-dev
执行karma-init 创建karma-conf.js文件（注 PhantomJS是无头浏览器） 我们使用无头浏览器就是没有界面的浏览器，将来为了集成到cli的自动化的部署环境里，所以karma-conf.js文件里的singleRun:true， 如果browsers要用chrome的话，需要装的包是 npm install karma-chrome-launcher --save-dev  另：当文件里require时，但是报错 ReferenceError: Can`t find variable: require 可以考虑是否是不支持 es6的写法
因为代码中可能有分支判断，所以在断言里也需要覆盖到所有的分支，就需要测试覆盖率检查的包 npm install karma-coverage --save-dev 。在karma-conf.js文件中需要注意的配置有
preprocessors: {
    './tests/**/*.js':['coverage'] // 是要对哪些文件进行测试覆盖率的检查
},
// 测试报表要放到哪里去，一般都是当前项目根目录下的docs文件夹里去
coverageReporter: {
    type: 'html',
    dir: './docs/coverage' 
},
// 覆盖率的报告, 默认的是在系统的进度里 progress
reporters:['progress','coverage'],

执行了karma start之后就是在项目的docs文件夹下生成一个coverage文件，去里面找index.html 这就是测试覆盖率的报告
注：写的window.add 的函数定义写成了ES6的格式，PhantomJS这边对ES6支持的不好，还得配置karma-webpack的支持
4、npm 和yarn的命令的比较,yarn有离线缓存，如果装过一个包，下次秒装，虽然npm也有缓存，但不如yarn

5、npm install xxx --save-dev / --save    save和save-dev是有区别的，dev是开发时用的包，上线时用到的是save

6、发布包 npm public 一般先要登录 npm login

7、测试e2e(端对端——就是需要人肉去点的一些功能)需要的自动化测试工具是 selenium-webdriver，npm install selenium-webdriver --save 在项目tests文件夹下创建e2e的测试文件 baidu.spec.js这个是测试百度的， 在package.json的script中 加入 "e2e" : "node ./tests/e2e/baidu.spec.js"
// baidu.spec.js文件的内容
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

因为上述代码中是在firefox浏览器进行测试的，所以使用 selenium-webdriver，还需要装Firefox的驱动 ，根据电脑的不同选择不同的包
下载下来解压缩出来一个 geckodriver的运行框放到项目的跟目录下，然后把压缩包删掉就可以了， 之后执行的就是 npm run e2e,正常情况就会看到启动了一个Firefox窗口，打开 https://www.baidu.com/页面，在搜索框里出现了’javascript‘然后跳转了页面。演示完之后 Firefox就会自动关闭。

8、nightwatch.js的示例

9、Rize:https://rize.js.org/zh-CN/#%E7%89%B9%E6%80%A7
在项目的e2e里建一个测试github网址的文件 git.spec.js 
安装 npm install --save-dev puppeteer rize
// git.spec.js 文件里的内容
const Rize = require('rize');
const rize = new Rize();
rize
  .goto('https://github.com/')
  .type('input.header-search-input', 'node')
  .press('Enter')
  .waitForNavigation()
  .assertSee('Node.js')
  .end()  // 别忘了调用 `end` 方法来退出浏览器！

这个也是无头的浏览器，所以在测试的时候是默默的做，如果有错就会报错

10、单测jest 需要安装的包 npm install jest-dom jest --save-dev
在项目中创建src文件夹 下创建index.js 和index.spec.js  
因为我们是单测react的组件，所以需要装npm install --save-dev react-testing-library react-dom
此时会报<App />这里出错，所以需要装 npm install react-scripts --save-dev // 自带了jest所以上面就不要装jest了
这时在package.json的script里命令改为 "unit-react": "react-scripts test --env=jsdom"; 标注环境为jsdom环境

之后又遇到了依赖树的问题，说是依赖webpack如果不想装，就在项目里建了一个.env的文件，里面写一句 SKIP_PREFLIGHT_CHECK=true

11、 f2etest  https://github.com/alibaba/f2etest
12、自动化比较css  phantomCSS
13、backstop.js 安装全局的backstop.js  npm install backstopjs -g    之后运行backstop init 
backstop.json里不能写注释
backstop_data文件夹里的bitmaps_test是运行时生成的，可以删掉重新运行
设计图可以放到backstop_data文件夹下的bitmaps_reference文件夹下
14、测试异步代码：mocha   而 mochawesome是生成报表用的  跟目录下创建 mochaRunner.js, tests文件夹下创建service文件夹，下创建router.spec.js
需要装的包有 npm install mocha --save   npm install --save-dev mochawesome
执行命令 node mochaRunner.js

15、1.单元测试 小的函数
2.单元测试 小的组件
3.接口测试 确保数据
4.e2e测试  确保功能
5.UI测试   确保样式
6.f2etest 确保多浏览器下的实际环境  【冒烟测试】
