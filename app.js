// express 모듈을 가져옴
const express = require('express');

// express 애플리케이션을 만듬
const app = express();

app.use(express.json());

//라우팅 설정
app.get('/a', (req, res)=>{
  res.status(200).send('Get A'); 
});

app.post('/a', (req, res)=>{
  res.status(200).send('Post A');
});

app.get('/a/:person', (req, res) => {
    const person = req.params.person;
    res.status(200).send(person);
});

// 서버가 3000번 포트에서 대기하도록 설정
app.listen(3000, () => {
  console.log('서버가 http://localhost:3000 에서 대기 중입니다.');
});
