const express = require(`express`);
const app = express();

const todoData = [
    {id: 1, task: `Have breakfast`},
    {id: 2, task: `Read book`},
    {id: 3, task: `Have lunch`},
    {id: 4, task: `Start meeting`},
];

app.set(`views`, `../Views`);

app.set(`view engine`, `pug`);

app.use(function(err, req, res, next) {
    // Do logging and user-friendly error message display
    console.error(err);

    res.render(`500`);
});


app.get(`/`, function(req, res) {
    res.render(`index`, { todoList: todoData });
});

const server = app.listen(8000, function() {
    console.log(`Node server running...press ctrl-c to terminate`);
});