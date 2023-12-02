package com.project.lenskart.dto;

import java.util.Date;

import com.project.lenskart.constants.Status;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WarehouseDTO {
    private Integer id;
    private String apartmentNo;
    private String streetName;
    private String city;
    private String state;
    private String zipcode;
    private Status activeYN;
    private Date createdDate;
    private Date lastUpdatedDate;
}
