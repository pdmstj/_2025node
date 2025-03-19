// express 모듈을 가져옴
const express = require('express');

// express 애플리케이션을 만듬
const app = express();

app.use(express.json());

// 라우팅 파일 불러오기
const routes = require('./routes/a');

// 라우팅을 설정
app.use('/a', aRoutes);

// 서버가 3000번 포트에서 대기하도록 설정
app.listen(3000, () => {
  console.log('서버가 http://localhost:3000 에서 대기 중입니다.');
});
