package com.project.lenskart.service;

import java.util.List;

import com.project.lenskart.dto.EmployeeDTO;

public interface EmployeeService {
    List<EmployeeDTO> getAll();

    EmployeeDTO save(EmployeeDTO employeeDTO);

    EmployeeDTO deleteById(Integer id);

    EmployeeDTO getById(Integer id) throws Exception;
}
