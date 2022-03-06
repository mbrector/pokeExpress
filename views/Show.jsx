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
<body>
    <h1>Gotta Catch 'Em All</h1>
    <h2>{pokename}</h2>
    <img src = {`${pokemon.img}.jpg`}></img>
    <br />
    <a href = '/pokemon'>back</a>
</body>
</html>
        )
}
}

module.exports = Show