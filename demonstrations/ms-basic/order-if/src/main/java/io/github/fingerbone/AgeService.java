package io.github.fingerbone;

import org.springframework.stereotype.Service;

import io.seata.spring.annotation.GlobalTransactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AgeService {
    private final AgeRepository ageRepository;
    private final PaymentAPIIf paymentAPIIf;

    @GlobalTransactional(name = "createUser", timeoutMills = 10000, rollbackFor = Exception.class)
    public void create(String name, Short age) {
        System.out.println("Will create age with name: " + name + " and age: " + age);
        ageRepository.save(
            new Age(null, age)
        );
        System.out.println("Will create name with name: " + name);
        paymentAPIIf.createName(name);
    }
}
