type Props = {
  children: React.ReactNode;
  className?: string;
};

/* HEADINGS — premium, bold, wide */
export const Heading = ({ children, className = "" }: Props) => (
  <h1
    className={`font-[var(--heading-font)] tracking-tight text-white ${className}`}
  >
    {children}
  </h1>
);

/* SUBHEADINGS — medium weight */
export const Subheading = ({ children, className = "" }: Props) => (
  <h2
    className={`font-[var(--subheading-font)] text-[#c9d3e0] leading-snug ${className}`}
  >
    {children}
  </h2>
);

/* BODY — readable, book weight */
export const Body = ({ children, className = "" }: Props) => (
  <p
    className={`font-[var(--body-font)] text-[#d4d7dd] text-[17px] leading-relaxed ${className}`}
  >
    {children}
  </p>
);

/* NUMBERS — inter for perfect alignment */
export const Numeric = ({ children, className = "" }: Props) => (
  <span className={`font-[var(--number-font)] ${className}`}>
    {children}
  </span>
);