const app =require("express")();
const PORT = 5001;

app.get('/',(req,res,next)=>{ res.send("order services."); })
app.get('/order_list',(req,res,next)=>{
const data = [{
    order_id:333,
    customer:'new customer',
    qantity:3,
},
{
    order_id:339,
    customer:'sandeep',
    qantity:1,
},
{
    order_id:323,
    customer:'test',
    qantity:10,
}];

res.status(200).json({
    status:200,
    count:data.length,
    data:data
});

})


app.listen(PORT,()=>{ console.log(`order service is running on:${PORT}`)});
