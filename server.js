const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const dotenv=require('dotenv')
const app = express()
dotenv.config()
mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true, useUnifiedTopology: true
})
app.use(express.static("Public"));
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  res.render('index', { shortUrl:null  })
})

app.post('/shortUrls', async (req, res) => {
  let url = await ShortUrl.findOne({ full:req.body.fullUrl });
  if (url) {
    res.render('index', { shortUrl:url })
  } else {
    const newUrl= await ShortUrl.create({ full: req.body.fullUrl })
    res.render('index', { shortUrl:newUrl })
  }
})

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)
  res.redirect(shortUrl.full)
})

app.listen(process.env.PORT || 5000);