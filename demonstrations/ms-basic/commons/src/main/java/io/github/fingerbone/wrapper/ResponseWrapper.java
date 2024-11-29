package io.github.fingerbone.wrapper;

public record ResponseWrapper<T>(Integer code, String message, Long time, T data) {

    public static <T> ResponseWrapper<T> success(T data) {
        return new ResponseWrapper<>(ResponseCode.SUCCESS.getCode(), ResponseCode.SUCCESS.getMessage(), System.currentTimeMillis(), data);
    }

    public static <Void> ResponseWrapper<Void> success() {
        return new ResponseWrapper<>(ResponseCode.SUCCESS.getCode(), ResponseCode.SUCCESS.getMessage(), System.currentTimeMillis(),null);
    }

    public static <T> ResponseWrapper<T> error(ResponseCode responseCode, T data) {
        return new ResponseWrapper<>(responseCode.getCode(), responseCode.getMessage(), System.currentTimeMillis(), data);
    }

    public static <Void> ResponseWrapper<Void> error(ResponseCode responseCode) {
        return new ResponseWrapper<>(responseCode.getCode(), responseCode.getMessage(), System.currentTimeMillis(), null);
    }

    public static <Void> ResponseWrapper<Void> error() {
        return new ResponseWrapper<>(ResponseCode.INTERNAL_SERVER_ERROR.getCode(), ResponseCode.INTERNAL_SERVER_ERROR.getMessage(), System.currentTimeMillis(), null);
    }

    public static <T> ResponseWrapper<T> circuitOpen() {
        return new ResponseWrapper<>(ResponseCode.BREAKER_TRIGGERED.getCode(), ResponseCode.BREAKER_TRIGGERED.getMessage(), System.currentTimeMillis(), null);
    }
}
