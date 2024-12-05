package io.github.fingerbone.record;

import java.math.BigDecimal;

public record PaymentRecord(
        Long id,
        String paymentNo,
        String orderNo,
        Integer userId,
        BigDecimal amount,
        Boolean deleted
) {
}