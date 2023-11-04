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
@Table(name = "prescription")
public class Prescription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    private Customer customer;

    @Column
    private Double ODPower;
    @Column
    private Double ODCyl;
    @Column
    private Double ODBC;
    @Column
    private Double ODDia;
    @Column
    private Integer ODAxis;
    @Column
    private Double OSPower;
    @Column
    private Double OSCyl;
    @Column
    private Double OSBC;
    @Column
    private Double OSDia;
    @Column
    private Integer OSAxis;
    @Column
    private Date createdDate;
}
