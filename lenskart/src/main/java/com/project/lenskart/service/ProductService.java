package com.project.lenskart.service;

import java.util.List;

import com.project.lenskart.dto.ProductDTO;
import com.project.lenskart.dto.ReviewDTO;

public interface ProductService {

    List<ProductDTO> getAll();

    ProductDTO save(ProductDTO productDTO);

    ProductDTO deleteById(Integer id);

    ProductDTO getById(Integer id) throws Exception;

    ReviewDTO saveReview(ReviewDTO reviewDTO);
    List<ReviewDTO> getReviewsByProductId(Integer id);
}
