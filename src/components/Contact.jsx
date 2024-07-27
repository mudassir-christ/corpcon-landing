import { useState } from "react";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";

function Contact() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { name, phoneNumber });

    setName("");
    setPhoneNumber("");
  };
  return (
    <Section id="contact">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          tag="Join the Future of Tech at CORPCON 2025"
        />

        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-orange-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

          <div className="relative px-4 py-10 bg-slate-900 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Join Now</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  {/* Name input */}
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      className="peer  h-10 w-full border-b-2 border-gray-300 text-white bg-slate-900 focus:outline-none focus:border-purple-600"
                      placeholder="Your Name"
                    />
                  </div>
                  {/* Phone number input */}
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="phoneNumber"
                      name="phoneNumber"
                      type="number"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      className="peer  h-10 w-full border-b-2 border-gray-300 text-white bg-slate-900 focus:outline-none focus:border-purple-600"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="relative">
                    <Button onClick={handleSubmit}>Join Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
