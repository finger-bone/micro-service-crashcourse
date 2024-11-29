package io.github.fingerbone.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.github.fingerbone.entity.Name;
import io.github.fingerbone.repository.NameRepository;
import io.seata.spring.annotation.GlobalTransactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NameService {
    private final NameRepository nameRepository;

    // @GlobalTransactional(name = "createUser", timeoutMills = 10000, rollbackFor = Exception.class)
    public void createName(String name) {
        System.out.println("Will create name with name: " + name);
        nameRepository.save(
            new Name(null, name)
        );
    }
}
