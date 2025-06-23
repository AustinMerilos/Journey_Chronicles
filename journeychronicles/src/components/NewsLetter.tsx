import React, { useState } from "react";
import { Input } from "style-components";
import { InputGroup, SubmitButton } from "../styles/ContactPageStyles";
import {
  NewsletterContainer,
  NewsletterTitle,
  NewsletterSubtitle,
  ConfirmationMessage,
  NewsletterForm,
} from "../styles/NewsLetterSectionStyles";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // add mailchimp api
    console.log("Newsletter signup:", email);
    setSubmitted(true);
  };

  return (
    <NewsletterContainer>
      <NewsletterTitle>Join Our Newsletter</NewsletterTitle>
      <NewsletterSubtitle>
        Get travel inspiration, tips, and updates delivered to your inbox.
      </NewsletterSubtitle>

      {submitted ? (
        <ConfirmationMessage>
          Thank you for subscribing! Check your inbox to confirm.
        </ConfirmationMessage>
      ) : (
        <NewsletterForm onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="email">Email Address</label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>

          <SubmitButton type="submit">Subscribe</SubmitButton>
        </NewsletterForm>
      )}
    </NewsletterContainer>
  );
};

export default Newsletter;
