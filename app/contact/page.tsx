"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { fadeIn, staggerContainer, textVariant } from "../../lib/animation";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <motion.h1
        variants={textVariant(0.2)}
        className="text-4xl font-bold mb-8 text-center sm:text-5xl lg:text-6xl"
        style={{ color: "var(--color-foreground)" }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        variants={textVariant(0.3)}
        className="text-lg text-center mb-8 sm:text-xl lg:text-2xl"
        style={{ color: "var(--color-text)" }}
      >
        Feel free to reach out to me using the form below.
      </motion.p>

      <motion.div
        variants={fadeIn("up", 0.4)}
        className="card max-w-lg mx-auto"
      >
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              <svg
                className="w-8 h-8"
                style={{ color: "var(--color-secondary)" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </motion.div>
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: "var(--color-foreground)" }}
            >
              Message Sent!
            </h3>
            <p style={{ color: "var(--color-muted)" }}>
              Thank you for reaching out. I'll get back to you as soon as
              possible.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="mt-6"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-secondary)",
              }}
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="mt-1 custom-placeholder"
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="mt-1 custom-placeholder"
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your Message"
                className="mt-1 custom-placeholder"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-text)",
              }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
