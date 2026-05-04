import { useParams, useNavigate } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useEffect, useRef } from 'react';
import { ArrowLeft } from "lucide-react";
import bgImage from './assets/bg.png';

export default function VideoRoom() {
    const { id } = useParams();
    const containerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (containerRef.current) {
            // generate Kit Token
            const appID = 1787614081;
            const serverSecret = "860df98dc04b441604b4db81046d73dc";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString(), "JohnSnow");

            // Create instance object from Kit Token.
            const zp = ZegoUIKitPrebuilt.create(kitToken);

            // start the call
            zp.joinRoom({
                container: containerRef.current,
                sharedLinks: [
                    {
                        name: 'Personal link',
                        url:
                            window.location.protocol + '//' +
                            window.location.host + window.location.pathname +
                            '?room=' +
                            id,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
                },
            });
        }
    }, [id]);

    return (
        <div className="h-screen w-full bg-slate-950 relative overflow-hidden flex flex-col font-sans">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img src={bgImage} alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-indigo-950/90 backdrop-blur-sm"></div>
            </div>

            {/* Custom Header over the room */}
            <div className="relative z-10 w-full px-6 py-4 flex items-center justify-between border-b border-white/5 bg-slate-950/40 backdrop-blur-md">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </button>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-medium text-slate-300">Room: <span className="text-white">{id}</span></span>
                </div>
            </div>

            {/* Zego UI Container */}
            <div className="relative z-10 flex-1 w-full h-full p-4 lg:p-8">
                <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-md bg-slate-900/50">
                    <div ref={containerRef} className="w-full h-full"></div>
                </div>
            </div>
        </div>
    )
}