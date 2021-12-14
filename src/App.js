import "./App.css";
import CollectionCards from "./components/CollectionCards";
import Header from "./components/Header";
import styled from "styled-components";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="app">
      <Header />
      <MainContainer>
        <Banner />
        <CollectionCards />
      </MainContainer>
    </div>
  );
}

export default App;

const MainContainer = styled.main`
  max-width: 1400px;
  margin: auto;
`;
