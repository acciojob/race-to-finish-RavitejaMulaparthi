window.promises = [];
const outputDiv = document.getElementById('output');
    
    const getRandomTime = () => {
        return Math.floor(Math.random() * 5) + 1; // Returns a random number between 1 and 5
    };
    
    const promises = [];
    
    for (let i = 0; i < 5; i++) {
        promises.push(new Promise((resolve, reject) => {
            const randomTime = getRandomTime();
            setTimeout(() => {
                resolve(`Promise ${i + 1} resolved in ${randomTime} seconds.`);
            }, randomTime * 1000);
        }));
    }
    
    Promise.any(promises).then((result) => {
        outputDiv.innerText = result;
    }).catch((error) => {
        outputDiv.innerText = error;
    });

// Do not change the code above this
// add your promises to the array `promises`
