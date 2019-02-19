const express = require(`express`);
const bodyParser = require(`body-parser`);

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

require(`../Config/db`);

app.use(function(req, res, next) {
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Methods`,
    `GET, PUT, POST, PATCH, OPTIONS `);
    res.header(`Access-Control-Allow-Headers`, `Content-Type, Authorization, Content-Length, X-Requested-With`);

    if (res.method === `OPTIONS`) {
        res.send(200);
    } else {
        next();
    }
});

const routes = require(`../API/Routes/articleListRoutes`);

routes(app);

app.listen(port, () => {
    console.log(`Server running @ http://localhost:${port}`);
});
