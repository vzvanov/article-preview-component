let isUp = false;
let animationInProgress = false;
const ANIMATION_TIME = 500;

const popUp = document.querySelector('.popUp');
popUp.onclick = (e) => {
  e.stopPropagation();
}

const share = document.querySelector('.person__share');
share.onclick = () => {
  if (animationInProgress) return;
  animationInProgress = true;
  setTimeout(() => {
    animationInProgress = false;
  }, ANIMATION_TIME);

  popUp.style.overflow = 'hidden';
  if (isUp) {
    popUp.classList.remove('pop_up');
    popUp.classList.add('pop_down');
    setTimeout(() => {
      popUp.style.display = 'none';
      popUp.style.overflow = 'visible';
    }, ANIMATION_TIME);
  } else {
    popUp.classList.remove('pop_down');
    popUp.classList.add('pop_up');
    popUp.style.display = 'flex';
    setTimeout(() => {
      popUp.style.overflow = 'visible';
    }, ANIMATION_TIME);
  }
  isUp = !isUp;
}