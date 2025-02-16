package com.github.fingerbone;

import org.apache.dubbo.config.annotation.DubboService;

@DubboService
public class DemoServiceImpl implements DemoService{
    @Override
    public String hello(String name) {
        return "Hello " + name;
    }   
}
