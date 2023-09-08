import NavBar from "@/components/NavBar"
import Main from "@/components/Main"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
    <main className="main-content">
        <NavBar/>
        <Main/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact />
        <Footer />
    </main>
    </div>
  )

}


