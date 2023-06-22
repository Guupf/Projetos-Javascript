document.addEventListener('DOMContentLoaded', () => {
  const dropdownOptions = document.querySelectorAll('.optionsNavLeft li')
  const textBox = document.querySelector('.textBox')
  const dropdownButton = document.querySelector('.dropdownButton')

  dropdownOptions.forEach(option => {
    option.addEventListener('click', () => {
      textBox.value = option.textContent
      dropdownButton.textContent = option.textContent
      dropdownButton.classList.remove('active')
    })
  })

  dropdownButton.addEventListener('click', () => {
    dropdownButton.classList.toggle('active')
  })

  textBox.addEventListener('click', () => {
    dropdownButton.classList.toggle('active')
  })
})

const buttonBanner = document.getElementById('buttonBanner')
const buttonBannerSpan = buttonBanner.querySelector('span')

buttonBanner.addEventListener('mouseover', () => {
  buttonBanner.style.backgroundColor = 'white'
  buttonBannerSpan.style.color = 'red'
})

buttonBanner.addEventListener('mouseout', () => {
  buttonBanner.style.backgroundColor = '#e0103a'
  buttonBannerSpan.style.color = 'white'
})
