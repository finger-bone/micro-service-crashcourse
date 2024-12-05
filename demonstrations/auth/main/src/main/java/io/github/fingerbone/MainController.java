package io.github.fingerbone;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/resource")
public class MainController {

    @GetMapping("/public")
    public Mono<String> publicResource() {
        return Mono.just("Public resource");
    }

    @GetMapping("/private")
    public Mono<String> privateResource() {
        
        return Mono.just("Private resource");
    }

    @GetMapping("/admin")
    public Mono<String> adminResource() {
        return Mono.just("Admin resource");
    }
}
