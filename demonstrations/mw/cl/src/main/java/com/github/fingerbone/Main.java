package com.github.fingerbone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients

public class Main {
    public static void main(String[] args) {
        // System.out.println("Hello, World!");
        SpringApplication.run(Main.class);
    }
}