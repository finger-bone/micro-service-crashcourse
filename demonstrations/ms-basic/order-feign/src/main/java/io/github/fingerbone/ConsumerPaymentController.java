package io.github.fingerbone;


import io.github.fingerbone.api.PaymentApi;
import io.github.fingerbone.record.PaymentRecord;
import io.github.fingerbone.wrapper.ResponseCode;
import io.github.fingerbone.wrapper.ResponseWrapper;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;

import java.util.List;

@RestController
@RequestMapping("/feign/payment")
public class ConsumerPaymentController {

    private final PaymentApi paymentApi;

    public ResponseWrapper<List<PaymentRecord>> fallback(Throwable t) {
        return ResponseWrapper.circuitOpen();
    }

    public ConsumerPaymentController(@Autowired PaymentApi paymentApi) {
        this.paymentApi = paymentApi;
    }

    @PostMapping
    public ResponseWrapper<PaymentRecord> createPayment(@RequestBody PaymentRecord paymentRecord) {
        return paymentApi.createPayment(paymentRecord);
    }

    @GetMapping
    @CircuitBreaker(name = "bk", fallbackMethod = "fallback")
    public ResponseWrapper<List<PaymentRecord>> getAllPayments() {
        return paymentApi.getAllPayments();
    }

    @GetMapping("/{id}")
    public ResponseWrapper<PaymentRecord> getPayment(@PathVariable Long id) {
        return paymentApi.getPayment(id);
    }

    @DeleteMapping("/{id}")
    public ResponseWrapper<Void> deletePayment(@PathVariable Long id) {
        return paymentApi.deletePayment(id);
    }

    @PutMapping("/{id}")
    public ResponseWrapper<PaymentRecord> updatePayment(@PathVariable Long id, @RequestBody PaymentRecord paymentRecord) {
        return paymentApi.updatePayment(id, paymentRecord);
    }
}