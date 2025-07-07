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

const tipData = [
  {
    title: "Planning Ahead",
    tips: [
      "Always research visa requirements ahead of time.",
      "Make digital and physical copies of important documents.",
      "Check weather and pack accordingly.",
    ],
  },
  {
    title: "On the Go",
    tips: [
      "Keep snacks and water in your day bag.",
      "Use Google Maps offline for navigation without data.",
      "Carry a portable charger at all times.",
    ],
  },
  {
    title: "Budget Travel",
    tips: [
      "Use public transportation to save money.",
      "Eat like a local—street food is your friend.",
      "Look for free walking tours in major cities.",
    ],
  },
  {
    title: "Staying Safe",
    tips: [
      "Avoid flashing valuables in public areas.",
      "Keep your emergency contacts accessible.",
      "Be aware of local scams or common tourist traps.",
    ],
  },
  {
    title: "Cultural Etiquette",
    tips: [
      "Learn a few key phrases in the local language.",
      "Respect dress codes, especially in religious sites.",
      "Understand tipping customs before you go.",
    ],
  },
  {
    title: "Eco-Friendly Travel",
    tips: [
      "Bring a reusable water bottle and shopping bag.",
      "Support local businesses and artisans.",
      "Avoid single-use plastics whenever possible.",
    ],
  },
];

const TravelTipsPage: React.FC = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <h1>Travel Tips</h1>
        <p>Your go-to guide for smooth and smart travel experiences.</p>
      </HeroSection>

      <TipsSection>
        {tipData.map((category, idx) => (
          <Category key={idx}>
            <TipCategoryTitle>{category.title}</TipCategoryTitle>
            <TipList>
              {category.tips.map((tip, tipIdx) => (
                <TipItem key={tipIdx}>{tip}</TipItem>
              ))}
            </TipList>
          </Category>
        ))}
      </TipsSection>
    </PageWrapper>
  );
};

export default TravelTipsPage;
