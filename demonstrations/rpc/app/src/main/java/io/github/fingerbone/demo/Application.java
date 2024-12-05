package io.github.fingerbone.demo;

import java.io.IOException;

import io.grpc.Server;
import io.grpc.protobuf.services.ProtoReflectionService;
import io.grpc.ServerBuilder;

public class Application {
    
    public static void main(String[] args) throws IOException, InterruptedException {
        Server server = ServerBuilder.forPort(8080)
            .addService(new EmailServiceImpl())
            .addService(ProtoReflectionService.newInstance())
            .build();
        server.start();
        server.awaitTermination();
    }

}
