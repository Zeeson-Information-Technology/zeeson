import React, { useState, useEffect } from "react"

const Toast = ({ message, type, onClose }) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      onClose()
    }, 5000) // Toast disappears after 5 seconds

    return () => clearTimeout(timer)
  }, [onClose])

  const toastStyle = {
    position: "fixed",
    bottom: 0,
    right: 0,
    marginBottom: "1rem",
    marginRight: "1rem",
    zIndex: 50,
    transition: "ease-in 300ms",
    transform: show ? "translateY(0)" : "translateY(100%)",
    opacity: show ? 1 : 0,
  }

  const iconStyle = {
    marginRight: "0.5rem",
    color: type === "success" ? "green" : "red",
  }

  const handleClose = () => {
    setShow(false)
    onClose()
  }

  return (
    <div style={toastStyle}>
      <div
        className={` bg-white bprder ${
          type === "success"
            ? " border-green-600 text-green-600"
            : "border-red-600 text-red-600"
        } rounded-lg shadow-md p-4 flex items-center`}
      >
        {type === "success" && (
          <svg
            style={iconStyle}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
        {type === "error" && (
          <svg
            style={iconStyle}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
        <p className={`text-sm ${type} `}>{message}</p>
        <button className="ml-auto" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Toast
