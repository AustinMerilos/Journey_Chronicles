import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Constants";

type FilterOption = {
  label: string;
  value: string;
};

interface MapFilterSidebarProps {
  title?: string;
  options: FilterOption[];
  selected: string;
  onChange: (value: string) => void;
}

const SidebarWrapper = styled.aside`
  position: relative;
  top: 1rem;
  left: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 220px;
`;

const SidebarTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: ${theme.colors.darkGreen};
`;

const FilterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FilterItem = styled.li<{ isSelected: boolean }>`
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background: ${({ isSelected }) =>
    isSelected ? theme.colors.softYellow : "#f5f5f5"};
  color: ${({ isSelected }) => (isSelected ? theme.colors.darkGreen : "#333")};
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};

  &:hover {
    background-color: ${theme.colors.lightYellow};
  }
`;

const MapFilterSidebar: React.FC<MapFilterSidebarProps> = ({
  title = "Filter Locations",
  options,
  selected,
  onChange,
}) => {
  return (
    <SidebarWrapper>
      <SidebarTitle>{title}</SidebarTitle>
      <FilterList>
        {options.map(({ label, value }) => (
          <FilterItem
            key={value}
            isSelected={selected === value}
            onClick={() => onChange(value)}
          >
            {label}
          </FilterItem>
        ))}
      </FilterList>
    </SidebarWrapper>
  );
};

export default MapFilterSidebar;
