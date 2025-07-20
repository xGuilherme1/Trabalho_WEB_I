import './Projetos.css';

function Projetos() {
  return (
    <section className="projetos-container">
      <div className="projetos-content">
        <h2>Meus Projetos</h2>
        <div className="projetos-grid">

          <div className="projeto-card">
            <h3>Projeto 1: API</h3>
            <p>Usando uma API</p>
            <a href="https://github.com/xGuilherme1/Programacao_web_2025/tree/main/API" target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </div>

          <div className="projeto-card">
            <h3>Projeto 2: Cassino ADS</h3>
            <p>Aplicação web simples de um cassino estilo jogo do tigrinho com os professores do ADS.</p>
            <a href="https://github.com/xGuilherme1/Programacao_web_2025/tree/main/Cassino-ADS" target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </div>

          <div className="projeto-card">
            <h3>Projeto 3: Formulário com Validação</h3>
            <p>Formulário interativo com validação de campos em tempo real, feito com HTML, CSS e JS.</p>
            <a href="https://github.com/xGuilherme1/Programacao_web_2025/tree/main/Formulario_validacao" target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projetos;