import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Video, Keyboard, MonitorPlay, Sparkles } from "lucide-react"
import bgImage from './assets/bg.png'

export default function ZegoCloud(){

    const [value,setValue] = useState('')
    const navigate = useNavigate()

    const joinRoom = useCallback(()=>{
        if (value.trim()) {
            navigate(`/room/${value}`)
        }
    },[navigate,value])

    const generateRandomRoom = () => {
        const randomRoom = Math.random().toString(36).substring(2, 8);
        navigate(`/room/${randomRoom}`);
    };

    return(
        <div className="min-h-screen w-full bg-slate-950 text-white font-sans overflow-hidden relative selection:bg-indigo-500/30">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={bgImage} alt="Background" className="w-full h-full object-cover opacity-40 mix-blend-screen scale-105 animate-pulse" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-indigo-950/80 backdrop-blur-[2px]"></div>
            </div>

            {/* Navbar */}
            <nav className="z-10 w-full px-6 py-4 flex items-center justify-between border-b border-white/5 bg-slate-950/20 backdrop-blur-md sticky top-0">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="p-2 bg-indigo-500/20 rounded-xl group-hover:bg-indigo-500/30 transition-colors">
                        <Video className="w-6 h-6 text-indigo-400" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Lumina<span className="text-indigo-400">Meet</span></span>
                </div>
                
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center">
                    <span className="text-lg font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">Arpit Rajput</span>
                </div>
                
                <div className="hidden md:block w-24"></div> {/* Spacer for flex balance */}
            </nav>

            {/* Hero Section */}
            <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col lg:flex-row items-center justify-between gap-16 min-h-[calc(100vh-80px)]">
                
                {/* Left Content */}
                <div className="flex-1 flex flex-col items-start gap-8 mt-10 lg:mt-0 z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium backdrop-blur-sm">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Premium Video Calling Experience</span>
                    </div>
                    
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                        Connect <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Instantly, Anywhere</span>
                    </h1>
                    
                    <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                        Experience crystal-clear video and audio with our modern platform. No downloads required—just create a room and share the link to start collaborating.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md mt-4">
                        <button 
                            onClick={generateRandomRoom}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transform hover:-translate-y-0.5"
                        >
                            <Video className="w-5 h-5" />
                            Start Meeting
                        </button>
                        
                        <div className="flex items-center gap-2 w-full sm:w-auto px-4 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md focus-within:border-indigo-500/50 focus-within:bg-white/10 transition-all">
                            <Keyboard className="w-5 h-5 text-slate-400" />
                            <input 
                                className="bg-transparent border-none outline-none text-white placeholder-slate-400 w-full md:w-32" 
                                type="text" 
                                placeholder="Enter room ID" 
                                value={value}
                                onChange={(e)=>setValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && joinRoom()}
                            />
                            <button 
                                onClick={joinRoom}
                                className={`text-sm font-medium transition-colors ${value.trim() ? 'text-indigo-400 hover:text-indigo-300' : 'text-slate-500 cursor-not-allowed'}`}
                                disabled={!value.trim()}
                            >
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Visual / Decorative */}
                <div className="flex-1 w-full max-w-lg lg:max-w-none relative z-10 perspective-1000">
                    <div className="relative w-full aspect-video rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl shadow-2xl p-2 transform -rotate-3 transition-transform duration-700 ease-out hover:rotate-0">
                        {/* Fake UI Header */}
                        <div className="flex items-center justify-between mb-4 px-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                            </div>
                        </div>
                        {/* Fake Grid */}
                        <div className="grid grid-cols-2 gap-2 h-[calc(100%-2rem)]">
                            <div className="bg-slate-800/50 rounded-xl flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay"></div>
                                <MonitorPlay className="w-8 h-8 text-white/30 group-hover:text-white/60 transition-colors" />
                            </div>
                            <div className="bg-slate-800/50 rounded-xl flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-purple-500/20 mix-blend-overlay"></div>
                                <MonitorPlay className="w-8 h-8 text-white/30 group-hover:text-white/60 transition-colors" />
                            </div>
                            <div className="bg-slate-800/50 rounded-xl flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-pink-500/20 mix-blend-overlay"></div>
                                <MonitorPlay className="w-8 h-8 text-white/30 group-hover:text-white/60 transition-colors" />
                            </div>
                            <div className="bg-slate-800/50 rounded-xl flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay"></div>
                                <MonitorPlay className="w-8 h-8 text-white/30 group-hover:text-white/60 transition-colors" />
                            </div>
                        </div>
                        
                        {/* Decorative Blur Blobs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>

            </main>
        </div>
    )
}