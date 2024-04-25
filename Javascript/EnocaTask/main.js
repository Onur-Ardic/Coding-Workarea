const sliderİtemTitle = document.querySelectorAll('.carouselTitle')
const author = document.querySelectorAll('.author')
const newsDate = document.querySelectorAll('.date')
const cardWrap = document.querySelector('.newsCardWrapper')
const newsTitle = document.getElementById('title')

const apiKey = 'fb44ce1bd88740d4990d843834598291'

async function SliderNews() {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < sliderİtemTitle.length; i++) {
        sliderİtemTitle[i].innerHTML = data.articles[i].title
        author[i].innerHTML = data.articles[i].author
        newsDate[i].innerHTML = data.articles[i].publishedAt
      }

      data.articles.forEach((element) => {
        const image = element.urlToImage
          ? `
        <div class="card-image">
        <img src=${element.urlToImage} alt="card-image" class="img-fluid h-100" />
        </div>  `
          : ''

        const newElement = `
      <div class="card">
       ${image}
      <div class="card-title p-3">
        <h3 class="card-title-text">
         ${element.title}
        </h3>

        <p class="date">${element.publishedAt}</p>
      </div>
    </div>
      `
        cardWrap.innerHTML += newElement
      })
    })
}

SliderNews()

//---------Category API------------
const selectCountry = document.getElementById('country')
const sportsBtn = document.getElementById('sports')
sportsBtn.addEventListener('click', () => {
  cardWrap.innerHTML = ''
  newsTitle.innerHTML = 'Spor Haberleri'
  const country = selectCountry.value
  const response = fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=sports&apiKey=${apiKey}`,
  )
    .then((response) => response.json())
    .then((data) => {
      data.articles.forEach((element) => {
        const image = element.urlToImage
          ? `
          <div class="card-image">
          <img src=${element.urlToImage} alt="card-image" class="img-fluid h-100" />
          </div>  `
          : ''

        const newElement = `
        <div class="card">
         ${image}
        <div class="card-title p-3">
          <h3 class="card-title-text">
           ${element.title}
          </h3>

          <p class="date">${element.publishedAt}</p>
        </div>
      </div>
        `
        cardWrap.innerHTML += newElement
      })
    })
})

//----------------Health Apı------------------------
const healtBtn = document.getElementById('health')
healtBtn.addEventListener('click', () => {
  cardWrap.innerHTML = ''
  newsTitle.innerHTML = 'Sağlık Haberleri'
  const country = selectCountry.value
  const response = fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=health&apiKey=${apiKey}`,
  )
    .then((response) => response.json())
    .then((data) => {
      data.articles.forEach((element) => {
        const image = element.urlToImage
          ? `
          <div class="card-image">
          <img src=${element.urlToImage} alt="card-image" class="img-fluid h-100" />
          </div>  `
          : ''

        const newElement = `
        <div class="card">
         ${image}
        <div class="card-title p-3">
          <h3 class="card-title-text">
           ${element.title}
          </h3>

          <p class="date">${element.publishedAt}</p>
        </div>
      </div>
        `
        cardWrap.innerHTML += newElement
      })
    })
})

//----------------Tech Apı------------------------
const technologyBtn = document.getElementById('technology')
technologyBtn.addEventListener('click', () => {
  cardWrap.innerHTML = ''
  newsTitle.innerHTML = 'Teknoloji Haberleri'
  const country = selectCountry.value
  const response = fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=technology&apiKey=${apiKey}`,
  )
    .then((response) => response.json())
    .then((data) => {
      data.articles.forEach((element) => {
        const image = element.urlToImage
          ? `
          <div class="card-image">
          <img src=${element.urlToImage} alt="card-image" class="img-fluid h-100" />
          </div>  `
          : ''

        const newElement = `
        <div class="card">
         ${image}
        <div class="card-title p-3">
          <h3 class="card-title-text">
           ${element.title}
          </h3>

          <p class="date">${element.publishedAt}</p>
        </div>
      </div>
        `
        cardWrap.innerHTML += newElement
      })
    })
})

//--------------------------------------
const searchİnput = document.getElementById('searchİnput')
const searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', (e) => {
  e.preventDefault()
  cardWrap.innerHTML = ''
  newsTitle.innerHTML = `${searchİnput.value} ile ilgili haberler`
  const country = selectCountry.value
  const searchText = searchİnput.value

  const response = fetch(
    `https://newsapi.org/v2/top-headlines?q=${searchText}&country=${country}&apiKey=${apiKey}`,
  )
    .then((response) => response.json())
    .then((data) => {
      data.articles.forEach((element) => {
        const image = element.urlToImage
          ? `
          <div class="card-image">
          <img src=${element.urlToImage} alt="card-image" class="img-fluid h-100" />
          </div>  `
          : ''

        const newElement = `
        <div class="card">
         ${image}
        <div class="card-title p-3">
          <h3 class="card-title-text">
           ${element.title}
          </h3>

          <p class="date">${element.publishedAt}</p>
        </div>
      </div>
        `
        cardWrap.innerHTML += newElement
      })
    })
})
