const body = document.querySelector('body')
const userIcon = document.querySelector('.user')
const cryptoDashboard = document.querySelector('#cryptoDashboard')

const cryptoInfo = document.querySelectorAll('#cryptoInfo')
const cryptoNumber = document.querySelectorAll('#cryptoNumber')
const cryptoName = document.querySelectorAll('#cryptoName')
const cryptoPrice = document.querySelectorAll('#cryptoPrice')
const cryptoChange = document.querySelectorAll('#cryptoChange')

const fetchCryptoData = async () => {

  try {
    const config = {
      headers:
      {
        Accept: 'application/json',
        'x-cg-demo-api-key': 'CG-pweCeHuWXX9ni58BjogPQnSh'
      },
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
        sparkline: false
      }
    }

    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets/', config)
    const coins = res.data
    console.log(coins)
  }
  catch (error) {
    console.log(`Error:${error}`)
  }
}