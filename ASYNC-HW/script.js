function getRandomChinese(length) {
  return new Promise(async (resolve, reject) => {
    try {
      const chars = [];
      let i = 0;
      while (i < length) {
        const sign = Date.now().toString().slice(-5);
        chars.push(String.fromCharCode(sign));
        await new Promise(resolve => setTimeout(resolve, length*50));
        i++;
      }
      resolve(chars.join(''));
    } catch (error) {
      reject(error);
    }
  });
}

getRandomChinese(4)
  .then(result => console.log(result))
  .catch(error => console.log(error));