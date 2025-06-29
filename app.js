const body = document.querySelector('body')
const darkModeBtn = document.querySelector('#darkToggleBtn')
const logoTitle = document.querySelector('.logo h1')

const contentTable = document.querySelector('.content-table')
const cryptoDashboard = document.querySelector('#cryptoDashboard')
const cryptoDashTr = document.querySelector('#cryptoDashboardTr')
const cryptoInfos = document.querySelectorAll('#cryptoInfo')
const cryptoNumbers = document.querySelectorAll('#cryptoNumber')
const cryptoImages = document.querySelectorAll('#cryptoImg')
const cryptoNames = document.querySelectorAll('#cryptoName')
const cryptoSymbol = document.querySelectorAll('#cryptoAbbreviation')
const cryptoPriceBoxes = document.querySelectorAll('.crypto-price-box')
const cryptoPrices = document.querySelectorAll('#cryptoPrice')
const cryptoChanges = document.querySelectorAll('#cryptoChange')

// get data from crypto and display it function

const getCryptoData = async () => {

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
    for (let i = 0; i < coins.length; i++) {
      cryptoNumbers[i].innerText = coins[i].market_cap_rank
      cryptoImages[i].src = coins[i].image
      cryptoNames[i].innerText = coins[i].name
      cryptoPrices[i].innerText = coins[i].current_price
      cryptoSymbol[i].innerText = coins[i].symbol
      cryptoChanges[i].innerText = coins[i].market_cap_change_percentage_24h.toFixed(2)

      if (cryptoChanges[i].innerText < 0) {
        cryptoChanges[i].classList.add('down')
      } else {
        cryptoChanges[i].classList.add('up')
      }
    }
  }
  catch (error) {
    console.log(`Error:${error}`)
  }
}


getCryptoData()


//update crypto data every 24hrs

setInterval(() => { getCryptoData }, 1000 * 60 * 60 * 24)

//dark mode toggle

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('body-dark')
  logoTitle.classList.toggle('logo-dark')
  darkModeBtn.classList.toggle('btn-dark')
  contentTable.classList.toggle('content-table-dark')
  cryptoDashboard.classList.toggle('dashboard-dark')


  for (let i = 0; i < cryptoNumbers.length; i++) {
    cryptoNumbers[i].classList.toggle('text-dark')
    cryptoNames[i].classList.toggle('text-dark')
    cryptoPriceBoxes[i].classList.toggle('text-dark')

    if (cryptoChanges[i].innerText < 0) {
      cryptoChanges[i].classList.toggle('dark-down')
    } else {
      cryptoChanges[i].classList.toggle('dark-up')
    }
  }
})