import { motion, type HTMLMotionProps } from "framer-motion";

export function SectionReveal(props: HTMLMotionProps<"section">) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    />
  );
}
