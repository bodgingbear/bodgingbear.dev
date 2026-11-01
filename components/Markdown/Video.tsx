import { StyledMarkdownVideo } from "./Image.styled";

type MarkdownVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  // Required: a muted looping clip has no text, so describe it for crawlers and screen readers.
  "aria-label": string;
};

// Stands in for an animated GIF: autoplays muted and loops.
export const MarkdownVideo = (props: MarkdownVideoProps) => (
  <StyledMarkdownVideo autoPlay muted loop playsInline {...props} />
);
