package com.project.lenskart.constants;

public enum Status {
    ACTIVE('Y'), INACTIVE('N');

    private Character value;

    Status(Character value) {
        this.value = value;
    }

    public Character getValue() {
        return value;
    }
}

