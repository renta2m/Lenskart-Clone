package com.project.lenskart.dto;

import com.project.lenskart.constants.UserRole;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private Integer id;
    private String userId;
    private String password;
    private UserRole userRole;
}
