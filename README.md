# generator-sample
> 脚手架生成工具
# Yeoman
## Yeoman的使用
- 在全局范围安装 yo
```
npm install yo --global or yarn global add yo
```
- 安装对应的generator
```
npm install generator-node --global or yarn global add generator-node
```
- 通过yo运行generator
```
cd path/to/project-dir
mkdir my-module
yo node
```
- 配置package.json文件
```
yo node:cli // sub generator 生成cli工具
yarn link // link到全局
yarn // 重新安装依赖
my-module --help
```
## 使用步骤总结
- 1. 明确你的需求
- 2. 找到合适的Generator
- 3. 全局范围安装找到的Generator
- 4. 通过Yo运行对应的Generator
- 5. 通过命令行交互填写选项
- 6. 生成你所需要的项目结构
## Generator基本结构
```
generators -------------- 生成器目录
generators/app -----------默认生成器目录
generators/app/index.js---默认生成器实现
package.json --------------模块包配置文件
```
## 生成基本的generator
```
mkdir generator-sample
yarn init
yarn add yeoman-generator
yarn link
cd ..
mkdir my-proj
cd my-proj
yo sample

```