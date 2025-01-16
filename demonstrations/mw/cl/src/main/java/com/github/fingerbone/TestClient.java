package com.github.fingerbone;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
@FeignClient(value = "app", fallback = TestClientFallback.class)
public interface TestClient {
    @GetMapping("/hello")
    public String hello();
}
