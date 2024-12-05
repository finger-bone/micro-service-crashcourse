package io.github.fingerbone;


import io.github.fingerbone.api.PaymentApi;
import io.github.fingerbone.record.PaymentRecord;
import io.github.fingerbone.wrapper.ResponseCode;
import io.github.fingerbone.wrapper.ResponseWrapper;
import io.github.resilience4j.bulkhead.annotation.Bulkhead;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;

import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/if/payment")
@RequiredArgsConstructor
public class ConsumerPaymentController {

    public ResponseWrapper<List<PaymentRecord>> fb(Throwable e) {
        return ResponseWrapper.circuitOpen();
    }

    private final PaymentAPIIf paymentAPIIf;
    private final AgeService ageService;

    @GetMapping
    public ResponseWrapper<List<PaymentRecord>> getAllPayments() {
        return paymentAPIIf.getAllPayments();
    }

    @PostMapping
    public ResponseWrapper<PaymentRecord> createPayment(@RequestBody PaymentRecord paymentRecord) {
        return paymentAPIIf.createPayment(paymentRecord);
    }

    @GetMapping("/{id}")
    public ResponseWrapper<PaymentRecord> getPayment(@PathVariable Long id) {
        return paymentAPIIf.getPayment(id);
    }

    @DeleteMapping("/{id}")
    public ResponseWrapper<Void> deletePayment(@PathVariable Long id) {
        return paymentAPIIf.deletePayment(id);
    }

    @PutMapping("/{id}")
    public ResponseWrapper<PaymentRecord> updatePayment(@PathVariable Long id, @RequestBody PaymentRecord paymentRecord) {
        return paymentAPIIf.updatePayment(id, paymentRecord);
    }



    @PostMapping("/age")
    public void createAge(@RequestParam String name, @RequestParam Short age) {
        ageService.create(name, age);
    }
    
}