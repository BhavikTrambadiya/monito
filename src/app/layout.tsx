import '../styles/globals.css'
import {Inter} from 'next/font/google'
import AppHeader from "@/components/layouts/AppHeader";
import AppFooter from "@/components/layouts/AppFooter";

const inter = Inter({subsets: ['latin']})

export async function generateMetadata({params}: { params: any }) {
    return {
        metadataBase: new URL(process.env.NEXT_APP_URL ?? "/"),
        alternates: {
            canonical: '/',
            languages: {
                'en-US': '/en-US',
                'de-DE': '/de-DE',
            },
        },
        title: 'Monito, One more friend Thousands more fun!',
        description: 'Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!',
        referrer: 'origin-when-cross-origin',
        keywords: ['Monito', 'pet', 'friends', 'pets'],
        openGraph: {
            title: 'Monito, One more friend Thousands more fun!',
            description: 'Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!',
            url: '/',
            siteName: 'Monito',
            images: [
                {
                    url: 'https://nextjs.org/og.png',
                    width: 800,
                    height: 600,
                },
                {
                    url: 'https://nextjs.org/og-alt.png',
                    width: 1800,
                    height: 1600,
                    alt: 'My custom alt',
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className + " relative"}>
        <AppHeader/>
        {children}
        <AppFooter/>
        </body>
        </html>
    )
}
