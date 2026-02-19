"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from '@/components/layout/Headertwo'
import Ctatop from '@/components/home/Ctatop';

import Footertop from '@/components/layout/footertop'


// ── Main Career Page ──────────────────────────────────────
export default function Career() {
  return (
    <main>
     <Header />
      
       <Ctatop />
              <Footertop />
      
            
          </main>

  );
}