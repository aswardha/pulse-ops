import { motion } from "framer-motion";
import { useDarkMode } from "../hooks/useDarkMode";

export const ThemeToggle = () => {
  const { dark, toggle } = useDarkMode();

  return (
    <motion.button onClick={toggle} whileTap={{ scale: 0.9 }} className="w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-700 p-1 flex items-center">
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className="w-6 h-6 bg-white dark:bg-black rounded-full shadow"
        style={{ marginLeft: dark ? "auto" : 0 }}
      />
    </motion.button>
  );
};