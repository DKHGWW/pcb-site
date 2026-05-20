const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// 模拟数据 API（为了体现动态，您也可以直接返回静态文件）
app.get('/api/info', (req, res) => {
  res.json({ message: '欢迎访问四川井明电子动态网站' });
});

// 所有其他请求返回 index.html（支持前端路由）
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});