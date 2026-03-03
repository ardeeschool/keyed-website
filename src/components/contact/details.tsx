"use client";

import { Mail, Headphones, MapPin } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "E-mail address",
    value: "contact@keyed.education",
  },
  {
    icon: Headphones,
    title: "Call Us",
    value: "+91 (Available on request)",
  },
  {
    icon: MapPin,
    title: "Schedule a Demo",
    value: "Personalized walkthrough for leadership teams",
  },
];

export default function Details() {
  return (
    <section className=" flex items-center justify-center px-4 md:px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full">
        {contacts.map(({ icon: Icon, title, value }) => (
          <div
            key={title}
            className="bg-[#f0f0f0] rounded-3xl px-4 md:px-8 pt-6 pb-8 md:pt-10 md:pb-10 flex flex-col items-center text-center"
            style={{
              boxShadow:
                "0px 7.77px 16px 0px rgba(0, 0, 0, 0.0588235294), 0px 3px 3px 0px rgba(0, 0, 0, 0.1019607843), 0px -8px 0px 0px rgba(0, 0, 0, 0.0509803922) inset, 0px 4px 0px 0px rgba(255, 255, 255, 0.6) inset",
            }}
          >
            {/* Icon box with shadow */}
            <div
              className="w-16 h-16 bg-[#1e1e1e] rounded-2xl flex items-center justify-center mb-8"
              style={{
                boxShadow:
                  "4px 8px 20px rgba(0,0,0,0.45), -2px -2px 8px rgba(255,255,255,0.08)",
              }}
            >
              <Icon className="text-white w-7 h-7" strokeWidth={1.5} />
            </div>

            {/* Title */}
            <h3 className="text-[#1a1a1a] text-lg font-medium mb-2 tracking-tight">
              {title}
            </h3>

            {/* Value */}
            <p className="text-[#555] text-sm font-normal">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
