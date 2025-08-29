import { Layout } from "@/components/Layout/Layout";
import { ArrowOutwardRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  InputBase,
  Typography,
  FormHelperText,
  Divider,
} from "@mui/material";
import React, { useState } from "react";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    designation: "",
    contactNo: "",
    email: "",
    remarks: "",
  });

  const [errors, setErrors] = useState({});

  // Regex patterns
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const contactRegex = /^\d{1,10}$/;

  // Validation function
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (!nameRegex.test(value)) {
          error = "Name should only contain alphabets and spaces";
        }
        break;

      case "contactNo":
        if (!value.trim()) {
          error = "Contact number is required";
        } else if (!contactRegex.test(value)) {
          error = "Contact number should be digits only (max 10 digits)";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!emailRegex.test(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "company":
        if (!value.trim()) {
          error = "Company is required";
        }
        break;

      case "designation":
        if (!value.trim()) {
          error = "Designation is required";
        }
        break;

      case "remarks":
        if (!value.trim()) {
          error = "Remarks are required";
        } else if (value.length > 300) {
          error = "Remarks should not exceed 300 characters";
        }
        break;

      default:
        break;
    }

    return error;
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // For contact number, only allow digits and limit to 10
    if (name === "contactNo") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));

      // Clear error if input becomes valid
      const error = validateField(name, digitsOnly);
      if (!error) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
      return;
    }

    // For name, only allow alphabets and spaces
    if (name === "name") {
      const alphabetsOnly = value.replace(/[^A-Za-z\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: alphabetsOnly }));

      // Clear error if input becomes valid
      const error = validateField(name, alphabetsOnly);
      if (!error) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
      return;
    }

    // For remarks, limit to 300 characters
    if (name === "remarks" && value.length > 300) {
      return; // Don't update if exceeds limit
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error if input becomes valid
    const error = validateField(name, value);
    if (!error) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Add your form submission logic here
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
      <Layout>
        <Box sx={{ my: { xs: 2, md: 5 } }}>
          <Container maxWidth="xl">
            <Box
              sx={{
                bgcolor: "#FFFFFF",
                p: 2,
                borderRadius: "7px",
                border: "1.5px solid #e8e8e8",
                mx: { xs: -1, md: 0 },
                pt: { xs: 2, md: 10 },
                pb: 10,
              }}
            >
              <Grid container>
                <Grid item size={{ xs: 12, md: 5 }}>
                  <Typography
                    className="font-700"
                    sx={{ fontSize: { xs: "32px", md: "42px" } }}
                  >
                    Contact Us
                  </Typography>
                  <Typography
                    className="font-500"
                    sx={{ fontSize: { xs: "16px", md: "18px" } }}
                  >
                    Email:{" "}
                    <a href="mailto:hello@csrvoice.com">hello@csrvoice.com </a>
                  </Typography>
                  <Divider
                    sx={{ width: "90%", margin: "0 auto", my: 3 }}
                    className="font-500"
                  >
                    Or
                  </Divider>
                  <Typography
                    className="font-500"
                    sx={{ fontSize: { xs: "18px", md: "20px" } }}
                  >
                    provide your details we will contact you as soon as possible
                  </Typography>
                </Grid>
                <Grid
                  item
                  size={{ xs: 12, md: 7 }}
                  sx={{ mt: { xs: 4, md: 0 } }}
                >
                  <Card
                    sx={{
                      borderRadius: "12px",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      p: { xs: 0, md: 2 },
                    }}
                    elevation={0}
                    variant="outlined"
                  >
                    <CardContent>
                      <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                          <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography>Name *</Typography>
                            <InputBase
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              sx={{
                                border: `1px solid ${
                                  errors.name ? "#f44336" : "#e8e8e8"
                                }`,
                                borderRadius: "4px",
                                p: 1,
                              }}
                              fullWidth
                              placeholder="Enter your name"
                            />
                            {errors.name && (
                              <FormHelperText error>
                                {errors.name}
                              </FormHelperText>
                            )}
                          </Grid>

                          <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography>Company *</Typography>
                            <InputBase
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              sx={{
                                border: `1px solid ${
                                  errors.company ? "#f44336" : "#e8e8e8"
                                }`,
                                borderRadius: "4px",
                                p: 1,
                              }}
                              fullWidth
                              placeholder="Enter company name"
                            />
                            {errors.company && (
                              <FormHelperText error>
                                {errors.company}
                              </FormHelperText>
                            )}
                          </Grid>

                          <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography>Designation *</Typography>
                            <InputBase
                              name="designation"
                              value={formData.designation}
                              onChange={handleInputChange}
                              sx={{
                                border: `1px solid ${
                                  errors.designation ? "#f44336" : "#e8e8e8"
                                }`,
                                borderRadius: "4px",
                                p: 1,
                              }}
                              fullWidth
                              placeholder="Enter your designation"
                            />
                            {errors.designation && (
                              <FormHelperText error>
                                {errors.designation}
                              </FormHelperText>
                            )}
                          </Grid>

                          <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography>Contact No. *</Typography>
                            <InputBase
                              name="contactNo"
                              value={formData.contactNo}
                              onChange={handleInputChange}
                              sx={{
                                border: `1px solid ${
                                  errors.contactNo ? "#f44336" : "#e8e8e8"
                                }`,
                                borderRadius: "4px",
                                p: 1,
                              }}
                              fullWidth
                              placeholder="Enter 10-digit contact number"
                              inputProps={{ maxLength: 10 }}
                            />
                            {errors.contactNo && (
                              <FormHelperText error>
                                {errors.contactNo}
                              </FormHelperText>
                            )}
                          </Grid>

                          <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography>Email *</Typography>
                            <InputBase
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              sx={{
                                border: `1px solid ${
                                  errors.email ? "#f44336" : "#e8e8e8"
                                }`,
                                borderRadius: "4px",
                                p: 1,
                              }}
                              fullWidth
                              placeholder="Enter your email"
                            />
                            {errors.email && (
                              <FormHelperText error>
                                {errors.email}
                              </FormHelperText>
                            )}
                          </Grid>

                          <Grid item size={{ xs: 12 }}>
                            <Typography>Remarks *</Typography>
                            <InputBase
                              name="remarks"
                              value={formData.remarks}
                              onChange={handleInputChange}
                              multiline
                              rows={4}
                              sx={{
                                border: `1px solid ${
                                  errors.remarks ? "#f44336" : "#e8e8e8"
                                }`,
                                borderRadius: "4px",
                                p: 1,
                              }}
                              fullWidth
                              placeholder="Please share your message or inquiry (max 300 characters)"
                              inputProps={{ maxLength: 300 }}
                            />
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: 1,
                              }}
                            >
                              {errors.remarks && (
                                <FormHelperText error>
                                  {errors.remarks}
                                </FormHelperText>
                              )}
                              <Typography
                                variant="caption"
                                sx={{
                                  color:
                                    formData.remarks.length > 280
                                      ? "#f44336"
                                      : "#666",
                                  ml: "auto",
                                }}
                              >
                                {formData.remarks.length}/300
                              </Typography>
                            </Box>
                          </Grid>

                          <Grid item size={{ xs: 12 }}>
                            <Button
                              type="submit"
                              fullWidth
                              sx={{
                                textTransform: "none",
                                bgcolor: "#1877f2",
                                color: "#FFFFFF",
                                mt: 2,
                                borderRadius: "23px",
                                fontSize: "20px",
                                "&:hover": {
                                  bgcolor: "#166fe5",
                                },
                              }}
                              endIcon={<ArrowOutwardRounded />}
                            >
                              Submit
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default Contactus;
