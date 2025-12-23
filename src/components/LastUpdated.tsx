import { motion } from "framer-motion";
import { timeAgo } from "../utils/time";

export const LastUpdated = ({ date }: { date: Date | null }) => (
  <motion.div
    key={date?.getTime()}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-xs text-gray-500 dark:text-gray-400"
  >
    Last updated: {timeAgo(date)}
  </motion.div>
);