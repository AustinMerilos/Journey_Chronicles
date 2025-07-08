import { styled } from "styled-components";
import { theme } from "./Constants";

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 1rem;
  text-align: center;
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.darkGreen};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.orange};
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: ${theme.colors.darkGreen};
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${theme.colors.softYellow};
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${theme.colors.orange};
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${theme.colors.softYellow};
  border-radius: 0.5rem;
  font-size: 1rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${theme.colors.orange};
  }
`;

const SubmitButton = styled.button`
  background-color: ${theme.colors.darkGreen};
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.orange};
  }
`;

export {
  SubmitButton,
  Textarea,
  Input,
  InputGroup,
  Label,
  ContactContainer,
  ContactForm,
  ContactSubtitle,
  ContactTitle,
};
