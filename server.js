const express = require('express');
const path = require('path');
const app = express();

// build 폴더의 정적 파일 제공
app.use(express.static(path.join(__dirname, 'build')));

// 모든 경로 요청에 대해 index.html을 반환
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// 서버 포트 설정
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
