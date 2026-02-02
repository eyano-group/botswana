import React, { useState, useRef } from "react";
import {
  Upload,
  X,
  Check,
  FileText,
  AlertTriangle,
  RefreshCw,
  PenTool,
} from "lucide-react";
import axios from "axios";

interface PassportUploadStepProps {
  data: any;
  setData: (field: string, value: any) => void;
  onVerificationComplete: (isValid: boolean) => void;
}

export default function PassportUploadStep({
  data,
  setData,
  onVerificationComplete,
}: PassportUploadStepProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [verificationStatus, setVerificationStatus] = useState<
    "idle" | "processing" | "success" | "failed" | "manual_review" | "verified"
  >("idle");
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      processFile(selectedFile);
    }
  };

  const processFile = async (selectedFile: File) => {
    // Validate file type and size
    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("File size exceeds 5MB limit");
      return;
    }

    setFile(selectedFile);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);

    // Upload and verify
    await uploadAndVerify(selectedFile);
  };

  const uploadAndVerify = async (fileToUpload: File) => {
    setIsUploading(true);
    setVerificationStatus("processing");
    setUploadProgress(0);

    const formData = new FormData();
    formData.append("passport", fileToUpload);

    try {
      // 1. Upload Passport
      const uploadResponse = await axios.post(
        "/apply-visa/upload-passport",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / (progressEvent.total || 100),
            );
            setUploadProgress(percentCompleted);
          },
        },
      );

      // Store temp path
      const { temp_path, extracted_data } = uploadResponse.data;
      console.log("🔍 Debug - Extracted OCR Data:", extracted_data);
      setData("passport_file_path", temp_path);
      setData("ocr_data", extracted_data);

      // 2. Verify Data
      const verifyPayload = {
        form_data: {
          first_name: data.first_name,
          last_name: data.last_name,
          passport_number: data.passport_number,
          date_of_birth: data.date_of_birth,
          nationality: data.nationality,
        },
        ocr_data: extracted_data,
      };

      const verifyResponse = await axios.post(
        "/apply-visa/verify-passport",
        verifyPayload,
      );
      const result = verifyResponse.data;

      setVerificationResult(result);
      setVerificationStatus(result.status);

      // Notify parent component
      if (result.status === "verified" || result.status === "manual_review") {
        onVerificationComplete(true);
      } else {
        onVerificationComplete(false);
      }
    } catch (error) {
      console.error("Upload failed", error);
      setVerificationStatus("failed");
      setVerificationResult({
        message: "Failed to process document. Please try again.",
      });
      onVerificationComplete(false);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const resetUpload = () => {
    setFile(null);
    setPreview(null);
    setVerificationStatus("idle");
    setVerificationResult(null);
    setData("passport_file_path", "");
    setData("ocr_data", null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-[#0099cc]">
          Step 2: Passport Verification
        </h3>
        <p className="text-sm text-gray-500">
          Upload a clear copy of your passport bio-page for automatic
          verification.
        </p>
      </div>

      {!file ? (
        <div
          className="border-2 border-dashed border-sky-200 rounded-xl p-10 text-center hover:bg-sky-50 transition-colors cursor-pointer group"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
          />
          <div className="w-16 h-16 bg-sky-100 text-[#0099cc] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Upload className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-medium text-[#0099cc]">
            Drag your passport here or click to browse
          </h4>
          <p className="text-sm text-gray-500 mt-2">
            Accepted formats: JPEG, PNG, PDF (max 5MB)
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Preview Side */}
          <div className="bg-gray-100 rounded-xl p-4 relative group">
            {file.type.includes("image") ? (
              <img
                src={preview!}
                alt="Passport Preview"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-gray-400">
                <FileText className="w-16 h-16 mb-4" />
                <span>PDF Document</span>
              </div>
            )}

            <button
              onClick={resetUpload}
              className="absolute top-2 right-2 p-2 bg-white/90 text-red-500 rounded-full shadow-md hover:bg-red-50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Loading Overlay */}
            {isUploading && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-xl z-10">
                <RefreshCw className="w-12 h-12 text-[#0099cc] animate-spin mb-4" />
                <p className="text-[#0099cc] font-medium">
                  Processing with AI...
                </p>
                <div className="w-48 h-2 bg-gray-200 rounded-full mt-4 overflow-hidden">
                  <div
                    className="h-full bg-gold-500 transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Verification Result Side */}
          <div className="space-y-6">
            {verificationStatus === "idle" ||
            verificationStatus === "processing" ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-200 rounded-xl">
                <div className="animate-pulse space-y-4 w-full">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </div>
                <p className="text-gray-400 mt-6">
                  Waiting for processing results...
                </p>
              </div>
            ) : verificationStatus === "verified" ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-2">
                  Verification Successful!
                </h4>
                <p className="text-green-700 text-sm mb-6">
                  {verificationResult?.message}
                </p>

                <div className="bg-white rounded-lg p-4 shadow-sm text-left text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Name Match</span>
                    <span className="text-green-600 font-medium flex items-center">
                      <Check className="w-3 h-3 mr-1" /> Verified
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Passport Number</span>
                    <span className="text-green-600 font-medium flex items-center">
                      <Check className="w-3 h-3 mr-1" /> Verified
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">DOB Match</span>
                    <span className="text-green-600 font-medium flex items-center">
                      <Check className="w-3 h-3 mr-1" /> Verified
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onVerificationComplete(true)}
                  className="mt-6 w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold shadow-md transition-colors animate-pulse"
                >
                  Continue to Next Step
                </button>
              </div>
            ) : (
              <div
                className={`rounded-xl p-6 text-center animate-fade-in-up ${verificationStatus === "manual_review" ? "bg-orange-50 border border-orange-200" : "bg-red-50 border border-red-200"}`}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${verificationStatus === "manual_review" ? "bg-orange-100 text-orange-600" : "bg-red-100 text-red-600"}`}
                >
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <h4
                  className={`text-xl font-bold mb-2 ${verificationStatus === "manual_review" ? "text-orange-800" : "text-red-800"}`}
                >
                  {verificationStatus === "manual_review"
                    ? "Manual Review Required"
                    : "Verification Failed"}
                </h4>
                <p
                  className={`text-sm mb-6 ${verificationStatus === "manual_review" ? "text-orange-700" : "text-red-700"}`}
                >
                  {verificationResult?.message}
                </p>

                {/* Mismatches Display */}
                {verificationResult?.mismatches &&
                  verificationResult.mismatches.length > 0 && (
                    <div className="bg-white rounded-lg p-4 shadow-sm text-left text-sm space-y-3 mb-6">
                      <h5 className="font-semibold text-gray-700 border-b pb-2">
                        Discrepancies Found:
                      </h5>
                      {verificationResult.mismatches.map(
                        (field: string, idx: number) => {
                          const matchData = verificationResult.matches[field];
                          return (
                            <div
                              key={idx}
                              className="grid grid-cols-2 gap-2 text-xs"
                            >
                              <div>
                                <span className="text-gray-500 block">
                                  Form Input:
                                </span>
                                <span className="font-medium text-red-600">
                                  {matchData?.form_value || "N/A"}
                                </span>
                              </div>
                              <div>
                                <span className="text-gray-500 block">
                                  Passport Data:
                                </span>
                                <span className="font-medium text-green-600">
                                  {matchData?.ocr_value || "N/A"}
                                </span>
                              </div>
                            </div>
                          );
                        },
                      )}
                    </div>
                  )}

                <div className="flex flex-col gap-3">
                  <button
                    onClick={resetUpload}
                    className="w-full py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                  >
                    Upload Different Passport
                  </button>
                  <button
                    onClick={() => onVerificationComplete(false)} // This effectively asks them to go back to edit
                    className="w-full py-2 bg-[#0099cc] text-white rounded-lg hover:bg-[#0088bb] font-medium transition-colors flex items-center justify-center"
                  >
                    <PenTool className="w-4 h-4 mr-2" />
                    Edit Personal Info
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
