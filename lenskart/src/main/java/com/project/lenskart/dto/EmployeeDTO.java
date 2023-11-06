package com.project.lenskart.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeDTO {
    private Integer id;

    private String firstName;

    private String lastName;

    private String Designation;

    private String email;

    private String phoneNumber;

    private String createdDate;

    private String lastUpdatedDate;

    private String password;

    private Boolean active;
}
