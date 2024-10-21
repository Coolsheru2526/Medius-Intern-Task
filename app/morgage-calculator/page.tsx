'use client';

import React, { useState } from 'react';
import { Box, Typography, TextField, Slider, Grid2, Button } from '@mui/material';

interface FormData {
  homePrice: number;
  downPayment: number;
  interestRate: number;
  loanTerm: number;
}

const MortgageCalculator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    homePrice: 30000,
    downPayment: 6000,
    interestRate: 6.5,
    loanTerm: 30
  });

  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const [errors, setErrors] = useState({
    homePrice: '',
    downPayment: '',
    interestRate: '',
    loanTerm: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setErrors({
      ...errors,
      [name]: ''
    });

    setFormData({
      ...formData,
      [name]: Number(value)
    });
  };

  const handleSliderChange = (e: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setFormData({
        ...formData,
        homePrice: newValue
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      homePrice: formData.homePrice <= 0 ? 'Home price must be greater than 0' : '',
      downPayment: formData.downPayment <= 0 || formData.downPayment >= formData.homePrice
        ? 'Down payment must be less than home price and greater than 0'
        : '',
      interestRate: formData.interestRate <= 0 ? 'Interest rate must be greater than 0' : '',
      loanTerm: formData.loanTerm <= 0 ? 'Loan term must be greater than 0' : ''
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === '');
  };

  const calculateMortgage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const principal = formData.homePrice - formData.downPayment;
    const monthlyRate = formData.interestRate / 100 / 12;
    const totalPayments = formData.loanTerm * 12;

    if (principal > 0 && monthlyRate > 0 && totalPayments > 0) {
      const M = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
      setMonthlyPayment(Number(M.toFixed(2))); 
    }
  };

  return (
    <Box sx={{ padding:'100px',mt: 4, maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Mortgage Calculator
      </Typography>
      <Typography variant="body1" gutterBottom>
        Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
      </Typography>

      <form onSubmit={calculateMortgage}>
        <Box sx={{ my: 3 }}>
          <Typography gutterBottom>Home Price</Typography>
          <TextField
            variant="outlined"
            fullWidth
            name="homePrice"
            value={formData.homePrice}
            onChange={handleInputChange}
            error={!!errors.homePrice}
            helperText={errors.homePrice}
          />
          <Slider
            value={formData.homePrice}
            min={5000}
            max={1000000}
            step={1000}
            onChange={handleSliderChange}
            sx={{ mt: 2 }}
          />
        </Box>

        <Grid2 container spacing={2}>
          <Grid2  size={{xs:6,md:4}}>
            <TextField
              label="Down Payment"
              variant="outlined"
              fullWidth
              name="downPayment"
              value={formData.downPayment}
              onChange={handleInputChange}
              error={!!errors.downPayment}
              helperText={errors.downPayment}
            />
          </Grid2>
          <Grid2 size={{xs:6,md:4}}>
            <TextField
              label="Interest Rate"
              variant="outlined"
              fullWidth
              name="interestRate"
              value={formData.interestRate}
              onChange={handleInputChange}
              error={!!errors.interestRate}
              helperText={errors.interestRate}
            />
          </Grid2>
          <Grid2 size={{xs:6,md:4}}>
            <TextField
              label="Loan Term"
              variant="outlined"
              fullWidth
              name="loanTerm"
              value={formData.loanTerm}
              onChange={handleInputChange}
              error={!!errors.loanTerm}
              helperText={errors.loanTerm}
            />
          </Grid2>
        </Grid2>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 4, py: 2, fontSize: '1.2rem' }}
        >
          Calculate Monthly Payment
        </Button>
      </form>

      {monthlyPayment && (
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Monthly Payment: ${monthlyPayment}/mo
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default MortgageCalculator;
