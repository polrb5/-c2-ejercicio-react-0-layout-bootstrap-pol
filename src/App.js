import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const titulo = "Título";
  const titular = "Titular de la noticia";
  const bodyText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam, iusto omnis minima corrupti est officiis natus nam,adipisci commodi quo autem magnam sequi magni odio solutatemporibus velit quas";
  const categoriasTitulo = "Categorías";
  const otrasCosasTitulo = "Otras cosas";
  const categorias = [
    "Noticias de deporte",
    "Noticias de ocio",
    "Noticias de politica",
    "Noticias de espectáculos",
  ];
  const otrasCosas = ["Nosequé", "Talycual", "Nosecuánto"];
  const piePagina = 50;
  return (
    <>
      <div className="container">
        <header className="cabecera text-white row align-items-center">
          <h1 className="col m-0">{titulo}</h1>
          <nav className="col text-right">
            <ul className="links-navegacion list-inline m-0">
              <li className="list-inline-item">hola</li>
              <li className="list-inline-item">adiós</li>
              <li className="list-inline-item">ciao</li>
            </ul>
          </nav>
        </header>
        <div className="contenedor-principal row">
          <main className="principal col-12 col-sm-7 col-md-8 py-4">
            <h2>{titular}</h2>
            <p>{bodyText}</p>
            <p>{bodyText}</p>
          </main>
          <aside className="sidebar col-12 col-sm-5 col-md-4 py-4">
            <section className="listado">
              <h3>{categoriasTitulo}</h3>
              <ul className="list-unstyled">
                <li>{categorias[0]}</li>
                <li>{categorias[1]}</li>
                <li>{categorias[2]}</li>
                <li>{categorias[3]}</li>
              </ul>
            </section>
            <section className="listado">
              <h3>{otrasCosasTitulo}</h3>
              <ul className="list-unstyled">
                <li>{otrasCosas[0]}</li>
                <li>{otrasCosas[1]}</li>
                <li>{otrasCosas[2]}</li>
              </ul>
            </section>
          </aside>
        </div>
        <footer className="pie text-white row align-items-center">
          <p className="col text-center">
            {134 > piePagina
              ? "Texto del footer - Ningún derecho reservado, copia lo que quieras"
              : ""}
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
