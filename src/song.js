import animeImg from './static/animaMusic.png'

const songs = [
  {
    name: '剛好遇見你',
    music: 'http://ting6.yymp3.net:82/new27/liyugang6/6.mp3',
  },
]

const classicsSongList = [
  {
    name: '剛好遇見你',
    music: 'http://ting6.yymp3.net:82/new27/liyugang6/6.mp3',
    songTime: '03:19',
    image:
      'https://img.rapzh.com/rapgod.swiftcarrot.com/34bc0b74d145ee61edbe570f4503b686cedf2f28_400x400.jpg',
    artist: '李玉剛',
  },
  {
    name: '我們不一樣',
    music: 'http://ting6.yymp3.net:82/new27/dazhuan/1.mp3',
    songTime: '04:30',
    image: 'https://i1.sndcdn.com/artworks-000240601203-8kx4fh-t500x500.jpg',
    artist: '大壯',
  },
]

const ktvMustSingSongList = [
  {
    name: '我們不一樣',
    music: 'http://ting6.yymp3.net:82/new27/dazhuan/1.mp3',
    songTime: '04:30',
    image: 'https://i1.sndcdn.com/artworks-000240601203-8kx4fh-t500x500.jpg',
    artist: '大壯',
  },
  {
    name: '剛好遇見你',
    music: 'http://ting6.yymp3.net:82/new27/liyugang6/6.mp3',
    songTime: '03:19',
    image:
      'https://img.rapzh.com/rapgod.swiftcarrot.com/34bc0b74d145ee61edbe570f4503b686cedf2f28_400x400.jpg',
    artist: '李玉剛',
  },
]

const animeSongList = [
  {
    name: '剛好遇見你',
    music: 'http://ting6.yymp3.net:82/new27/liyugang6/6.mp3',
    songTime: '03:19',
    image:
      'https://img.rapzh.com/rapgod.swiftcarrot.com/34bc0b74d145ee61edbe570f4503b686cedf2f28_400x400.jpg',
    artist: '李玉剛',
  },
]

const album = [
  {
    name: '經典傳唱',
    songList: classicsSongList,
    image: animeImg,
  },
  {
    name: 'KTV必唱',
    songList: ktvMustSingSongList,
    image: animeImg,
  },
  {
    name: '動漫歌曲',
    songList: animeSongList,
    image: animeImg,
  },
]

const myAlbum = []

export { songs, album, myAlbum }
