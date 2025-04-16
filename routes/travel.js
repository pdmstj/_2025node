const express = require('express');
const Router = express.Router('');
const db = require('../db_conn')

Router.get('/', (req, res) => {
    const query = 'SELECT id, name FROM travelList';
    db.query(query, (err, results) => {
        if (err) {
            console.error('데이터베이스 쿼리 실패:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const travelList = results;
        res.render('travel', { travelList });
    });
});


Router.get('/:id', (req, res) => {
    const travelId = req.params.id;
    const query = 'SELECT * FROM travelList WHERE id = ?';
    db.query(query, [travelId], (err, results) => {
        if (err) {
            console.error('데이터베이스 쿼리 실패:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('여행지를 찾을 수 없습니다.');
            return;
        }
        const travel = results[0];
        res.render('travelDetail', { travel });
    });
});


Router.get('/:id/edit', (req, res) => { // 수정 폼 렌더링 라우트 추가
    const travelId = req.params.id;
    const query = 'SELECT * FROM travelList WHERE id = ?';
    db.query(query, [travelId], (err, results) => {
        if (err) {
            console.error('데이터베이스 쿼리 실패:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('여행지를 찾을 수 없습니다.');
            return;
        }
        const travel = results[0];
        res.render('editTravel', { travel });
    });
});


// 여행지 추가 (POST /travel)
Router.post('/', (req, res) => {
    const { name } = req.body;
    const query = 'INSERT INTO travelList (name) VALUES (?)';
    db.query(query, [name], (err, results) => {
        if (err) {
            console.error('데이터베이스 쿼리 실패:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.redirect('/travel');
    });
});


// 여행지 수정 (PUT /travel/:id)
Router.put('/:id', (req, res) => {
    const travelId = req.params.id;
    const { name } = req.body;
    const query = 'UPDATE travelList SET name = ? WHERE id = ?';
    db.query(query, [name, travelId], (err, results) => {
        if (err) {
            console.error('데이터베이스 쿼리 실패:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.render('updateSuccess'); // 수정 성공 페이지로 렌더링
    });
});


// 여행지 삭제 (DELETE /travel/:id)
Router.delete('/:id', (req, res) => {
    const travelId = req.params.id;
    const query = 'DELETE FROM travelList WHERE id = ?';
    db.query(query, [travelId], (err, results) => {
        if (err) {
            console.error('데이터베이스 쿼리 실패:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.render('deleteSuccess'); // 삭제 성공 페이지로 렌더링
    });
});


Router.get('/add', (req, res) => {
    res.render('addTravel');
});

module.exports=Router