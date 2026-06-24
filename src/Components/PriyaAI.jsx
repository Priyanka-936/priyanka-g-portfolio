import { useState } from "react";

function PriyaAI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(
    "👋 Hi, I'm PRIYA AI.\nAsk me about skills, projects, internships, certifications, resume, or contact."
  );

  const handleSend = () => {
    const msg = input.toLowerCase();

    if (msg.includes("skills")) {
      setResponse(
        "💻 Skills:\nJava, Python, C, HTML, CSS, JavaScript, React, AWS, Git."
      );
    } else if (msg.includes("projects")) {
      setResponse(
        "🚀 Projects:\n• Smart Railway Gate Automation\n• Traffic Accident Analysis\n• AI Study Buddy"
      );
    } else if (msg.includes("internship")) {
      setResponse(
        "🏢 Internships:\n• Triox Technology Company\n• Embedded Systems Training\n• Hardware Integration and PCB Design"
      );
    } else if (msg.includes("certification")) {
      setResponse(
        "🏆 Certifications:\nAWS Data Analytics\nAI-900\nOCI Foundations\nIBM Enterprise Design Thinking"
      );
    } else if (msg.includes("contact")) {
      setResponse(
        "📧 Email: priyankagopi12999@gmail.com\n💼 LinkedIn: linkedin.com/in/priyanka-g-ece"
      );
    } else if (msg.includes("resume")) {
      setResponse(
        "📄 Resume available through the Download Resume button."
      );
    } else {
      setResponse(
        "🤖 Try asking:\nskills\nprojects\ninternships\ncertifications\nresume\ncontact"
      );
    }

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 bg-[#D4AF37] text-white w-16 h-16 rounded-full shadow-xl text-3xl z-50"
      >
        🤖
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-28 right-8 w-80 bg-white rounded-3xl shadow-2xl p-6 z-50">
          <h2 className="text-xl font-bold text-[#D4AF37] mb-4">
            PRIYA AI
          </h2>

          <div className="bg-gray-100 rounded-xl p-4 min-h-[120px] whitespace-pre-line">
            {response}
          </div>

          <div className="flex mt-4 gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border rounded-xl px-3 py-2 flex-1"
              placeholder="Ask something..."
            />

            <button
              onClick={handleSend}
              className="bg-[#D4AF37] text-white px-4 rounded-xl"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PriyaAI;