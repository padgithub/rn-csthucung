const signIn = (UserName, Pass) => (
    fetch('http://10.0.0.13/api/login.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ UserName, Pass })
    })
    .then(res => res.json())
);

module.exports = signIn;
