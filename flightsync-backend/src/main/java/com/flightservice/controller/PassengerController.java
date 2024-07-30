package com.flightservice.controller;

import com.flightservice.model.Flight;
import com.flightservice.model.Passenger;
import com.flightservice.repository.FlightRepository;
import com.flightservice.repository.PassengerRepository;
import com.flightservice.service.FirebaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.google.firebase.auth.FirebaseToken;
import com.google.firebase.auth.FirebaseAuthException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class PassengerController {
    @Autowired
    private FirebaseService firebaseService;

    @Autowired
    private PassengerRepository passengerRepository;

    @Autowired
    private FlightRepository flightRepository;

    @GetMapping("/my-flights")
    public ResponseEntity<?> getAllFlights(@RequestHeader("Authorization") String authorizationHeader) {
        String idToken = authorizationHeader.replace("Bearer ", "");
        try {
            FirebaseToken decodedToken = firebaseService.verifyIdToken(idToken);
            String uid = decodedToken.getUid();

            Optional<Passenger> passenger = passengerRepository.findById(uid);
            List<String> flights = passenger.get().getFlights();

            List<Flight> flightDetails = new ArrayList<>();
            for(String flight: flights) {
                Flight flightDetail = flightRepository.findByFlightNumber(flight);
                flightDetails.add(flightDetail);
            }

            return new ResponseEntity<>(flightDetails, HttpStatus.OK);
        } catch (FirebaseAuthException e) {
            System.out.println("Error while fetching Flights " + e);
            return new ResponseEntity<>("Not Found", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/signup")
    public String SignUp(@RequestHeader("Authorization") String authorizationHeader,
                                    @RequestBody Passenger passenger) {
        String idToken = authorizationHeader.replace("Bearer ", "");
        try {
            FirebaseToken decodedToken = firebaseService.verifyIdToken(idToken);
            String uid = decodedToken.getUid();

            Optional<Passenger> prevPassenger = passengerRepository.findById(uid);

            if(prevPassenger.isPresent())
                return "Already the User of Flights";

            passenger.setIsAdmin(false);
            passengerRepository.save(passenger);
            return String.format("User ID: %s, Username: %s, Name: %s, Email: %s",
                    uid, passenger.getId(), passenger.getName(), passenger.getEmail());
        } catch (FirebaseAuthException e) {
            return "Unauthorized: " + e.getMessage();
        }
    }
}
