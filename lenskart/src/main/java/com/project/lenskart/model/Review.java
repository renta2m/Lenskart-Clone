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

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.project.lenskart.constants.Status;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "ProductID")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "CustomerID")
    private Customer customer;

    @Column(name = "DatePosted")
    private Date datePosted;

    @Column(name = "Rating")
    private Integer rating;

    @Column(name = "Review")
    private String review;

    @Column(name = "ActiveYN")
    private Status activeYN;

    @Column(name = "LastUpdate")
    private Date lastUpdate;
}
