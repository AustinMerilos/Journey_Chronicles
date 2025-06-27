import React from "react";
import {
  PageWrapper,
  TipsSection,
  Category,
  HeroSection,
  TipList,
  TipItem,
  TipCategoryTitle,
} from "../styles/TravelTipsStyles";

const TravelTipsPage: React.FC = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <h1>Travel Tips</h1>
        <p>Your go-to guide for smooth and smart travel experiences.</p>
      </HeroSection>

      <TipsSection>
        <Category>
          <TipCategoryTitle>Planning Ahead</TipCategoryTitle>
          <TipList>
            <TipItem>Always research visa requirements ahead of time.</TipItem>
            <TipItem>
              Make digital and physical copies of important documents.
            </TipItem>
            <TipItem>Check weather and pack accordingly.</TipItem>
          </TipList>
        </Category>

        <Category>
          <TipCategoryTitle>On the Go</TipCategoryTitle>
          <TipList>
            <TipItem>Keep snacks and water in your day bag.</TipItem>
            <TipItem>
              Use Google Maps offline for navigation without data.
            </TipItem>
            <TipItem>Carry a portable charger at all times.</TipItem>
          </TipList>
        </Category>

        <Category>
          <TipCategoryTitle>Budget Travel</TipCategoryTitle>
          <TipList>
            <TipItem>Use public transportation to save money.</TipItem>
            <TipItem>Eat like a local—street food is your friend.</TipItem>
            <TipItem>Look for free walking tours in major cities.</TipItem>
          </TipList>
        </Category>
      </TipsSection>
    </PageWrapper>
  );
};

export default TravelTipsPage;
