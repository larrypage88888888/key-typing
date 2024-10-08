# 练习应用程序

这是一个基于Next.js的练习应用程序，旨在帮助用户通过键盘输入练习提高打字速度和准确性。用户可以选择不同的练习类型和子类型，系统会根据选择生成相应的目标单词或字符序列。

## 功能

- **选择练习类型和子类型**：用户可以选择不同的练习类型（如编程练习、单词练习等）和子类型（如Python、JavaScript、初级词汇等）。
- **生成目标单词**：根据用户选择的类型和子类型，系统会生成相应的目标单词或字符序列。
- **实时统计**：在用户输入过程中，系统会实时统计正确、错误和总输入次数，并计算准确率。
- **键盘高亮**：根据用户当前需要输入的字符，高亮显示虚拟键盘上的相应按键。
- **指法提示**：根据当前需要输入的字符，提供相应的指法提示。
- **关卡导航**：用户可以通过按钮导航到上一关或下一关。
- **快捷键**：支持通过键盘快捷键重新开始或进入下一关。

## 文件结构

- `pages/practice.js`：主要的练习页面，包含所有的逻辑和UI组件。
- `styles/Practice.module.css`：练习页面的样式文件。
- `data.json`：从远程下载的文件，包含练习所需的数据。

## 安装和运行

1. **克隆仓库**：
    ```bash
    git clone https://github.com/yourusername/practice-app.git
    cd practice-app
    ```

2. **安装依赖**：
    ```bash
    npm install
    ```

3. **下载远程文件**：
    ```bash
    wget -O data.json https://example.com/path/to/remote/file.json
    ```
    或者使用 `curl`：
    ```bash
    curl -o data.json https://example.com/path/to/remote/file.json
    ```

4. **运行开发服务器**：
    ```bash
    npm run dev
    ```

5. **在浏览器中打开**：
    打开浏览器并访问 [http://localhost:3000](http://localhost:3000)

## 使用说明

1. **选择练习类型和子类型**：
    - 在URL中指定`type`和`subType`参数，例如：`/practice?type=编程练习&subType=Python`
    - 页面会根据选择自动生成目标单词或字符序列。

2. **开始练习**：
    - 在输入框中输入目标单词或字符序列。
    - 系统会实时统计输入的正确、错误和总次数，并计算准确率。

3. **导航关卡**：
    - 使用页面底部的“上一关”和“下一关”按钮导航到不同的关卡。
    - 使用快捷键`R`重新开始当前关卡，使用`Enter`进入下一关。

## 贡献

欢迎贡献代码和提出建议！请提交Pull Request或创建Issue。

## 许可证

本项目采用MIT许可证。详情请参阅 [LICENSE](LICENSE) 文件。

## TODO:
- [ ] 统一顶部导航条（首页、学习、练习、排行榜、关于、联系）
- [ ] 单词、唐诗宋词都从api获取
- [ ] 单词、唐诗宋词，添加音标、读音、翻译、解释。
- [ ] 添加关卡导航，统一放在顶部
- [ ] 修复跳关时type不会变的问题
- [ ] 添加练习时间统计
- [ ] 添加练习准确率统计
- [ ] 添加练习速度统计
- [ ] 添加练习排行榜
- [ ] 添加练习历史记录
- [ ] 添加练习模式选择
- [ ] 添加练习难度选择
- [ ] 添加练习字数选择

