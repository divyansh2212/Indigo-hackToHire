import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  DialogActions,
  Button,
  Chip,
  Box,
} from "@mui/material";
import {
  FlightTakeoff as FlightTakeoffIcon,
  FlightLand as FlightLandIcon,
  AccessTime as AccessTimeIcon,
  LocationOn as LocationOnIcon,
  Edit as EditIcon,
  ArrowForward as ArrowForwardIcon,
  Flight as FlightIcon,
} from "@mui/icons-material";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import styles from './FlightCard.module.css'; // Import the CSS module

const FlightCard = ({ flight, onUpdateStatus, isAdmin }) => {
  const [open, setOpen] = useState(false);
  const [newStatus, setNewStatus] = useState(flight.status);
  const { token } = useAuth();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    onUpdateStatus(flight.id, newStatus);
    setOpen(false);
    flight = { ...flight, status: newStatus };
    if (token) {
      await axios.put(`http://localhost:8081/flights/${flight.id}`, flight, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
    }
  };

  const getStatusChip = (status) => {
    switch (status) {
      case "On Time":
        return <Chip label="On Time" className={styles.statusChipOnTime} />;
      case "Delayed":
        return <Chip label="Delayed" className={styles.statusChipDelayed} />;
      case "Cancelled":
        return <Chip label="Cancelled" className={styles.statusChipCancelled} />;
      default:
        return <Chip label="Unknown" />;
    }
  };

  return (
    <>
      <Card className={styles.cardContainer}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center" className={styles.departureAirport}>
                <FlightTakeoffIcon sx={{ mr: 1 }} />
                <Typography variant="h6" component="div">
                  {flight.departureAirport} <ArrowForwardIcon sx={{ mx: 1 }} /> {flight.arrivalAirport}
                  <FlightLandIcon sx={{ ml: 1 }} />
                </Typography>
              </Box>
              {isAdmin && (
                <IconButton
                  onClick={handleClickOpen}
                  className={styles.iconButton}
                  aria-label="Edit flight status"
                >
                  <EditIcon />
                </IconButton>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" display="flex" alignItems="center">
                <FlightIcon sx={{ mr: 1 }} className={styles.flightIcon} />
                Flight ID: {flight.id}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" display="flex" alignItems="center">
                <LocationOnIcon sx={{ mr: 1 }} className={styles.flightIcon} />
                Gate No.: {flight.gateNo}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" display="flex" alignItems="center">
                <AccessTimeIcon sx={{ mr: 1 }} className={styles.flightIcon} />
                Departure Time: {new Date(flight.departureDate).toLocaleString()}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center" gap={1}>
                {getStatusChip(flight.status)}
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {isAdmin && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Flight Status</DialogTitle>
          <DialogContent>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={newStatus}
                label="Status"
                onChange={(e) => setNewStatus(e.target.value)}
              >
                <MenuItem value="On Time">On Time</MenuItem>
                <MenuItem value="Delayed">Delayed</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default FlightCard;
