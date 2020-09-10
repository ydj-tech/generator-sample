// Generator的核心入口
// 需要到出一个继承自Yeoman Generator 的类型
// Yeoman Generator 在工作时会自动调用我们在此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如文件写入
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting() {
        // Yeoman 在询问用户环节会自动调用此方法
        // 在此方法中可以调用父类的 prompt() 方法发出对用户的命令行询问
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                defuault: this.appname // 项目目录的生成名称
            }
        ])
        .then(answers => {
            // answers = { name: 'user',input: 'value'}
            this.answers = answers
        })
    }
    writing() {
        // Yeoman 自动在生成文件阶段调用此文件
        // 我们这里往项目目录中写入文件
        // 这里的fs模块比原生的功能要强大
        // this.fs.write(
        //     this.destinationPath('temp.txt'),
        //     Math.random().toString()
        // )
        // 模板文件路径
        const tml = this.templatePath('bar.html');
        // 输出目标路径
        const output = this.destinationPath('bar.html');
        // 模板数据上下文
        // const context = { title: '长城软件', success: false };
        const context = this.answers
        this.fs.copyTpl(tml, output, context)
    }
}