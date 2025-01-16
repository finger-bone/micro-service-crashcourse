package com.github.fingerbone;

import org.springframework.stereotype.Component;

@Component
public class TestClientFallback implements TestClient {
    @Override
    public String hello() {
        return "Fallback";
    }
}