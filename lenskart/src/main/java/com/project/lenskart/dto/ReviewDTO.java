package com.project.lenskart.dto;

import java.util.Date;

import com.project.lenskart.constants.Status;
import com.project.lenskart.model.Customer;
import com.project.lenskart.model.Product;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewDTO {
    private Integer id;
    private ProductDTO product;
    private CustomerDTO customer;
    private Date datePosted;
    private Integer rating;
    private String review;
    private Status activeYN;
    private Date lastUpdate;
}
