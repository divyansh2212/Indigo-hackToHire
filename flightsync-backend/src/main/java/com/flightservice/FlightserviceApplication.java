package com.flightservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class FlightserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlightserviceApplication.class, args);
	}

}
