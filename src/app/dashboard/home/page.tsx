"use client";
import React, { useState } from "react";

const DashboardPage: React.FC = () => {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const videos = Array.from({ length: 15 }, (_, index) => ({
        id: index,
        thumbnail: `data:image/png;base64,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`,
        title: `Video Title ${index + 1}`,
        metadata: `Metadata for Video ${index + 1}`,
        description: `This is a detailed description of Video ${index + 1}.`,
    }));

    return (
        <div className="flex flex-col grow bg-gradient-to-b from-purple-900 to-purple-950 text-white">
            {/* Search Bar */}
            <div className="p-6  shadow-md flex-shrink-0">
                <input
                    type="text"
                    placeholder="Search videos..."
                    className="w-full p-3 border border-purple-700 rounded-lg bg-white/20 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>


            <div className="overflow-y-auto p-6 space-y-6 flex-1 min-h-0">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className="flex items-start gap-6 p-5 border border-purple-700 rounded-2xl bg-purple-800 shadow-md hover:shadow-xl transition-shadow duration-300 hover:border-purple-400 group"
                    >
                        {/* Thumbnail */}
                        <div className="flex-shrink-0 relative">
                            <img
                                src={video.thumbnail}
                                alt={`Thumbnail for ${video.title}`}
                                className=" h-32 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-between flex-1 ms-4">
                            <div>
                                <h2 className="text-xl font-semibold text-white">{video.title}</h2>
                                <p className="text-sm text-purple-300 mt-1">{video.metadata}</p>

                                {expandedCard === video.id && (
                                    <p className="mt-3 text-sm text-purple-200 leading-relaxed">
                                        {video.description}
                                    </p>
                                )}
                            </div>

                            <button
                                onClick={() =>
                                    setExpandedCard(expandedCard === video.id ? null : video.id)
                                }
                                className="mt-4 self-start text-sm font-medium text-purple-400 hover:text-purple-200 transition-colors underline"
                            >
                                {expandedCard === video.id ? "Show Less" : "Show More"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default DashboardPage;
