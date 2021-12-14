import React, { useState, useEffect } from "react";
import CollectionCard from "./CollectionCard";
import styled from "styled-components";
import axios from "axios";

const CollectionCards = () => {
  const [punkListsdata, setPunkListsData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x8511184501b8DD5FE0623c87B76fCd5A1DDBDC76order_direction=asc"
      );
      console.log(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <CollectionCardsContainer>
      <CollectionCard
        id={0}
        name={"Aman Punk"}
        traits={[{ value: 9 }]}
        image="https://ipfs.thirdweb.com/ipfs/bafkreif7axssjhjeqqsa4whbpcxbwccwrmi7ooe3fi47nioepivco57cry"
      />
    </CollectionCardsContainer>
  );
};

export default CollectionCards;

const CollectionCardsContainer = styled.div``;
