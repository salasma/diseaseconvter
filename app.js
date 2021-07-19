const Express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const pool = mysql.createPool({
	connectionLimit : 10,
	host: 'classmysql.engr.oregonstate.edu',
	user: 'cs290_salasma',
	password: '4183',
	database:"cs290_salasma"
})



const app = Express()

app.use(Express.static('public'))

app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/public/html/index.html')
})

app.get('/edit',(req,res)=>{
	res.sendFile(__dirname+'/public/html/edit.html')	
})


app.get("/getdata",(req,res)=>{
	let sql = `select * from sport`
	pool.query(sql,(error,result,fields)=>{
		res.json(result)
	})
})
