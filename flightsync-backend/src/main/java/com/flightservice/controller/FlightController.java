package com.flightservice.controller;

import com.flightservice.config.KafkaConfig;
import com.flightservice.handler.FlightStatusHandler;
import com.flightservice.model.Flight;
import com.flightservice.model.Passenger;
import com.flightservice.repository.FlightRepository;
import com.flightservice.repository.PassengerRepository;
import com.flightservice.service.EmailService;
import com.flightservice.service.FirebaseService;
import com.flightservice.service.FlightUpdateProducer;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/flights")
public class FlightController {

    @Autowired
    private FirebaseService firebaseService;

    @Autowired
    private PassengerRepository passengerRepository;

    @Autowired
    private FlightRepository flightRepository;

    @Autowired
    private FlightStatusHandler flightStatusHandler;

    @Autowired
    private FlightUpdateProducer flightUpdateProducer;

    private ResponseEntity<String> validateAdmin(String authorizationHeader) {
        String idToken = authorizationHeader.replace("Bearer ", "");
        try {
            FirebaseToken decodedToken = firebaseService.verifyIdToken(idToken);
            String uid = decodedToken.getUid();

            Optional<Passenger> passenger = passengerRepository.findById(uid);

            if (passenger.isEmpty() || !passenger.get().getIsAdmin()) {
                return new ResponseEntity<>("Operation not permitted", HttpStatus.FORBIDDEN);
            }
            return null;

        } catch (FirebaseAuthException e) {
            System.out.println("Error while verifying token: " + e.getMessage());
            return new ResponseEntity<>("Unauthorized", HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllFlights(@RequestHeader("Authorization") String authorizationHeader) {
        ResponseEntity<String> validationResponse = validateAdmin(authorizationHeader);
        if (validationResponse != null) {
            return validationResponse;
        }

        List<Flight> flights = flightRepository.findAll();
        return new ResponseEntity<>(flights, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> addFlight(@RequestHeader("Authorization") String authorizationHeader, @RequestBody Flight flight) {
        ResponseEntity<String> validationResponse = validateAdmin(authorizationHeader);
        if (validationResponse != null) {
            return validationResponse;
        }

        Flight savedFlight = flightRepository.save(flight);
        return new ResponseEntity<>(savedFlight, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateFlight(@RequestHeader("Authorization") String authorizationHeader, @PathVariable String id, @RequestBody Flight updatedFlight) throws IOException {
        ResponseEntity<String> validationResponse = validateAdmin(authorizationHeader);
        if (validationResponse != null) {
            return validationResponse;
        }

        Optional<Flight> existingFlightOpt = flightRepository.findById(id);
        if (existingFlightOpt.isEmpty()) {
            return new ResponseEntity<>("Flight not found", HttpStatus.NOT_FOUND);
        }

        if(!Objects.equals(existingFlightOpt.get(), updatedFlight)) {
            flightStatusHandler.broadcastFlightUpdate(updatedFlight);
            flightUpdateProducer.sendFlightUpdate(updatedFlight);
        }

        Flight existingFlight = getFlight(updatedFlight, existingFlightOpt);

        flightRepository.save(existingFlight);
        return new ResponseEntity<>(existingFlight, HttpStatus.OK);
    }

    private static Flight getFlight(Flight updatedFlight, Optional<Flight> existingFlightOpt) {
        Flight existingFlight = existingFlightOpt.get();
        existingFlight.setFlightNumber(updatedFlight.getFlightNumber());
        existingFlight.setStatus(updatedFlight.getStatus());
        existingFlight.setAirline(updatedFlight.getAirline());
        existingFlight.setDepartureAirport(updatedFlight.getDepartureAirport());
        existingFlight.setArrivalAirport(updatedFlight.getArrivalAirport());
        existingFlight.setDepartureDate(updatedFlight.getDepartureDate());
        existingFlight.setIsPremium(updatedFlight.getIsPremium());
        return existingFlight;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFlight(@RequestHeader("Authorization") String authorizationHeader, @PathVariable String id) {
        ResponseEntity<String> validationResponse = validateAdmin(authorizationHeader);
        if (validationResponse != null) {
            return validationResponse;
        }

        if (!flightRepository.existsById(id)) {
            return new ResponseEntity<>("Flight not found", HttpStatus.NOT_FOUND);
        }

        flightRepository.deleteById(id);
        return new ResponseEntity<>("Flight deleted successfully", HttpStatus.OK);
    }

}
