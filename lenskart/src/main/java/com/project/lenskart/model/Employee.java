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

import com.project.lenskart.constants.Status;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "EmployeeID")
    private Integer employeeID;

    @Column(name = "FirstName")
    private String firstName;

    @Column(name = "Designation")
    private String designation;

    @Column(name = "LastName")
    private String lastName;

    @Column(name = "PhoneNumber")
    private String phoneNumber;

    @Column(name = "Email")
    private String email;

    @Column(name = "Password")
    private String password;

    @Column(name = "ActiveYN")
    private Status activeYN;

    @Column(name = "CreatedDate")
    private Date createdDate;

    @Column(name = "LastUpdatedDate")
    private Date lastUpdatedDate;

    @ManyToOne
    @JoinColumn(name = "WarehouseID")
    private Warehouse warehouse;
}
