import './Home.css';

function Home() {
  return (
    <section className="home-container">
      <div className="home-content">
        <h1>Olá, eu sou o Guilherme</h1>
        <p>Sou um estudante de ADS apaixonado por tecnologia e programação.</p>
        <p>Este é o meu portfólio com projetos, informações e formas de contato.</p>
        <a href="/projetos" className="btn-ver-projetos">Ver Projetos</a>
      </div>
    </section>
  );
}

export default Home;