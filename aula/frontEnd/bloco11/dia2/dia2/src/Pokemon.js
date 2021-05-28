function Pokemon(props) {
    return (
        <section>
            <h2>{props.pokes.name}</h2>
            <p>{props.pokes.type}</p>
            <p>{props.pokes.value}</p>
            <div><img alt="pokemon" src={props.pokes.image}></img></div>
        </section>
    )
}
export default Pokemon;