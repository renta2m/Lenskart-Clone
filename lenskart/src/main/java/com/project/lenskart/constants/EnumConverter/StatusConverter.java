package com.project.lenskart.constants.EnumConverter;

import java.util.stream.Stream;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import com.project.lenskart.constants.Status;

@Converter(autoApply = true)
public class StatusConverter implements AttributeConverter<Status, Character> {

    @Override
    public Status convertToEntityAttribute(Character status) {
        if (status == null) {
            return null;
        }

        return Stream.of(Status.values())
                .filter(c -> c.getValue().equals(status))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }

    @Override
    public Character convertToDatabaseColumn(Status status) {
        if (status == null) {
            return null;
        }
        return status.getValue();
    }
}