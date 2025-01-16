package com.github.fingerbone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class TestController {
   
    @Autowired
    private TestService testService;

   @GetMapping("/delegate")
   public String delegateHello() {
        return testService.delegateHello();
   }
   
}
