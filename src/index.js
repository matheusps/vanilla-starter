import './preflight.css'
import './index.css'

const pageTitle = () => {
  const introText = 'Welcome to vanilla starter 👻'
  return `<h1>${introText}</h1>`
}

const app = document.getElementById('app')

if (app) {
  app.innerHTML = `${pageTitle()}`
}
