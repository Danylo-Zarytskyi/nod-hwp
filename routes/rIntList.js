
const randomIntList = (min, max) => {
    const randomInt1 = Math.floor(Math.random() * 6) + 1;
    const randomInt2 = Math.floor(Math.random() * 6) + 1;
    const randomInt3 = Math.floor(Math.random() * 6) + 1;

    return randomInt1, randomInt2, randomInt3;
}


module.exports = randomIntList;
