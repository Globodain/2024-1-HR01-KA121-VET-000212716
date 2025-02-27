export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span>Pula, Croatia</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span>
                <span>info@softcamp.eu</span>
              </p>
              <p className="flex items-center gap-2">
                <span>🌐</span>
                <span>www.softcamp.eu</span>
              </p>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 border rounded h-32"
                ></textarea>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
