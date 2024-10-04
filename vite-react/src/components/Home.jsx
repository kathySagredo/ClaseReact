import { Link } from "react-router-dom";


function Home(){
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Componentes">Componentes</Link></li>
                <li><Link to="/Props">Props</Link></li>
                <li><Link to="/State">State</Link></li>
                <li><Link to="/Effect">Effect</Link></li>
                <li><Link to="/RenderCondicional">Renderizado condicional</Link></li>
                <li><Link to="/ListasyKeys">Listas y Keys</Link></li>
            </ul>
        </nav>
    )
}

export default Home