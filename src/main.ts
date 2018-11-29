import * as express from 'express';
import { join } from 'path';

const app = express();

app.use('/js', express.static(join(__dirname, '../node_modules/d3/dist')));
app.use('/js', express.static(join(__dirname, 'js')));

app.get('/', (_req, res) => res.sendFile(join(__dirname, 'views/index.html')));
app.get('/bar', (_req, res) => res.sendFile(join(__dirname, 'views/bar.html')));
app.get('/area', (_req, res) => res.sendFile(join(__dirname, 'views/area.html')));
app.get('/revenue', (_req, res) => res.sendFile(join(__dirname, 'views/revenue.html')));

app.get('/stream', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Transfer-Encoding': 'chunked'
    });

    let count = 0;

    const interval = setInterval(() => {
        if (count > 120) {
            clearInterval(interval);
            res.end();
        } else {
            res.write(JSON.stringify({
                timestamp: Date.now(),
                value: Math.floor(Math.random() * ((req.query.maxVal ? Number(req.query.maxVal) : 10) + 1))
            }));
            count++;
        }
    }, req.query.interval ? Number(req.query.interval) : 1000);
});

app.listen(8080);
