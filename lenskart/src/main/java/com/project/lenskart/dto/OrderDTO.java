package com.project.lenskart.dto;

import java.util.Date;
import java.util.List;

import com.project.lenskart.constants.Status;
import com.project.lenskart.model.Customer;
import com.project.lenskart.model.Employee;
import com.project.lenskart.model.OrderItem;
import com.project.lenskart.model.Prescription;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderDTO {
    private int id;
    private Date ordersDate;
    private CustomerDTO customer;
    private EmployeeDTO employee;
    private PrescriptionDTO prescription;
    private String cardNumber;
    private String cvv;
    private Date expiryDate;
    private String nameOnCard;
    private Status activeYN;

}
