import './styles.css'
const Theme = (props) => {
    return(
        <div>
            <header>Titulo</header>
            <div className="content">{props.children}</div>
            <footer></footer>
        </div>
    )
}

export default Theme