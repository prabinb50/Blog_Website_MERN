import React, { useState } from "react";
import { NavLink } from "react-router";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { Bounce, toast } from "react-toastify";
import { AnimatedText, AnimatedCard, AnimatedFade } from "../components/AnimatedComponent";

export default function ContactUsPage() {
  // state variables to manage form inputs
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // display a toast notification on form submission
    toast("Thank you for your message! We will get back to you soon.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    // reset form fields after submission
    setName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setSubject("");
    setPhone("");
  };

  // contact details to display in the contact section
  const contactDetails = [
    {
      icon: <Mail className="h-8 w-8 text-purple-600" />,
      title: "Send Email",
      details: ["support@vexon.com", "contact@vexon.com"],
    },
    {
      icon: <MapPin className="h-8 w-8 text-purple-600" />,
      title: "Office Address",
      details: ["8708 Technology Forest Pl 125 - G", "The Woodlands"],
    },
    {
      icon: <Phone className="h-8 w-8 text-purple-600" />,
      title: "Contact Number",
      details: ["123-456-7890", "123-456-7890"],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-[#f6f2ff] w-full">
        <AnimatedFade className="flex items-center justify-center pt-20 pb-2 overflow-x-auto px-4 " delay={0.1}>
          <NavLink to={"/"} className="cursor-pointer ">
            Home
          </NavLink>

          <ChevronRight className="w-5 " />

          <p className="whitespace-nowrap">Blog</p>

          <ChevronRight className="w-5" />

          <p className="font-bold whitespace-nowrap">Contact Us</p>
        </AnimatedFade>

        <AnimatedText className="text-center font-bold text-5xl md:text-6xl pb-20 px-4" delay={0.2}>
          Contact Us
        </AnimatedText>
      </div>

      {/* main content section */}
      <div className="px-4 sm:px-6 py-13 sm:py-16 md:py-20">
        {/* introduction text  */}
        <AnimatedText className="text-center mb-6" delay={0.3}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            We'd Love to Hear From You
          </h2>
        </AnimatedText>

        <AnimatedText className="text-center mb-10" delay={0.4}>
          <p className="text-gray-600 px-4 sm:px-8 md:px-16 lg:px-60 text-sm sm:text-base">
            Whether you have questions, feedback, or just want to say hello, we're
            here to connect. Your thoughts and insights help us make Vexon better
            every day, and we're always excited to hear from our readers.
          </p>
        </AnimatedText>

        {/* contact form  */}
        <AnimatedCard className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md" delay={0.5}>
          <h3 className="text-2xl font-bold mb-6">Leave a Reply</h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* input fields for first name and last name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <input
                required
                type="text"
                placeholder="First Name"
                className="w-full p-3 border border-white rounded-lg text-base bg-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                required
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-white rounded-lg text-base bg-white"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            {/* input fields for email and phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-white rounded-lg text-base bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                required
                type="tel"
                pattern="[0-9]*"
                inputMode="numeric"
                placeholder="Phone"
                className="w-full p-3 border border-white rounded-lg text-base bg-white"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* input field for subject */}
            <input
              required
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-white rounded-lg text-base bg-white"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            {/* textarea for message */}
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 border border-white rounded-lg text-base bg-white"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            {/* submit button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-full font-bold hover:bg-black transition cursor-pointer text-base sm:text-lg"
            >
              Submit Request
            </button>
          </form>
        </AnimatedCard>
      </div>

      {/* contact details section */}
      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-13 sm:pb-16 md:pb-20 px-4 sm:px-6">
        {contactDetails.map((item, index) => (
          <AnimatedCard
            key={index}
            delay={0.2 + (0.1 * index)}
            className="group flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md hover:bg-purple-500 hover:scale-105 transition-transform cursor-pointer"
          >
            {/* icon for each contact detail */}
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              {item.icon}
            </div>

            {/* title and details */}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
              {item.title}
            </h3>

            {item.details.map((detail, i) => (
              <p key={i} className="text-gray-600 group-hover:text-white text-base">
                {detail}
              </p>
            ))}
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}