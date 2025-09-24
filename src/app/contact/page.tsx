'use client'
import AppShell from "../AppShell";
import React from "react";
import { showToast } from '@/lib/toast';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function EnquiryForm({ onSuccess }: { onSuccess?: () => void }) {
  const [form, setForm] = React.useState({ 
    name: '', 
    email: '', 
    phone: '', 
    city: '', 
    course: '', 
    message: '' 
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [fieldWarning, setFieldWarning] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFieldWarning('');
  };

  const handleSelectChange = (value: string) => {
    setForm({ ...form, course: value });
    setFieldWarning('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFieldWarning('Please fill out all required fields.');
      showToast.warning('Missing Required Fields', 'Please fill out all required fields.');
      return;
    }
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess('Submitted!');
        showToast.success('Enquiry Submitted!', 'Your enquiry has been submitted successfully');
        setForm({ name: '', email: '', phone: '', city: '', course: '', message: '' });
        if (onSuccess) onSuccess();
      } else {
        setError(data.message || 'Submission failed');
        showToast.error('Submission Failed', data.message || 'An error occurred during submission');
      }
    } catch (err) {
      console.error(err);
      setError('Submission failed. Please try again later.');
      showToast.error('Submission Failed', 'An error occurred. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-lg">
          We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
        </p>
      </div>
      
      {fieldWarning && (
        <div className="text-red-600 text-sm mb-6 p-4 bg-red-50 rounded-xl border border-red-200 flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          {fieldWarning}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="name" className="text-sm font-semibold text-gray-800 flex items-center gap-1">
              Name <span className="text-red-500 text-lg">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full h-12 px-4 text-gray-900 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
            />
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="email" className="text-sm font-semibold text-gray-800 flex items-center gap-1">
              E-mail <span className="text-red-500 text-lg">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full h-12 px-4 text-gray-900 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="phone" className="text-sm font-semibold text-gray-800 flex items-center gap-1">
              Phone <span className="text-red-500 text-lg">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              className="w-full h-12 px-4 text-gray-900 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
            />
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="city" className="text-sm font-semibold text-gray-800 flex items-center gap-1">
              City <span className="text-red-500 text-lg">*</span>
            </Label>
            <Input
              id="city"
              name="city"
              type="text"
              placeholder="Enter your city"
              value={form.city}
              onChange={handleChange}
              className="w-full h-12 px-4 text-gray-900 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="course" className="text-sm font-semibold text-gray-800 flex items-center gap-1">
            Select Course <span className="text-red-500 text-lg">*</span>
          </Label>
          <Select value={form.course} onValueChange={handleSelectChange}>
            <SelectTrigger className="w-full h-12 px-4 text-gray-900 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white">
              <SelectValue placeholder="Choose a course that interests you..." />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-2 border-gray-200 shadow-xl">
              <SelectItem value="marketing-psychology" className="py-3 px-4 hover:bg-blue-50">Marketing Psychology</SelectItem>
              <SelectItem value="seo" className="py-3 px-4 hover:bg-blue-50">SEO (Search Engine Optimization)</SelectItem>
              <SelectItem value="meta-ads" className="py-3 px-4 hover:bg-blue-50">Meta Ads</SelectItem>
              <SelectItem value="zoho-books" className="py-3 px-4 hover:bg-blue-50">Zoho Books Support</SelectItem>
              <SelectItem value="digital-marketing" className="py-3 px-4 hover:bg-blue-50">Digital Marketing</SelectItem>
              <SelectItem value="other" className="py-3 px-4 hover:bg-blue-50">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label htmlFor="message" className="text-sm font-semibold text-gray-800">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us more about your requirements or any questions you have..."
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 text-gray-900 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
          />
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            size="lg"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </div>
            ) : (
              'Submit Enquiry'
            )}
          </Button>
        </div>

        {error && (
          <div className="text-red-600 text-sm p-4 bg-red-50 rounded-xl border border-red-200 flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            {error}
          </div>
        )}
        {success && (
          <div className="text-green-600 text-sm p-4 bg-green-50 rounded-xl border border-green-200 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            {success}
          </div>
        )}
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <AppShell>
      {/* Hero Section */}
      <div 
        className="relative min-h-[400px] bg-gradient-to-r from-gray-900/80 to-gray-800/80 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/sumup-uDttXGYgu4w-unsplash.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Contact With Us
          </h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-lg">
            <span className="hover:text-blue-300 cursor-pointer transition-colors">Home</span>
            <ChevronRight className="w-5 h-5" />
            <span className="text-blue-300">Contact With Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Keep In Touch With Us
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  If you require clarifications on any of the courses or the admission process, we are happy to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Phone Numbers */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Call us on:</h3>
                    <div className="space-y-1 text-gray-700">

                      <p> +91 8086 531 531</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email us at:</h3>
                    <div className="space-y-1 text-gray-700">
                      <p> contact@grovexlearning.com</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Locate us on (H Q):</h3>
                    <div className="text-gray-700">
                      <p>Grovex Learning</p>
                      <p>4th Floor, Empora Gemz, </p>
                      <p>Thondayad, Calicut</p>
                      <p>Kerala, India - 673016</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
