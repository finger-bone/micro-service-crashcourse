package io.github.fingerbone;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class Consumer {

    @RabbitListener(queues = "food")
    public void consume(String message) {
        System.out.println("Yummy! I ate " + message);
    }

    @RabbitListener(queues = "trash")
    public void consumeTrash(String message) {
        System.out.println("Yuck! I threw away " + message);
    }

}
