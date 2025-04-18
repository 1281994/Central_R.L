"use client"

import { useEffect } from "react"
import Header from "@/components/Header"
import Slider from "@/components/Slider"
import AcercaDeNosotras from "@/components/AcercaDeNosotras"
import Productos from "@/components/Productos"
import FormularioContacto from "@/components/Formulario"
import Footer from "@/components/Footer"
import BackToTop from "@/components/BackToTop"





export default function Home() {
  // Cargar Bootstrap JS desde CDN y ajustar el carrusel
  useEffect(() => {
    // Crear un elemento script para cargar Bootstrap JS
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    script.integrity = "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    script.crossOrigin = "anonymous"
    document.body.appendChild(script)

    // Forzar un evento de resize después de cargar la página para ajustar el carrusel
    const resizeEvent = () => {
      window.dispatchEvent(new Event("resize"))
    }

    // Ejecutar después de que la página se cargue completamente
    window.addEventListener("load", resizeEvent)

    // También ejecutar después de un breve retraso para asegurar que todos los elementos estén renderizados
    const timeoutId = setTimeout(resizeEvent, 1000)

    // También ejecutar varias veces para asegurar que los ajustes se apliquen correctamente
    const intervalId = setInterval(resizeEvent, 500)
    setTimeout(() => clearInterval(intervalId), 3000) // Detener después de 3 segundos

    // Limpiar
    return () => {
      document.body.removeChild(script)
      window.removeEventListener("load", resizeEvent)
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [])

  return (
    <main className="main-container">
      <Header />
      <div id="slider">
        <Slider />
      </div>
      <div id="about">
        <AcercaDeNosotras />
      </div>
      <div id="products">
        <Productos />
      </div>
      <div id="registro">
        <FormularioContacto />
      </div>
      {/* Aquí puedes agregar la sección de testimonios con id="testimonios" */}
      <div id="footer">
        <Footer />
      </div>
      <BackToTop />
    </main>
  )
}