package io.github.fingerbone.entity;

import io.github.fingerbone.record.PaymentRecord;
import jakarta.persistence.*;
import org.springframework.beans.BeanUtils;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Data
public final class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "payment_no", nullable = false, length = 50)
    private String paymentNo;

    @Column(name = "order_no", nullable = false, length = 50)
    private String orderNo;

    @Column(name = "user_id", nullable = false)
    private Integer userId = 1;

    @Column(name = "amount", nullable = false, precision = 8, scale = 2)
    private BigDecimal amount = BigDecimal.valueOf(9.9);

    @Column(name = "deleted", nullable = false)
    private Boolean deleted = false;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "create_time", nullable = false, updatable = false)
    private Date createTime;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "update_time", nullable = false)
    private Date updateTime;

    @PrePersist
    private void onCreate() {
        createTime = new Date();
        updateTime = new Date();
    }

    @PreUpdate
    private void onUpdate() {
        updateTime = new Date();
    }

    public PaymentRecord toRecord() {
        return new PaymentRecord(
                id,
                paymentNo,
                orderNo,
                userId,
                amount,
                deleted
        );
    }

    public static Payment fromRecord(PaymentRecord record) {
        Payment payment = new Payment();
        BeanUtils.copyProperties(record, payment);
        return payment;
    }
}