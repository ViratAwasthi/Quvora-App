import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, MapPin, CheckCircle } from "lucide-react";

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
        onSuccess: () => setIsSuccess(true),
        onError: () => console.error("Submission failed"),
      }
    );
  }

  return (
    <section id="contact" className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#C89B3C]/10 text-[#C89B3C] text-sm font-semibold rounded-full mb-4 tracking-wide">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            Let's Connect
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#C89B3C]" />
          </h2>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
            Whether you're looking to hire top talent or seeking strategic HR advisory, our experts are here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col justify-center space-y-8"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-primary">Reach Out Directly</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fill in the form and one of our HR consultants will respond within one business day.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#C89B3C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary text-sm mb-1">Email Us</h4>
                  <a
                    href="mailto:connect@quvoraconsulting.com"
                    className="text-sm text-muted-foreground hover:text-[#C89B3C] transition-colors"
                  >
                    connect@quvoraconsulting.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C89B3C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary text-sm mb-1">Office Address</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Kohinoor Business Park,<br />
                    Amar Nagar, Nav Pada,<br />
                    Kurla West, Mumbai,<br />
                    Maharashtra 400070
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-[#0d3575] rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-[#C89B3C]/15" />
              <div className="relative z-10">
                <div className="text-2xl font-bold text-[#C89B3C] mb-1">24h</div>
                <div className="text-sm text-white/80">Response guarantee on all inquiries</div>
                <div className="mt-3 text-xs text-white/50">Monday – Friday, 9:00 AM – 6:00 PM IST</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-2xl shadow-xl border border-border/50 p-5 sm:p-8 md:p-10 mt-8 lg:mt-0"
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
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <FormField control={form.control} name="fullName" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium text-sm">Full Name *</FormLabel>
                            <FormControl><Input placeholder="John Doe" {...field} className="bg-[#F7F8FA] border-border/60" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium text-sm">Phone *</FormLabel>
                            <FormControl><Input placeholder="+91 98765 43210" {...field} className="bg-[#F7F8FA] border-border/60" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium text-sm">Work Email *</FormLabel>
                          <FormControl><Input type="email" placeholder="you@company.com" {...field} className="bg-[#F7F8FA] border-border/60" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <div className="grid sm:grid-cols-2 gap-5">
                        <FormField control={form.control} name="company" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium text-sm">Company Name</FormLabel>
                            <FormControl><Input placeholder="Acme Corp" {...field} className="bg-[#F7F8FA] border-border/60" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="designation" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium text-sm">Designation</FormLabel>
                            <FormControl><Input placeholder="HR Director" {...field} className="bg-[#F7F8FA] border-border/60" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <FormField control={form.control} name="employeeCount" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium text-sm">Company Size</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-[#F7F8FA] border-border/60"><SelectValue placeholder="Select size" /></SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1-50">1 – 50</SelectItem>
                                <SelectItem value="51-200">51 – 200</SelectItem>
                                <SelectItem value="201-500">201 – 500</SelectItem>
                                <SelectItem value="500+">500+</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="service" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium text-sm">Service Needed *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-[#F7F8FA] border-border/60"><SelectValue placeholder="Select service" /></SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="permanent">Permanent Recruitment</SelectItem>
                                <SelectItem value="executive">Executive Search</SelectItem>
                                <SelectItem value="consulting">HR Consulting</SelectItem>
                                <SelectItem value="payroll">Payroll Management</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium text-sm">Message</FormLabel>
                          <FormControl><Textarea placeholder="Tell us about your hiring needs or HR challenge..." className="resize-none bg-[#F7F8FA] border-border/60 h-28" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="agreed" render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border border-border/60 rounded-lg bg-[#F7F8FA]">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-xs font-medium text-muted-foreground cursor-pointer">
                              I agree to be contacted by Quvora Consulting regarding my inquiry.
                            </FormLabel>
                          </div>
                        </FormItem>
                      )} />

                      <Button
                        type="submit"
                        className="w-full h-12 text-base bg-[#C89B3C] hover:bg-[#b8892e] text-white font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
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
                  className="flex flex-col items-center justify-center text-center space-y-6 py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <CheckCircle className="w-20 h-20 text-[#C89B3C]" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-primary">Thank You!</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Your inquiry has been submitted. One of our HR consultants will reach out within one business day.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => { setIsSuccess(false); form.reset(); }}
                    className="mt-4 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Send Another Inquiry
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
