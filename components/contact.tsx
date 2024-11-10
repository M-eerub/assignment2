// pages/contact.tsx
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-900 to-blue-600 p-8">
        <section className="bg-white p-12 rounded-xl max-w-2xl w-full shadow-lg text-center text-gray-800">
          <h1 className="text-4xl mb-4 text-blue-600">Contact Us</h1>
          <p className="text-xl mb-8 text-gray-600">
            We’d love to hear from you! Reach out with any questions, feedback, or just to say hello.
          </p>

          {/* Contact Information */}
          <div className="mb-10 text-lg">
            <p className='my-2'><strong>Email:</strong> <a className='text-blue-600 no-underline hover:underline' href="mailto:info@example.com">info@example.com</a></p>
            <p className='my-2'><strong>Phone:</strong> <a className='text-blue-600 no-underline hover:underline' href="tel:+1234567890">+1 (234) 567-890</a></p>
            <p className='my-2'><strong>Address:</strong> 1234 Street Name, City, State, ZIP</p>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col gap-6">
            <input className='p-4 border border-gray-300 rounded-lg text-lg w-full focus:border-blue-600 focus:ring-2 focus:ring-blue-300' type="text" name="name" placeholder="Your Name" required />
            <input className='p-4 border border-gray-300 rounded-lg text-lg w-full focus:border-blue-600 focus:ring-2 focus:ring-blue-300' type="email" name="email" placeholder="Your Email" required />
            <textarea className='p-4 border border-gray-300 rounded-lg text-lg w-full focus:border-blue-600 focus:ring-2 focus:ring-blue-300' name="message" placeholder="Your Message" rows={5} required></textarea>
            <button className='p-4 text-lg text-white bg-gradient-to-br from-indigo-700 to-blue-600 rounded-lg hover:bg-blue-600 active:translate-y-1' type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </>
  );
}
