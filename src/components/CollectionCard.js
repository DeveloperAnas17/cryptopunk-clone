import React from "react";
import styled from "styled-components";
import weth from "../assets/weth.png";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <CollectionCardContainer>
      <img src={image} alt="" />
      <Details>
        <Name>
          {name} <div>#{id}</div>
        </Name>
      </Details>
      <PriceContainer>
        <img src={weth} alt="" />
        <Price>{traits[0]?.value}</Price>
      </PriceContainer>
    </CollectionCardContainer>
  );
};

export default CollectionCard;

const CollectionCardContainer = styled.div`
  color: white;
  background-color: #1a1c1e;
  border-radius: 30px;
  overflow: hidden;
  width: 300px;
  height: 500px;
  marging-right: 30px;

  img {
    width: 100%;
  }
`;

const Details = styled.div`
  padding: 20px;
`;

const Name = styled.div`
  margin-top: 15px;
  color: white;
  font-size: 20px;
  font-weight: 900;

  div {
    color: #a1a5be;
    font-size: 18px;
    font-weight: 500;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  object-fit: contain;
  padding: 0 20px;

  img {
    height: 23px;
    width: 15px;
  }
`;

const Price = styled.div`
  margin-left: 5px;
  font-weight: 600;
`;
