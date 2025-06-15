
export default function ThreadlineAI() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="text-2xl font-bold tracking-wide">Threadline AI</div>
        <nav className="space-x-6 hidden md:block">
          <a href="#how" className="hover:text-blue-500 transition-colors duration-200">How It Works</a>
          <a href="#services" className="hover:text-blue-500 transition-colors duration-200">Services</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors duration-200">Book Audit</a>
        </nav>
      </header>

      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Smarter Business. Less Busy Work.</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Automate your follow-ups, booking replies, and review requests using AI — no tech headaches.
        </p>
        <a href="#contact" className="bg-blue-500 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition duration-200">
          Get Your Free Audit
        </a>
      </section>

      <section id="how" className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="hover:-translate-y-1 hover:shadow-xl transition-transform duration-200 p-4">
            <p className="text-xl font-semibold mb-2">1. Book a Free Audit</p>
            <p className="text-gray-400">We learn your flow, tools, and what slows you down.</p>
            <a href="#" className="text-blue-500 text-sm underline block mt-2">See Example ↗</a>
          </div>
          <div className="hover:-translate-y-1 hover:shadow-xl transition-transform duration-200 p-4">
            <p className="text-xl font-semibold mb-2">2. Build Your System</p>
            <p className="text-gray-400">Zapier + GPT = automated booking, replies, reviews, and reminders.</p>
            <a href="#" className="text-blue-500 text-sm underline block mt-2">See Example ↗</a>
          </div>
          <div className="hover:-translate-y-1 hover:shadow-xl transition-transform duration-200 p-4">
            <p className="text-xl font-semibold mb-2">3. Deliver & Monitor</p>
            <p className="text-gray-400">You get results with weekly updates or live dashboards.</p>
            <a href="#" className="text-blue-500 text-sm underline block mt-2">See Example ↗</a>
          </div>
          <div className="hover:-translate-y-1 hover:shadow-xl transition-transform duration-200 p-4">
            <p className="text-xl font-semibold mb-2">4. Scale Smart</p>
            <p className="text-gray-400">We optimize, adjust, and add features as your business grows.</p>
            <a href="#" className="text-blue-500 text-sm underline block mt-2">See Example ↗</a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Book Your Free Automation Audit</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Let’s see where you’re leaving money on the table — and fix it fast.
        </p>
        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="bg-blue-500 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition duration-200">
          Schedule on Calendly
        </a>
      </section>
    </div>
  );
}
