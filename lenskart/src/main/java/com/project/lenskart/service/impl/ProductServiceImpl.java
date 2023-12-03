package com.project.lenskart.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.lenskart.dto.ProductDTO;
import com.project.lenskart.dto.ReviewDTO;
import com.project.lenskart.model.Product;
import com.project.lenskart.model.Review;
import com.project.lenskart.repository.ProductRepository;
import com.project.lenskart.repository.ReviewRepository;
import com.project.lenskart.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public List<ProductDTO> getAll() {
        List<Product> list = productRepository.findAllByOrderByIdDesc();
        List<ProductDTO> products = new ArrayList<>();

        list.forEach(product -> {
            products.add(modelMapper.map(product, ProductDTO.class));
        });
        return products;
    }

    @Override
    public ProductDTO save(ProductDTO productDTO) {
        Product entity = modelMapper.map(productDTO, Product.class);
        entity = productRepository.save(entity);

        return modelMapper.map(entity, ProductDTO.class);
    }

    @Override
    public ProductDTO deleteById(Integer id) {
        return null;
    }

    @Override
    public ProductDTO getById(Integer id) throws Exception {
        Optional<Product> product = productRepository.findById(id);

        if (!product.isPresent()) {
            throw new Exception("Product not found");
        }

        return modelMapper.map(product.get(), ProductDTO.class);
    }

    @Override
    public ReviewDTO saveReview(ReviewDTO reviewDTO) {
        Review review = modelMapper.map(reviewDTO, Review.class);
        reviewRepository.save(review);

        return modelMapper.map(review, ReviewDTO.class);
    }


    @Override
    public List<ReviewDTO> getReviewsByProductId(Integer id) {
        List<Review> reviews = reviewRepository.findByProductId(id);
        List<ReviewDTO> reviewDTOS = new ArrayList<>();

        reviews.forEach(review -> {
            reviewDTOS.add(modelMapper.map(review, ReviewDTO.class));
        });

        reviewDTOS.sort((a, b) -> {
            return b.getId().compareTo(a.getId());
        });
        return reviewDTOS;
    }
}
