package com.project.lenskart.controller;

import java.awt.PageAttributes;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.lenskart.dto.ProductDTO;
import com.project.lenskart.dto.ReviewDTO;
import com.project.lenskart.service.ProductService;

@RestController
@RequestMapping("product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping(value = "/save")
    public ProductDTO save(@RequestBody ProductDTO product) {
        return productService.save(product);
    }

    @GetMapping("/all")
    public List<ProductDTO> getAll() {
        return productService.getAll();
    }

    @GetMapping("/{id}")
    public ProductDTO getById(@PathVariable Integer id) throws Exception {
        return productService.getById(id);
    }

    @PostMapping("/review")
    public ReviewDTO save(@RequestBody ReviewDTO reviewDTO) {
        return productService.saveReview(reviewDTO);
    }

    @GetMapping("/review/{prodId}")
    public List<ReviewDTO> save(@PathVariable Integer prodId) {
        return productService.getReviewsByProductId(prodId);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Integer id) {
        productService.deleteById(id);
    }
}
