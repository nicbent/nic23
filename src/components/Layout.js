import React from "react"


export default function Layout({ children }) {

    return (
        <>
            <div className="main">
                {children}
            </div>

            <div className="bg-[#000707] inset-0 fixed -z-20"></div>

            <div className="patterns fixed inset-0 opacity-5 -z-10">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="grid" x="0" y="0" width="1" height="3" patternUnits="userSpaceOnUse">
                        <rect x="0" y="1" width="1" height="1" fill="#fff"/>
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

        </>
    )
}