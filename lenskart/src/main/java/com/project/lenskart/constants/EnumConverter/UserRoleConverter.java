package com.project.lenskart.constants.EnumConverter;

import java.util.stream.Stream;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import com.project.lenskart.constants.UserRole;
import com.project.lenskart.repository.UserRepository;

@Converter(autoApply = true)
public class UserRoleConverter implements AttributeConverter<UserRole, String> {
    @Override
    public String convertToDatabaseColumn(UserRole role) {
        if (role == null) {
            return null;
        }
        return role.getCode();
    }

    @Override
    public UserRole convertToEntityAttribute(String code) {
        if (code == null) {
            return null;
        }

        return Stream.of(UserRole.values())
                .filter(c -> c.getCode().equals(code))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }
}