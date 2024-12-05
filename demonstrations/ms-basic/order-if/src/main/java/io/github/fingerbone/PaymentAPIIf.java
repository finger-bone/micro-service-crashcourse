package io.github.fingerbone;

import io.github.fingerbone.record.PaymentRecord;
import io.github.fingerbone.wrapper.ResponseWrapper;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;

import org.springframework.web.service.annotation.HttpExchange;
import org.springframework.web.service.annotation.PostExchange;
import org.springframework.web.service.annotation.GetExchange;
import org.springframework.web.service.annotation.DeleteExchange;
import org.springframework.web.service.annotation.PutExchange;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@HttpExchange("http://payment-service/payment")
// @HttpExchange("http://gateway-service/payment")
public interface PaymentAPIIf {

    @PostExchange("/name")
    void createName(@RequestParam String name);

    @PostExchange
    ResponseWrapper<PaymentRecord> createPayment(@RequestBody PaymentRecord paymentRecord);

    @GetExchange
    ResponseWrapper<List<PaymentRecord>> getAllPayments();

    @GetExchange("/{id}")
    ResponseWrapper<PaymentRecord> getPayment(@PathVariable Long id);

    @DeleteExchange("/{id}")
    ResponseWrapper<Void> deletePayment(@PathVariable Long id);

    @PutExchange("/{id}")
    ResponseWrapper<PaymentRecord> updatePayment(@PathVariable Long id, @RequestBody PaymentRecord paymentRecord);
}