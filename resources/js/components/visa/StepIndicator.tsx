import React from "react";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

export default function StepIndicator({
  currentStep,
  steps,
}: StepIndicatorProps) {
  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-[#0099cc] transition-all duration-500 ease-in-out -z-10"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        ></div>

        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = currentStep > stepNumber;
          const isCurrent = currentStep === stepNumber;

          return (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-white
                                    ${
                                      isCompleted
                                        ? "border-green-600 bg-green-600 text-white"
                                        : isCurrent
                                          ? "border-[#0099cc] text-[#0099cc] scale-110 shadow-lg"
                                          : "border-gray-300 text-gray-400"
                                    }
                                `}
              >
                {isCompleted ? (
                  <Check className="w-6 h-6" />
                ) : (
                  <span className="font-bold">{stepNumber}</span>
                )}
              </div>
              <span
                className={`mt-2 text-xs md:text-sm font-medium hidden md:block transition-colors duration-300
                                    ${isCurrent ? "text-[#0099cc]" : isCompleted ? "text-green-600" : "text-gray-400"}
                                `}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
      {/* Mobile Step Text - Only shows current step name */}
      <div className="md:hidden text-center mt-4">
        <p className="text-[#0099cc] font-semibold">{steps[currentStep - 1]}</p>
        <p className="text-xs text-gray-500">
          Step {currentStep} of {steps.length}
        </p>
      </div>
    </div>
  );
}
