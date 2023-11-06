package com.project.lenskart.model;


import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String apartmentNo;
    @Column
    private String city;
    @Column
    private String streetName;
    @Column
    private String state;
    @Column
    private String email;
    @Column
    private String zipCode;
    @Column
    private String phoneNumber;
    @Column
    private String password;
    @Column
    private Date createdDate;
    @Column
    private Boolean active;
    @Column
    private Date lastUpdatedDate;
}
