// Express 모듈을 불러옵니다.
const express = require('express');

// Express 애플리케이션을 생성합니다.
const app = express();

app.use(express.json());

// 라우팅 설정
app.get('/swag', (req, res)=>{
  res.status(200).send('Get swag');
});

app.post('/swag', (req, res)=>{
  res.status(200).send('Post swag');
});

app.get('/swag/:person', (req, res) => {
  const person = req.params.person;
  res.status(200).send(person);
});
// 지우쌤은 swag있고 power있음

// 서버가 3000번 포트에서 요청을 기다리도록 설정
app.listen(3000, () => {
  console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});
