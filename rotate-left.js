const roateLeft = (n, d, arr) => {
    let newArr = [];
    arr.forEach((element, index) => {
        const difference = index - d;
        if (difference < 0) {
            const newIndex = n + difference;
            newArr[newIndex] = element;
        }  else {
            newArr[difference] = element;
        }
    });
    return newArr;
}

// console.log(roateLeft(5, 4, [1,2,3,4,5]));