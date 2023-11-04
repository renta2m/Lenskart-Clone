package com.project.lenskart.dto;

import java.util.Date;
import java.util.List;

import com.project.lenskart.model.Customer;
import com.project.lenskart.model.Employee;
import com.project.lenskart.model.OrderItem;
import com.project.lenskart.model.Prescription;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderDTO {

    private Integer id;

    private Date createdDate;

    private String cardNumber;

    private Integer cvv;

    private String nameOnCard;

    private Customer customer;

    private Employee employee;

    private Prescription prescription;
    private List<OrderItem> orderItems;

}
