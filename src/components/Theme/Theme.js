const Theme = (props) => {
    return(
        <div>
            <header>Titulo</header>
            <div>{props.children}</div>
            <footer></footer>
        </div>
    )
}

export default Theme