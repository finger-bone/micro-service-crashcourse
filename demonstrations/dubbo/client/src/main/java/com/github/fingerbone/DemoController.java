package com.github.fingerbone;

import org.apache.dubbo.config.annotation.DubboReference;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {
    @DubboReference
    private DemoService demoService;

    @GetMapping
    public String hello(String name) {
        return demoService.hello(name);
    }
}
