"use client";

import React, { useRef } from "react";
import Hero from "./Hero";
import SearchForm from "./SearchForm";

export default function HomeContainer({ onSearchFerry }) {
  const searchRef = useRef(null);

  const scrollToSearch = () => {
    document.getElementById("searchSection")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <Hero onPrimary={scrollToSearch} onSecondary={() => {}} />
      <SearchForm ref={searchRef} onSearch={onSearchFerry} />
    </div>
  );
}


