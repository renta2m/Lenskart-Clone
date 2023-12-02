package com.project.lenskart.dto;


import java.util.Date;

import com.project.lenskart.constants.Status;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeDTO {
    private Integer employeeID;
    private String firstName;
    private String designation;
    private String lastName;
    private String phoneNumber;
    private String email;
    private String password;
    private Status activeYN;
    private Date createdDate;
    private Date lastUpdatedDate;
    private WarehouseDTO warehouse;
}
