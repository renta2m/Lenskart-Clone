package com.project.lenskart.dto;

import java.util.Date;
import java.util.List;

import com.project.lenskart.constants.Status;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderDTO {
    private Integer id;
    private Date ordersDate;
    private CustomerDTO customer;
    private EmployeeDTO employee;
    private PrescriptionDTO prescription;
    private String cardNumber;
    private String cvv;
    private Date expiryDate;
    private String nameOnCard;
    private Status activeYN;
    private List<OrderItemDTO> orderItems;
}
