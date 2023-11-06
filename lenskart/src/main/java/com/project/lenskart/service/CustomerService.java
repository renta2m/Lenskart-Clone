package com.project.lenskart.service;

import java.util.List;

import com.project.lenskart.dto.CustomerDTO;

public interface CustomerService {
    List<CustomerDTO> getAll();

    CustomerDTO save(CustomerDTO customerDTO);

    CustomerDTO deleteById(Integer id);

    CustomerDTO getById(Integer id) throws Exception;
}
