package io.github.fingerbone.demo;

import io.grpc.stub.StreamObserver;
import java.util.HashMap;
import java.util.Map;

public class EmailServiceImpl extends EmailServiceGrpc.EmailServiceImplBase {

    private final Map<Integer, Person> personMap = new HashMap<>();

    @Override
    public void getPersonById(PersonId request, StreamObserver<Person> responseObserver) {
        Person person = personMap.get(request.getId());
        if (person != null) {
            responseObserver.onNext(person);
        } else {
            responseObserver.onError(new Exception("Person not found"));
        }
        responseObserver.onCompleted();
    }

    @Override
    public void addPerson(Person request, StreamObserver<PersonId> responseObserver) {
        personMap.put(request.getId(), request);
        PersonId personId = PersonId.newBuilder().setId(request.getId()).build();
        responseObserver.onNext(personId);
        responseObserver.onCompleted();
    }
}