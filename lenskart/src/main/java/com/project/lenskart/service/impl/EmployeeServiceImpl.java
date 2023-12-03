package com.project.lenskart.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.lenskart.dto.EmployeeDTO;
import com.project.lenskart.model.Employee;
import com.project.lenskart.repository.EmployeeRepository;
import com.project.lenskart.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<EmployeeDTO> getAll() {
        List<Employee> list = employeeRepository.findAllByOrderByEmployeeIDDesc();
        List<EmployeeDTO> employees = new ArrayList<>();

        list.forEach(employee -> {
            employees.add(modelMapper.map(employee, EmployeeDTO.class));
        });
        return employees;
    }

    @Override
    public EmployeeDTO save(EmployeeDTO employeeDTO) {
        Employee entity = modelMapper.map(employeeDTO, Employee.class);
        entity = employeeRepository.save(entity);

        return modelMapper.map(entity, EmployeeDTO.class);
    }

    @Override
    public EmployeeDTO deleteById(Integer id) {
        return null;
    }

    @Override
    public EmployeeDTO getById(Integer id) throws Exception {
        Optional<Employee> employee = employeeRepository.findById(id);

        if (!employee.isPresent()) {
            throw new Exception("Product not found");
        }

        return modelMapper.map(employee.get(), EmployeeDTO.class);
    }
}
