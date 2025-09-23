"use client";
import React from 'react'
import Top from './AboutElements/Top'  
import About from './AboutElements/About'
import Decision from './AboutElements/Decision'

import BottoSec from './AboutElements/BottoSec'
import AppShell from "../AppShell";

export default function AboutPage() {
  return (
    <AppShell>
      <Top/>
      <About/>
      <Decision/>
      
      <BottoSec/>
      
    </AppShell>
  );
}