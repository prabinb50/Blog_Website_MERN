import React, { useEffect, useState } from 'react';
import SecondNavbar from '../components/SecondNavbar';
import { NavLink } from 'react-router';
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import { Bounce, toast } from 'react-toastify';

export default function ContactUsPage() {
    // State variables to manage form inputs
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Display a toast notification on form submission
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

        // Reset form fields after submission
        setName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setSubject("");
        setPhone("");
    };

    // Contact details to display in the contact section
    const contactDetails = [
        {
            icon: <Mail className="h-8 w-8 text-purple-600" />,
            title: "Send Email",
            details: ["support@vexon.com", "contact@vexon.com"],
        },
        {
            icon: <MapPin className="h-8 w-8 text-purple-600" />,
            title: "Office Address",
            details: ["8708 Technology Forest Pl Suite 125 - G", "The Woodlands"],
        },
        {
            icon: <Phone className="h-8 w-8 text-purple-600" />,
            title: "Contact Number",
            details: ["123-456-7890", "123-456-7890"],
        },
    ];

    return (
        <div className='bg-gray-50'>
            {/* Header section with navigation */}
            <SecondNavbar />

            <div className="bg-[#f6f2ff]">
                {/* Breadcrumb navigation */}
                <div className="flex items-center justify-center pt-20">
                    <NavLink to={"/"} className="cursor-pointer">Home</NavLink>
                    <ChevronRight />
                    <p>Blog</p>
                    <ChevronRight />
                    <p className="font-bold">Contact Us</p>
                </div>

                {/* Page title */}
                <p className="text-center font-bold text-6xl pb-20">Contact Us</p>
            </div>

            {/* Main content section */}
            <div className="px-6 py-20">
                {/* Introduction text */}
                <h2 className="text-center text-5xl font-semibold mb-6">We’d Love to Hear From You</h2>
                <p className="text-center text-gray-600 mb-10 px-60">
                    Whether you have questions, feedback, or just want to say hello, we’re here to connect.
                    Your thoughts and insights help us make Vexon better every day, and we’re always excited
                    to hear from our readers.
                </p>

                {/* Contact form */}
                <div className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-6">Leave a Reply</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Input fields for first name and last name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                required
                                type="text"
                                placeholder="First Name"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                required
                                type="text"
                                placeholder="Last Name"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        {/* Input fields for email and phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                required
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                required
                                type="number"
                                placeholder="Phone"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        {/* Input field for subject */}
                        <input
                            required
                            type="text"
                            placeholder="Subject"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />

                        {/* Textarea for message */}
                        <textarea
                            placeholder="Message"
                            rows="5"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-black transition cursor-pointer"
                        >
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>

            {/* Contact details section */}
            <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactDetails.map((item, index) => (
                    <div
                        key={index}
                        className="group flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md hover:bg-purple-500 hover:scale-105 transition-transform cursor-pointer"
                    >
                        {/* Icon for each contact detail */}
                        <div className="bg-purple-100 p-4 rounded-full mb-4">
                            {item.icon}
                        </div>

                        {/* Title and details */}
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{item.title}</h3>
                        {item.details.map((detail, i) => (
                            <p key={i} className="text-gray-600 group-hover:text-white">{detail}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}