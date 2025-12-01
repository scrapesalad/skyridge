'use client';

import Image from 'next/image';

interface FifteenYardDimensionsProps {
  showImage?: boolean;
  className?: string;
}

export default function FifteenYardDimensions({ 
  showImage = true, 
  className = '' 
}: FifteenYardDimensionsProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">15 Yard Dumpster Dimensions</h3>
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
                  points="100,50 300,50 350,150 150,150" 
                  fill="#0d9488" 
                  opacity="0.9"
                />
                {/* Front face */}
                <polygon 
                  points="100,50 150,150 150,220 100,170" 
                  fill="#5a43b8" 
                />
                {/* Right face */}
                <polygon 
                  points="300,50 350,150 350,220 300,170" 
                  fill="#3d2a8a" 
                />
                
                {/* Logo on front */}
                <text 
                  x="125" 
                  y="115" 
                  fill="white" 
                  fontSize="14" 
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                >
                  ICON
                </text>
                <text 
                  x="125" 
                  y="135" 
                  fill="white" 
                  fontSize="10" 
                  fontFamily="Arial, sans-serif"
                >
                  DUMPSTERS
                </text>
                
                {/* Dimension Lines */}
                {/* Width (W) - Front bottom edge */}
                <line x1="100" y1="220" x2="150" y2="220" stroke="#ef4444" strokeWidth="2" />
                <line x1="100" y1="215" x2="100" y2="225" stroke="#ef4444" strokeWidth="2" />
                <line x1="150" y1="215" x2="150" y2="225" stroke="#ef4444" strokeWidth="2" />
                <text x="120" y="210" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">
                  W
                </text>
                
                {/* Length (L) - Side bottom edge */}
                <line x1="150" y1="220" x2="350" y2="150" stroke="#ef4444" strokeWidth="2" />
                <line x1="150" y1="215" x2="155" y2="217" stroke="#ef4444" strokeWidth="2" />
                <line x1="350" y1="145" x2="355" y2="147" stroke="#ef4444" strokeWidth="2" />
                <text x="250" y="180" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">
                  L
                </text>
                
                {/* Depth/Height (D) - Right side */}
                <line x1="350" y1="150" x2="350" y2="220" stroke="#ef4444" strokeWidth="2" />
                <line x1="345" y1="150" x2="355" y2="150" stroke="#ef4444" strokeWidth="2" />
                <line x1="345" y1="220" x2="355" y2="220" stroke="#ef4444" strokeWidth="2" />
                <text x="365" y="185" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">
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
            <p className="text-2xl font-bold text-[#0d9488] mb-1">7.75 ft</p>
            <p className="text-sm text-gray-600">(7 ft 9 in)</p>
          </div>
          
          <div className="text-center">
            <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-lg font-bold">L</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">Length</h4>
            <p className="text-2xl font-bold text-[#0d9488] mb-1">14.5 ft</p>
            <p className="text-sm text-gray-600">(14 ft 6 in)</p>
          </div>
          
          <div className="text-center">
            <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-lg font-bold">D</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">Depth</h4>
            <p className="text-2xl font-bold text-[#0d9488] mb-1">4.67 ft</p>
            <p className="text-sm text-gray-600">(4 ft 8 in)</p>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6 pt-6 border-t border-purple-200 text-center">
          <p className="text-gray-700 font-semibold mb-2">
            Total Dimensions: <span className="text-[#0d9488]">7.75 ft (W) × 14.5 ft (L) × 4.67 ft (D)</span>
          </p>
          <p className="text-sm text-gray-600">
            15 cubic yards capacity | Approximately 3-4 pickup truck loads
          </p>
        </div>
      </div>
    </div>
  );
}

