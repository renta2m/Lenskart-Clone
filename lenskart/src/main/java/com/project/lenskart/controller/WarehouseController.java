package com.project.lenskart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.lenskart.dto.ProductDTO;
import com.project.lenskart.dto.WarehouseDTO;
import com.project.lenskart.service.ProductService;
import com.project.lenskart.service.WarehouseService;

@RestController
@RequestMapping("warehouse")
public class WarehouseController {
    @Autowired
    private WarehouseService warehouseService;

    @PostMapping(value = "/save")
    public WarehouseDTO save(@RequestBody WarehouseDTO warehouseDTO) {
        return warehouseService.save(warehouseDTO);
    }

    @GetMapping("/all")
    public List<WarehouseDTO> getAll() {
        return warehouseService.getAll();
    }

    @GetMapping("/{id}")
    public WarehouseDTO getById(@PathVariable Integer id) throws Exception {
        return warehouseService.getById(id);
    }

}
