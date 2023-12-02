package com.project.lenskart.model;

import java.io.Serializable;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class OrderItemPkId implements Serializable {
    @ManyToOne
    @JoinColumn(name = "OrdersID", referencedColumnName = "id")
    @JsonIgnore
    private Order orders;
    @ManyToOne
    @JoinColumn(name = "ProductID", referencedColumnName = "id")
    private Product product;

}
