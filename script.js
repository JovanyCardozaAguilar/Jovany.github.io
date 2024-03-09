document.getElementById('getText').addEventListener
('click', getText);

function getText() {
    fetch('sample.txt')
    .then(function(res) {
        console.log(res);
    })
}

const test1 = new Promise((resolve, reject) => {
    resolve('Test')
})

Promise.all([
    test1
]) .then((messages) => {
    console.log(messages)
})

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

async function doStuff() {
    try {
    const response = await makeRequest('Google')
    console.log('Response Received')
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
    } catch (error) {
        console.log(error)
    }
}
doStuff()


fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then(data => console.log(data))

    
fetch('https://reqres.in/api/users?page=2', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
}).then(response => {
    return response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

    