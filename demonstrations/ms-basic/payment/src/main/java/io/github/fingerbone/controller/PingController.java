package io.github.fingerbone.controller;

import io.github.fingerbone.wrapper.ResponseWrapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ping")
@RefreshScope
public class PingController {
    @GetMapping
    public ResponseWrapper<String> ping() {
        return ResponseWrapper.success("pong");
    }
}
