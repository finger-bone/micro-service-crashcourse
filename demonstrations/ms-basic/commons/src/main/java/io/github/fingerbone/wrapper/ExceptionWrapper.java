package io.github.fingerbone.wrapper;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionWrapper {

    @ExceptionHandler(RuntimeException.class)
    public ResponseWrapper<String> handleException(RuntimeException e) {
        return ResponseWrapper.error(ResponseCode.INTERNAL_SERVER_ERROR, e.getMessage());
    }

}
