package com.project.lenskart.model;


import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Prescription")
public class Prescription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "CustomerID")
    private Customer customer;

    @Column(name = "OD_Power")
    private Double odPower;

    @Column(name = "OD_Cyl")
    private Double odCyl;

    @Column(name = "OD_Axis")
    private Integer odAxis;

    @Column(name = "OD_BC")
    private Double odBC;

    @Column(name = "OD_Dia")
    private Double odDia;

    @Column(name = "OS_Power")
    private Double osPower;

    @Column(name = "OS_Cyl")
    private Double osCyl;

    @Column(name = "OS_Axis")
    private Integer osAxis;

    @Column(name = "OS_BC")
    private Double osBC;

    @Column(name = "OS_Dia")
    private Double osDia;

    @Column(name = "CreatedDate")
    private Date createdDate;
}
