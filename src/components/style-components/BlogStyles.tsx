export const BlogStyles = () => {
  return (
    <style>{`
      #content-body ul {
        list-style: disc;
      }
      #content-body ol {
        list-style: decimal;
      }
      #content-body li {
        margin-left: 1.5rem;
      }
      #content-body ol + ul li {
        margin-left: 3rem;
      }
      #content-body h1 {
        font-weight: 900;
        font-size: 1.5rem;
        line-height: 2rem;
        padding: 1rem;
        padding-left: 0;
      }

      #content-body h2 {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.75rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
      #content-body h3 {
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.25rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
      pre {
        background-color: rgb(82 82 82 / 0.4);
        border-radius: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        padding: 1rem;
        background: rgb(82 82 82 / 0.2);
        margin: 0.5rem;
      }

      p code,
      li code {
        background-color: rgb(82 82 82 / 0.2);
        padding: 0.4rem;
        border-radius: 1rem;
      }
      pre code{
        background-color: transparent;
        padding: 0;
        border-radius: 0;
      }
    `}</style>
  );
};
