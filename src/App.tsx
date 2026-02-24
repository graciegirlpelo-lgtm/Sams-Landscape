import { motion } from "motion/react";
import { Phone, Mail, MapPin, CheckCircle2, Star, Instagram, Facebook } from "lucide-react";
import React, { useState, FormEvent } from "react";

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-serif text-xl">S</div>
        <span className="font-serif text-xl font-bold text-primary hidden sm:block">Sam's Landscaping</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#services" className="hover:text-primary transition-colors">Services</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </div>
      <a 
        href="tel:9199167184" 
        className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-secondary transition-all shadow-md"
      >
        <Phone size={16} />
        <span className="hidden sm:inline">(919) 916-7184</span>
        <span className="sm:hidden">Call</span>
      </a>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl text-accent mb-6 leading-tight italic"
        >
          Transform Your Outdoor Space with Expert Landscaping
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto font-semibold"
        >
          Local, reliable landscaping services in Durham, NC. We bring your vision to life with precision and care.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="bg-accent hover:bg-white hover:text-primary text-primary px-8 py-4 rounded-full text-lg font-bold transition-all inline-block shadow-xl"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white opacity-50">
        <div className="w-1 h-12 border-l border-white mx-auto"></div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div>
          <h2 className="text-4xl text-primary mb-6 text-center">Rooted in Durham, Built on Trust</h2>
          <p className="text-lg text-stone-600 mb-6 leading-relaxed">
            Sam’s Landscaping is a locally owned small business dedicated to enhancing the natural beauty of Durham, North Carolina. We believe that a well-maintained yard is more than just grass and plants—it's an extension of your home and a place for memories.
          </p>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            With a sharp attention to detail and a commitment to reliable, high-quality work, we provide personalized service that larger companies often overlook. Whether it's a routine mow or a complete landscape redesign, we treat every project as if it were our own backyard.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <CheckCircle2 size={20} className="text-accent" />
              <span>Locally Owned</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <CheckCircle2 size={20} className="text-accent" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <CheckCircle2 size={20} className="text-accent" />
              <span>Expert Design</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <CheckCircle2 size={20} className="text-accent" />
              <span>Reliable Scheduling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Lawn Care & Maintenance",
      description: "Precision mowing, edging, and fertilization to keep your lawn lush and healthy year-round.",
      icon: "🌱"
    },
    {
      title: "Landscaping Design",
      description: "Custom outdoor living spaces, flower bed design, and structural landscaping tailored to your home.",
      icon: "🏡"
    },
    {
      title: "Yard Cleanup",
      description: "Seasonal leaf removal, debris clearing, and storm damage cleanup to keep your property tidy.",
      icon: "🧹"
    },
    {
      title: "Mulching & Planting",
      description: "Professional installation of mulch, pine straw, trees, and seasonal flowers for instant curb appeal.",
      icon: "🌸"
    },
    {
      title: "Outdoor Improvements",
      description: "General enhancements including sod installation, drainage solutions, and small hardscape projects.",
      icon: "🛠️"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white border-t border-stone-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-primary mb-4">Our Services</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">Comprehensive landscaping solutions for homeowners in Durham and surrounding areas.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl text-primary mb-3">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const points = [
    { title: "Local Durham Business", desc: "We know the local soil, climate, and community." },
    { title: "Reliable & On-Time", desc: "We value your time and show up when we say we will." },
    { title: "High-Quality Results", desc: "No shortcuts. We take pride in every blade of grass." },
    { title: "Customer-Focused", desc: "Your satisfaction is our top priority, always." },
    { title: "Free Estimates", desc: "Transparent pricing with no hidden fees." }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div>
          <h2 className="text-4xl text-primary mb-8 text-center">Why Choose Sam's?</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {points.map((point, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-primary">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">{point.title}</h4>
                  <p className="text-stone-600">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xnjbowbe", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
        // Reset status back to idle after 5 seconds so they can see the success message then the form is ready again
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl text-primary mb-6">Request Your Free Estimate Today</h2>
          <p className="text-lg text-stone-600 mb-10">
            Ready to transform your yard? Fill out the form or give us a call. We'll get back to you within 24 hours to schedule a walkthrough.
          </p>
          <div className="space-y-6">
            <a href="tel:9199167184" className="flex items-center gap-4 text-primary hover:text-secondary transition-colors group">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">Call Us</p>
                <p className="text-xl font-bold">(919) 916-7184</p>
              </div>
            </a>
            <div className="flex items-center gap-4 text-primary">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">Location</p>
                <p className="text-xl font-bold">Durham, NC 27713</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-stone-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-stone-700 mb-2">Name</label>
                <input required id="name" name="name" type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-accent bg-white" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-stone-700 mb-2">Phone</label>
                <input id="phone" name="phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-accent bg-white" placeholder="(919) 000-0000" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-stone-700 mb-2">Email</label>
              <input required id="email" name="email" type="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-accent bg-white" placeholder="email@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-stone-700 mb-2">How can we help?</label>
              <textarea required id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-accent bg-white" placeholder="Tell us about your project..."></textarea>
            </div>
            
            {status === "success" && (
              <div className="p-4 bg-accent/20 text-primary rounded-xl font-bold text-center">
                Success! Your message has been sent.
              </div>
            )}
            
            {status === "error" && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl font-bold text-center">
                Oops! There was a problem sending your message.
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === "submitting"}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-secondary transition-all shadow-lg disabled:opacity-50"
            >
              {status === "submitting" ? "Sending..." : "Send Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white text-stone-900 pt-20 pb-10 px-6 md:px-12 border-t border-stone-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-serif text-xl">S</div>
            <span className="font-serif text-2xl font-bold text-primary">Sam's Landscaping</span>
          </div>
          <p className="text-stone-600 max-w-sm mb-8">
            Professional landscaping and lawn care services in Durham, NC. Locally owned, reliable, and committed to excellence.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-primary">Quick Links</h4>
          <ul className="space-y-4 text-stone-600">
            <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Our Services</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-primary">Contact Info</h4>
          <ul className="space-y-4 text-stone-600">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent" />
              <span>(919) 916-7184</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-accent" />
              <span>3825 Dunn Ave, Durham, NC</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent" />
              <span>info@samslandscaping.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8 border-t border-stone-100 text-center text-stone-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Sam's Landscaping. All rights reserved. Serving Durham, NC and surrounding areas.</p>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
      
      {/* Mobile Click-to-Call FAB */}
      <a 
        href="tel:9199167184" 
        className="md:hidden fixed bottom-6 right-6 w-16 h-16 bg-accent text-primary rounded-full shadow-2xl flex items-center justify-center z-50 animate-pulse"
      >
        <Phone size={28} />
      </a>
    </div>
  );
}
