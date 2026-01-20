
fetch('http://localhost:5000/health')
    .then(res => res.json())
    .then(data => console.log(JSON.stringify(data)))
    .catch(err => console.error('Error:', err.message));

