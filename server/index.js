const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'shopdb'
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
    const sqlInsert = 'INSERT INTO shopdb.shop_cart (itemname, itemid, itemprice) VALUES ("ball", 1234567, 5)';
    db.query(sqlInsert, (err, result) => {
        res.send(result);

    })
    console.log("reach to sever");
})

app.get("/api/get", (req, res) => {
    const sqlSelect = 'SELECT * FROM shopdb.shop_cart';
    db.query(sqlSelect, (err, result) => {
        if (err) { console.log(err) }
        else {
            console.log(result);
            res.send(result);

        }

    })

})

app.post("/api/insert", (req, res) => {
    console.log("app.post");
    const itemname = req.body.itemname;
    const itemid = req.body.itemid;
    console.log(itemname, itemid)
    const sqlInsert = 'INSERT INTO shopdb.shop_cart (itemname, itemid, itemprice) VALUES ("' + itemname + '", ' + itemid + ', 5)';
    db.query(sqlInsert, (err, result) => {
        console.log(result);
    })
    console.log("reach to sever");


})

app.delete("/api/delete/:id", (req, res) => {
    console.log("app.delete, index.js")
    console.log(req.params)
    const name = req.params.id
    console.log("!!!!!!!", name)
    const sqlDelete = 'DELETE FROM shopdb.shop_cart WHERE itemid = ?';
    db.query(sqlDelete, name, (err, result) => {
        if (err) { console.log(err) }
        else { console.log(result); }
    }
    )
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})