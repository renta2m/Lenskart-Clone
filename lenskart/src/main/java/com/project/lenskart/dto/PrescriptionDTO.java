package com.project.lenskart.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PrescriptionDTO {
    private Integer id;
    private CustomerDTO customer;
    private Double odPower;
    private Double odCyl;
    private Integer odAxis;
    private Double odBC;
    private Double odDia;
    private Double osPower;
    private Double osCyl;
    private Integer osAxis;
    private Double osBC;
    private Double osDia;
    private Date createdDate;
}
