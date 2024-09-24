"use client";

import React, { useState } from "react";
import { Modal, Button } from "antd";
import Image from "next/image";
import { QRCode } from "antd";

const QrButtonWithModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <button
        className="fixed bottom-4 right-4 p-3 rounded-full shadow-md transition-all bg-black p-2 hover:bg-gray-900 transition-all ease text-white inline-flex"
        aria-label="Open QR Code"
        onClick={showModal}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          className="transition-colors"
          style={{ color: "currentColor" }}
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 224h192V32H0v192zM64 96h64v64H64V96zm192-64v192h192V32H256zm128 128h-64V96h64v64zM0 480h192V288H0v192zm64-128h64v64H64v-64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z"></path>
        </svg>
      </button>
      <Modal
        title="QR Code"
        open={isModalVisible}
        onCancel={handleCancel}
        style={{ backgroundColor: "black" }} // Thay đổi màu nền cho modal
      >
        <Image
          src="https://img.vietqr.io/image/MB-100000001-print.png"
          alt="MB Bank"
          width={500}
          height={300}
        />
      </Modal>
    </>
  );
};

export default QrButtonWithModal;
