const headerNavButton = document.getElementById('navbar-button');
const headerNavExtented = document.getElementById('navbar-extented');
let display = false;

const toggleHeaderNavbar = () => {
  if (display == false) {
    openHeaderNavbar();
    display = true;
  } else {
    closeHeaderNavbar();
    display = false;
  }
};

function openHeaderNavbar() {
  if (!headerNavExtented.classList.contains("navbar-opened")) {
    headerNavExtented.classList.add("navbar-opened");
  }
}

function closeHeaderNavbar() {
  if (headerNavExtented.classList.contains("navbar-opened")) {
    headerNavExtented.classList.remove("navbar-opened");
  }
}

headerNavButton.addEventListener('click', toggleHeaderNavbar);