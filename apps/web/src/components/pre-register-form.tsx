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
import Button from "./Button";

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
        <Button className=" p-3 rounded hover:text-blue-600" white>
          Pre Register
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gradient-to-r from-slate-950 to-gray-850 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="inputs-container">
          <div>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Enter your first name"
              className="text-gray-400"
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
              placeholder="Enter your last name"
              className="text-gray-400"
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
          placeholder="example@gmail.com"
          type="email"
          className="text-gray-400"
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
          <Button type="submit" onClick={handleSubmit} white>
            Register
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
