DROP TABLE IF EXISTS payment;

CREATE TABLE payment (
   id SERIAL PRIMARY KEY,
   payment_no VARCHAR(50) NOT NULL,
   order_no VARCHAR(50) NOT NULL,
   user_id INT DEFAULT 1,
   amount DECIMAL(8,2) NOT NULL DEFAULT 9.9,
   deleted BOOLEAN NOT NULL DEFAULT FALSE,
   create_time TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
   update_time TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE payment IS '支付交易表';
COMMENT ON COLUMN payment.payment_no IS '支付流水号';
COMMENT ON COLUMN payment.order_no IS '订单流水号';
COMMENT ON COLUMN payment.user_id IS '用户账号ID';
COMMENT ON COLUMN payment.amount IS '交易金额';
COMMENT ON COLUMN payment.deleted IS '删除标志，默认0不删除，1删除';
COMMENT ON COLUMN payment.create_time IS '创建时间';
COMMENT ON COLUMN payment.update_time IS '更新时间';
