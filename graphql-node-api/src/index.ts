import * as http from 'http';
import App from './app';

const server = http.createServer(App);

server.listen(3000);
server.on('listening', () => console.log('Listening on port 3000.....'));