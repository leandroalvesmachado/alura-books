import styled from 'styled-components';
import { Title } from '../Title/Title';
import { livros } from './dados';
import Card from '../Card/Card';
import imagemLivro from '../../images/livro2.png'

const UltimosLancamentosContainer = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function LastReleases() {
  return (
    <UltimosLancamentosContainer>
      <Title
        cor={"#EB9B00"}
        tamanhoFonte={"36px"}
      >
        Últimos lançamentos
      </Title>
      <NovosLivrosContainer>
        { livros.map(livro => (
          <img src={livro.src} />
        ))}
      </NovosLivrosContainer>
      <Card
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}

export default LastReleases;