package com.project.lenskart.dto;

import java.util.Date;

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
    private String email;
    private String zipCode;
    private String phoneNumber;
    private String password;
    private Date createdDate;
    private Date lastUpdatedDate;
    private UserDTO user;
}
