"use client";

import React, { useState, useImperativeHandle, forwardRef } from "react";
import "./home.scss";

const SearchForm = forwardRef(function SearchForm({ onSearch }, ref) {
  const [searchData, setSearchData] = useState({ from: "", to: "", date: "", passengers: "1" });

  const handleSearch = () => {
    if (searchData.from && searchData.to && searchData.date) {
      onSearch?.(searchData);
    }
  };

  useImperativeHandle(ref, () => ({ handleSearch }));

  return (
    <section id="searchSection" className="bn-search">
      <div className="bn-search__container">
        <div className="bn-search__card">
          <h2 className="bn-search__title">Find Your Perfect Journey</h2>
          <div className="bn-search__grid">
            <div>
              <label className="bn-field__label">From</label>
              <div className="bn-field__wrap">
                <input
                  type="text"
                  placeholder="Departure Port"
                  className="bn-field__input"
                  value={searchData.from}
                  onChange={(e) => setSearchData({ ...searchData, from: e.target.value })}
                />
                <div className="bn-field__icon">⚓</div>
              </div>
            </div>
            <div>
              <label className="bn-field__label">To</label>
              <div className="bn-field__wrap">
                <input
                  type="text"
                  placeholder="Destination Port"
                  className="bn-field__input"
                  value={searchData.to}
                  onChange={(e) => setSearchData({ ...searchData, to: e.target.value })}
                />
                <div className="bn-field__icon">🌊</div>
              </div>
            </div>
            <div>
              <label className="bn-field__label">Departure</label>
              <input
                type="date"
                className="bn-field__input"
                value={searchData.date}
                onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
              />
            </div>
            <div>
              <label className="bn-field__label">Passengers</label>
              <select
                className="bn-field__input"
                value={searchData.passengers}
                onChange={(e) => setSearchData({ ...searchData, passengers: e.target.value })}
              >
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4+ Passengers</option>
              </select>
            </div>
            <div className="bn-search__cta">
              <button onClick={handleSearch} className="bn-btn bn-btn--cyan bn-btn--block">🔍 Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SearchForm;


