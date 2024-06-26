"use client";
import React, { useState, useRef, FormEvent } from "react";
import { Label } from "@repo/ui/label";
import { Input } from "@repo/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog";
import { Button } from "@repo/ui/components/ui/button";
import ReCAPTCHA from "react-google-recaptcha";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

export function PreRegForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    const recaptchaResponse = recaptchaToken;

    const response = await fetch("/api/validate-recaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recaptchaResponse }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      // reCAPTCHA validation passed
      await fetch("/api/pre-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      alert("Success");
    } else {
      // reCAPTCHA validation failed
      alert("reCAPTCHA validation failed. Please try again.");
    }
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
      <DialogTrigger asChild>
        <Button className="scale-75 text-[2rem] text-black dark:text-white hover:bg-transparent dark:border-white w-fit h-fit cursor-pointer scroll-m-20 pb-2 font-semibold tracking-tight border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255)] px-4 py-2 hover:shadow transition duration-200 bg-transparent flex-shrink-0">
          Pre Register
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Tyler"
                type="text"
                value={formData.firstName}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }));
                }}
              />
            </div>
            <div>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Durden"
                type="text"
                value={formData.lastName}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }));
                }}
              />
            </div>
          </div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
          />
          <div className="mt-4">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={(token: string) => setRecaptchaToken(token)}
          />
          </div>
          <DialogFooter>
            <Button type="submit">Register</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
