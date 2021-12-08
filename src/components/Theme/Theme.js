import './styles.css'
const Theme = (props) => {
    return(
        <div className="theme">
            <header>Titulo</header>
            <div className="content">{props.children}</div>
            <footer></footer>
        </div>
    )
}

export default Theme