"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message. Please try again.");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-stone-200 shadow-sm rounded-2xl p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[420px]">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-sm border border-emerald-100">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-stone-900 mb-2">Message Sent Successfully!</h3>
        <p className="text-stone-600 max-w-md mb-8 leading-relaxed">
          Thank you for reaching out to VillageSoft. We have logged your details and our team will get in touch with you shortly.
        </p>
        <Button
          type="button"
          onClick={() => setStatus("idle")}
          variant="outline"
          className="border-stone-300 text-stone-700 hover:bg-stone-50"
        >
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-stone-200 shadow-sm rounded-2xl p-8 h-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        {status === "error" && (
          <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Could not send your message</p>
              <p className="text-red-600 mt-0.5">{errorMessage}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-stone-900">
              Name <span className="text-[#327a2b]">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={status === "loading"}
              className="flex h-10 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#4ea645] disabled:opacity-50"
              placeholder="Jane Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-stone-900">
              Email <span className="text-[#327a2b]">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={status === "loading"}
              className="flex h-10 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#4ea645] disabled:opacity-50"
              placeholder="jane@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-stone-900">
              Phone Number <span className="text-stone-400 font-normal">(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={status === "loading"}
              className="flex h-10 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#4ea645] disabled:opacity-50"
              placeholder="+91 98765 43210"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-stone-900">
              Company / Institution <span className="text-stone-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={handleChange}
              disabled={status === "loading"}
              className="flex h-10 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#4ea645] disabled:opacity-50"
              placeholder="Organization Name"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-stone-900">
            Area of Interest
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={handleChange}
            disabled={status === "loading"}
            className="flex h-10 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#4ea645] disabled:opacity-50"
          >
            <option value="">Select an area of interest...</option>
            <option value="Data & Analytics">Data & Analytics</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="AI Validation & Assurance">AI Validation & Assurance</option>
            <option value="Talent Transformation">Talent Transformation</option>
            <option value="Professional Training">Professional Training</option>
            <option value="HR & Careers">HR & Careers</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-stone-900">
            Message <span className="text-[#327a2b]">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            disabled={status === "loading"}
            className="flex min-h-[100px] w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#4ea645] resize-y disabled:opacity-50"
            placeholder="Tell us about your requirements or question..."
          ></textarea>
        </div>

        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full h-11 text-base bg-[#3d8c35] hover:bg-[#34782d] text-white font-medium shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending Details...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
