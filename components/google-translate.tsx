"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    googleTranslateElementInit: () => void
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // Add Google Translate script
    const script = document.createElement("script")
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    script.async = true
    document.body.appendChild(script)

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      ;new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: "true",
          layout: (window as any).google.translate.TranslateElement.InlineLayout.VERTICAL,
        },
        "google_translate_element",
      )
    }

    return () => {
      // Clean up
      document.body.removeChild(script)
      delete window.googleTranslateElementInit
    }
  }, [])

  return (
    <div className="mb-8 bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-medium mb-2">Translate this page to your preferred language:</h3>
      <div id="google_translate_element" className="mt-2"></div>
    </div>
  )
}
