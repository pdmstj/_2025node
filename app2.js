const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); // method-override 모듈 추가
const travelRouter = require('./routes/travel')
dotenv.config();

const app = express();
const PORT = 3000;


// EJS 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// body-parser 설정
app.use(bodyParser.urlencoded({ extended: true }));


// method-override 설정
// HTML 폼에서 PUT, DELETE 메서드를 사용할 수 있도록 지원
app.use(methodOverride('_method'));

app.use('/travel', travelRouter)

// 라우팅 설정
app.get('/', (req, res) => {
    res.render('home');
});


app.use((req, res) => {
    res.status(404).send('404');
});


// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});

