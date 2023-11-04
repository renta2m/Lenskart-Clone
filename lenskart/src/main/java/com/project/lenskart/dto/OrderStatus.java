package com.project.lenskart.dto;

public enum OrderStatus {
    CREATED("C"), SHIPPED("S"), DELIVERED("D");

    private String code;

    OrderStatus(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }
}


