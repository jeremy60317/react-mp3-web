function getRandomBackgroundColor() {
  const colorCode = '0123456789ABCDEF'.split('')
  let color = ''
  for (let i = 0; i < 4; i++) {
    color += colorCode[Math.floor(Math.random() * 16)]
  }
  return `#${color}bb`
}

export { getRandomBackgroundColor }
