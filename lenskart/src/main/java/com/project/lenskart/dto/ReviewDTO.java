package com.project.lenskart.dto;

import java.util.Date;

import com.project.lenskart.model.Customer;
import com.project.lenskart.model.Product;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewDTO {
    private Integer id;

    private String review;

    private Integer rating;

    private Customer customer;

    private Product product;

    private Date datePosted;
}
