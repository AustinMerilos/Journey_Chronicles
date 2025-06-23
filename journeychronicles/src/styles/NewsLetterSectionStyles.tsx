import { styled } from "styled-components";
import { theme } from "./Constants";

const NewsletterContainer = styled.div`
  max-width: 600px;
  margin: 5rem auto;
  padding: 2rem;
  text-align: center;
  background-color: #fff8e1;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const NewsletterTitle = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.orange};
  margin-bottom: 1rem;
`;

const NewsletterSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.darkGreen};
  margin-bottom: 2rem;
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  width: 100%;
  text-align: left;
`;

const Label = styled.label.attrs({})<
  React.LabelHTMLAttributes<HTMLLabelElement>
>`
  display: block;
  margin-bottom: 0.5rem;
  color: ${theme.colors.orange};
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid ${theme.colors.softYellow};
  border-radius: 0.5rem;
  outline: none;

  &:focus {
    border-color: ${theme.colors.orange};
  }
`;

const SubmitButton = styled.button`
  background-color: ${theme.colors.orange};
  color: white;
  padding: 0.75rem 2rem;
  font-size: 1.125rem;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.darkGreen};
  }
`;

const ConfirmationMessage = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.darkGreen};
  background-color: #e0ffd9;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export {
  ConfirmationMessage,
  SubmitButton,
  Input,
  Label,
  InputGroup,
  NewsletterContainer,
  NewsletterSubtitle,
  NewsletterTitle,
  NewsletterForm,
};
