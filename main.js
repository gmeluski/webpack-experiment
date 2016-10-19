import express from 'express';
import http from 'http';
import site from './controllers/site';
import apiRoutes from './routes/api';

export default class Server {
  constructor() {
    this.app = null;
  }

  start() {
    let app = express();
    let server = http.Server(app);

    app.use("/api", apiRoutes)
    app.get('*', site)

    return new Promise((fulfill, reject) => {
      server.listen(3000, (err) => {
        if (err) {
          return reject(err);
        }
        fulfill();
      })

    })
  }

}
