async function getState(promise) {
    Promise.race([promise, 'pending'])
           .then(val => val === 'pending' ? 'pending' : 'fullfilled')
           .catch(() => 'rejected');
}