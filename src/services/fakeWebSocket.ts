type MetricEvent = {
  type: "METRIC_UPDATE";
  payload: { volume: number; risk: number; latency: number };
};

class FakeWebSocket extends EventTarget {
  intervalId?: number;
  connect() {
    this.intervalId = window.setInterval(() => {
      const event: MetricEvent = {
        type: "METRIC_UPDATE",
        payload: {
          volume: Math.floor(1000 + Math.random() * 4000),
          risk: Number((Math.random() * 5).toFixed(2)),
          latency: Math.floor(50 + Math.random() * 120),
        },
      };
      this.dispatchEvent(new MessageEvent("message", { data: JSON.stringify(event) }));
    }, 1500);
  }
  disconnect() {
    clearInterval(this.intervalId);
  }
}

export const fakeSocket = new FakeWebSocket();