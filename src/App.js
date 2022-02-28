import { Container, Head, Titulo, BemVindo } from './styles';

function App() {
  return (
  <Container>
    <Head>
      <Titulo> Projeto Styled</Titulo>
    </Head>
    <BemVindo cor = "red" tamanho={35}>
      Bem vindo!!!
    </BemVindo>

  </Container>

  );
}

export default App;


/*
    <div className="container">
      <header className='header'>
        <a className='titulo'>Projeto Styled Component</a>
      </header>
      <h1>Bem vindo so Sistema STYLED COMPONENTS</h1>

    </div>
  */