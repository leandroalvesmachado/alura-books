import styled from 'styled-components';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import LastReleases from './components/LastReleases/LastReleases';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
  
  li {
    list-style: none;
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LastReleases />
    </AppContainer>
  );
}

export default App;
