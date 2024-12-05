package io.github.fingerbone;

import org.apache.hc.client5.http.config.RequestConfig;
import org.apache.hc.client5.http.impl.async.CloseableHttpAsyncClient;
import org.apache.hc.client5.http.impl.async.HttpAsyncClientBuilder;
import org.apache.hc.client5.http.impl.async.HttpAsyncClients;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.metrics.web.reactive.client.ObservationWebClientCustomizer;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.reactive.ClientHttpConnector;
import org.springframework.http.client.reactive.HttpComponentsClientHttpConnector;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.support.WebClientAdapter;
import org.springframework.web.service.invoker.HttpServiceProxyFactory;

import io.micrometer.core.instrument.MeterRegistry;

@Configuration
public class ClientConfig {

    @Bean
    @LoadBalanced
    WebClient.Builder webClientBuilder(
        @Autowired MeterRegistry meterRegistry,
        @Autowired ObservationWebClientCustomizer observationWebClientCustomizer
    ) {
        HttpAsyncClientBuilder clientBuilder = HttpAsyncClients.custom();
        clientBuilder.setDefaultRequestConfig(RequestConfig.custom().build());
        CloseableHttpAsyncClient client = clientBuilder.build();
        ClientHttpConnector connector = new HttpComponentsClientHttpConnector(client);
        WebClient.Builder builder = WebClient.builder();
        observationWebClientCustomizer.customize(builder);
        return builder.clientConnector(connector);
    }

    @Bean
    WebClient webClient(@Autowired WebClient.Builder webClientBuilder) {
        return webClientBuilder.build();
    }

    @Bean
    WebClientAdapter webClientAdapter(@Autowired WebClient webClient) {
        return WebClientAdapter.create(webClient);
    }

    @Bean
    HttpServiceProxyFactory httpServiceProxyFactory(@Autowired WebClientAdapter webClientAdapter) {
        return HttpServiceProxyFactory.builderFor(webClientAdapter).build();
    }

    @Bean
    PaymentAPIIf paymentAPIIf(@Autowired HttpServiceProxyFactory httpServiceProxyFactory) {
        return httpServiceProxyFactory.createClient(PaymentAPIIf.class);
    }
}
