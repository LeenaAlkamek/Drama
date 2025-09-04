"use client";

import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("تم إرسال الرسالة ✅");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      className="bg-gray-900 text-white py-16 px-6 md:px-16"
      id="contact"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* معلومات التواصل */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-red-500 mb-6 text-center md:text-right">
            معلومات التواصل
          </h3>

          <ul className="space-y-6 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="bg-red-600 p-3 rounded-full">
                <FaMapMarkerAlt />
              </span>
              <p>
                <strong className="text-white">عنواننا</strong>
                <br />
                صنعاء - الجمهورية اليمنية، شارع الستين، مبنى الإعلام، الطابق
                الخامس
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-red-600 p-3 rounded-full">
                <FaPhoneAlt />
              </span>
              <p>
                <strong className="text-white">الهاتف</strong>
                <br />
                +967 1 234567 <br /> +967 1 234568
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-red-600 p-3 rounded-full">
                <FaEnvelope />
              </span>
              <p>
                <strong className="text-white">البريد الإلكتروني</strong>
                <br />
                info@yemenmedia.com <br /> editor@yemenmedia.com
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-red-600 p-3 rounded-full">
                <FaClock />
              </span>
              <p>
                <strong className="text-white">ساعات العمل</strong>
                <br />
                السبت - الخميس: 8:00 ص - 6:00 م <br /> الجمعة: مغلق
              </p>
            </li>
          </ul>
        </div>

        {/* النصوص والنموذج */}
        <div>
          <h2 className="text-3xl font-bold text-center md:text-right mb-2">
            تواصل معنا
          </h2>
          <p className="text-center md:text-right text-gray-300 mb-8">
            نحن هنا للاستماع إليكم. تواصلوا معنا لأي استفسارات أو اقتراحات
          </p>

          <h3 className="text-xl font-semibold text-red-500 mb-6 text-center md:text-right">
            أرسل لنا رسالة
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="أدخل اسمك الكامل"
                className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="موضوع الرسالة"
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="اكتب رسالتك هنا... (الحد الأقصى 500 حرف)"
              maxLength={500}
              rows={5}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition-colors py-3 rounded-lg font-semibold"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
}
