const Express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const pool = mysql.createPool({
	connectionLimit : 10,
	host: 'classmysql.engr.oregonstate.edu',
	user: 'cs340_salasma',
	password: '4183',
	database:"cs340_salasma"
})



const app = Express()

app.use(Express.static('diseaseconvter-main'))

app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/diseaseconvter-main/example/index.html')
})

app.get('/profile',(req,res)=>{
	res.sendFile(__dirname+'/diseaseconvter-main/example/contact.html')	
})

app.get('/loggedin',(req,res)=>{
	res.sendFile(__dirname+'/diseaseconvter-main/example/loggedin.html')	
})
app.get('/signup',(req,res)=>{
	res.sendFile(__dirname+'/diseaseconvter-main/example/usersignup.html')	
})

app.listen(1499)
