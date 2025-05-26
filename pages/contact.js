import React, { useRef, useState, useEffect } from "react"
import Footer from "../components/ui/Footer"
import MainNav from "../components/ui/nav/MainNav"
import emailjs from "@emailjs/browser"
import Toast from "../components/ui/Toast"
import Head from 'next/head'

function Contact() {
  const form = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const [formErrors, setFormErrors] = useState({})

  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastType, setToastType] = useState("")

  const handleShowSuccessToast = () => {
    setToastMessage("Message sent to Zeeson team successfully")
    setToastType("success")
    setShowToast(true)
  }

  const handleShowErrorToast = () => {
    setToastMessage("Unable to send the message")
    setToastType("error")
    setShowToast(true)
  }

  const handleCloseToast = () => {
    setShowToast(false)
  }

  const validateForm = () => {
    const errors = {}
    const fields = ['first_name', 'last_name', 'phone', 'user_email', 'message']
    
    fields.forEach(field => {
      if (!form.current[field].value.trim()) {
        errors[field] = 'This field is required'
      }
    })

    if (form.current.user_email.value && !/\S+@\S+\.\S+/.test(form.current.user_email.value)) {
      errors.user_email = 'Please enter a valid email'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsLoading(true)

    try {
      console.log('Sending email with config:', {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      });

      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log('Success:', result.text);
      handleShowSuccessToast();
      form.current.reset();
      setFormErrors({})
    } catch (error) {
      console.error("Failed to send email:", error.text || error.message);
      handleShowErrorToast()
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <main>
      <Head>
        <title>Zeeson Info Tech - Contact Us</title>
      </Head>
      <MainNav />
      <div>
        <div className="mt-20 mb-8 max-w-[500px] mx-auto text-center">
          <h3 className="font-[600] text-4xl mb-4 ">Contact Us</h3>
          <p className="text-[16px]">
            Get in touch with us to discuss how we can elevate your digital
            presence and set your business on the path to digital excellence.
          </p>
        </div>
        <div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-2 items-center max-w-[80%] md:max-w-[80%] laptop:max-w-[60%] mx-auto gap-x-6 gap-y-6 bg-[#F4F6FC] px-[8%] py-[8%] md:py-[4%]"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="fname">First Name:</label>
              <input
                name="first_name"
                id="fname"
                type="text"
                className={`border w-full border-slate-600 rounded-md p-2 outline-none ${
                  formErrors.first_name ? 'border-red-500' : ''
                }`}
              />
              {formErrors.first_name && (
                <span className="text-red-500 text-sm">{formErrors.first_name}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lname">Last Name:</label>
              <input
                name="last_name"
                id="lname"
                type="text"
                className={`border w-full border-slate-600 rounded-md p-2 outline-none ${
                  formErrors.last_name ? 'border-red-500' : ''
                }`}
              />
              {formErrors.last_name && (
                <span className="text-red-500 text-sm">{formErrors.last_name}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Phone:</label>
              <input
                id="phone"
                name="phone"
                type="phone"
                className={`border w-full border-slate-600 rounded-md p-2 outline-none ${
                  formErrors.phone ? 'border-red-500' : ''
                }`}
              />
              {formErrors.phone && (
                <span className="text-red-500 text-sm">{formErrors.phone}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email:</label>
              <input
                name="user_email"
                id="email"
                type="email"
                className={`border w-full border-slate-600 rounded-md p-2 outline-none ${
                  formErrors.user_email ? 'border-red-500' : ''
                }`}
              />
              {formErrors.user_email && (
                <span className="text-red-500 text-sm">{formErrors.user_email}</span>
              )}
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="message">Message:</label>
              <textarea
                rows={6}
                name="message"
                className={`border w-full border-slate-600 rounded-md p-2 outline-none resize-none ${
                  formErrors.message ? 'border-red-500' : ''
                }`}
              ></textarea>
              {formErrors.message && (
                <span className="text-red-500 text-sm">{formErrors.message}</span>
              )}
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-[#282938] rounded-full py-3 px-12 md:text-[18px] laptop:text-[20px] font-[500] text-white mt-4 disabled:opacity-50"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {showToast && (
              <Toast
                message={toastMessage}
                type={toastType}
                onClose={handleCloseToast}
              />
            )}
          </form>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default Contact
