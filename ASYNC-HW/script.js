async function getRandomChinese(length) {
  const chars = [];
  let i = 0;
  while (i < length) {
    const sign = Date.now().toString().slice(-5);
    chars.push(String.fromCharCode(sign));
    await new Promise(resolve => setTimeout(resolve, 50));
    i++;
  }
  return chars.join('');
}

async function tryFunc() {
   console.log(await getRandomChinese(4));
   console.log(await getRandomChinese(5));
   console.log(await getRandomChinese(8));
}

tryFunc();