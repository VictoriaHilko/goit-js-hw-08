import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
//ініціалізували плеєр
const player = new Player(iframe);


function gerCuttentTime (event){
    localStorage.setItem("videoplayer-current-time", event.seconds);
}

//відстежуємо подію timeupdate - оновлення часу відтворення
player.on('timeupdate',
    throttle(gerCuttentTime, 1000));

//отримали час, на якому зупинилось відео після оновлення сторінки
const pauseTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(pauseTime || 0);