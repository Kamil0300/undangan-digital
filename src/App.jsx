import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";
import { Play, Pause } from "lucide-react";

export default function PremiumWedding() {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1400, once: true, easing: "ease-in-out" });

    const lenis = new Lenis({ smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      await audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
      </audio>

      {/* OPENING COVER */}
      {!open && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl tracking-[0.5em] mb-6"
          >
            THE WEDDING
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-6xl font-serif mb-10"
          >
            Alin & Aldi
          </motion.h2>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="border px-8 py-4 rounded-full tracking-widest"
          >
            OPEN INVITATION
          </motion.button>
        </motion.div>
      )}

      {/* MUSIC BUTTON */}
      {open && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 bg-white text-black p-4 rounded-full shadow-xl"
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
      )}

      {/* HERO PARALLAX */}
      <section
        className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-7xl md:text-9xl font-serif">Alin & Aldi</h1>
          <p className="mt-6 tracking-widest">20 DECEMBER 2026</p>
        </motion.div>
      </section>

      {/* STORY SECTION */}
      <section className="py-32 text-center max-w-3xl mx-auto">
        <div data-aos="fade-up">
          <h2 className="text-5xl font-serif mb-6">Our Story</h2>
          <p className="text-gray-300 leading-relaxed">
            Sebuah perjalanan yang dimulai dari pertemuan sederhana, hingga akhirnya
            menjadi janji suci yang akan kami ikrarkan bersama.
          </p>
        </div>
      </section>

      {/* BRIDE & GROOM */}
      <section className="py-32 grid md:grid-cols-2 gap-20 max-w-5xl mx-auto text-center">
        <div data-aos="fade-right">
          <img src="https://picsum.photos/300" className="mx-auto rounded-full mb-6" />
          <h3 className="text-3xl">Alin Putri</h3>
          <p className="text-gray-400">Putri dari Bapak Ahmad</p>
        </div>

        <div data-aos="fade-left">
          <img src="https://picsum.photos/301" className="mx-auto rounded-full mb-6" />
          <h3 className="text-3xl">Aldi Pratama</h3>
          <p className="text-gray-400">Putra dari Bapak Hasan</p>
        </div>
      </section>

      {/* GALLERY PREMIUM */}
      <section className="py-32">
        <h2 className="text-center text-5xl mb-16">Moments</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1,2,3,4,5,6].map((i) => (
            <motion.img
              key={i}
              whileHover={{ scale: 1.05 }}
              data-aos="zoom-in"
              src={`https://picsum.photos/500/600?random=${i}`}
              className="rounded-2xl shadow-2xl"
            />
          ))}
        </div>
      </section>

      {/* EVENT */}
      <section className="py-32 text-center">
        <h2 className="text-5xl mb-10">Wedding Event</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div data-aos="fade-up" className="border p-10 rounded-2xl">
            <h3 className="text-2xl mb-4">Akad</h3>
            <p>20 Desember 2026</p>
            <p>09.00 WIB</p>
          </div>

          <div data-aos="fade-up" className="border p-10 rounded-2xl">
            <h3 className="text-2xl mb-4">Resepsi</h3>
            <p>20 Desember 2026</p>
            <p>11.00 WIB</p>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-32 text-center">
        <h2 className="text-5xl mb-10">Location</h2>
        <div data-aos="fade-up" className="max-w-5xl mx-auto">
          <iframe
            src="https://www.google.com/maps?q=Bandung&output=embed"
            width="100%"
            height="400"
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center bg-white text-black">
        <h3 className="text-3xl font-serif">Thank You</h3>
        <p className="mt-4">Alin & Aldi</p>
      </footer>
    </div>
  );
}

/* INSTALL:
npm install aos @studio-freight/lenis framer-motion lucide-react
*/
