"use client";

import React, { useState } from "react";
import Image from "next/image";

const shadeOptions = [
  { code: "A1", name: "Lightest", color: "#f8f4e3" },
  { code: "A2", name: "Light", color: "#f0e4cd" },
  { code: "A3", name: "Natural", color: "#e0cbb5" },
  { code: "B1", name: "Bright", color: "#f5f1e0" },
  { code: "C2", name: "Darker", color: "#d0b8a3" },
  { code: "D4", name: "Darkest", color: "#c0a085" },
];

const ToothShadeDetector = () => {
  
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedShade, setSelectedShade] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 px-6 py-10 text-blue-900">
      <div className="max-w-3xl mx-auto space-y-8 bg-white p-6 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-center">🦷 Tooth Shade Detector</h1>
        <p className="text-center text-gray-600">
          Upload a tooth image and select the shade that best matches it. This helps you track whitening or monitor color changes over time.
        </p>

        {/* Upload Section */}
        <div className="space-y-2">
          <label className="font-semibold">Upload Tooth Image:</label>
          <input
          title="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
          {preview && (
            <div className="mt-4">
              <Image
                width={400}
                height={400}
                src={preview}
                alt="Tooth Preview"
                className="w-56 h-auto rounded-lg border border-gray-300 shadow"
              />
            </div>
          )}
        </div>

        {/* Shade Selector */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Select Closest Tooth Shade:</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {shadeOptions.map((shade) => (
              <div
                key={shade.code}
                onClick={() => setSelectedShade(shade.code)}
                className={`cursor-pointer p-3 rounded-lg border flex flex-col items-center transition transform hover:scale-105 ${
                  selectedShade === shade.code
                    ? "border-blue-700 ring-2 ring-blue-500"
                    : "border-gray-300"
                }`}
              >
                <div
                  className="w-10 h-10 rounded-full border"
                  style={{ backgroundColor: shade.color }}
                />
                <p className="mt-2 font-medium">{shade.code}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Result Display */}
        {selectedShade && (
          <div className="bg-blue-100 p-4 rounded-lg shadow text-center text-lg">
            <strong>Selected Shade:</strong>{" "}
            <span className="font-semibold">{selectedShade}</span> –{" "}
            {shadeOptions.find((s) => s.code === selectedShade)?.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToothShadeDetector;
