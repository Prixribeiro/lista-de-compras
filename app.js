const express = require('express')
const app = express()
const cors = require ('cors')
const bodyParser = require('body-parser')
const db = require ('./src/config/db')

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.set ('views', './src/views')

app.get("/", (req,res)=>{
    res.render('index')
})

  app.get('/lista-completa', (req,res)=>{
    db.query('SELECT * FROM lista_mercado ORDER BY produto, quantidade', (erro,resultado)=>{
        if (erro){
            res.send (erro)
        }
        res.render('lista', {lista : resultado})
    });
});

app.post('/', (req,res)=>{
  db.query('INSERT INTO lista_mercado (produto,quantidade) VALUES (?,?)', [req.body.produto , req.body.quantidade],(erro)=>{
      if (erro){
          res.send (erro)
      }
      res.redirect('/lista-completa')
  });
});
  

app.listen (3335)