package com.flightservice.model;

import lombok.Data;

import java.util.List;

@Data
public class Passenger {
    private String id;
    private String name;
    private String email;
    private List<String> flights;
    private Boolean isAdmin;
}
