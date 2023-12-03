package com.project.lenskart.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.lenskart.dto.CustomerDTO;
import com.project.lenskart.model.Customer;
import com.project.lenskart.repository.CustomerRepository;
import com.project.lenskart.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<CustomerDTO> getAll() {
        List<Customer> list = customerRepository.findAllByOrderByIdDesc();
        List<CustomerDTO> customers = new ArrayList<>();

        list.forEach(Customer -> {
            customers.add(modelMapper.map(Customer, CustomerDTO.class));
        });
        return customers;
    }

    @Override
    public CustomerDTO save(CustomerDTO customerDTO) {
        Customer entity = modelMapper.map(customerDTO, Customer.class);
        entity = customerRepository.save(entity);

        return modelMapper.map(entity, CustomerDTO.class);
    }

    @Override
    public CustomerDTO deleteById(Integer id) {
        return null;
    }

    @Override
    public CustomerDTO getById(Integer id) throws Exception {
        Optional<Customer> customer = customerRepository.findById(id);

        if (!customer.isPresent()) {
            throw new Exception("CUustomer not found");
        }

        return modelMapper.map(customer.get(), CustomerDTO.class);
    }
}
