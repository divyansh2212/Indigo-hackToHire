package com.flightservice.repository;

import com.flightservice.model.Flight;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FlightRepository extends MongoRepository<Flight, String> {
    Flight findByFlightNumber(String flightNumber);
}