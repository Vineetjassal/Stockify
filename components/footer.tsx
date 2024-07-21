import { Github, Instagram, Linkedin, Mail, StickyNote, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-4 w-full mt-10">
      <hr />
      <div className="container max-w-7xl mt-4 flex flex-col md:flex-row items-center md:justify-between px-4 md:px-6">
        <p className="text-sm text-muted-foreground">&copy; 2024 Stockify. Build by <a href="https://vineetjassal.vercel.app/" target="_blank" className="hover:underline dark:hover:text-white hover:text-black">@vineetjassal</a>.</p>
        <div className="flex items-center space-x-4 md:mt-0 mt-4">
          <Link href="https://x.com/vineetjassal" aria-label="Twitter" prefetch={false}>
            <Twitter className="w-5 h-5 text-muted-foreground hover:text-black dark:hover:text-white transition-colors" />
          </Link>
          <Link href="https://read.cv/vineetjassal" aria-label="Readcv" prefetch={false}>
            <StickyNote className="w-5 h-5 rotate-12 text-muted-foreground hover:text-black dark:hover:text-white transition-colors" />
          </Link>
          <Link href="https://github.com/vineetjassal" aria-label="Github" prefetch={false}>
            <Github className="w-5 h-5 text-muted-foreground hover:text-black dark:hover:text-white transition-colors" />
          </Link>
          <Link href="mailto:vineetjassal35@gmail.com" aria-label="Mail" prefetch={false}>
            <Mail className="w-5 h-5 text-muted-foreground hover:text-black dark:hover:text-white transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  )
}