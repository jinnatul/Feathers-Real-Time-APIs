import mongoose from 'mongoose';

// cloud connection-Str
const cloudDB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(cloudDB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(() => {
  console.log('DB connect success :)');
}).catch(() => {
  console.log('Something problem to connect DB !!!');
});
