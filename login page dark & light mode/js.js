const toggleSwitch = document.getElementById('darkmodeToggle')
const elementsToToggle = [
  document.body,
  document.getElementById('cntnWithG'),
  document.getElementById('cntnWithF'),
  document.getElementById('signInBtn'),
  document.getElementById('email'),
  document.getElementById('password'),
  document.getElementById('svg1'),
  document.getElementById('svg2')
]
const accountLinks = document.querySelectorAll('#accountProblems a')
const navLinks = document.querySelectorAll('a.nav-btn')

toggleSwitch.addEventListener('change', function () {
  const isDarkMode = this.checked

  elementsToToggle.forEach(element => {
    element.classList.toggle('dark-mode', isDarkMode)
  })

  document.getElementById('svg1').src = isDarkMode
    ? 'img/svg3.png'
    : 'img/svg1.svg'
  document.getElementById('svg2').src = isDarkMode
    ? 'img/svg4.png'
    : 'img/svg2.svg'
  ;[...accountLinks, ...navLinks].forEach(link => {
    link.classList.toggle('dark-mode', isDarkMode)
  })
})

/*const toggleSwitch = document.getElementById('darkmodeToggle')
const continueWithGButton = document.getElementById('cntnWithG')
const continueWithFButton = document.getElementById('cntnWithF')
const signInBtn = document.getElementById('signInBtn')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const svg1 = document.getElementById('svg1')
const svg2 = document.getElementById('svg2')
const accountLinks = document.querySelectorAll('#accountProblems a')

toggleSwitch.addEventListener('change', function () {
  const isDarkMode = this.checked

  document.body.classList.toggle('dark-mode', isDarkMode)
  continueWithGButton.classList.toggle('dark-mode', isDarkMode)
  continueWithFButton.classList.toggle('dark-mode', isDarkMode)
  signInBtn.classList.toggle('dark-mode', isDarkMode)
  emailInput.classList.toggle('dark-mode', isDarkMode)
  passwordInput.classList.toggle('dark-mode', isDarkMode)
  svg1.src = isDarkMode ? 'img/svg3.png' : 'img/svg1.svg'
  svg2.src = isDarkMode ? 'img/svg4.png' : 'img/svg2.svg'

  ;[...accountLinks, ...document.querySelectorAll('a.nav-btn')].forEach(
    link => {
      link.classList.toggle('dark-mode', isDarkMode)
    }
  )
})
*/
