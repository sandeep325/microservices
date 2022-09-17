const app = require("express")();
const gateway = require("fast-gateway");
PORT = 5000;


const server = gateway({
    routes: [
        {
      prefix: '/product',
      target: 'http://127.0.0.1:5002',
      hooks:{}
    },
    {
        prefix: '/order',
        target: 'http://127.0.0.1:5001',
        hooks:{}
      },

]
  })

  server.get('/getway',(req,res)=>{ res.send('');})
  server.start(PORT).then((result) => {
    console.log(`API getway is running on: ${PORT}`);
  }).catch((err) => {
    console.log(err);
  });