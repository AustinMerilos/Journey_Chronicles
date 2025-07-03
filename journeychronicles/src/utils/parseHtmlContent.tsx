export const parseHTMLContent = (html: string) => {
  const cleanedHtml = html.replace(
    /\[coords:\s*-?\d+\.?\d*,\s*-?\d+\.?\d*\]/gi,
    ""
  );

  const doc = new DOMParser().parseFromString(cleanedHtml, "text/html");

  return {
    titles: Array.from(doc.querySelectorAll("h1")).map((h1) => h1.innerHTML),
    paragraphs: Array.from(doc.querySelectorAll("p")).map((p) => p.innerHTML),
    images: Array.from(doc.querySelectorAll("img")).map((img) => ({
      src: img.src,
      alt: img.alt,
    })),
  };
};
