package com.project.lenskart.constants;

public enum UserRole {
    CUSTOMER("C"), EMPLOYEE("E"), ADMIN("A");

    private String code;

    UserRole(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }
}

