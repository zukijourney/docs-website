import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Bot, Cpu, FileText, PlayCircle } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
      <div className="container mx-auto p-4 space-y-8">
        <header className="text-center py-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-4">
            zukijourney-documentation
          </h1>
          <p className="text-xl text-muted-foreground">
            Your gateway to all that we do!
          </p>
        </header>

        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome to zukijourney-docs!</CardTitle>
            <CardDescription>Choose your documentation or explore our features.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button asChild className="h-24 text-lg" variant="outline">
              <Link href="/ai">
                <Cpu className="mr-2 h-6 w-6" />
                AI API Documentation
              </Link>
            </Button>
            <Button asChild className="h-24 text-lg" variant="outline">
              <Link href="/bots">
                <Bot className="mr-2 h-6 w-6" />
                Discord Bots Documentation
              </Link>
            </Button>
            <Button asChild className="h-24 text-lg" variant="outline">
              <Link href="/legalese">
                <FileText className="mr-2 h-6 w-6" />
                Privacy Policy & Terms of Service
              </Link>
            </Button>
            <Button asChild className="h-24 text-lg" variant="outline">
              <Link href="/playground">
                <PlayCircle className="mr-2 h-6 w-6" />
                AI Playground
              </Link>
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="ghost" asChild>
              <a href="https://github.com/zukijourney/" target="_blank" rel="noopener noreferrer">
                <BookOpen className="mr-2 h-4 w-4" />
                Explore Our GitHub Organization!
              </a>
            </Button>
          </CardFooter>
        </Card>

        <footer className="text-center text-sm text-muted-foreground mt-8">
          <p>
            zukijourney - empowering developers with cutting-edge AI and bot solutions
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} zukijourney. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}