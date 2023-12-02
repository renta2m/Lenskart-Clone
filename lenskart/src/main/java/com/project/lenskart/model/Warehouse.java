package com.project.lenskart.model;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import com.project.lenskart.constants.Status;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Warehouse")
public class Warehouse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "ApartmentNo")
    private String apartmentNo;

    @Column(name = "StreetName")
    private String streetName;

    @Column(name = "City")
    private String city;

    @Column(name = "State")
    private String state;

    @Column(name = "Zipcode")
    private String zipcode;

    @Column(name = "ActiveYN")
    private Status activeYN;

    @Column(name = "CreatedDate")
    private Date createdDate;

    @Column(name = "LastUpdatedDate")
    private Date lastUpdatedDate;

    @OneToMany(mappedBy = "warehouse")
    private List<Employee> employees;

    @OneToMany(mappedBy = "warehouse")
    private List<Product> products;

}
