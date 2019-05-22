const Mocha = require('mocha');

const mocha = new Mocha({
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: './docs/mochawesome-reporter'
    }
});

mocha.addFile('./tests/service/router.spec.js');// 测试的文件存放的位置
mocha.run(function(){
    console.log('done');
    process.exit(); // 参数是0 表示正常退出，是1表示异常退出
})