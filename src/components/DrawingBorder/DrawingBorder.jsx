import { useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";

/**
 * Wraps children in a container and draws the border clockwise from nothing to full (SVG stroke-dashoffset).
 */
function DrawingBorder({ children, className = "", strokeClassName = "stroke-gray-300", strokeWidth = 1, duration = 1.5 }) {
    const measureRef = useRef(null);
    const [pathLength, setPathLength] = useState(0);

    useLayoutEffect(() => {
        const el = measureRef.current;
        if (el) {
            const len = el.getTotalLength();
            setPathLength(len > 0 ? len : 1500);
        }
    }, []);

    return (
        <div className={`relative ${className}`}>
            <svg
                className="absolute inset-0 h-full w-full overflow-visible pointer-events-none"
                aria-hidden="true"
            >
                <rect
                    ref={measureRef}
                    x={strokeWidth / 2}
                    y={strokeWidth / 2}
                    width="100%"
                    height="100%"
                    rx={8}
                    ry={8}
                    fill="none"
                    stroke="transparent"
                    strokeWidth={strokeWidth}
                />
                {(pathLength > 0) && (
                    <motion.rect
                        key={pathLength}
                        x={strokeWidth / 2}
                        y={strokeWidth / 2}
                        width="100%"
                        height="100%"
                        rx={8}
                        ry={8}
                        fill="none"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={strokeClassName}
                        style={{ strokeDasharray: pathLength }}
                        initial={{ strokeDashoffset: pathLength }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration, ease: [0.33, 1, 0.68, 1] }}
                    />
                )}
            </svg>
            <div className="relative rounded-lg">
                {children}
            </div>
        </div>
    );
}

export default DrawingBorder;
