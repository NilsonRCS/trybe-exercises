import Pokemon from './Pokemon';
import React from 'react'

class Pokedex extends React.Component {
render() {
    const { pokelist } = this.props;
    return (
        <section className="poke-list">
            {pokelist.map((poke) => (
                <Pokemon pokes={poke} />
            ))}
        </section>
    )
}
}
export default Pokedex;
