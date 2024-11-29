package io.github.fingerbone.api;

import io.github.fingerbone.record.PaymentRecord;
import io.github.fingerbone.wrapper.ResponseWrapper;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "payment-service", path = "/payment")
public interface PaymentApi {

    @PostMapping
    ResponseWrapper<PaymentRecord> createPayment(@RequestBody PaymentRecord paymentRecord);

    @GetMapping
    ResponseWrapper<List<PaymentRecord>> getAllPayments();

    @GetMapping("/{id}")
    ResponseWrapper<PaymentRecord> getPayment(@PathVariable("id") Long id);

    @DeleteMapping("/{id}")
    ResponseWrapper<Void> deletePayment(@PathVariable("id") Long id);

    @PutMapping("/{id}")
    ResponseWrapper<PaymentRecord> updatePayment(@PathVariable("id") Long id, @RequestBody PaymentRecord paymentRecord);
}