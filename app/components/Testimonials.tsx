'use client';
import { useState } from 'react';
import { testimonials } from '../../data/testimonials';
import Slider from '@mui/material/Slider';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSliderChange = (
    event: Event,
    newIndex: number | number[]
  ): void => {
    if (typeof newIndex === 'number') {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Find out why we’re better.</h2>

        <div className="max-w-md mx-auto text-left bg-gray-50 rounded-lg shadow-md p-6">
          <div className="mb-4">
            <img
              src={testimonials[currentIndex].image}
              alt={`Customer ${testimonials[currentIndex].name}`}
              className="w-full rounded-lg"
            />
          </div>
          <p className="italic mb-4">"{testimonials[currentIndex].text}"</p>
          <p className="font-bold mt-2">{testimonials[currentIndex].name} - {testimonials[currentIndex].role}</p>
        </div>

        <Slider
          value={currentIndex}
          min={0}
          max={testimonials.length - 1}
          step={1}
          onChange={handleSliderChange}
          className="mt-8 max-w-md mx-auto"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
