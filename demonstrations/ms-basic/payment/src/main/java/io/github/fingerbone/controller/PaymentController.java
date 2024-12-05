package io.github.fingerbone.controller;

import io.github.fingerbone.entity.Payment;
import io.github.fingerbone.record.PaymentRecord;
import io.github.fingerbone.service.NameService;
import io.github.fingerbone.service.PaymentService;
import io.github.fingerbone.wrapper.ResponseWrapper;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.stream.Collectors;
import java.util.List;

@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor
public class PaymentController {
    private final PaymentService paymentService;
    private final NameService nameService;

    @PostMapping("/name")
    public void createName(@RequestParam String name) {
        nameService.createName(name);
    }

    @PostMapping
    public ResponseWrapper<PaymentRecord> createPayment(@RequestBody PaymentRecord paymentRecord) {
        return ResponseWrapper.success(
                paymentService.createPayment(Payment.fromRecord(paymentRecord)).toRecord()
        );
    }

    @GetMapping
    public ResponseWrapper<List<PaymentRecord>> getAllPayments() {
        return ResponseWrapper.success(
                paymentService.getAllPayments().stream().map(Payment::toRecord).collect(Collectors.toList())
        );
    }

    @GetMapping("/{id}")
    public ResponseWrapper<PaymentRecord> getPayment(@PathVariable Long id) {
        return ResponseWrapper.success(
                paymentService.getPayment(id).toRecord()
        );
    }

    @DeleteMapping("/{id}")
    public ResponseWrapper<Void> deletePayment(@PathVariable Long id) {
        paymentService.deletePayment(id);
        return ResponseWrapper.success();
    }

    @PutMapping("/{id}")
    public ResponseWrapper<PaymentRecord> updatePayment(@PathVariable Long id, @RequestBody PaymentRecord paymentRecord) {
        Payment payment = Payment.fromRecord(paymentRecord);
        payment.setId(id);
        return ResponseWrapper.success(
                paymentService.updatePayment(payment).toRecord()
        );
    }

}
