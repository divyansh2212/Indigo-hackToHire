package com.flightservice.config;

import com.flightservice.handler.FlightStatusHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(flightStatusHandler(), "/flight-status").setAllowedOrigins("*");
    }

    @Bean
    public FlightStatusHandler flightStatusHandler() {
        return new FlightStatusHandler();
    }
}