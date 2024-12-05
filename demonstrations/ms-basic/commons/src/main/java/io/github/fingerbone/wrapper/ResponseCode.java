package io.github.fingerbone.wrapper;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ResponseCode {
    SUCCESS(200, "Success"),
    INTERNAL_SERVER_ERROR(500, "Internal Server Error"),
    BREAKER_TRIGGERED(501, "Breaker is Open");

    private final Integer code;
    private final String message;
}
