import React, { useState, useEffect } from 'react';
import FlightCard from '../../components/FlightCard/FlightCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography, Box } from "@mui/material";
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import { useAuth } from "../../AuthContext";
import Footer from '../../components/Footer/Footer';

const AdminPage = () => {
    const dummyFlights = [
        { id: 'FL123', gate: 'A1', departureTime: '2024-08-01T10:00:00Z', source: 'JFK', destination: 'LAX', status: 'On Time' },
        { id: 'FL456', gate: 'B2', departureTime: '2024-08-01T12:30:00Z', source: 'LAX', destination: 'ORD', status: 'Delayed' },
        { id: 'FL789', gate: 'C3', departureTime: '2024-08-01T14:00:00Z', source: 'ORD', destination: 'DFW', status: 'Cancelled' },
        { id: 'FL101', gate: 'D1', departureTime: '2024-08-01T16:45:00Z', source: 'DFW', destination: 'MIA', status: 'On Time' },
        { id: 'FL102', gate: 'A4', departureTime: '2024-08-01T18:00:00Z', source: 'MIA', destination: 'ATL', status: 'Delayed' },
        { id: 'FL103', gate: 'B5', departureTime: '2024-08-01T20:15:00Z', source: 'ATL', destination: 'SEA', status: 'On Time' },
        { id: 'FL104', gate: 'C6', departureTime: '2024-08-01T22:30:00Z', source: 'SEA', destination: 'SFO', status: 'On Time' },
        { id: 'FL105', gate: 'D7', departureTime: '2024-08-01T23:45:00Z', source: 'SFO', destination: 'JFK', status: 'Cancelled' },
        { id: 'FL106', gate: 'A2', departureTime: '2024-08-02T05:00:00Z', source: 'JFK', destination: 'LAX', status: 'Delayed' },
        { id: 'FL107', gate: 'B3', departureTime: '2024-08-02T07:15:00Z', source: 'LAX', destination: 'ORD', status: 'On Time' },
        { id: 'FL108', gate: 'C8', departureTime: '2024-08-02T09:30:00Z', source: 'ORD', destination: 'DFW', status: 'On Time' },
        { id: 'FL109', gate: 'D9', departureTime: '2024-08-02T11:45:00Z', source: 'DFW', destination: 'MIA', status: 'Delayed' },
        { id: 'FL110', gate: 'A3', departureTime: '2024-08-02T13:00:00Z', source: 'MIA', destination: 'ATL', status: 'On Time' },
        { id: 'FL111', gate: 'B4', departureTime: '2024-08-02T15:15:00Z', source: 'ATL', destination: 'SEA', status: 'Cancelled' },
        { id: 'FL112', gate: 'C5', departureTime: '2024-08-02T17:30:00Z', source: 'SEA', destination: 'SFO', status: 'On Time' }
    ];

    const [flights, setFlights] = useState([]);
    const { token } = useAuth();

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                if (token) {
                    const response = await axios.get("http://localhost:8081/flights", {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        }
                    });
                    setFlights(response.data);
                } else {
                    // Fallback to dummy data if not authenticated or token is missing
                    setFlights(dummyFlights);
                }
            } catch (error) {
                console.error("Error fetching flights:", error);
                setFlights(dummyFlights); // Use dummy data in case of error
            }
        };
        fetchFlights();
    }, [token]);

    const handleUpdateStatus = (id, newStatus) => {
        setFlights(flights.map(flight => flight.id === id ? { ...flight, status: newStatus } : flight));
    };

    return (
        <>
            <Navbar />
            <Container>
                <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                        sx={{
                            color: "black",
                            fontWeight: "bold",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                            margin: '20px'
                        }}
                    >
                        Flight List
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    {flights.map((flight) => (
                        <Grid item xs={12} sm={6} md={4} key={flight.id}>
                            <FlightCard flight={flight} onUpdateStatus={handleUpdateStatus} isAdmin={true} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer/>
        </>
    );
};

export default AdminPage;
