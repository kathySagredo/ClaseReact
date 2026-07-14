import { Link } from "react-router-dom";

function Home() {
    return (
        <section>
            <div className="hero">
                <span className="eyebrow">Curso React</span>
                <h1>Ruta de aprendizaje en React</h1>
                <p>Explora los fundamentos del framework con ejemplos prácticos y una navegación pensada para estudiar cada tema de forma clara.</p>
            </div>

            <nav className="home-nav" aria-label="Temas del curso">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Componentes">Componentes</Link></li>
                    <li><Link to="/Props">Props</Link></li>
                    <li><Link to="/State">State</Link></li>
                    <li><Link to="/Effect">Effect</Link></li>
                    <li><Link to="/RenderCondicional">Renderizado condicional</Link></li>
                    <li><Link to="/ListasyKeys">Listas y Keys</Link></li>
                </ul>
            </nav>
        </section>
    );
}

export default Home;