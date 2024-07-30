package com.flightservice.model;

import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document("flight")
public class Flight {
    @Id
    private String id;
    private String flightNumber;
    private String status;
    private String airline;
    private String gateNo;
    private String departureAirport;
    private String arrivalAirport;
    private LocalDateTime departureDate;
    private Boolean isPremium;
}