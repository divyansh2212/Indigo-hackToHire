package com.flightservice.service;

import com.flightservice.model.Flight;
import com.flightservice.model.Passenger;
import com.flightservice.repository.PassengerRepository;
import com.flightservice.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FlightUpdateConsumer {

    @Autowired
    private EmailService emailService;

    @Autowired
    private PassengerRepository passengerRepository;

    @KafkaListener(topics = "flight-notifications", groupId = "flight-group")
    public void consume(Flight flight) {
        String subject = "Flight Update: " + flight.getStatus();

        String htmlBody = "<h1>Flight Details</h1>"
                + "<img src='https://blog-content.ixigo.com/wp-content/uploads/2019/09/Poland.jpeg' alt='Flight Image' style='width:600px;height:400px;'>"
                + "<p><strong>Flight Number:</strong> " + flight.getFlightNumber() + "</p>"
                + "<p><strong>Status:</strong> " + flight.getStatus() + "</p>"
                + "<p><strong>Airline:</strong> " + flight.getAirline() + "</p>"
                + "<p><strong>Departure Airport:</strong> " + flight.getDepartureAirport() + "</p>"
                + "<p><strong>Arrival Airport:</strong> " + flight.getArrivalAirport() + "</p>"
                + "<p><strong>Departure Date:</strong> " + flight.getDepartureDate() + "</p>"
                + "<p><strong>Is Premium:</strong> " + flight.getIsPremium() + "</p>";

        List<String> customers = getCustomersForFlight(flight.getFlightNumber());
        for (String customer : customers) {
            emailService.sendEmail(customer, subject, htmlBody);
        }
    }

    private List<String> getCustomersForFlight(String flightNumber) {
        List<String> emails = new ArrayList<>();
        List<Passenger> passengers = passengerRepository.findAll();
        for(Passenger passenger: passengers){
            if(passenger.getFlights().contains(flightNumber)) {
                emails.add(passenger.getEmail());
            }
        }
        return emails;
    }


}
