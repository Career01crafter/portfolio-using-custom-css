import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


export default function Contact() {
  return (
    <section className="contact-section">
      
      <div className="contact-form-container">
        <h2 className="contact-title">Contact Us</h2>

        <form>
          <div className="form-group">
            <Input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <Input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <Input type="tel" placeholder="Your Phone Number" required />
          </div>
          <div className="form-group">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="value">
                  <SelectLabel>Subjects</SelectLabel>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="form-group">
            <Textarea placeholder="Your Message" required />
          </div>
          <div className="form-submit">
            <Button type="submit" className="submit-button">
              Send Message
            </Button>
          </div>
        </form>

        <div className="contact-info">
          <h3 className="contact-info-title">Contact Information</h3>
          <p className="contact-info-text">
            <FaMapMarkerAlt className="contact-icon" /> Near Gulbahar Police Station, Liaquatabad Town, Karachi-Central
          </p>
          <p className="contact-info-text">
            <FaEnvelope className="contact-icon" /> pakistani47log@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
