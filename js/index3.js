// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}
const headerLogoConatiner = document.querySelector('.header__logo-container')
headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})
document.getElementById('down').addEventListener('click', function (event) {
    event.preventDefault();
    const fileUrl = './packages/Encrypt tool.rar';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Encrypt tool.rar'; 
    link.click();
  });
    document.getElementById('downl').addEventListener('click', function (event) {
      event.preventDefault();
      const fileUrl = './packages/Encrypt tool.rar';
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'Encrypt  tool.rar'; 
      link.click();
    });