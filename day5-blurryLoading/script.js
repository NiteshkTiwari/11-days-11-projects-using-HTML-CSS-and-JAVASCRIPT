let loadtext = document.querySelector('.loading');
let image = document.querySelector('.bg');

let count = 0;

let int = setInterval(blur, 30);

function blur() {
  count++;

  if (count > 99) {
    clearInterval(int)
  }

  loadtext.innerHTML = `${count}%`
  loadtext.style.opacity = scale(count, 0,100, 1, 0)

  image.style.filter = `blur(${scale(count,0,100,30,0)}px)`
}

function scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
