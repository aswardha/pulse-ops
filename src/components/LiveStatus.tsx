import { motion } from "framer-motion";

export const LiveStatus = () => (
  <motion.div
    animate={{ opacity: [0.6, 1, 0.6] }}
    transition={{ repeat: Infinity, duration: 1.8 }}
    className="flex items-center gap-2 text-xs text-green-600"
  >
    <span className="w-2 h-2 bg-green-500 rounded-full" />
    Live data
  </motion.div>
);