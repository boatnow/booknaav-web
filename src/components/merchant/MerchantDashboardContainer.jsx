"use client";

import React from "react";
import DashboardHeader from "./DashboardHeader";
import StatsCard from "./StatsCard";
import Tabs from "./Tabs";
import "./merchant.scss";
import Modal from "../auth/Modal/Modal";

export default function MerchantDashboardContainer({ isOpen, onClose, onLogout }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bn-md">
        <DashboardHeader onClose={onClose} onLogout={onLogout} />
        <div className="bn-md__grid">
          <div className="bn-md__aside">
            <StatsCard />
          </div>
          <div className="bn-md__main">
            <Tabs />
          </div>
        </div>
      </div>
    </Modal>
  );
}


