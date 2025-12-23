import { PageTransition } from "../components/PageTransition";
import { LiveKPICards } from "../components/LiveKPICards";
import { LiveStatus } from "../components/LiveStatus";
import { ThemeToggle } from "../components/ThemeToggle";

export default function Dashboard() {
  return (
    <PageTransition>
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-4 text-2xl font-semibold">
            Real-Time Treasury Metrics
            <LiveStatus />
          </h1>
          <ThemeToggle />
        </div>
        <LiveKPICards />
      </div>
    </PageTransition>
  );
}