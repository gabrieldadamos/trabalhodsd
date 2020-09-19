const express = require('express')
const app = express()
const helper = require('./Helper/index')

app.get('/operacao/somar/:num1/:num2', (req, res) => {
  res.json({ 'value': helper.somar(req.params.num1, req.params.num2) });
})

app.get('/operacao/subtrair/:num1/:num2', (req, res) => {
  res.json({ 'value': helper.subtrair(req.params.num1, req.params.num2) });
})

app.get('/operacao/dividir/:num1/:num2', (req, res) => {
  res.json({ 'value': helper.dividir(req.params.num1, req.params.num2) });
})

app.get('/operacao/multiplicar/:num1/:num2', (req, res) => {
  res.json({ 'value': helper.multiplicar(req.params.num1, req.params.num2) });
})

app.get('/operacao/raiz/:num1', (req, res) => {
  res.json({ 'value': helper.raiz(req.params.num1) });
})

app.get('/operacao/potencia/:base/:expoente', (req, res) => {
  res.json({ 'value': helper.potencia(req.params.base, req.params.expoente) });
})

app.get('/operacao/aritmetica/:num1/:num2', (req, res) => {
  res.json({ 'value': helper.aritmetica(req.params.num1, req.params.num2) });
})

app.get('/operacao/harmonica/:num1/:num2', (req, res) => {
  res.json({ 'value': helper.harmonica(req.params.num1, req.params.num2) });
})

app.get('/operacao/moda/:num1/:num2/:num3/:num4/:num5/:num6', (req, res) => {
  res.json({
    'value': helper.moda(req.params.num1,
      req.params.num2,
      req.params.num3,
      req.params.num4,
      req.params.num5,
      req.params.num6
    )
  });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});