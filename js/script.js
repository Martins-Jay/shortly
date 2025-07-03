const linkForm = document.getElementById('link-form');
const input = document.getElementById('link-input');
const errMsg = document.getElementById('error-msg');

function isValidURL(str) {
  try {
    new URL(str);
    return true;
  } catch (_) {
    return false;
  }
}

const formSubmit = function (e) {
  e.preventDefault();
  const enteredValue = input.value;

  if (enteredValue === '' || !isValidURL(input.value)) {
    errMsg.innerHTML = 'Please enter a valid link';
    input.classList.add('border-red');
  } else {
    errMsg.innerHTML = '';
    input.classList.remove('border-red');
    alert('Success!');
  }
};

linkForm.addEventListener('submit', formSubmit);


const menuBtn = document.getElementById('menu-btn') 
const menuBar = document.getElementById('menu-bar')


const menuHandler = function(){
  menuBtn.classList.toggle('open');
  menuBar.classList.toggle('hidden');
  menuBar.classList.toggle('flex');
}

menuBtn.addEventListener('click', menuHandler)