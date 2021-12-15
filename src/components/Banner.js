import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InstagramLogo from "../assets/owner/instagram.png";
import TwitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Banner = ({ selectedPunk, punkListData }) => {
  // const [activePunk, setActivePunk] = useState(punkListData[0])

  // useEffect(() => {
  //   setActivePunk(punkListData[selectedPunk])
  // }, [punkListData, selectedPunk])

  return (
    <Container>
      <MainContent>
        <PunkHighlight>
          <PunkContainer>
            <img
              src="https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu"
              alt=""
            />
          </PunkContainer>
        </PunkHighlight>
        <PunkDetail>
          <Title>Bandana Punk{/* activePunk.name */}</Title>
          <span>.#3</span>
        </PunkDetail>
        <Owner>
          <OwnerImage>
            <img
              src="https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu"
              alt=""
            />
          </OwnerImage>
          <OwnerDetail>
            <OwnerNameAndHandle>
              <div>0xfD5fD1f8f4c46a7D7B1e509959263A3628A63ED0</div>
              <p>@amanabbasi17</p>
            </OwnerNameAndHandle>
            <OwnerLink>
              <img src={InstagramLogo} alt="" />
            </OwnerLink>
            <OwnerLink>
              <img src={TwitterLogo} alt="" />
            </OwnerLink>
            <OwnerLink>
              <img src={moreIcon} alt="" />
            </OwnerLink>
          </OwnerDetail>
        </Owner>
      </MainContent>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  color: white;
  max-height: 50vh;
`;

const MainContent = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #fff;
`;

const PunkHighlight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.25;
`;

const PunkContainer = styled.div`
  overflow: hidden;
  display: flex;
  margin-right: 20px;
  border-radius: 20px;

  img {
    max-height: 30vw;
    max-width: min(30vw, 40vh);
    object-fit: contain;
  }
`;

const PunkDetail = styled.div`
  display: flex;
  flex-direction: columns:
  justify-content: space-between;
  flex: 0.75;
`;

const Title = styled.div`
  font-size: 96px;
  font-weight: 800;
`;

const Owner = styled.div`
  display: flex;
  margin: 10px 0;
  height: 50px;

  div {
    margin: 0 5px;
  }
`;

const OwnerDetail = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const OwnerImage = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: contain;

  img {
    height: 100%;
    width: 100%;
  }
`;

const OwnerNameAndHandle = styled.div`
  div {
    color: #a1a5be;
    /* font-size: 72px; */
    align-self: center;
  }

  p {
    color: #00ebfe;
  }
`;

// const OwnerLinks = styled.div``;

const OwnerLink = styled.div`
    padding; 12px; 
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: 1px solid #fff;
    margin: 0 0 0 10px;

    img {
        height: 100%;
        width: 100%;
    }
`;
