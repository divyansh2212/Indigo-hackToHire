package com.flightservice.service;

import com.flightservice.model.Flight;
import org.springframework.kafka.core.KafkaAdmin;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class FlightUpdateProducer {
    private final KafkaTemplate<String, Flight> kafkaTemplate;

    public FlightUpdateProducer(KafkaTemplate<String, Flight> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendFlightUpdate(Flight flight) {
        kafkaTemplate.send("flight-notifications", flight);
    }
}
