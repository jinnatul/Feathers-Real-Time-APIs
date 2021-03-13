import io from 'socket.io-client';
import feathers from '@feathersjs/client';

const socket = io('https://feathers-real-api.herokuapp.com');
const app = feathers();

app.configure(feathers.socketio(socket));

export default app;
