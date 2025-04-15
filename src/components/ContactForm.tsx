"use client";
import React, { useState, ChangeEvent } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#222128",
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  color: "#d1d5db",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
    height: "650px",
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& label": {
    color: "#d1d5db",
  },
  "& .MuiInputBase-root": {
    color: "#d1d5db",
    backgroundColor: "#374151",
    borderRadius: theme.spacing(1),
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#26ABFF",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#26ABFF",
  },
  "& .MuiSelect-select": {
    fontFamily: "monospace",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#26ABFF",
  color: "#282c34",
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.spacing(1),
  fontFamily: "monospace",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#1e97e6",
  },
}));

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "60f6d255-6b4a-464a-9044-1861f56e73b6", // Replace with your Web3Forms access key
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Submitted successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <StyledPaper>
        <Typography
          variant="h4"
          gutterBottom
          className="pt-5 font-mono text-accent"
        >
          Let&apos;s work together
        </Typography>
        <Typography gutterBottom className="pt-5 font-mono mb-6">
          Please fill out the form below, and I&apos;ll get back to you as soon as
          possible.
        </Typography>
        <form onSubmit={handleSubmit}>
          <div
            className={`pt-5 ${
              isMobile ? "grid-cols-1" : "grid-cols-2"
            } gap-4 mb-4 grid`}
          >
            <StyledTextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              fullWidth
              className="bg-gray-700 rounded-lg p-2 font-mono"
            />
            <StyledTextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              fullWidth
              className="bg-gray-700 rounded-lg p-2 font-mono"
            />
          </div>
          <div className="mb-4">
            <StyledTextField
              label="Email address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              className="bg-gray-700 rounded-lg p-2 font-mono"
            />
          </div>
          <div className="mb-4">
            <StyledTextField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              fullWidth
              className="bg-gray-700 rounded-lg p-2 font-mono"
            />
          </div>
          <div className="mb-6">
            <StyledTextField
              multiline
              rows={4}
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              fullWidth
              className="bg-gray-700 rounded-lg p-2 font-mono"
            />
          </div>
          <StyledButton
            type="submit"
            fullWidth
            className="bg-accent text-gray-900 rounded-lg p-3 font-mono font-bold"
          >
            Send message
          </StyledButton>
        </form>
        <ToastContainer />
      </StyledPaper>
    </Container>
  );
};

export default ContactForm;

