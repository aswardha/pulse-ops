import { useEffect, useState } from "react";
import { fakeSocket } from "../services/fakeWebSocket";

export const useLiveMetrics = () => {
  const [metrics, setMetrics] = useState({ volume: 0, risk: 0, latency: 0 });
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      if (data.type === "METRIC_UPDATE") {
        setMetrics(data.payload);
        setLastUpdated(new Date());
      }
    };

    fakeSocket.addEventListener("message", handler);
    fakeSocket.connect();
    return () => {
      fakeSocket.removeEventListener("message", handler);
      fakeSocket.disconnect();
    };
  }, []);

  return { metrics, lastUpdated };
};