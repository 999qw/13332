// Giscus评论系统配置
// 请按照以下步骤配置：
// 1. 在GitHub上创建一个仓库
// 2. 在仓库设置中启用Discussions
// 3. 安装Giscus App: https://github.com/apps/giscus
// 4. 访问 https://giscus.app/ 生成配置代码
// 5. 将生成的配置填入下方

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('giscus-container');
    if (container) {
        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        
        // ===== 请替换以下配置 =====
        script.setAttribute('data-repo', '你的GitHub用户名/你的仓库名');  // 例如: zhangsan/my-blog
        script.setAttribute('data-repo-id', '');  // 从giscus.app获取
        script.setAttribute('data-category', 'Announcements');
        script.setAttribute('data-category-id', '');  // 从giscus.app获取
        // ===== 配置结束 =====
        
        script.setAttribute('data-mapping', 'pathname');
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', 'bottom');
        script.setAttribute('data-theme', 'light');
        script.setAttribute('data-lang', 'zh-CN');
        script.crossOrigin = 'anonymous';
        script.async = true;
        
        container.appendChild(script);
    }
});
