"use client";
import React, { useState } from "react";
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

export function PreRegForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = async () => {
    await fetch("/api", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
      <DialogTrigger asChild>
        <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
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
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              value={formData.firstName}
              onChange={(e) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    firstName: e.target.value,
                  };
                });
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
                setFormData((prev) => {
                  return {
                    ...prev,
                    lastName: e.target.value,
                  };
                });
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
            setFormData((prev) => {
              return {
                ...prev,
                email: e.target.value,
              };
            });
          }}
        />
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Register
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
