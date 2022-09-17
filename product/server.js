const app =require("express")();
const PORT = 5002;

app.get('/',(req,res,next)=>{ res.send("product services."); })
app.get('/product_list',(req,res,next)=>{
const data = [{
    product_id:100,
    product:'laptop',
    price:300,
},
{
    product_id:106,
    product:'TV',
    price:500,
},
{
    product_id:108,
    product:'AC',
    price:700,
}];

res.status(200).json({
    status:200,
    count:data.length,
    data:data
});

})


app.listen(PORT,()=>{ console.log(`order service is running on:${PORT}`)});
