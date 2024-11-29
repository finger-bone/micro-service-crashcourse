package io.github.fingerbone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.github.fingerbone.entity.Name;

@Repository
public interface NameRepository extends JpaRepository<Name, Long> {
    
}
