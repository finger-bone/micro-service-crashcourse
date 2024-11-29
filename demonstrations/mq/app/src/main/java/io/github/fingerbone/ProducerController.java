package io.github.fingerbone;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@RestController
@RequiredArgsConstructor
public class ProducerController {

    private final RabbitTemplate rabbitTemplate;

    @GetMapping("/apple")
    public Mono<Void> apple() {
        rabbitTemplate.convertAndSend("food", "apple");
        return Mono.empty();
    }
    
    @GetMapping("/banana")
    public Mono<Void> banana() {
        rabbitTemplate.convertAndSend("fanout", "", "banana");
        return Mono.empty();
    }
    
}
