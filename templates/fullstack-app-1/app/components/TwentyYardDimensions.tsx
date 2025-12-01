'use client';

import Image from 'next/image';

interface TwentyYardDimensionsProps {
  showImage?: boolean;
  className?: string;
}

export default function TwentyYardDimensions({ 
  showImage = true, 
  className = '' 
}: TwentyYardDimensionsProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">20 Yard Dumpster Dimensions</h3>
        <p className="text-gray-600">Exact specifications for accurate planning</p>
      </div>

      {/* Dumpster Graphic */}
      {showImage && (
        <div className="mb-6 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Isometric Dumpster Visualization */}
            <div className="relative">
              {/* Dumpster Container */}
              <svg 
                viewBox="0 0 400 300" 
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background */}
                <rect width="400" height="300" fill="#f9fafb" />
                
                {/* Dumpster - Isometric View */}
                {/* Top face */}
                <polygon 
                  points="80,40 320,40 370,150 130,150" 
                  fill="#0d9488" 
                  opacity="0.9"
                />
                {/* Front face */}
                <polygon 
                  points="80,40 130,150 130,230 80,180" 
                  fill="#5a43b8" 
                />
                {/* Right face */}
                <polygon 
                  points="320,40 370,150 370,230 320,180" 
                  fill="#3d2a8a" 
                />
                
                {/* Logo on front */}
                <text 
                  x="105" 
                  y="115" 
                  fill="white" 
                  fontSize="16" 
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                >
                  ICON
                </text>
                <text 
                  x="105" 
                  y="135" 
                  fill="white" 
                  fontSize="12" 
                  fontFamily="Arial, sans-serif"
                >
                  DUMPSTERS
                </text>
                
                {/* Dimension Lines */}
                {/* Width (W) - Front bottom edge */}
                <line x1="80" y1="230" x2="130" y2="230" stroke="#ef4444" strokeWidth="2" />
                <line x1="80" y1="225" x2="80" y2="235" stroke="#ef4444" strokeWidth="2" />
                <line x1="130" y1="225" x2="130" y2="235" stroke="#ef4444" strokeWidth="2" />
                <text x="105" y="220" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">
                  W
                </text>
                
                {/* Length (L) - Side bottom edge */}
                <line x1="130" y1="230" x2="370" y2="150" stroke="#ef4444" strokeWidth="2" />
                <line x1="130" y1="225" x2="135" y2="227" stroke="#ef4444" strokeWidth="2" />
                <line x1="370" y1="145" x2="375" y2="147" stroke="#ef4444" strokeWidth="2" />
                <text x="250" y="185" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">
                  L
                </text>
                
                {/* Depth/Height (D) - Right side */}
                <line x1="370" y1="150" x2="370" y2="230" stroke="#ef4444" strokeWidth="2" />
                <line x1="365" y1="150" x2="375" y2="150" stroke="#ef4444" strokeWidth="2" />
                <line x1="365" y1="230" x2="375" y2="230" stroke="#ef4444" strokeWidth="2" />
                <text x="385" y="190" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">
                  D
                </text>
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Dimensions Table */}
      <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 border border-purple-100">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-lg font-bold">W</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">Width</h4>
            <p className="text-2xl font-bold text-[#0d9488] mb-1">7.54 ft</p>
            <p className="text-sm text-gray-600">(7 ft 6 in)</p>
          </div>
          
          <div className="text-center">
            <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-lg font-bold">L</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">Length</h4>
            <p className="text-2xl font-bold text-[#0d9488] mb-1">17.08 ft</p>
            <p className="text-sm text-gray-600">(17 ft 1 in)</p>
          </div>
          
          <div className="text-center">
            <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-lg font-bold">D</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">Depth</h4>
            <p className="text-2xl font-bold text-[#0d9488] mb-1">5.00 ft</p>
            <p className="text-sm text-gray-600">(5 ft 0 in)</p>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6 pt-6 border-t border-purple-200 text-center">
          <p className="text-gray-700 font-semibold mb-2">
            Total Dimensions: <span className="text-[#0d9488]">7.54 ft (W) × 17.08 ft (L) × 5.00 ft (D)</span>
          </p>
          <p className="text-sm text-gray-600">
            20 cubic yards capacity | Approximately 4-5 pickup truck loads
          </p>
        </div>
      </div>
    </div>
  );
}

