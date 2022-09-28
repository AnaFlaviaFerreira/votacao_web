const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/vote', (req, res) => {
    const { candidateNumber } = req.body;
    const candidate = router.db
        .get('candidates')
        .find({ number: candidateNumber })
        .value();

    if (candidate) {
        router.db
            .get('candidates')
            .find({ number: candidateNumber })
            .assign({ votes: candidate.votes + 1 })
            .write();
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
});

server.use(router);
server.listen(3001, () => {
    console.log('JSON Server is running');
});
