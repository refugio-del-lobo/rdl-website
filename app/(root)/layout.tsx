import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
import StickyWhatsappLink from "@/components/shared/StickyWhatsappLink"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
