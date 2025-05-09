"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8 text-center sm:text-5xl lg:text-6xl text-white">
        Contact Me
      </h1>
      <p className="text-lg text-center mb-8 sm:text-xl lg:text-2xl text-gray-300">
        Feel free to reach out to me using the form below.
      </p>
      <form className="max-w-lg mx-auto bg-gray-800 p-8 shadow-md rounded-lg">
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Your Message"
            className="mt-1"
            required
          />
        </div>
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          Send Message
        </Button>
      </form>
    </div>
  );
}
