package com.github.fingerbone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.csp.sentinel.annotation.SentinelResource;

@Service
public class TestService {
    @Autowired
    private TestClient testClient;
   
    @SentinelResource(value = "delegate-hello")
    public String delegateHello() {
        String a = testClient.hello();
        return a;
    }
}
