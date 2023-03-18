const textarea = document.querySelector('textarea');
const card1 = document.querySelector('.card-1');

textarea.addEventListener('input', function() {
  if (textarea.value !== '') {
    card1.style.background = 'rgba(19, 19, 19, 0.8)';   
    card1.style.border = '1px solid rgba(255, 255, 255, 0.35)';
  } else {
    // Reset the styles if the textarea is empty
    card1.style.background = '';
    card1.style.transform = '';
    card1.style.transition = '';
    card1.style.border = '';
  }
});