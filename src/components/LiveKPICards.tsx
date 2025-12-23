import { motion } from "framer-motion";
import { useLiveMetrics } from "../hooks/useLiveMetrics";
import { LastUpdated } from "./LastUpdated";

export const LiveKPICards = () => {
  const { metrics, lastUpdated } = useLiveMetrics();

  const Card = ({ label, value }: any) => (
    <motion.div whileHover={{ scale: 1.03 }} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
      <p className="text-sm text-gray-500">{label}</p>
      <h2 className="text-3xl font-semibold mt-2">{value}</h2>
    </motion.div>
  );

  return (
    <div className="space-y-3">
      <LastUpdated date={lastUpdated} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card label="Volume" value={`£${metrics.volume.toLocaleString()}`} />
        <Card label="Risk Score" value={metrics.risk} />
        <Card label="Latency" value={`${metrics.latency} ms`} />
      </div>
    </div>
  );
};