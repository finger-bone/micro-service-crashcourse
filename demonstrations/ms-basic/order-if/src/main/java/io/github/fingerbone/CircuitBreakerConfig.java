// package io.github.fingerbone;

// import java.time.Duration;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;

// import io.github.resilience4j.circuitbreaker.CircuitBreakerConfig.SlidingWindowType;
// import io.github.resilience4j.common.circuitbreaker.configuration.CircuitBreakerConfigCustomizer;

// @Configuration
// public class circuitBreakerConfig {
//     @Bean
//     public CircuitBreakerConfigCustomizer externalServiceFooCircuitBreakerConfig() {
//         return CircuitBreakerConfigCustomizer
//                 .of("externalServiceFoo",
//                         builder -> builder.slidingWindowSize(10)
//                                 .slidingWindowType(SlidingWindowType.COUNT_BASED)
//                                 .waitDurationInOpenState(Duration.ofSeconds(10))
//                                 .minimumNumberOfCalls(5)
//                                 .failureRateThreshold(50.0f));
//     }
// }
