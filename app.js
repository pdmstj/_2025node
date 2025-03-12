// http 모듈을 가져옵니다.
const http = require('http');

// 서버를 만듭니다.
const server = http.createServer((req, res) => {
  // 응답 헤더 설정
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // 응답 본문
  res.end('Hello, World!\n');
});

// 서버가 3000번 포트에서 대기하도록 설정
server.listen(3000, () => {
  console.log('서버가 http://localhost:3000 에서 대기 중입니다.');
});