'use client';
import React, { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun, Code, Zap, Gift, Key, ExternalLink, MessageSquare, BookOpen, Rocket } from 'lucide-react';
import Link from 'next/link';
import { ZukiTimeCommands } from '@/components/ZukiTimeCommands';
import ZukiGMCommands from '@/components/ZukiGMCommands';
// Add these new imports at the top
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-card text-card-foreground rounded-lg p-6 shadow-lg"
  >
    <div className="flex items-center space-x-4">
      {icon}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </motion.div>
);

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => <label htmlFor={htmlFor}>{children}</label>;

export default function Component() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="container mx-auto p-4 space-y-8">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              zukijourney-bots
            </h1>
            <p className="text-xl text-muted-foreground">zuki.gm and zuki.time - the two big bots of zukijourney!</p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="text-sm">Free!</Badge>
            <Badge variant="secondary" className="text-sm">AI-Powered!</Badge>
            <Badge variant="secondary" className="text-sm">Powering over 3000 Servers!</Badge>
            <Badge variant="secondary" className="text-sm">Supporting over 120,000+ Users!</Badge>
            <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
            <Label htmlFor="dark-mode">{darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}</Label>
          </div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
            <CardHeader>
              <CardTitle className="text-2xl">Welcome to zukijourney-bots documentation!</CardTitle>
              <CardDescription>Your guide to all Discord Bots by zukijourney!</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This guide provides comprehensive documentation for zuki.gm and zuki.time, two powerful AI-driven Discord bots designed to enhance your server experience.</p>
              <p>There are also a few open-source bots available for you to play with, hosted and seen on GitHub, not documented here.</p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <a href="https://discord.gg/zukijourney" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Discord
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/zukixa/zuki-helpers" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  See the Open-Source Bots! 
                </a>
              </Button>
              <Button variant="default" asChild>
                <Link href="#quick-start">
                  <Rocket className="mr-2 h-4 w-4" />
                  Quick Start Guide
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Code className="h-8 w-8 text-purple-500" />}
            title="AI-Powered Superpowers"
            description="zuki.gm offers an AI solution to the Game Master Problem for all your role-playing experience!"
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-yellow-500" />}
            title="Time Management"
            description="zuki.time provides advanced time management features for role-playing servers."
          />
          <FeatureCard
            icon={<Gift className="h-8 w-8 text-green-500" />}
            title="Established Solution"
            description="Both bots have a proven track record of success in the game industry."
          />
          <FeatureCard
            icon={<Key className="h-8 w-8 text-blue-500" />}
            title="Easy Integration"
            description="Simple setup process to get the bots running on your server quickly."
          />
        </div>

        <Card id="quick-start">
          <CardHeader>
            <CardTitle className="text-3xl">Quick Start Guide</CardTitle>
            <CardDescription>Get started with zuki.gm and zuki.time in minutes!</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>Join our Discord:</strong> Visit <a href="https://discord.gg/zukijourney" className="text-blue-500 hover:underline">discord.gg/zukijourney</a> to join our community & always have advice and support at hand.
              </li>
              <li>
                <strong>Invite the bot:</strong> Use the provided invite links here to add zuki.gm, zuki.time, or any of the open source bots to your server.
              </li>
              <li>
                <strong>Set up the bot:</strong> Utilize this documentation, the Open-Source Bots Github, or each bot&apos;s respective /help command to get started!
              </li>
            </ol>
          </CardContent>
        </Card>

        <Tabs defaultValue="zuki-gm" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="zuki-gm">zuki.gm</TabsTrigger>
            <TabsTrigger value="zuki-time">zuki.time</TabsTrigger>
          </TabsList>

          <TabsContent value="zuki-gm" className="space-y-4">
        <ZukiGMCommands />
      </TabsContent>
        <TabsContent value="zuki-time" className="space-y-6">
        <ZukiTimeCommands />
        </TabsContent>
        
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Additional Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <a href="https://discord.gg/zukijourney" className="text-blue-500 hover:underline">Join our Discord server</a> for support and updates.
              </li>
              <li>
                Use the `/report` command to notify the zukijourney team of any issues!
              </li>
            </ul>
          </CardContent>
        </Card>

        <footer className="text-center text-sm text-muted-foreground">
          <p>Made by @zukixa.</p>
          <p className="font-semibold mt-2">Thank you for using the zukijourney-bots!</p>
        </footer>
      </div>
    </div>
  );
}