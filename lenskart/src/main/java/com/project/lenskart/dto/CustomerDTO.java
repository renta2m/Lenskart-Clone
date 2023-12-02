package com.project.lenskart.dto;

import java.util.Date;
import java.util.List;

import com.project.lenskart.constants.Status;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerDTO {
    private Integer id;
    private String firstName;
    private String lastName;
    private String apartmentNo;
    private String streetName;
    private String city;
    private String state;
    private String zipCode;
    private String email;
    private String password;
    private String phoneNumber;
    private Status activeYN;
    private Date createdDate;
    private Date lastUpdatedDate;
}
