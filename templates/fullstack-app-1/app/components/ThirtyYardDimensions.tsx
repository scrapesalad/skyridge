'use client';

import Image from 'next/image';

interface ThirtyYardDimensionsProps {
  showImage?: boolean;
  className?: string;
}

export default function ThirtyYardDimensions({ 
  showImage = true, 
  className = '' 
}: ThirtyYardDimensionsProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">30 Yard Dumpster Dimensions</h3>
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
                  points="60,30 360,30 410,150 110,150" 
                  fill="#0d9488" 
                  opacity="0.9"
                />
                {/* Front face */}
                <polygon 
                  points="60,30 110,150 110,240 60,190" 
                  fill="#5a43b8" 
                />
                {/* Right face */}
                <polygon 
                  points="360,30 410,150 410,240 360,190" 
                  fill="#3d2a8a" 
                />
                
                {/* Logo on front */}
                <text 
                  x="85" 
                  y="115" 
                  fill="white" 
                  fontSize="18" 
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                >
                  ICON
                </text>
                <text 
                  x="85" 
                  y="135" 
                  fill="white" 
                  fontSize="14" 
                  fontFamily="Arial, sans-serif"
                >
                  DUMPSTERS
                </text>
                
                {/* Dimension Lines */}
                {/* Width (W) - Front bottom edge */}
                <line x1="60" y1="240" x2="110" y2="240" stroke="#ef4444" strokeWidth="2" />
                <line x1="60" y1="235" x2="60" y2="245" stroke="#ef4444" strokeWidth="2" />
                <line x1="110" y1="235" x2="110" y2="245" stroke="#ef4444" strokeWidth="2" />
                <text x="85" y="230" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">
                  W
                </text>
                
                {/* Length (L) - Side bottom edge */}
                <line x1="110" y1="240" x2="410" y2="150" stroke="#ef4444" strokeWidth="2" />
                <line x1="110" y1="235" x2="115" y2="237" stroke="#ef4444" strokeWidth="2" />
                <line x1="410" y1="145" x2="415" y2="147" stroke="#ef4444" strokeWidth="2" />
                <text x="260" y="190" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">
                  L
                </text>
                
                {/* Depth/Height (D) - Right side */}
                <line x1="410" y1="150" x2="410" y2="240" stroke="#ef4444" strokeWidth="2" />
                <line x1="405" y1="150" x2="415" y2="150" stroke="#ef4444" strokeWidth="2" />
                <line x1="405" y1="240" x2="415" y2="240" stroke="#ef4444" strokeWidth="2" />
                <text x="425" y="195" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">
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
            <p className="text-2xl font-bold text-[#0d9488] mb-1">7.92 ft</p>
            <p className="text-sm text-gray-600">(7 ft 11 in)</p>
          </div>
          
          <div className="text-center">
            <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-lg font-bold">L</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">Length</h4>
            <p className="text-2xl font-bold text-[#0d9488] mb-1">22.0 ft</p>
            <p className="text-sm text-gray-600">(22 ft 0 in)</p>
          </div>
          
          <div className="text-center">
            <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-lg font-bold">D</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">Depth</h4>
            <p className="text-2xl font-bold text-[#0d9488] mb-1">6.0 ft</p>
            <p className="text-sm text-gray-600">(6 ft 0 in)</p>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6 pt-6 border-t border-purple-200 text-center">
          <p className="text-gray-700 font-semibold mb-2">
            Total Dimensions: <span className="text-[#0d9488]">7.92 ft (W) × 22.0 ft (L) × 6.0 ft (D)</span>
          </p>
          <p className="text-sm text-gray-600">
            30 cubic yards capacity | Approximately 6-7 pickup truck loads
          </p>
        </div>
      </div>
    </div>
  );
}

