import React, { useEffect, useState } from "react";
import axios from "axios";
import { parseHTMLContent } from "../utils/parseHtmlContent";

import {
  ContactContainer,
  ContactTitle,
  ContactSubtitle,
  ContactForm,
  InputGroup,
  Label,
  Input,
  Textarea,
  SubmitButton,
} from "../styles/ContactPageStyles";
import Loader from "../utils/loader";

const ContactPage = () => {
  const [title, setTitle] = useState("");
  const [contentHtml, setContentHtml] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1.1/sites/journeychronicles4.wordpress.com/posts/slug:contact"
      )
      .then((response) => {
        setTitle(response.data.title);
        setContentHtml(response.data.content);
      })
      .catch((err) => {
        setError("Failed to fetch About page: " + err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  const { paragraphs } = parseHTMLContent(contentHtml);

  return (
    <ContactContainer>
      <ContactTitle>{title || "Contact Us"}</ContactTitle>
      <ContactSubtitle
        dangerouslySetInnerHTML={{
          __html: paragraphs[0] || "We’d love to hear from you!",
        }}
      />

      <ContactForm onSubmit={(e) => e.preventDefault()}>
        <InputGroup>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" type="text" required />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows={6} required />
        </InputGroup>

        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactPage;
