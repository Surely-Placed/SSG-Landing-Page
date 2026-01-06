"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().optional(),
  subject: z.string().min(2, "Please add a subject."),
  message: z.string().min(10, "Please write a message (at least 10 characters)."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [attachment, setAttachment] = useState<File | null>(null);

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (values: ContactValues) => {
    const subject = `SSG Contact: ${values.subject}`;
    const bodyLines = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.phone ? `Phone: ${values.phone}` : null,
      attachment ? `Attachment: ${attachment.name} (please attach this file in your email client before sending)` : null,
      "",
      values.message,
    ].filter(Boolean) as string[];

    const mailto = `mailto:contact@ssg-global.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join("\n"),
    )}`;

    // Open the user's email client with a pre-filled message (no broken/static submit).
    window.location.href = mailto;
    toast.success("Opening email client…", { description: "Send the message from your mail app to reach us." });
    form.reset();
    setAttachment(null);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@company.com" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="+91 ..." autoComplete="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="How can we help?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us a bit about what you’re looking for..." className="min-h-[140px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-2">
          <FormLabel>Attachment (optional)</FormLabel>
          <Input
            type="file"
            onChange={(e) => setAttachment(e.target.files?.[0] ?? null)}
            aria-describedby="attachment-help"
          />
          <p id="attachment-help" className="text-xs text-muted-foreground">
            We’ll open your email client. Please attach the file there before sending.
          </p>
        </div>

        <div className="pt-2">
          <Button type="submit" className="w-full sm:w-auto">
            Send message
          </Button>
        </div>
      </form>
    </Form>
  );
}


