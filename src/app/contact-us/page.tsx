"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import React from "react";

const ContactUs = () => {
  return (
    <section className="min-h-screen">
      {/* Hero Header */}
      <div className="w-full bg-blue-900 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 mb-20">
        {/* Info Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-900">Talk to Us Directly</h2>
            <p className="text-gray-700 mt-2">
              The best way to reach us during regular business hours is by phone.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-800">(610) 649-0313</h2>
            <p className="text-gray-700 mt-2">
              Use the contact form if you can’t talk right now.{" "}
              <span className="text-red-600 font-medium">
                Any scheduling changes or cancellations must be called in during business hours.
              </span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-blue-50 p-6 rounded-xl shadow space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="first_name">First Name</Label>
              <Input name="first_name" type="text" placeholder="John" />
            </div>
            <div>
              <Label htmlFor="last_name">Last Name</Label>
              <Input name="last_name" type="text" placeholder="Doe" />
            </div>
          </div>

          <div>
            <Label>Preferred Contact Method*</Label>
            <RadioGroup defaultValue="phone" className="mt-2 space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="phone" />
                <Label htmlFor="phone">Phone</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email" />
                <Label htmlFor="email">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="text" id="text" />
                <Label htmlFor="text">Text</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phonenumber">Phone Number</Label>
              <Input type="tel" name="phonenumber" placeholder="123-456-7890" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" placeholder="you@example.com" />
            </div>
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea name="message" placeholder="Type your message here..." />
          </div>

          <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
