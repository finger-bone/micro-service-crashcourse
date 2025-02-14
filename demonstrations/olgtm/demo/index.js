
const { logs, SeverityNumber } = require("@opentelemetry/api-logs");
const { Resource } = require("@opentelemetry/resources");
const { OTLPLogExporter } = require("@opentelemetry/exporter-logs-otlp-grpc");
const { LoggerProvider, SimpleLogRecordProcessor } = require("@opentelemetry/sdk-logs");
const { metrics, ValueType } = require("@opentelemetry/api");
const { OTLPMetricExporter } = require("@opentelemetry/exporter-metrics-otlp-grpc");
const { MeterProvider, PeriodicExportingMetricReader } = require("@opentelemetry/sdk-metrics");
const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");
const { OTLPTraceExporter } = require("@opentelemetry/exporter-trace-otlp-grpc");
const { SimpleSpanProcessor } = require("@opentelemetry/sdk-trace-base");

// 通用资源配置
const resource = new Resource({
  "service.name": "demo-service",
  "service.version": "1.0.0"
});

// 初始化日志系统
const logExporter = new OTLPLogExporter({ url: "http://localhost:4317" });
const loggerProvider = new LoggerProvider({ resource });
loggerProvider.addLogRecordProcessor(new SimpleLogRecordProcessor(logExporter));
const logger = loggerProvider.getLogger("default");

// 初始化指标系统
const metricExporter = new OTLPMetricExporter({ url: "http://localhost:4317" });
const metricReader = new PeriodicExportingMetricReader({
  exporter: metricExporter,
  exportIntervalMillis: 5000
});

const meterProvider = new MeterProvider({
  resource,
  readers: [metricReader] // Pass the metric reader here instead of using addMetricReader
});
const meter = meterProvider.getMeter("demo-meter");

// 创建示例指标
const requestCounter = meter.createCounter("requests", {
  description: "Total number of requests",
  valueType: ValueType.INT
});

// 初始化追踪系统
const traceExporter = new OTLPTraceExporter({ url: "http://localhost:4317" });

// Use the spanProcessors property in TracerConfig to add the SpanProcessor
const tracerProvider = new NodeTracerProvider({
  resource,
  spanProcessors: [new SimpleSpanProcessor(traceExporter)] // Pass the SpanProcessor in the spanProcessors property
});
const tracer = tracerProvider.getTracer("demo-tracer");

// 生成示例数据
function generateData() {
  // 发送日志
  logger.emit({
    severityNumber: SeverityNumber.INFO,
    severityText: "INFO",
    body: "This is a sample log message",
    attributes: { custom_key: "custom_value" }
  });

  // 记录指标
  requestCounter.add(1, { route: "/demo" });

  // 创建追踪
  tracer.startActiveSpan("demo-operation", span => {
    span.setAttribute("operation.type", "demo");
    // 模拟一些工作
    setTimeout(() => {
      span.end();
    }, 100);
  });
}

// 每3秒生成一次数据
setInterval(generateData, 3000);
