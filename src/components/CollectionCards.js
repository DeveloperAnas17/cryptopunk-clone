import React, { useState, useEffect } from "react";
import CollectionCard from "./CollectionCard";
import styled from "styled-components";
import axios from "axios";

const CollectionCards = () => {
  const [punkListsdata, setPunkListsData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  console.log(selectedPunk);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x9CeD6a5701bc03361d20B6eeA37d7c078A3d42F1&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListsData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <CollectionCardsContainer>
      {punkListsdata.map((punkListData) => (
        <div onClick={() => setSelectedPunk(punkListData.token_id)}>
          <CollectionCard
            key={punkListData.id}
            id={punkListData.id}
            name={punkListData.name}
            traits={punkListData.traits.value}
            image={punkListData.image_url}
          />
        </div>
      ))}
    </CollectionCardsContainer>
  );
};

export default CollectionCards;

const CollectionCardsContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid white;

  ::-webkit-scrollbar {
    display: none;
  }
`;
