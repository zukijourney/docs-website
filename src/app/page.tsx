import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Bot, Cpu, FileText, PlayCircle } from 'lucide-react'

export default function Component() {
  return (
    <>
      <Head>
        <title>zukijourney Documentation - Your Gateway to AI and Bot Solutions</title>
        <meta name="description" content="zukijourney documentation - Your gateway to AI API, Discord Bots, Privacy Policy, Terms of Service, and AI Playground. Explore our comprehensive resources for developers." />
        <meta name="keywords" content="zukijourney, AI API, Discord Bots, documentation, privacy policy, terms of service, AI playground, developer resources" />
        <link rel="canonical" href="https://docs.zukijourney.com" />
        <meta property="og:title" content="zukijourney Documentation" />
        <meta property="og:description" content="Your gateway to AI API, Discord Bots, Privacy Policy, Terms of Service, and AI Playground." />
        <meta property="og:url" content="https://docs.zukijourney.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="zukijourney Documentation" />
        <meta name="twitter:description" content="Your gateway to AI API, Discord Bots, Privacy Policy, Terms of Service, and AI Playground." />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "zukijourney Documentation",
              "description": "Your gateway to AI API, Discord Bots, Privacy Policy, Terms of Service, and AI Playground.",
              "url": "https://docs.zukijourney.com",
            }
          `}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
        <main className="container mx-auto p-4 space-y-8">
          <header className="text-center py-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-4">
              zukijourney-documentation
            </h1>
            <p className="text-xl text-muted-foreground">
              Your gateway to all that we do!
            </p>
          </header>

          <section className="w-full max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">Welcome to zukijourney-docs!</h2>
                <CardDescription>Choose your documentation or explore our features.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div>
                  <Button asChild className="h-24 text-lg w-full" variant="outline">
                    <Link href="/ai">
                      <Cpu className="mr-2 h-6 w-6" />
                      AI API Documentation
                    </Link>
                  </Button>
                  <p className="mt-2 text-sm text-muted-foreground">Explore our comprehensive AI API documentation for developers.</p>
                </div>
                <div>
                  <Button asChild className="h-24 text-lg w-full" variant="outline">
                    <Link href="/bots">
                      <Bot className="mr-2 h-6 w-6" />
                      Discord Bots Documentation
                    </Link>
                  </Button>
                  <p className="mt-2 text-sm text-muted-foreground">Learn how to integrate and use our powerful Discord bots.</p>
                </div>
                <div>
                  <Button asChild className="h-24 text-lg w-full" variant="outline">
                    <Link href="/legalese">
                      <FileText className="mr-2 h-6 w-6" />
                      Privacy Policy & Terms of Service
                    </Link>
                  </Button>
                  <p className="mt-2 text-sm text-muted-foreground">Read our privacy policy and terms of service.</p>
                </div>
                <div>
                  <Button asChild className="h-24 text-lg w-full" variant="outline">
                    <Link href="/playground">
                      <PlayCircle className="mr-2 h-6 w-6" />
                      AI Playground
                    </Link>
                  </Button>
                  <p className="mt-2 text-sm text-muted-foreground">Test and experiment with our AI models in an interactive environment.</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="ghost" asChild>
                  <a href="https://github.com/zukijourney/" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explore Our GitHub Organization
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </section>

          <footer className="text-center text-sm text-muted-foreground mt-8">
            <p>
              zukijourney - empowering developers with cutting-edge AI and bot solutions
            </p>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} zukijourney. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </>
  )
}