import feathers from '@feathersjs/feathers';
import express from '@feathersjs/express';
import socketio from '@feathersjs/socketio';
import IdeaService from './services/IdeaService';
import './config/ImportEnv';
import './config/dbConfig';

const app = express(feathers());

// Parse JSON
app.use(express.json());

// Config socket.io realtime APIs
app.configure(socketio());

// Enable REST services
app.configure(express.rest());

// Register services
app.use('/ideas', new IdeaService());

// New connections connect to stream channel
app.on('connection', con => app.channel('stream').join(con));

// Publish events to stream
app.publish(data => app.channel('stream'));

const PORT = process.env.PORT || 3000;

app
  .listen(PORT)
  .on('listening', () => {
    console.log(`Realtime server running on port ${PORT}`);
  });