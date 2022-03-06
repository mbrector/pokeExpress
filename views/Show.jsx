const React = require('react')

class Show extends React.Component {
    render() {
        const {pokemon} = this.props
        const pokename = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        return(
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pokemon</title>
</head>
<body style = {{backgroundColor: 'aqua'}}>
    <h1><img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6GyR3nFisGYmWt7d2wbxD7HgldFntXTnnw&usqp=CAU'></img></h1>
    <h2 style = {{color: 'red'}}>{pokename}</h2>
    <img src = {`${pokemon.img}.jpg`}></img>
    <br />
    <a style = {{color: 'red'}} href = '/pokemon'>back</a>
</body>
</html>
        )
}
}

module.exports = Show