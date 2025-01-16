package com.github.fingerbone;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class TestController {
    @Value("${hello}")
    private String hello;

    @GetMapping("/hello")
    public String getHello() {   
        return hello; 
    }
}
