import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [roomCode, setRoomCode] = useState('');
  const [userName, setUserName] = useState('');
  const [showRoomLink, setShowRoomLink] = useState(false);
  const [generatedRoomLink, setGeneratedRoomLink] = useState('');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    if (userName.trim()) {
      setGeneratedRoomLink(
        `${window.location.origin}/room?roomID=${Math.random()
          .toString(36)
          .substring(2, 8)
          .toUpperCase()}`
      );
      setShowRoomLink(true);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedRoomLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const joinCreatedRoom = () =>
    navigate(
      `/room?roomID=${new URLSearchParams(
        new URL(generatedRoomLink).search
      ).get('roomID')}&userName=${userName}`
    );

  return (
    <div className="min-h-screen w-screen bg-linear-to-br from-blue-900 via-purple-900 to-black p-2 sm:p-4">
      <div className="min-h-screen w-full bg-linear-to-br from-gray-900 to-black rounded-3xl sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        <div className="hidden lg:flex lg:flex-1 bg-linear-to-br from-blue-500 via-blue-700 to-orange-500 p-8 lg:p-16 flex-col justify-center items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-300 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center max-w-xl">
            <div className="mb-12">
              <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto bg-white/10 backdrop-blur-xl rounded-[3rem] flex items-center justify-center border-8 border-white/20 shadow-2xl mb-8">
                <svg
                  className="w-32 h-32 lg:w-40 lg:h-40 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>

              <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Build Interactive<br />Real-Time Apps
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 mb-8">
                with Voice, Video & Chat API
              </p>

              <p className="text-base lg:text-lg text-white/80 max-w-lg mx-auto">
                Real-time SDKs for voice, video, chat, live streaming, and AI-powered engagement.
              </p>
            </div>

            <div className="flex justify-center gap-8 lg:gap-12 mt-12">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">HD</div>
                <div className="text-xs lg:text-sm text-white/80">Quality</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">Adaptive Bitrate </div>
                <div className="text-xs lg:text-sm text-white/80">Low Latency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-xs lg:text-sm text-white/80">Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white p-6 sm:p-10 lg:p-16 flex flex-col justify-center min-h-screen lg:min-h-0">
          <div className="max-w-lg mx-auto w-full">
            <div className="lg:hidden mb-8 text-center">
              <div className="w-20 h-20 mx-auto bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-black text-gray-900 mb-2">Start Meeting</h1>
              <p className="text-gray-500">Create your video room</p>
            </div>

            <div className="hidden lg:block mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900">Start Meeting</h2>
                  <p className="text-gray-900 text-lg">Create or join instantly</p>
                </div>
              </div>
            </div>

            {showRoomLink && (
              <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-linear-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-purple-900 text-base sm:text-lg">Room Created!</p>
                    <p className="text-xs sm:text-sm text-purple-700">
                      Share this link to invite others
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 mb-4">
                  <input
                    type="text"
                    value={generatedRoomLink}
                    readOnly
                    className="flex-1 px-3 sm:px-4 py-3 bg-white border-2 border-purple-200 rounded-xl text-xs sm:text-sm text-gray-700 font-mono"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="px-4 sm:px-6 py-3 bg-linear-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all font-bold whitespace-nowrap text-sm sm:text-base"
                  >
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>
                </div>

                <button
                  onClick={joinCreatedRoom}
                  className="w-full bg-purple-600 text-white py-3 sm:py-3.5 px-4 rounded-xl font-bold hover:bg-purple-700 transition-all text-sm sm:text-base"
                >
                  Join This Room →
                </button>
              </div>
            )}

            <div className="space-y-5 sm:space-y-6 mb-6 sm:mb-8">
              <div>
                <label className="block text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none transition-all text-base sm:text-lg bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3">
                  Room Code{' '}
                  <span className="text-gray-400 font-normal text-xs sm:text-sm">
                    (Optional)
                  </span>
                </label>
                <input
                  type="text"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                  placeholder="Enter 6-digit room code"
                  maxLength={6}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none transition-all text-base sm:text-lg uppercase font-mono bg-gray-50"
                />
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <button
                onClick={handleCreateRoom}
                disabled={!userName.trim()}
                className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white py-4 sm:py-5 px-6 rounded-xl font-bold text-lg sm:text-xl hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Create New Room
              </button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-xs sm:text-sm">
                  <span className="px-4 bg-white text-gray-500 font-semibold">OR</span>
                </div>
              </div>

              <button
                disabled
                className="w-full bg-white text-purple-600 py-4 sm:py-5 px-6 rounded-xl font-bold text-lg sm:text-xl border-2 border-purple-500 opacity-50 cursor-not-allowed flex items-center justify-center gap-3"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Join Existing Room
              </button>
            </div>

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t-2 border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
                <span className="text-gray-500 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  End-to-end encrypted
                </span>
                <span className="text-gray-600">
                  <strong className="text-purple-500"> &copy; Aakarsh </strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}