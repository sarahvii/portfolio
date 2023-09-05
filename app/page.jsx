import NavBar from "@/components/NavBar"
import Main from "@/components/Main"
import About from "@/components/About"
import Skills from "@/components/Skills"


export default function Home() {
  return (
    <div>
    <main>
        <NavBar/>
        <Main/>
        <About/>
        <Skills/>
    </main>
    </div>
  )
}
