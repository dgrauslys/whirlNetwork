import React, { useContext, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Grid,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { DateTime } from "luxon";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "../../components/Button";
import CardContainer from "../CardContainer/CardContainer";
import { DesktopContext } from "../../hooks/contexts";
import { Copy, HeaderText, SmallCopy } from "../constants";
import axios from "axios";
import { baseUrl } from "../../constants";

  
  export default function BookingModal({buttonTitle, title, isFullWidth = false}) {
  const [open, setOpen] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [timeWindows, setTimeWindows] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const isDesktop = useContext(DesktopContext);
  const [response, setResponse] = useState({});

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isDesktop ? "50%" : "100%",
  };

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    // Clear all form data when closing the modal
    setSelectedDays([]);
    setTimeWindows({});
    setName("");
    setEmail("");
    setPhoneNumber("");
    setDescription("");
    setOpen(false);
  };

  const handleDateChange = (newDate) => {
    if (!newDate) return;
    const formattedDate = newDate.toISODate();
    if (selectedDays.length < 3 && !selectedDays.includes(formattedDate)) {
      setSelectedDays((prev) => [...prev, formattedDate]);
    } else if (selectedDays.includes(formattedDate)) {
      alert("This date is already selected.");
    } else {
      alert("You can select up to three days only.");
    }
  };

  const handleTimeChange = (date, time) => {
    setTimeWindows((prev) => ({ ...prev, [date]: time }));
  };

  const removeDay = (day) => {
    setSelectedDays((prev) => prev.filter((selectedDay) => selectedDay !== day));
    setTimeWindows((prev) => {
      const updatedWindows = { ...prev };
      delete updatedWindows[day];
      return updatedWindows;
    });
  };

  const handleSubmit = () => {
    if (selectedDays.length === 0) {
      alert("Please select at least one day.");
      return;
    }
    const allTimesSelected = selectedDays.every((day) => timeWindows[day]);
    if (!allTimesSelected) {
      alert("Please select a time window for each selected day.");
      return;
    }
    if (!phoneNumber) {
      alert("Please enter your phone number.");
      return;
    }

    const data = {
      days: selectedDays,
      timeWindows: timeWindows,
      name: name,
      email: email,
      phone: phoneNumber,
      description: description
    };
    console.log("Selected Days:", selectedDays);
    console.log("Time Windows:", timeWindows);
    console.log("Phone Number:", phoneNumber);
    console.log("Description:", description);
    // https://zugyorganizer.com/sendEmail.php
    axios.post('/sendEmail.php', data)
      .then(response => {
        console.log(response);
        setResponse(JSON.stringify(response.data));
      })
      .catch(error => {
        console.error('Error:', error);
        setResponse('An error occurred');
      });


    handleClose();
  };

  return (
    <div>
      <Button variant="contained" fullWidth={isFullWidth} onClick={handleOpen}>{buttonTitle}</Button>
      <Modal open={open} onClose={handleClose}>
      

        <Box sx={modalStyle}>
        <CardContainer>
          <HeaderText gutterBottom>
            {title}
          </HeaderText>
          <LocalizationProvider dateAdapter={AdapterLuxon}>
            <DatePicker
              label="Pick a Day"
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField {...params} fullWidth sx={{ mb: 2 }} />
              )}
            />
          </LocalizationProvider>
          <SmallCopy gutterBottom>
            * Selected (Max: 3) Days for Zugy to reachout to you on.
          </SmallCopy>
          <Grid container spacing={2}>
            {selectedDays.map((day) => (
              <Grid item xs={12} key={day}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="body2">
                    {DateTime.fromISO(day).toLocaleString(DateTime.DATE_MED)}
                  </Typography>
                  <IconButton
                    color="error"
                    size="small"
                    onClick={() => removeDay(day)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
                <Select
                  fullWidth
                  value={timeWindows[day] || ""}
                  onChange={(e) => handleTimeChange(day, e.target.value)}
                >
                  <MenuItem value="">Select Time Window</MenuItem>
                  <MenuItem value="9AM - 11AM">9AM - 11AM</MenuItem>
                  <MenuItem value="1PM - 3PM">1PM - 3PM</MenuItem>
                  <MenuItem value="4PM - 6PM">4PM - 6PM</MenuItem>
                </Select>
              </Grid>
            ))}
          </Grid>
          <TextField
            label="Name"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            value={phoneNumber}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
            value={phoneNumber}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Phone Number"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            label="Short Description"
            fullWidth
            multiline
            rows={3}
            sx={{ mt: 2, mb: 2 }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
          >
            Submit
          </Button></CardContainer>
        </Box>
      </Modal>
    </div>
  );
}
