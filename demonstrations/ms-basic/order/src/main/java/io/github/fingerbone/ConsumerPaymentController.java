package io.github.fingerbone;


import io.github.fingerbone.record.PaymentRecord;
import io.github.fingerbone.wrapper.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;

import java.util.List;

@RestController
@RequestMapping("/consumer/payment")
public class ConsumerPaymentController {
    private final RestTemplate restTemplate;
    private static final String paymentServiceUrl = "http://payment-service" + "/payment";

    @Autowired
    public ConsumerPaymentController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @PostMapping
    public ResponseWrapper<PaymentRecord> createPayment(@RequestBody PaymentRecord paymentRecord) {
        HttpEntity<PaymentRecord> request = new HttpEntity<>(paymentRecord);
        ResponseEntity<ResponseWrapper<PaymentRecord>> response = restTemplate.exchange(
                paymentServiceUrl,
                HttpMethod.POST,
                request,
                new ParameterizedTypeReference<>() {
                }
        );
        return response.getBody();
    }

    @GetMapping
    public ResponseWrapper<List<PaymentRecord>> getAllPayments() {
        ResponseEntity<ResponseWrapper<List<PaymentRecord>>> response = restTemplate.exchange(
                paymentServiceUrl,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<>() {
                }
        );
        return response.getBody();
    }

    @GetMapping("/{id}")
    public ResponseWrapper<PaymentRecord> getPayment(@PathVariable Long id) {
        ResponseEntity<ResponseWrapper<PaymentRecord>> response = restTemplate.exchange(
                paymentServiceUrl + "/" + id,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<>() {
                }
        );
        return response.getBody();
    }

    @DeleteMapping("/{id}")
    public ResponseWrapper<Void> deletePayment(@PathVariable Long id) {
        restTemplate.delete(paymentServiceUrl + "/" + id);
        return ResponseWrapper.success();
    }

    @PutMapping("/{id}")
    public ResponseWrapper<PaymentRecord> updatePayment(@PathVariable Long id, @RequestBody PaymentRecord paymentRecord) {
        restTemplate.put(paymentServiceUrl + "/" + id, paymentRecord);
        return ResponseWrapper.success();
    }
}