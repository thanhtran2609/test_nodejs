const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
    return res.send("Hello 500 anh em")
});
app.listen(port, () => console.log("app listen at http://localhost:3000"));