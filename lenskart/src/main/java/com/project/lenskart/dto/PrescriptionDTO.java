package com.project.lenskart.dto;

import java.util.Date;

import com.project.lenskart.model.Customer;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PrescriptionDTO {
    private Integer id;
    private Customer customer;
    private Double ODPower;
    private Double ODCyl;
    private Double ODBC;
    private Double ODDia;
    private Integer ODAxis;
    private Double OSPower;
    private Double OSCyl;
    private Double OSBC;
    private Double OSDia;
    private Integer OSAxis;
    private Date createdDate;
}
