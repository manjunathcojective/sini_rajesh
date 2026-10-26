"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

const SERVICE_OPTIONS = [
  "Coaching",
  "Organization Development",
  "Hr Consultancy",
  "Happiness Coaching",
  "Mentoring",
  "Leadership Development",
  "Not Sure Yet, Would like to Explore",
  "Other",
];

export default function ContactForm() {
  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [alertMessage, setAlertMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service");
      if (serviceParam) {
        const matched = SERVICE_OPTIONS.find(
          (opt) =>
            opt.toLowerCase() === serviceParam.toLowerCase() ||
            opt.toLowerCase().includes(serviceParam.toLowerCase()) ||
            serviceParam.toLowerCase().includes(opt.toLowerCase())
        );
        if (matched) {
          setFormData((prev) => ({ ...prev, service: matched }));
        }
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validations
    if (!formData.firstName.trim()) {
      setStatus("error");
      setAlertMessage("First Name is required.");
      setShowModal(true);
      return;
    }
    if (!formData.lastName.trim()) {
      setStatus("error");
      setAlertMessage("Last Name is required.");
      setShowModal(true);
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus("error");
      setAlertMessage("Please provide a valid email address.");
      setShowModal(true);
      return;
    }
    if (!formData.service) {
      setStatus("error");
      setAlertMessage("Please select what you would like to connect about.");
      setShowModal(true);
      return;
    }
    if (!formData.message.trim()) {
      setStatus("error");
      setAlertMessage("Please write a short message before sending.");
      setShowModal(true);
      return;
    }

    try {
      setStatus("loading");

      // API Integration to Next.js API route
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          name: `${formData.firstName} ${formData.lastName}`.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setAlertMessage(
          "Thank you for reaching out. I will get back to you soon."
        );
        setShowModal(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          organization: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error(data.error || data.message || "Failed to submit message");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setStatus("error");
      setAlertMessage(
        err.message || "Something went wrong. Please try again later or reach out via email."
      );
      setShowModal(true);
    }
  };

  return (
    <section
      id="contact-form-section"
      className="relative w-full bg-[#FEFEFE] py-[clamp(48px,6vw,88px)] px-[clamp(16px,4vw,60px)] flex justify-center overflow-hidden"
      aria-labelledby="contact-form-heading"
    >
      {/* Decorative Floral Graphic 1 (Top-Left: Rotated -5.4°, balanced line weight & scaled for mobile/tablet) */}
      <div
        className="absolute top-[clamp(10px,3vw,40px)] left-[clamp(-15px,0.5vw,16px)] pointer-events-none select-none z-0 -rotate-[5.4deg] origin-center opacity-70 sm:opacity-85 lg:opacity-100 transition-all duration-300"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 180 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[58px] h-[38px] sm:w-[88px] sm:h-[58px] md:w-[120px] md:h-[79px] lg:w-[200.62px] lg:h-[131.89px]"
        >
          <path
            d="M125.848 80.8527C125.848 80.8527 129.257 62.8713 145.325 56.8308C161.394 50.7913 174.053 62.7331 174.053 62.7331C174.053 62.7331 170.643 80.7154 154.575 86.755C138.507 92.7945 125.848 80.8527 125.848 80.8527ZM125.848 80.8527C126.818 80.517 139.836 75.9773 146.224 73.7494"
            strokeWidth="1.35"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#D07578"
            strokeOpacity="0.65"
          />
          <path
            d="M126.586 80.2852C104.35 92.8571 54.148 106.698 31.2227 61.4872C2.56649 4.97265 -6.60358 -0.786672 -20.587 -7.00001"
            strokeWidth="1.4"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            stroke="#D07578"
            strokeOpacity="0.65"
          />
          <path
            d="M10.8688 22.4691L10.2121 22.8314C10.0461 22.5307 10.1057 22.1556 10.3568 21.9211L10.8688 22.4691ZM62.4238 30.6602L63.0952 30.326C63.2556 30.6481 63.1646 31.0387 62.8784 31.2568L62.4238 30.6602ZM36.5493 24.6762C36.9608 24.7237 37.2559 25.0957 37.2084 25.5072C37.1609 25.9187 36.7889 26.2138 36.3774 26.1663L36.4633 25.4213L36.5493 24.6762ZM10.8688 22.4691C11.5254 22.1068 11.5253 22.1066 11.5253 22.1065C11.5253 22.1066 11.5254 22.1067 11.5255 22.1069C11.5258 22.1075 11.5264 22.1085 11.5273 22.1101C11.529 22.1132 11.5318 22.1183 11.5358 22.1253C11.5437 22.1394 11.5561 22.1612 11.5729 22.1905C11.6066 22.2491 11.658 22.3373 11.7271 22.4525C11.8653 22.6829 12.074 23.0207 12.3524 23.4437C12.9092 24.29 13.7435 25.4754 14.8475 26.8216C17.0586 29.5178 20.335 32.8393 24.6118 35.3819C28.882 37.9206 34.1426 39.6798 40.3498 39.2766C46.5584 38.8733 53.7821 36.302 61.9693 30.0636L62.4238 30.6602L62.8784 31.2568C54.5085 37.6343 47.0094 40.3471 40.447 40.7734C33.8831 41.1999 28.3246 39.3343 23.8453 36.6713C19.3726 34.0122 15.9691 30.5549 13.6877 27.7728C12.5454 26.3799 11.6803 25.1512 11.0993 24.2682C10.8087 23.8266 10.5889 23.471 10.4408 23.2241C10.3667 23.1007 10.3106 23.0043 10.2724 22.938C10.2533 22.9048 10.2388 22.8791 10.2287 22.8612C10.2237 22.8523 10.2198 22.8453 10.217 22.8403C10.2156 22.8378 10.2145 22.8358 10.2137 22.8344C10.2133 22.8336 10.2129 22.8329 10.2127 22.8325C10.2123 22.8319 10.2121 22.8314 10.8688 22.4691ZM62.4238 30.6602C61.7524 30.9944 61.7525 30.9946 61.7525 30.9947C61.7524 30.9945 61.7524 30.9944 61.7522 30.994C61.7518 30.9933 61.7512 30.992 61.7502 30.9901C61.7483 30.9863 61.7453 30.9802 61.7411 30.972C61.7326 30.9554 61.7196 30.9298 61.7019 30.8957C61.6666 30.8276 61.6129 30.7252 61.5409 30.592C61.397 30.3255 61.1802 29.9355 60.8921 29.4482C60.3156 28.4731 59.4546 27.1101 58.3209 25.5669C56.0495 22.4747 52.7042 18.6874 48.3853 15.8373C44.0745 12.9926 38.8133 11.0929 32.6718 11.7225C26.5257 12.3527 19.3987 15.5262 11.3808 23.0172L10.8688 22.4691L10.3568 21.9211C18.5415 14.2743 25.9603 10.9028 32.5188 10.2304C39.082 9.5575 44.6841 11.5978 49.2114 14.5853C53.7306 17.5675 57.198 21.5045 59.5298 24.6788C60.6978 26.2688 61.586 27.6745 62.1833 28.6848C62.4821 29.1901 62.7084 29.597 62.8608 29.8792C62.937 30.0203 62.9947 30.1303 63.0339 30.2058C63.0534 30.2436 63.0683 30.2728 63.0786 30.2929C63.0837 30.303 63.0876 30.3108 63.0904 30.3164C63.0918 30.3191 63.0929 30.3213 63.0937 30.3229C63.0941 30.3237 63.0945 30.3245 63.0947 30.3249C63.095 30.3255 63.0952 30.326 62.4238 30.6602ZM10.8688 22.4691L10.9547 21.7241L36.5493 24.6762L36.4633 25.4213L36.3774 26.1663L10.7828 23.2142L10.8688 22.4691Z"
            fill="#D07578"
            fillOpacity="0.65"
            stroke="#D07578"
            strokeWidth="0.5"
            strokeOpacity="0.65"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.1788 53.1228L25.852 52.4477C26.165 52.2962 26.5411 52.3797 26.7605 52.6495L26.1788 53.1228ZM12.5505 106.321L12.9401 106.962C12.6307 107.15 12.2312 107.09 11.9904 106.82L12.5505 106.321ZM20.5834 79.1894C20.4851 79.5918 20.0792 79.8383 19.6768 79.74C19.2744 79.6417 19.0279 79.2358 19.1262 78.8335L19.8548 79.0114L20.5834 79.1894ZM26.1788 53.1228C26.7605 52.6495 26.7609 52.6499 26.7613 52.6505C26.7616 52.6508 26.7622 52.6515 26.7627 52.6521C26.7638 52.6535 26.7653 52.6553 26.7671 52.6576C26.7707 52.6621 26.7759 52.6685 26.7824 52.6766C26.7954 52.693 26.8141 52.7165 26.8381 52.7472C26.8862 52.8085 26.9555 52.8982 27.0435 53.0151C27.2194 53.249 27.4699 53.5921 27.7736 54.0353C28.3809 54.9213 29.2021 56.2093 30.0656 57.8267C31.7905 61.0578 33.696 65.6255 34.3874 70.945C35.0799 76.273 34.5538 82.3547 31.4135 88.5814C28.2747 94.8049 22.5519 101.119 12.9401 106.962L12.5505 106.321L12.1609 105.68C21.5878 99.9497 27.0878 93.8272 30.0742 87.9059C33.0589 81.9878 33.56 76.2166 32.8999 71.1384C32.2387 66.0517 30.4117 61.66 28.7424 58.5332C27.9087 56.9717 27.1173 55.731 26.5363 54.8833C26.2459 54.4595 26.0083 54.1343 25.8446 53.9167C25.7628 53.8079 25.6995 53.726 25.6573 53.6722C25.6363 53.6453 25.6205 53.6254 25.6103 53.6127C25.6052 53.6063 25.6015 53.6018 25.5993 53.599C25.5982 53.5976 25.5974 53.5967 25.597 53.5962C25.5969 53.5959 25.5968 53.5959 25.5967 53.5958C25.5968 53.5959 25.597 53.5961 26.1788 53.1228ZM12.5505 106.321C11.9904 106.82 11.99 106.82 11.9896 106.819C11.9893 106.819 11.9887 106.818 11.9881 106.817C11.9868 106.816 11.9852 106.814 11.9831 106.812C11.9789 106.807 11.973 106.8 11.9654 106.792C11.9503 106.774 11.9284 106.749 11.9001 106.716C11.8437 106.651 11.7619 106.555 11.6579 106.429C11.4499 106.179 11.1527 105.811 10.7912 105.336C10.0682 104.389 9.08642 103.014 8.04408 101.3C5.96289 97.8786 3.62248 93.0745 2.63964 87.5921C1.65476 82.0983 2.03252 75.9123 5.40713 69.7785C8.77808 63.6513 15.0969 57.6533 25.852 52.4477L26.1788 53.1228L26.5055 53.7979C15.945 58.9093 9.90241 64.7195 6.72136 70.5015C3.54398 76.2768 3.17913 82.1008 4.1161 87.3274C5.0551 92.5653 7.301 97.192 9.32565 100.521C10.3362 102.182 11.2872 103.513 11.9839 104.427C12.3321 104.883 12.6164 105.235 12.8124 105.472C12.9104 105.59 12.9863 105.679 13.037 105.738C13.0624 105.767 13.0814 105.789 13.0938 105.803C13.1 105.81 13.1045 105.816 13.1073 105.819C13.1087 105.82 13.1097 105.821 13.1103 105.822C13.1105 105.822 13.1106 105.822 13.1107 105.823C13.1107 105.823 13.1106 105.822 12.5505 106.321ZM26.1788 53.1228L26.9073 53.3008L20.5834 79.1894L19.8548 79.0114L19.1262 78.8335L25.4502 52.9448L26.1788 53.1228Z"
            fill="#D07578"
            fillOpacity="0.65"
            stroke="#D07578"
            strokeWidth="0.5"
            strokeOpacity="0.65"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M81.2032 93.33C81.2032 93.33 122.141 95.0843 114.597 137.955C114.597 137.955 68.5126 137.885 81.2032 93.33ZM81.2032 93.33L98.0057 117.809"
            strokeWidth="1.35"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#D07578"
            strokeOpacity="0.65"
          />
          <path
            d="M54.9287 85.3342L54.7367 86.0592C54.4012 85.9704 54.1705 85.663 54.1789 85.316L54.9287 85.3342ZM100.075 52.6489L100.296 51.9325C100.645 52.0403 100.865 52.3828 100.819 52.7443L100.075 52.6489ZM76.8284 68.0044C77.16 67.7562 77.63 67.8238 77.8782 68.1554C78.1264 68.487 78.0588 68.957 77.7272 69.2052L77.2778 68.6048L76.8284 68.0044ZM54.9287 85.3342C55.1207 84.6092 55.1205 84.6092 55.1204 84.6091C55.1206 84.6092 55.1207 84.6092 55.121 84.6093C55.1217 84.6095 55.123 84.6098 55.1249 84.6103C55.1287 84.6113 55.1349 84.6129 55.1434 84.6151C55.1604 84.6194 55.1867 84.6261 55.2221 84.6348C55.293 84.6523 55.4001 84.6781 55.5412 84.7102C55.8235 84.7744 56.2418 84.8639 56.778 84.9632C57.8509 85.1618 59.3942 85.3991 61.2649 85.5512C65.0112 85.8557 70.0452 85.8161 75.2355 84.4569C80.4193 83.0994 85.7484 80.4292 90.1226 75.4743C94.4967 70.5198 97.9618 63.2292 99.3307 52.5536L100.075 52.6489L100.819 52.7443C99.4193 63.6564 95.857 71.2454 91.2471 76.4671C86.6375 81.6884 81.0261 84.4911 75.6155 85.9079C70.2114 87.3231 64.997 87.3595 61.1434 87.0462C59.2143 86.8894 57.6199 86.6445 56.505 86.4381C55.9473 86.3349 55.5092 86.2412 55.2085 86.1728C55.0582 86.1386 54.9422 86.1107 54.8629 86.0912C54.8232 86.0814 54.7926 86.0736 54.7715 86.0682C54.7609 86.0655 54.7527 86.0634 54.7469 86.0619C54.744 86.0611 54.7417 86.0605 54.74 86.0601C54.7391 86.0599 54.7383 86.0597 54.7379 86.0595C54.7372 86.0594 54.7367 86.0592 54.9287 85.3342ZM100.075 52.6489C99.8528 53.3654 99.853 53.3655 99.853 53.3655C99.8528 53.3654 99.8526 53.3653 99.8522 53.3652C99.8513 53.3649 99.8497 53.3645 99.8475 53.3638C99.8431 53.3624 99.8361 53.3603 99.8264 53.3574C99.8071 53.3516 99.7775 53.3427 99.7377 53.3311C99.6583 53.3079 99.5387 53.2736 99.3815 53.2305C99.0672 53.1443 98.603 53.0229 98.0099 52.8841C96.8234 52.6064 95.1235 52.2598 93.0791 51.9865C88.9835 51.4391 83.5389 51.1906 78.0795 52.3574C72.6282 53.5224 67.1883 56.0916 63.0368 61.1636C58.8843 66.2368 55.9563 73.893 55.6785 85.3524L54.9287 85.3342L54.1789 85.316C54.4625 73.6186 57.4585 65.6106 61.8761 60.2135C66.2947 54.8151 72.0712 52.1076 77.766 50.8905C83.4527 49.6751 89.084 49.9392 93.2778 50.4998C95.3781 50.7805 97.1263 51.1368 98.3517 51.4235C98.9646 51.567 99.4472 51.6931 99.7783 51.7839C99.9439 51.8293 100.072 51.8659 100.159 51.8914C100.202 51.9042 100.236 51.9142 100.259 51.9211C100.27 51.9246 100.279 51.9273 100.286 51.9292C100.289 51.9302 100.291 51.9309 100.293 51.9315C100.294 51.9317 100.295 51.932 100.295 51.9321C100.296 51.9323 100.296 51.9325 100.075 52.6489ZM54.9287 85.3342L54.4793 84.7338L76.8284 68.0044L77.2778 68.6048L77.7272 69.2052L55.3781 85.9346L54.9287 85.3342Z"
            fill="#D07578"
            fillOpacity="0.65"
            stroke="#D07578"
            strokeWidth="0.5"
            strokeOpacity="0.65"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Decorative Floral Graphic 2 (Bottom-Right: Rotated 15.39° [0.39° + 15°], balanced line weight & scaled for mobile/tablet) */}
      <div
        className="absolute bottom-[clamp(10px,3vw,40px)] right-[clamp(-15px,0.5vw,16px)] pointer-events-none select-none z-0 rotate-[15.39deg] origin-center opacity-70 sm:opacity-85 lg:opacity-100 transition-all duration-300"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 199 198"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[58px] h-[38px] sm:w-[88px] sm:h-[58px] md:w-[120px] md:h-[79px] lg:w-[200.62px] lg:h-[131.89px]"
        >
          <path
            d="M74.0265 85.1555C74.0265 85.1555 85.6114 70.9872 79.9123 54.7944C74.2125 38.6025 56.9277 36.5788 56.9277 36.5788C56.9277 36.5788 45.3421 50.7479 51.0419 66.9399C56.7417 83.1318 74.0265 85.1555 74.0265 85.1555ZM74.0265 85.1555C73.6598 84.1961 68.7713 71.3048 66.3728 64.9792"
            strokeWidth="1.35"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#D07578"
            strokeOpacity="0.65"
          />
          <path
            d="M73.9865 84.225C78.6453 109.34 100.305 156.697 149.677 145.205C211.391 130.838 221.697 134.162 235.444 140.882"
            strokeWidth="1.4"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            stroke="#D07578"
            strokeOpacity="0.65"
          />
          <path
            d="M192.651 135.722L192.796 136.458C193.133 136.391 193.382 136.105 193.4 135.762L192.651 135.722ZM153.242 101.488L153.067 100.759C152.717 100.843 152.476 101.164 152.493 101.523L153.242 101.488ZM174.456 117.466C174.155 117.181 173.68 117.194 173.396 117.495C173.111 117.795 173.124 118.27 173.425 118.555L173.94 118.01L174.456 117.466ZM192.651 135.722C192.507 134.986 192.507 134.986 192.507 134.986C192.507 134.986 192.507 134.986 192.507 134.986C192.506 134.986 192.505 134.986 192.503 134.986C192.5 134.987 192.494 134.988 192.486 134.99C192.47 134.993 192.445 134.997 192.412 135.003C192.346 135.015 192.245 135.032 192.112 135.053C191.847 135.096 191.454 135.153 190.951 135.211C189.945 135.329 188.5 135.451 186.759 135.471C183.273 135.51 178.622 135.134 173.926 133.492C169.236 131.852 164.508 128.952 160.827 123.937C157.146 118.921 154.474 111.735 153.991 101.453L153.242 101.488L152.493 101.523C152.986 112.034 155.727 119.523 159.618 124.825C163.51 130.128 168.512 133.187 173.431 134.907C178.342 136.625 183.178 137.011 186.776 136.971C188.577 136.951 190.075 136.824 191.125 136.701C191.65 136.64 192.063 136.58 192.348 136.535C192.49 136.512 192.6 136.493 192.675 136.48C192.713 136.473 192.742 136.468 192.762 136.464C192.772 136.462 192.78 136.461 192.786 136.46C192.788 136.459 192.791 136.459 192.792 136.458C192.793 136.458 192.794 136.458 192.794 136.458C192.795 136.458 192.796 136.458 192.651 135.722ZM153.242 101.488C153.417 102.217 153.417 102.217 153.417 102.217C153.417 102.217 153.418 102.217 153.418 102.217C153.419 102.217 153.42 102.217 153.422 102.216C153.426 102.215 153.433 102.214 153.442 102.211C153.46 102.207 153.488 102.201 153.526 102.192C153.6 102.176 153.713 102.151 153.862 102.121C154.158 102.06 154.596 101.975 155.155 101.883C156.273 101.698 157.87 101.481 159.781 101.358C163.61 101.111 168.661 101.24 173.621 102.717C178.571 104.191 183.407 107.001 186.872 112.111C190.339 117.225 192.488 124.724 191.902 135.682L192.651 135.722L193.4 135.762C193.998 124.577 191.813 116.726 188.113 111.269C184.411 105.809 179.247 102.828 174.049 101.279C168.86 99.7337 163.615 99.6075 159.685 99.8611C157.716 99.9881 156.068 100.211 154.91 100.403C154.331 100.499 153.874 100.587 153.56 100.651C153.403 100.684 153.281 100.71 153.198 100.729C153.157 100.738 153.125 100.745 153.103 100.75C153.092 100.753 153.083 100.755 153.077 100.756C153.074 100.757 153.072 100.758 153.07 100.758C153.069 100.758 153.068 100.758 153.068 100.759C153.067 100.759 153.067 100.759 153.242 101.488ZM192.651 135.722L193.167 135.177L174.456 117.466L173.94 118.01L173.425 118.555L192.136 136.266L192.651 135.722Z"
            fill="#D07578"
            fillOpacity="0.65"
            stroke="#D07578"
            strokeWidth="0.5"
            strokeOpacity="0.65"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M159.326 143.693L160.054 143.509C159.968 143.172 159.663 142.938 159.315 142.943L159.326 143.693ZM127.328 188.324L126.587 188.437C126.641 188.795 126.944 189.063 127.306 189.073L127.328 188.324ZM142.952 164.732C142.707 165.066 142.779 165.535 143.113 165.781C143.447 166.026 143.916 165.954 144.161 165.62L143.557 165.176L142.952 164.732ZM159.326 143.693C159.315 142.943 159.315 142.943 159.314 142.943C159.313 142.943 159.313 142.943 159.312 142.943C159.31 142.943 159.308 142.943 159.305 142.943C159.299 142.943 159.291 142.943 159.28 142.944C159.259 142.944 159.229 142.945 159.19 142.946C159.113 142.949 158.999 142.953 158.853 142.961C158.561 142.977 158.137 143.005 157.602 143.057C156.533 143.161 155.019 143.36 153.225 143.738C149.641 144.493 144.916 145.969 140.397 148.858C135.87 151.752 131.548 156.063 128.796 162.471C126.045 168.875 124.886 177.318 126.587 188.437L127.328 188.324L128.069 188.21C126.401 177.305 127.557 169.156 130.174 163.063C132.79 156.973 136.89 152.88 141.204 150.122C145.526 147.359 150.065 145.936 153.534 145.206C155.266 144.841 156.725 144.65 157.748 144.55C158.259 144.5 158.661 144.473 158.933 144.459C159.069 144.452 159.172 144.448 159.241 144.445C159.275 144.444 159.3 144.443 159.316 144.443C159.324 144.443 159.33 144.443 159.334 144.443C159.336 144.443 159.337 144.443 159.338 144.443C159.338 144.443 159.338 144.443 159.338 144.443C159.338 144.443 159.338 144.443 159.326 143.693ZM127.328 188.324C127.306 189.073 127.306 189.073 127.307 189.073C127.308 189.073 127.308 189.073 127.309 189.073C127.311 189.073 127.314 189.073 127.317 189.074C127.323 189.074 127.332 189.074 127.344 189.074C127.367 189.075 127.4 189.075 127.443 189.076C127.53 189.077 127.656 189.078 127.819 189.077C128.145 189.075 128.618 189.066 129.213 189.039C130.404 188.983 132.088 188.852 134.071 188.549C138.03 187.945 143.215 186.65 148.047 183.88C152.889 181.103 157.385 176.838 159.916 170.311C162.443 163.79 162.978 155.095 160.054 143.509L159.326 143.693L158.599 143.876C161.47 155.252 160.902 163.616 158.517 169.769C156.134 175.915 151.907 179.937 147.3 182.578C142.684 185.225 137.696 186.478 133.844 187.066C131.922 187.36 130.291 187.487 129.144 187.54C128.57 187.567 128.118 187.575 127.811 187.577C127.657 187.578 127.54 187.577 127.462 187.576C127.423 187.575 127.394 187.575 127.376 187.574C127.366 187.574 127.359 187.574 127.355 187.574C127.353 187.574 127.352 187.574 127.351 187.574C127.35 187.574 127.35 187.574 127.35 187.574C127.35 187.574 127.35 187.574 127.328 188.324ZM159.326 143.693L158.722 143.249L142.952 164.732L143.557 165.176L144.161 165.62L159.931 144.137L159.326 143.693Z"
            fill="#D07578"
            fillOpacity="0.65"
            stroke="#D07578"
            strokeWidth="0.5"
            strokeOpacity="0.65"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M93.1592 127.378C93.1592 127.378 65.505 97.1415 37.5089 130.474C37.5089 130.474 67.1804 165.735 93.1592 127.378ZM93.1592 127.378L63.6061 130.238"
            strokeWidth="1.35"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#D07578"
            strokeOpacity="0.65"
          />
          <path
            d="M116.172 142.369L115.74 142.982C116.023 143.182 116.407 143.161 116.668 142.931L116.172 142.369ZM112.198 86.7747L112.605 86.1443C112.298 85.9468 111.894 85.9982 111.647 86.2661L112.198 86.7747ZM115.374 114.453C115.351 114.039 114.997 113.723 114.584 113.746C114.17 113.769 113.854 114.123 113.876 114.536L114.625 114.495L115.374 114.453ZM116.172 142.369C116.604 141.756 116.604 141.756 116.604 141.756C116.604 141.756 116.604 141.756 116.604 141.755C116.603 141.755 116.602 141.754 116.6 141.753C116.597 141.751 116.592 141.747 116.585 141.742C116.571 141.732 116.549 141.716 116.519 141.694C116.46 141.651 116.372 141.586 116.256 141.498C116.026 141.323 115.688 141.06 115.268 140.713C114.426 140.019 113.252 138.989 111.933 137.654C109.293 134.979 106.088 131.097 103.793 126.247C101.502 121.403 100.122 115.604 101.107 109.069C102.092 102.533 105.45 95.1932 112.75 87.2833L112.198 86.7747L111.647 86.2661C104.186 94.3511 100.662 101.958 99.6239 108.845C98.5862 115.732 100.045 121.833 102.437 126.889C104.826 131.938 108.149 135.957 110.866 138.708C112.226 140.085 113.438 141.149 114.313 141.871C114.751 142.231 115.104 142.507 115.35 142.693C115.472 142.786 115.568 142.857 115.634 142.906C115.667 142.93 115.693 142.948 115.711 142.961C115.719 142.967 115.726 142.972 115.731 142.976C115.734 142.977 115.736 142.979 115.737 142.98C115.738 142.98 115.738 142.981 115.739 142.981C115.739 142.981 115.74 142.982 116.172 142.369ZM112.198 86.7747C111.792 87.4051 111.792 87.405 111.792 87.405C111.792 87.4051 111.792 87.4052 111.793 87.4054C111.793 87.4059 111.795 87.4068 111.797 87.4081C111.801 87.4106 111.807 87.4146 111.815 87.4201C111.832 87.4312 111.858 87.4482 111.892 87.4712C111.961 87.5171 112.064 87.5867 112.198 87.6794C112.466 87.8648 112.858 88.1425 113.345 88.5076C114.321 89.2382 115.679 90.3178 117.202 91.7084C120.253 94.4943 123.943 98.506 126.558 103.438C129.169 108.364 130.696 114.182 129.479 120.623C128.261 127.065 124.277 134.228 115.676 141.806L116.172 142.369L116.668 142.931C125.447 135.196 129.657 127.754 130.953 120.901C132.249 114.047 130.611 107.881 127.883 102.736C125.159 97.598 121.338 93.4534 118.213 90.6007C116.648 89.172 115.252 88.0616 114.245 87.3071C113.741 86.9297 113.334 86.641 113.052 86.4457C112.91 86.3481 112.8 86.2737 112.725 86.2233C112.687 86.1981 112.658 86.1789 112.638 86.1657C112.628 86.1591 112.62 86.154 112.614 86.1504C112.611 86.1486 112.609 86.1472 112.608 86.1462C112.607 86.1457 112.606 86.1452 112.606 86.145C112.605 86.1446 112.605 86.1443 112.198 86.7747ZM116.172 142.369L116.921 142.327L115.374 114.453L114.625 114.495L113.876 114.536L115.423 142.41L116.172 142.369Z"
            fill="#D07578"
            fillOpacity="0.65"
            stroke="#D07578"
            strokeWidth="0.5"
            strokeOpacity="0.65"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Form Outer Container */}
      <motion.div
        id="contact-form-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[800px] mx-auto flex flex-col items-center gap-[clamp(28px,3vw+12px,40px)]"
      >
        {/* Header Block: Badge + Heading + Subtitle */}
        <header
          id="contact-form-header"
          className="w-full flex flex-col items-center text-center gap-[clamp(10px,1.2vw+4px,16px)]"
        >
          {/* Badge: Connect with me */}
          <div
            id="contact-badge"
            className="inline-flex items-center gap-[clamp(6px,0.4vw+4px,8px)] justify-center"
          >
            <span className="w-[6px] h-[6px] rounded-full bg-[#D07578] shrink-0 translate-y-[1px]" />
            <span className="font-serif font-bold italic text-[#D07578] text-[clamp(16px,0.5vw+14px,20px)] leading-none whitespace-nowrap">
              Connect with me
            </span>
          </div>

          {/* Heading Group */}
          <div
            id="contact-heading-group"
            className="flex flex-col items-center gap-[clamp(6px,0.8vw,10px)] max-w-[620px]"
          >
            <h2
              id="contact-form-heading"
              className="font-serif font-bold italic text-[#141414] text-[clamp(28px,2vw+18px,42px)] leading-[1.15] tracking-normal m-0"
            >
              Send Me a Message
            </h2>
            <p className="font-sans font-normal text-[#141414]/75 text-[clamp(14px,0.25vw+13px,16px)] leading-[1.4] m-0">
              Share a few details about yourself, and I’ll get back to you.
            </p>
          </div>
        </header>

        {/* Contact Form Element */}
        <form
          id="contact-form-element"
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center gap-[clamp(24px,3vw,36px)]"
        >
          <div
            id="contact-fields-grid"
            className="w-full flex flex-col gap-[clamp(16px,2vw,24px)]"
          >
            {/* Row 1: First Name & Last Name (Stacked 1-Col on Mobile & Tablet, 2-Col on Desktop) */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[clamp(16px,2vw,24px)]">
              {/* First Name */}
              <div className="flex flex-col gap-[8px] w-full">
                <label
                  htmlFor="firstName"
                  className="font-sans font-medium text-[clamp(13px,0.2vw+12px,14px)] text-[#141414]"
                >
                  First Name*
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="eg. Priya"
                  className="w-full h-[48px] px-4 rounded-[6px] border border-[#D07578]/50 bg-white text-[#141414] placeholder:text-[#141414]/40 font-sans text-[15px] outline-none transition-all focus:border-[#D07578] focus:ring-2 focus:ring-[#D07578]/20"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-[8px] w-full">
                <label
                  htmlFor="lastName"
                  className="font-sans font-medium text-[clamp(13px,0.2vw+12px,14px)] text-[#141414]"
                >
                  Last Name*
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="eg. Singh"
                  className="w-full h-[48px] px-4 rounded-[6px] border border-[#D07578]/50 bg-white text-[#141414] placeholder:text-[#141414]/40 font-sans text-[15px] outline-none transition-all focus:border-[#D07578] focus:ring-2 focus:ring-[#D07578]/20"
                />
              </div>
            </div>

            {/* Row 2: Email Address & Phone Number (Stacked 1-Col on Mobile & Tablet, 2-Col on Desktop) */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[clamp(16px,2vw,24px)]">
              {/* Email Address */}
              <div className="flex flex-col gap-[8px] w-full">
                <label
                  htmlFor="email"
                  className="font-sans font-medium text-[clamp(13px,0.2vw+12px,14px)] text-[#141414]"
                >
                  Email Address*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="eg. priyasingh@gmail.com"
                  className="w-full h-[48px] px-4 rounded-[6px] border border-[#D07578]/50 bg-white text-[#141414] placeholder:text-[#141414]/40 font-sans text-[15px] outline-none transition-all focus:border-[#D07578] focus:ring-2 focus:ring-[#D07578]/20"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-[8px] w-full">
                <label
                  htmlFor="phone"
                  className="font-sans font-medium text-[clamp(13px,0.2vw+12px,14px)] text-[#141414]"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="eg. 8975486321"
                  className="w-full h-[48px] px-4 rounded-[6px] border border-[#D07578]/50 bg-white text-[#141414] placeholder:text-[#141414]/40 font-sans text-[15px] outline-none transition-all focus:border-[#D07578] focus:ring-2 focus:ring-[#D07578]/20"
                />
              </div>
            </div>

            {/* Row 3: Organisation / Company & Service Dropdown (Stacked 1-Col on Mobile & Tablet, 2-Col on Desktop) */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[clamp(16px,2vw,24px)]">
              {/* Organisation */}
              <div className="flex flex-col gap-[8px] w-full">
                <label
                  htmlFor="organization"
                  className="font-sans font-medium text-[clamp(13px,0.2vw+12px,14px)] text-[#141414]"
                >
                  Organisation / Company:
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="eg. XYZ Solutions"
                  className="w-full h-[48px] px-4 rounded-[6px] border border-[#D07578]/50 bg-white text-[#141414] placeholder:text-[#141414]/40 font-sans text-[15px] outline-none transition-all focus:border-[#D07578] focus:ring-2 focus:ring-[#D07578]/20"
                />
              </div>

              {/* Service Dropdown */}
              <div className="flex flex-col gap-[8px] w-full">
                <label
                  htmlFor="service"
                  className="font-sans font-medium text-[clamp(13px,0.2vw+12px,14px)] text-[#141414] truncate"
                >
                  What would you like to connect with me about?*
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full h-[48px] px-4 rounded-[6px] border border-[#D07578]/50 bg-white text-[#141414] font-sans text-[15px] outline-none transition-all focus:border-[#D07578] focus:ring-2 focus:ring-[#D07578]/20 cursor-pointer"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Message Textarea */}
            <div className="flex flex-col gap-[8px] w-full">
              <label
                htmlFor="message"
                className="font-sans font-medium text-[clamp(13px,0.2vw+12px,14px)] text-[#141414]"
              >
                Your Message*
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me more about what you're looking for..."
                className="w-full min-h-[110px] p-4 rounded-[6px] border border-[#D07578]/50 bg-white text-[#141414] placeholder:text-[#141414]/40 font-sans text-[15px] outline-none transition-all focus:border-[#D07578] focus:ring-2 focus:ring-[#D07578]/20 resize-y"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            id="contact-submit-btn"
            type="submit"
            disabled={status === "loading"}
            variant="primary"
            className="!w-[200px] !h-[48px] !rounded-[6px] !bg-[#D07578] hover:!bg-[#C25F69] text-white font-sans font-medium text-[16px] flex items-center justify-center transition-colors"
            ariaLabel="Send Message"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </motion.div>

      {/* Interactive Modal Alert (Success / Error) */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[calc(100vw-32px)] max-w-[385px] sm:w-[385px] min-h-[300px] sm:h-[300px] rounded-[12px] bg-[#FEFEFE] border border-[#D07578] shadow-2xl flex flex-col items-center justify-center overflow-hidden p-6 sm:p-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Floral Graphic inside Modal (Exact Figma 385x296 artwork) */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 385 296"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M42.0451 27.1064C42.0451 27.1064 43.1746 21.149 48.4983 19.1477C53.8218 17.1468 58.0159 21.1032 58.0159 21.1032C58.0159 21.1032 56.8863 27.0609 51.5627 29.0619C46.2391 31.0628 42.0451 27.1064 42.0451 27.1064ZM42.0451 27.1064C42.3667 26.9952 46.6797 25.4911 48.796 24.753"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#D07578"
                    strokeOpacity="0.5"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M42.2905 26.9183C34.9236 31.0835 18.2911 35.6692 10.6958 20.6903C1.20172 1.9666 -1.83641 0.0584861 -6.46924 -2.00005"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    stroke="#D07578"
                    strokeOpacity="0.5"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M3.95174 7.76329L3.29506 8.12561C3.12911 7.82484 3.18871 7.44977 3.43973 7.21526L3.95174 7.76329ZM21.0324 10.4771L21.7038 10.1428C21.8641 10.4649 21.7731 10.8555 21.4869 11.0736L21.0324 10.4771ZM12.5174 7.9963C12.9289 8.04376 13.224 8.41581 13.1765 8.8273C13.129 9.23878 12.757 9.53388 12.3455 9.48642L12.4314 8.74136L12.5174 7.9963ZM3.95174 7.76329C4.60841 7.40097 4.60825 7.40066 4.6081 7.4004C4.60808 7.40037 4.60796 7.40015 4.60793 7.40008C4.60786 7.39996 4.60787 7.39999 4.60799 7.40019C4.60821 7.40059 4.6088 7.40165 4.60975 7.40335C4.61166 7.40674 4.61503 7.41269 4.61986 7.42108C4.6295 7.43787 4.64496 7.46441 4.66619 7.4998C4.70866 7.57059 4.77411 7.6766 4.86222 7.81051C5.03863 8.07861 5.30475 8.45686 5.65773 8.88729C6.36673 9.75187 7.40975 10.8068 8.76122 11.6103C10.1061 12.4099 11.7493 12.9571 13.6865 12.8313C15.6252 12.7053 17.9264 11.9008 20.5778 9.88051L21.0324 10.4771L21.4869 11.0736C18.6528 13.2331 16.0763 14.1792 13.7838 14.3281C11.4898 14.4772 9.54863 13.8235 7.99468 12.8997C6.44736 11.9798 5.27727 10.7889 4.49786 9.83846C4.10664 9.36139 3.80973 8.93985 3.60916 8.63503C3.50878 8.48248 3.43226 8.35875 3.37988 8.27142C3.35367 8.22774 3.33348 8.19313 3.31934 8.16852C3.31227 8.15622 3.30671 8.14641 3.30266 8.13922C3.30064 8.13563 3.29899 8.13269 3.29773 8.13042C3.29709 8.12928 3.29655 8.12831 3.29611 8.12751C3.29589 8.12711 3.29563 8.12663 3.29552 8.12643C3.29528 8.126 3.29506 8.12561 3.95174 7.76329ZM21.0324 10.4771C20.361 10.8113 20.3611 10.8116 20.3612 10.8118C20.3612 10.8118 20.3613 10.812 20.3613 10.812C20.3613 10.8121 20.3613 10.8119 20.3611 10.8116C20.3608 10.8109 20.3601 10.8095 20.359 10.8074C20.3568 10.8031 20.3531 10.7958 20.3479 10.7858C20.3375 10.7657 20.321 10.7343 20.2986 10.6928C20.2537 10.6097 20.1851 10.4862 20.0932 10.3308C19.9092 10.0195 19.633 9.58218 19.2689 9.08651C18.5365 8.08954 17.469 6.88479 16.105 5.9847C14.7492 5.09002 13.1201 4.50761 11.2264 4.70176C9.32803 4.89639 7.0644 5.88161 4.46375 8.31132L3.95174 7.76329L3.43973 7.21526C6.20719 4.62969 8.76269 3.44649 11.0734 3.20958C13.3889 2.9722 15.3589 3.69515 16.9312 4.73273C18.4954 5.76491 19.685 7.11933 20.4777 8.19847C20.8762 8.74086 21.1795 9.22084 21.3844 9.56734C21.4869 9.74077 21.5651 9.88125 21.6184 9.97999C21.6451 10.0294 21.6656 10.0684 21.6798 10.0959C21.6869 10.1096 21.6925 10.1205 21.6965 10.1284C21.6985 10.1323 21.7001 10.1355 21.7013 10.1379C21.7019 10.1391 21.7024 10.1401 21.7028 10.1409C21.703 10.1414 21.7033 10.1418 21.7034 10.142C21.7036 10.1425 21.7038 10.1428 21.0324 10.4771ZM3.95174 7.76329L4.03768 7.01823L12.5174 7.9963L12.4314 8.74136L12.3455 9.48642L3.8658 8.50835L3.95174 7.76329Z"
                    fill="#D07578"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M9.02486 17.9191L8.69812 17.244C9.01111 17.0926 9.38718 17.1761 9.60664 17.4458L9.02486 17.9191ZM4.5097 35.5442L4.89929 36.1851C4.58994 36.3732 4.19041 36.3134 3.94963 36.043L4.5097 35.5442ZM7.65826 26.6742C7.55997 27.0766 7.15409 27.3231 6.75171 27.2248C6.34932 27.1265 6.10281 26.7207 6.2011 26.3183L6.92968 26.4963L7.65826 26.6742ZM9.02486 17.9191C9.60664 17.4458 9.60693 17.4462 9.60726 17.4466C9.60741 17.4468 9.60776 17.4472 9.60806 17.4476C9.60866 17.4483 9.60938 17.4492 9.61022 17.4502C9.61191 17.4523 9.61408 17.455 9.61672 17.4583C9.622 17.465 9.62917 17.474 9.63811 17.4854C9.65599 17.5082 9.68097 17.5406 9.71216 17.582C9.77453 17.665 9.86184 17.7846 9.96692 17.9379C10.1769 18.2443 10.4589 18.6868 10.755 19.2414C11.3451 20.3467 12.0026 21.9189 12.2418 23.7592C12.4821 25.6079 12.2994 27.7266 11.207 29.8927C10.1161 32.0556 8.14559 34.2117 4.89929 36.1851L4.5097 35.5442L4.1201 34.9034C7.18149 33.0423 8.92921 31.078 9.86765 29.2172C10.8045 27.3597 10.9621 25.5515 10.7543 23.9525C10.5454 22.3451 9.96626 20.949 9.43179 19.9478C9.16558 19.4492 8.91337 19.054 8.72963 18.7859C8.63786 18.652 8.56347 18.5503 8.51334 18.4836C8.48829 18.4503 8.46932 18.4258 8.45732 18.4105C8.45132 18.4028 8.44706 18.3974 8.44465 18.3944C8.44344 18.3929 8.4427 18.392 8.44244 18.3917C8.44231 18.3915 8.44229 18.3915 8.4424 18.3916C8.44245 18.3917 8.44263 18.3919 8.44265 18.3919C8.44285 18.3922 8.44309 18.3925 9.02486 17.9191ZM4.5097 35.5442C3.94963 36.043 3.94933 36.0427 3.94901 36.0423C3.94885 36.0422 3.94848 36.0418 3.94817 36.0414C3.94753 36.0407 3.94676 36.0398 3.94583 36.0388C3.94399 36.0367 3.94157 36.0339 3.93859 36.0305C3.93263 36.0237 3.92443 36.0143 3.91413 36.0023C3.89352 35.9784 3.86445 35.9442 3.82797 35.9002C3.75503 35.8123 3.65229 35.685 3.52803 35.5221C3.27975 35.1965 2.94415 34.7266 2.5882 34.1414C1.87978 32.9766 1.07278 31.3257 0.7325 29.4276C0.390181 27.5181 0.519656 25.3476 1.70363 23.1956C2.88395 21.0502 5.06977 19.0002 8.69812 17.244L9.02486 17.9191L9.35161 18.5942C5.91789 20.2562 4.00828 22.1184 3.01787 23.9186C2.03112 25.7122 1.91456 27.5207 2.20896 29.1629C2.5054 30.8165 3.21789 32.2901 3.86977 33.3619C4.19397 33.8949 4.49872 34.3213 4.72077 34.6125C4.83166 34.7579 4.92157 34.8691 4.98249 34.9426C5.01294 34.9793 5.03611 35.0065 5.051 35.0238C5.05844 35.0325 5.06381 35.0386 5.06698 35.0422C5.06857 35.044 5.0696 35.0452 5.07007 35.0458C5.07031 35.046 5.0704 35.0461 5.07035 35.0461C5.07032 35.046 5.07018 35.0459 5.07017 35.0459C5.06998 35.0457 5.06977 35.0454 4.5097 35.5442ZM9.02486 17.9191L9.75344 18.0971L7.65826 26.6742L6.92968 26.4963L6.2011 26.3183L8.29628 17.7412L9.02486 17.9191Z"
                    fill="#D07578"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M27.2542 31.2402C27.2542 31.2402 40.8173 31.8214 38.3179 46.0248C38.3179 46.0248 23.0497 46.0016 27.2542 31.2402ZM27.2542 31.2402L32.821 39.3504"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#D07578"
                    strokeOpacity="0.5"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M18.5499 28.5913L18.3579 29.3163C18.0224 29.2275 17.7917 28.9201 17.8001 28.5731L18.5499 28.5913ZM33.5071 17.7624L33.7289 17.0459C34.0771 17.1537 34.2974 17.4963 34.251 17.8578L33.5071 17.7624ZM25.5049 22.4483C25.8365 22.2001 26.3065 22.2677 26.5548 22.5993C26.803 22.9309 26.7354 23.4009 26.4038 23.6491L25.9543 23.0487L25.5049 22.4483ZM18.5499 28.5913C18.7419 27.8663 18.7416 27.8662 18.7413 27.8661C18.7413 27.8661 18.7411 27.8661 18.741 27.8661C18.7409 27.866 18.741 27.8661 18.7413 27.8661C18.7419 27.8663 18.7432 27.8666 18.7454 27.8672C18.7496 27.8683 18.7569 27.8701 18.7672 27.8727C18.7879 27.8778 18.8204 27.8856 18.8641 27.8955C18.9515 27.9154 19.0834 27.9437 19.2539 27.9752C19.5953 28.0384 20.0895 28.1145 20.6898 28.1633C21.895 28.2613 23.5025 28.2471 25.1507 27.8155C26.7923 27.3856 28.4634 26.5452 29.834 24.9927C31.2043 23.4406 32.3198 21.1249 32.7632 17.667L33.5071 17.7624L34.251 17.8578C33.7773 21.5521 32.5646 24.1661 30.9585 25.9855C29.3526 27.8045 27.3991 28.7773 25.5307 29.2665C23.6688 29.7541 21.8809 29.7651 20.5683 29.6584C19.9096 29.6048 19.3643 29.5212 18.9808 29.4502C18.7889 29.4146 18.6371 29.3822 18.5314 29.3582C18.4785 29.3461 18.4371 29.3362 18.408 29.329C18.3934 29.3254 18.3819 29.3225 18.3735 29.3204C18.3693 29.3193 18.3659 29.3184 18.3633 29.3177C18.362 29.3174 18.3609 29.3171 18.36 29.3169C18.3595 29.3167 18.359 29.3166 18.3588 29.3165C18.3583 29.3164 18.3579 29.3163 18.5499 28.5913ZM33.5071 17.7624C33.2853 18.4788 33.2856 18.4789 33.2858 18.479C33.2858 18.479 33.286 18.4791 33.286 18.4791C33.286 18.4791 33.2858 18.479 33.2854 18.4789C33.2846 18.4786 33.2828 18.4781 33.2803 18.4773C33.2751 18.4758 33.2666 18.4732 33.2547 18.4697C33.231 18.4628 33.1941 18.4522 33.1449 18.4387C33.0463 18.4117 32.8987 18.373 32.7088 18.3286C32.3287 18.2397 31.7817 18.1281 31.123 18.04C29.799 17.863 28.0575 17.7859 26.3248 18.1562C24.6001 18.5248 22.9104 19.3297 21.6243 20.901C20.3372 22.4736 19.3898 24.8924 19.2997 28.6095L18.5499 28.5913L17.8001 28.5731C17.896 24.6181 18.9113 21.8473 20.4635 19.9509C22.0168 18.0533 24.0432 17.11 26.0113 16.6894C27.9713 16.2705 29.8994 16.3631 31.3217 16.5533C32.0363 16.6488 32.6316 16.77 33.0506 16.8681C33.2603 16.9171 33.4263 16.9605 33.5416 16.9921C33.5993 17.008 33.6443 17.0209 33.6758 17.0301C33.6916 17.0347 33.7039 17.0384 33.7128 17.041C33.7173 17.0424 33.7208 17.0435 33.7235 17.0443C33.7249 17.0447 33.726 17.045 33.7269 17.0453C33.7273 17.0455 33.7278 17.0456 33.7281 17.0457C33.7285 17.0458 33.7289 17.0459 33.5071 17.7624ZM18.5499 28.5913L18.1005 27.9909L25.5049 22.4483L25.9543 23.0487L26.4038 23.6491L18.9993 29.1917L18.5499 28.5913Z"
                    fill="#D07578"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M337.493 264.139C337.493 264.139 336.143 270.051 330.749 271.853C325.354 273.655 321.31 269.546 321.31 269.546C321.31 269.546 322.66 263.634 328.054 261.832C333.448 260.03 337.493 264.139 337.493 264.139ZM337.493 264.139C337.167 264.239 332.801 265.582 330.659 266.241"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#D07578"
                    strokeOpacity="0.5"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M337.242 264.318C344.758 260.429 361.549 256.464 368.583 271.715C377.376 290.778 380.341 292.797 384.894 295.026"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    stroke="#D07578"
                    strokeOpacity="0.5"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M374.842 284.883L375.512 284.545C375.667 284.852 375.593 285.225 375.334 285.45L374.842 284.883ZM357.874 281.537L357.191 281.846C357.043 281.518 357.148 281.131 357.442 280.924L357.874 281.537ZM366.291 284.332C365.882 284.269 365.601 283.887 365.663 283.477C365.726 283.068 366.109 282.787 366.518 282.849L366.405 283.591L366.291 284.332ZM374.842 284.883C374.173 285.221 374.173 285.221 374.173 285.221C374.173 285.221 374.173 285.221 374.173 285.221C374.173 285.222 374.173 285.222 374.173 285.221C374.173 285.221 374.172 285.22 374.171 285.218C374.17 285.215 374.167 285.209 374.162 285.2C374.153 285.183 374.139 285.156 374.119 285.12C374.079 285.047 374.017 284.939 373.934 284.802C373.768 284.527 373.516 284.14 373.179 283.696C372.503 282.806 371.5 281.713 370.179 280.86C368.865 280.011 367.243 279.403 365.302 279.457C363.36 279.511 361.031 280.23 358.306 282.15L357.874 281.537L357.442 280.924C360.354 278.871 362.964 278.021 365.261 277.958C367.559 277.894 369.474 278.619 370.993 279.6C372.505 280.577 373.63 281.81 374.374 282.789C374.747 283.28 375.028 283.712 375.217 284.024C375.312 284.181 375.384 284.307 375.433 284.396C375.457 284.441 375.476 284.476 375.489 284.501C375.496 284.514 375.501 284.524 375.505 284.531C375.507 284.535 375.508 284.538 375.51 284.54C375.51 284.541 375.511 284.542 375.511 284.543C375.511 284.544 375.512 284.544 375.512 284.544C375.512 284.545 375.512 284.545 374.842 284.883ZM357.874 281.537C358.558 281.228 358.557 281.228 358.557 281.227C358.557 281.227 358.557 281.227 358.557 281.227C358.557 281.227 358.557 281.228 358.558 281.228C358.558 281.23 358.559 281.232C358.561 281.236 358.565 281.244 358.57 281.254C358.579 281.274 358.595 281.306 358.616 281.349C358.657 281.433 358.721 281.559 358.807 281.718C358.98 282.036 359.239 282.483 359.585 282.992C360.28 284.016 361.302 285.259 362.631 286.209C363.953 287.154 365.559 287.796 367.459 287.672C369.363 287.548 371.662 286.648 374.351 284.316L374.842 284.883L375.334 285.45C372.472 287.931 369.875 289.018 367.557 289.169C365.234 289.32 363.292 288.525 361.759 287.43C360.235 286.34 359.096 284.942 358.344 283.835C357.966 283.278 357.681 282.787 357.489 282.433C357.393 282.256 357.32 282.113 357.27 282.012C357.245 281.962 357.226 281.922 357.213 281.894C357.206 281.88 357.201 281.869 357.198 281.861C357.196 281.857 357.194 281.854 357.193 281.851C357.193 281.85 357.192 281.849 357.192 281.848C357.192 281.848 357.191 281.847 357.191 281.847C357.191 281.847 357.191 281.846 357.874 281.537ZM374.842 284.883L374.729 285.624L366.291 284.332L366.405 283.591L366.518 282.849L374.956 284.142L374.842 284.883Z"
                    fill="#D07578"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M370.15 274.546L370.452 275.233C370.133 275.372 369.761 275.275 369.551 274.997L370.15 274.546ZM375.317 257.101L374.951 256.446C375.267 256.269 375.664 256.344 375.895 256.623L375.317 257.101ZM371.841 265.848C371.954 265.449 372.369 265.218 372.767 265.331C373.166 265.444 373.397 265.859 373.284 266.257L372.562 266.052L371.841 265.848ZM370.15 274.546C369.551 274.997 369.551 274.997 369.551 274.997C369.551 274.996 369.55 274.996 369.55 274.995C369.55 274.995 369.549 274.994 369.548 274.993C369.546 274.991 369.544 274.988 369.542 274.984C369.537 274.978 369.53 274.968 369.521 274.957C369.504 274.933 369.481 274.9 369.451 274.857C369.392 274.772 369.309 274.649 369.21 274.492C369.011 274.178 368.746 273.726 368.47 273.16C367.922 272.034 367.323 270.438 367.152 268.59C366.981 266.734 367.242 264.624 368.414 262.5C369.585 260.379 371.634 258.297 374.951 256.446L375.317 257.101L375.682 257.755C372.554 259.502 370.734 261.4 369.728 263.224C368.722 265.046 368.498 266.847 368.646 268.452C368.795 270.067 369.322 271.483 369.819 272.503C370.067 273.012 370.304 273.416 370.478 273.691C370.564 273.828 370.635 273.932 370.683 274.001C370.706 274.035 370.724 274.06 370.736 274.076C370.741 274.084 370.746 274.089 370.748 274.092C370.749 274.094 370.75 274.095 370.75 274.095C370.75 274.095 370.75 274.095 370.75 274.095C370.75 274.095 370.75 274.095 370.75 274.095C370.75 274.095 370.749 274.094 370.15 274.546ZM375.317 257.101C375.895 256.623 375.895 256.623 375.895 256.624C375.896 256.624 375.896 256.624 375.896 256.625C375.897 256.625 375.898 256.626 375.898 256.627C375.9 256.629 375.903 256.632 375.905 256.636C375.911 256.643 375.919 256.652 375.929 256.665C375.948 256.69 375.976 256.725 376.011 256.77C376.081 256.861 376.179 256.992 376.297 257.159C376.533 257.494 376.851 257.976 377.185 258.574C377.849 259.764 378.595 261.444 378.864 263.353C379.135 265.274 378.925 267.438 377.662 269.545C376.403 271.645 374.143 273.612 370.452 275.233L370.15 274.546L369.849 273.859C373.342 272.326 375.319 270.536 376.376 268.774C377.429 267.018 377.612 265.215 377.379 263.563C377.144 261.899 376.487 260.4 375.875 259.305C375.571 258.76 375.282 258.323 375.071 258.024C374.966 257.874 374.88 257.76 374.822 257.684C374.793 257.646 374.771 257.618 374.756 257.6C374.749 257.592 374.744 257.585 374.741 257.581C374.74 257.58 374.739 257.578 374.738 257.578C374.738 257.578 374.738 257.577 374.738 257.578C374.738 257.578 374.738 257.578 374.738 257.578C374.738 257.578 374.738 257.578 375.317 257.101ZM370.15 274.546L369.429 274.341L371.841 265.848L372.562 266.052L373.284 266.257L370.872 274.751L370.15 274.546Z"
                    fill="#D07578"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M352.427 260.557C352.427 260.557 338.895 259.473 341.92 245.372C341.92 245.372 357.176 245.962 352.427 260.557ZM352.427 260.557L347.165 252.246"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#D07578"
                    strokeOpacity="0.5"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M361.028 263.528L361.247 262.81C361.579 262.911 361.798 263.227 361.777 263.574L361.028 263.528ZM345.679 273.794L345.431 274.502C345.087 274.381 344.88 274.031 344.939 273.671L345.679 273.794ZM353.85 269.408C353.509 269.644 353.042 269.559 352.806 269.218C352.571 268.878 352.656 268.411 352.996 268.175L353.423 268.792L353.85 269.408ZM361.028 263.528C360.809 264.245 360.81 264.245 360.81 264.245C360.81 264.245 360.81 264.245 360.81 264.245C360.81 264.245 360.81 264.245 360.81 264.245C360.809 264.245 360.808 264.245 360.806 264.244C360.802 264.243 360.794 264.241 360.784 264.238C360.764 264.232 360.732 264.223 360.688 264.211C360.602 264.188 360.471 264.155 360.302 264.117C359.963 264.041 359.472 263.947 358.874 263.876C357.673 263.733 356.066 263.688 354.403 264.058C352.747 264.427 351.045 265.204 349.618 266.705C348.191 268.205 346.991 270.478 346.419 273.917L345.679 273.794L344.939 273.671C345.55 269.997 346.859 267.43 348.531 265.671C350.204 263.913 352.192 263.013 354.077 262.594C355.956 262.176 357.743 262.231 359.051 262.386C359.707 262.464 360.249 262.568 360.629 262.653C360.82 262.696 360.97 262.734 361.075 262.762C361.127 262.776 361.168 262.787 361.197 262.796C361.212 262.8 361.223 262.803 361.231 262.806C361.236 262.807 361.239 262.808 361.242 262.809C361.243 262.809 361.244 262.809 361.245 262.81C361.245 262.81 361.246 262.81 361.246 262.81C361.246 262.81 361.247 262.81 361.028 263.528ZM345.679 273.794C345.928 273.086 345.927 273.086 345.927 273.086C345.927 273.086 345.927 273.086 345.927 273.086C345.927 273.086 345.927 273.086 345.927 273.086C345.928 273.086 345.93 273.087 345.933 273.088C345.938 273.09 345.946 273.093 345.958 273.096C345.981 273.104 346.018 273.116 346.066 273.132C346.164 273.162 346.31 273.206 346.498 273.258C346.875 273.361 347.417 273.493 348.072 273.605C349.389 273.831 351.126 273.973 352.871 273.667C354.608 273.363 356.327 272.621 357.67 271.099C359.015 269.575 360.052 267.193 360.28 263.482L361.028 263.528L361.777 263.574C361.534 267.522 360.417 270.254 358.795 272.091C357.172 273.93 355.113 274.797 353.13 275.144C351.156 275.49 349.233 275.326 347.818 275.083C347.108 274.961 346.517 274.818 346.102 274.705C345.895 274.648 345.73 274.598 345.616 274.562C345.559 274.544 345.515 274.53 345.484 274.519C345.468 274.514 345.456 274.51 345.447 274.507C345.443 274.506 345.439 274.504 345.436 274.504C345.435 274.503 345.434 274.503 345.433 274.502C345.433 274.502 345.432 274.502 345.432 274.502C345.431 274.502 345.431 274.502 345.679 273.794ZM361.028 263.528L361.455 264.144L353.85 269.408L353.423 268.792L352.996 268.175L360.601 262.911L361.028 263.528Z"
                    fill="#D07578"
                    fillOpacity="0.5"
                  />
                </svg>
              </div>

              {/* Inner Layout (325px x 153px in Figma, gap: 30px) */}
              <div className="relative z-10 w-full max-w-[325px] flex flex-col items-center text-center justify-center gap-[24px] sm:gap-[30px]">
                {/* Title: Message sent! (Cormorant Garamond, 700 Italic, 41.62px, leading 45px) */}
                <h4 className="font-serif font-bold italic text-[#141414] text-[32px] sm:text-[41.62px] leading-[45px] tracking-normal m-0">
                  {status === "error" ? "Please Note" : "Message sent!"}
                </h4>

                {/* Subtitle: Thank you for reaching out. I will get back to you soon. (Manrope, 400 Regular, 14px, #141414BF) */}
                <p className="font-sans font-normal text-[#141414BF] text-[14px] leading-relaxed tracking-normal m-0 max-w-[310px]">
                  {status === "error"
                    ? alertMessage
                    : "Thank you for reaching out. I will get back to you soon."}
                </p>

                {/* Action Button: Done with fluid dot (signature Dr. Sini Rose style) */}
                <Button
                  id="alert-done-btn"
                  type="button"
                  variant="primary"
                  size="sm"
                  showDot={true}
                  onClick={() => setShowModal(false)}
                  className="!w-[140px] !h-[40px] !rounded-[6px] !bg-[#D07578] hover:!bg-[#C25F69] text-white font-sans font-medium text-[15px]"
                  ariaLabel="Done"
                >
                  {status === "error" ? "Got It" : "Done"}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
