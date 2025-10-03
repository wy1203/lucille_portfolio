import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SplitTextProps {
  children?: ReactNode;
  text?: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  type?: "chars" | "words";
}

const SplitText = ({
  children,
  text,
  className = "",
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.03,
  type = "chars",
}: SplitTextProps) => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.6, 0.01, 0.05, 0.95] as [number, number, number, number],
      },
    },
  };

  // Function to create animated elements while preserving styling
  const createAnimatedElements = (
    node: ReactNode,
    wordIndex: { current: number }
  ): ReactNode => {
    if (typeof node === "string" || typeof node === "number") {
      const textContent = String(node);
      if (type === "chars") {
        return textContent.split("").map((char, i) => (
          <motion.span
            key={`${wordIndex.current}-${i}`}
            variants={child}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ));
      } else {
        // word mode
        const words = textContent.split(" ");
        return words.map((word, i) => {
          const key = wordIndex.current++;
          return (
            <motion.span
              key={key}
              variants={child}
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          );
        });
      }
    }

    if (Array.isArray(node)) {
      return node.map((child, i) => (
        <span key={i}>{createAnimatedElements(child, wordIndex)}</span>
      ));
    }

    if (node && typeof node === "object" && "props" in node) {
      const element = node as {
        type: string | React.ComponentType;
        props: { children?: ReactNode; [key: string]: any };
      };
      const { children: elementChildren, ...otherProps } = element.props;

      // Preserve the wrapper element (like <strong>)
      const AnimatedWrapper = element.type as any;
      return (
        <AnimatedWrapper {...otherProps}>
          {createAnimatedElements(elementChildren, wordIndex)}
        </AnimatedWrapper>
      );
    }

    return node;
  };

  // If text prop is provided, use simple text splitting
  if (text) {
    const elements =
      type === "chars" ? text.split("") : text.split(" ").map((word) => word + " ");

    return (
      <motion.span
        className={className}
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ display: "inline-block" }}
      >
        {elements.map((element, index) => (
          <motion.span
            key={index}
            variants={child}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {element === " " ? "\u00A0" : element}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // If children are provided, parse them and preserve styling
  const wordIndex = { current: 0 };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-block" }}
    >
      {createAnimatedElements(children, wordIndex)}
    </motion.span>
  );
};

export default SplitText;
