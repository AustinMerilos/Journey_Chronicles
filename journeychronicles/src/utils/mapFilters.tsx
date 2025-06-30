import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Constants";

type FilterGroup = {
  title: string;
  name: string;
  options: { label: string; value: string }[];
};

interface MapFilterSidebarProps {
  filters: FilterGroup[];
  selectedFilters: Record<string, string>;
  onChange: (group: string, value: string) => void;
}
const SidebarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
`;

const GroupTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: ${theme.colors.darkGreen};
  border-bottom: 1px solid ${theme.colors.softYellow};
  padding-bottom: 0.25rem;
`;

const FilterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const FilterGroups = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterItem = styled.li<{ active: boolean }>`
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background: ${({ active }) => (active ? theme.colors.softYellow : "#f7f7f7")};
  color: ${({ active }) => (active ? theme.colors.darkGreen : "#333")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  margin-bottom: 0.35rem;

  &:hover {
    background-color: ${theme.colors.lightYellow};
  }
`;

const MapFilterSidebar: React.FC<MapFilterSidebarProps> = ({
  filters,
  selectedFilters,
  onChange,
}) => {
  return (
    <SidebarWrapper>
      {filters.map((group) => (
        <FilterGroups key={group.name}>
          <GroupTitle>{group.title}</GroupTitle>
          <FilterList>
            {group.options.map((opt) => (
              <FilterItem
                key={opt.value}
                active={selectedFilters[group.name] === opt.value}
                onClick={() => onChange(group.name, opt.value)}
              >
                {opt.label}
              </FilterItem>
            ))}
          </FilterList>
        </FilterGroups>
      ))}
    </SidebarWrapper>
  );
};

export default MapFilterSidebar;
