"use client";
import React, { useState } from "react";
import { Label } from "@repo/ui/label";
import { Input } from "@repo/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@repo/ui/components/ui/dialog";
import { Button } from "@repo/ui/components/ui/button";

export function PreRegForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })
  const [isOpen, setIsOpen] = useState(false)
  const [warning, setWarning] = useState("");

 const handleSubmit = async () => {
    if (!formData.email.endsWith("@gmail.com")) {
      setWarning("Email must end with @gmail.com");//adjust it later as per requirements
      return;
    }
    if(!formData.firstName && !formData.lastName){
      setWarning("Fields cannot be empty..fill them");
      return;
    }
    setWarning(""); 
    await fetch("/api", {
      method: "POST",
      body: JSON.stringify(formData)
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(prev => !prev)}>
      <DialogTrigger asChild>
        <Button className="scale-75 text-[2rem] text-black dark:text-white hover:bg-transparent dark:border-white w-fit h-fit cursor-pointer scroll-m-20 pb-2 font-semibold tracking-tight border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255)] px-4 py-2 hover:shadow transition duration-200 bg-transparent flex-shrink-0 bg-blue-500">Pre Register</Button>
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
            <Input id="firstname" placeholder="Tyler" type="text" value={formData.firstName} onChange={(e) => {
              setFormData(prev => {
                return {
                  ...prev,
                  firstName: e.target.value
                }
              })
            }} />
          </div>
          <div>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" value={formData.lastName} onChange={(e) => {
              setFormData(prev => {
                return {
                  ...prev,
                  lastName: e.target.value
                }
              })
            }} />
          </div>
        </div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={formData.email} onChange={(e) => {
          setFormData(prev => {
            return {
              ...prev,
              email: e.target.value
            }
          })
        }} />
          {warning && <p className="text-red-500" key={warning}>{warning}</p>}
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>Register</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
