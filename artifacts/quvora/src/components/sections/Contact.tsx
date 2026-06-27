import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

import { useSubmitContact } from "@workspace/api-client-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  designation: z.string().optional(),
  employeeCount: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
  agreed: z.boolean().refine(val => val === true, "You must agree to be contacted"),
});

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const submitContact = useSubmitContact();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      company: "",
      designation: "",
      employeeCount: "",
      service: "",
      message: "",
      agreed: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    submitContact.mutate(
      { data: values },
      {
        onSuccess: () => {
          setIsSuccess(true);
        },
        onError: () => {
          // In a real app we'd show a toast here
          console.error("Submission failed");
        }
      }
    );
  }

  const contactInfo = [
    { icon: Mail, title: "Email", value: "connect@quvoraconsulting.com" },
    { icon: Phone, title: "Phone", value: "+91-XXXXXXXXXX" },
    { icon: MapPin, title: "Location", value: "India" },
    { icon: Clock, title: "Business Hours", value: "Mon–Fri, 9:00 AM – 6:00 PM" },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 inline-block relative">
                Let's Connect
                <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-accent" />
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Whether you're looking to hire top talent or seeking strategic HR advisory, our experts are here to help. Reach out to discuss your specific needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Map Placeholder */}
            <div className="w-full h-48 rounded-xl bg-primary/5 border border-border relative overflow-hidden flex items-center justify-center mt-8">
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.5" fill="#0A2A5E" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dot-grid)" />
                </svg>
              </div>
              <MapPin className="w-8 h-8 text-accent relative z-10" />
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl border border-border p-8 md:p-10"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-2xl font-bold text-primary mb-8">Send an Inquiry</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField control={form.control} name="fullName" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium">Full Name *</FormLabel>
                            <FormControl><Input placeholder="John Doe" {...field} className="bg-background" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium">Phone *</FormLabel>
                            <FormControl><Input placeholder="+1 234 567 8900" {...field} className="bg-background" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">Email *</FormLabel>
                          <FormControl><Input type="email" placeholder="john@company.com" {...field} className="bg-background" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField control={form.control} name="company" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium">Company Name</FormLabel>
                            <FormControl><Input placeholder="Acme Corp" {...field} className="bg-background" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="designation" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium">Designation</FormLabel>
                            <FormControl><Input placeholder="HR Director" {...field} className="bg-background" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField control={form.control} name="employeeCount" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium">Number of Employees</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-background"><SelectValue placeholder="Select size" /></SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1-50">1 - 50</SelectItem>
                                <SelectItem value="51-200">51 - 200</SelectItem>
                                <SelectItem value="201-500">201 - 500</SelectItem>
                                <SelectItem value="500+">500+</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="service" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium">Service Needed *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-background"><SelectValue placeholder="Select service" /></SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="permanent">Permanent Recruitment</SelectItem>
                                <SelectItem value="executive">Executive Search</SelectItem>
                                <SelectItem value="consulting">HR Consulting</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">Message</FormLabel>
                          <FormControl><Textarea placeholder="Tell us about your requirements..." className="resize-none bg-background h-32" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="agreed" render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border border-border rounded-md bg-background">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-medium text-muted-foreground cursor-pointer">
                              I agree to be contacted by Quvora Consulting regarding my inquiry.
                            </FormLabel>
                          </div>
                        </FormItem>
                      )} />

                      <Button 
                        type="submit" 
                        className="w-full h-12 text-lg bg-accent hover:bg-accent/90 text-white" 
                        disabled={submitContact.isPending}
                      >
                        {submitContact.isPending ? "Sending..." : "Send Inquiry →"}
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center space-y-6 py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <CheckCircle className="w-24 h-24 text-accent" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-accent">Thank You!</h3>
                  <p className="text-lg text-muted-foreground">
                    Your inquiry has been submitted. Our HR experts will contact you shortly.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsSuccess(false);
                      form.reset();
                    }}
                    className="mt-8"
                  >
                    Send another inquiry
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
