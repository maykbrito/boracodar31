import { loadingMessage } from "./loading";

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.YTPlayer = null

export function getVideoId(url) {
  const [part1, part2] = url.split('?v=')
  const [videoId] = part2.split("&")
  return videoId
}

export function loadVideo(url) {
  loadingMessage('Carregando vídeo do Youtube')

  return new Promise((resolve, reject) => {
    window.YTPlayer = new YT.Player('youtubeVideo', {
      videoId: getVideoId(url),
      events: {
        'onReady': () => resolve()
      }
    })
  })
}