'use client';
import React, { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Moon, Sun, Code, Zap, Gift, Key, ExternalLink, MessageSquare, BookOpen, Rocket } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Link from 'next/link';
import Head from 'next/head';

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

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => (
  <SyntaxHighlighter language={language} style={tomorrow} className="rounded-md">
    {code}
  </SyntaxHighlighter>
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
    <>
      <Head>
        <title>zukijourney-api v4 Documentation - The Largest Multi-AI API on Discord!</title>
        <meta name="description" content="Explore zukijourney-api v4, the largest multi-AI API. Learn about our features, token system, code samples, and pricing." />
        <meta name="keywords" content="zukijourney, API, AI, documentation, OpenAI, Claude, Gemini, Mixtral, token system, code samples" />
        <link rel="canonical" href="https://docs.zukijourney.com/api" />
        <meta property="og:title" content="zukijourney-api v4 Documentation" />
        <meta property="og:description" content="The largest multi-AI API with comprehensive documentation, code samples, and pricing information." />
        <meta property="og:url" content="https://docs.zukijourney.com/api" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="zukijourney-api v4 Documentation" />
        <meta name="twitter:description" content="Explore the largest multi-AI API with zukijourney-api v4. Get started with our comprehensive documentation." />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "TechArticle",
              "headline": "zukijourney-api v4 Documentation",
              "description": "Comprehensive documentation for zukijourney-api, the largest multi-AI API.",
              "author": {
                "@type": "Organization",
                "name": "zukijourney"
              },
              "datePublished": "${new Date().toISOString()}",
              "dateModified": "${new Date().toISOString()}",
              "publisher": {
                "@type": "Organization",
                "name": "zukijourney",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://files.catbox.moe/amagy8.png"
                }
              }
            }
          `}
        </script>
      </Head>

      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <main className="container mx-auto p-4 space-y-8">
          <header className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                zukijourney-api v4
              </h1>
              <p className="text-xl text-muted-foreground">The largest multi-ai API of its kind!</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="text-sm">Free! (part.)</Badge>
              <Badge variant="secondary" className="text-sm">Open Source!</Badge>
              <Badge variant="secondary" className="text-sm">Number one! :&gt;</Badge>
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
              <CardTitle className="text-2xl">Welcome to zukijourney-api documentation!</CardTitle>
              <CardDescription>Your gateway to many AI, in one place!</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This guide provides a comprehensive documentation of all essential facets of the APIs operation. The overview is generally kept 100% up-to-date and should be regarded as the definitive source of information for the API.</p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <a href="https://cas.zukijourney.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  See why we are #1
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://docs.zukijourney.com/models" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-4 w-4" />
                  See all our models!
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://discord.gg/zukijourney" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Discord
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://docs.zukijourney.com/bots" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Bots Documentation
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
            title="Easy Integration"
            description="Use the OpenAI client for seamless API access, and have the power of AI in your hand!"
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-yellow-500" />}
            title="High Performance"
            description="Over 170+ models and 6 different endpoints supported! (In the OpenAI format only)."
          />
          <FeatureCard
            icon={<Gift className="h-8 w-8 text-green-500" />}
            title="Flexible Availability"
            description="Various tiers to suit your needs of usage & model availability!"
          />
          <FeatureCard
            icon={<Key className="h-8 w-8 text-blue-500" />}
            title="Secure Access"
            description="IP-locked keys for enhanced security & privacy, no more key leaks!"
          />
        </div>
        <Card id="quick-start">
          <CardHeader>
            <CardTitle className="text-3xl">Quick Start Guide</CardTitle>
            <CardDescription>Get started with zukijourney-api in minutes!</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>Join our Discord:</strong> Visit <a href="https://discord.gg/zukijourney" className="text-blue-500 hover:underline">discord.gg/zukijourney</a> to join our community. This is also where you will be able to generate your key!
              </li>
              <li>
                <strong>Get your API key:</strong> Use the `/key` command in the Discord server after passing verification to generate your unique API key.
              </li>
              <li>
                <strong>Understand the token system:</strong> The zukijourney-api utilizes a unique token system for its usage. Make sure to understand it completely!
              </li>
              <li>
                <strong>Use the key in your code:</strong> For example, here is how to use the key with python:
                <CodeBlock
                  language="python"
                  code={`# pip install -U openai
from openai import OpenAI

client = OpenAI(base_url="https://api.zukijourney.com/v1", api_key='your-api-key-here')

response = client.chat.completions.create(
    model="caramelldansen-1", # or gpt-4o-mini, claude-3-haiku, gemini-1.5-flash, etc...
    messages=[{"role": "user", "content": "Hello, AI!"}]
)

print(response.choices[0].message.content)`}
                />
              </li>
            </ol>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild>
              <Link href="/playground">
                Or try your key in the Playground!
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Tabs defaultValue="usage" className="space-y-4">
  <TabsList className="grid w-full grid-cols-4">
    <TabsTrigger value="usage">Key Information</TabsTrigger>
    <TabsTrigger value="quirks">API Specifics</TabsTrigger>
    <TabsTrigger value="code-samples">Code Examples</TabsTrigger>
    <TabsTrigger value="token-system">Pricing & Tokens</TabsTrigger>
  </TabsList>

  <TabsContent value="usage" className="space-y-4">
    <Card>
      <CardHeader>
        <CardTitle>Essential Information - Please Read Carefully!</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Core Features</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Open-Source:</strong> Our codebase is available at <a href="https://github.com/zukijourney/api-oss" className="text-blue-500 hover:underline">zukijourney-api</a></li>
              <li><strong>API Format:</strong> Only OpenAI format supported</li>
              <li><strong>Available Models:</strong> Check <a href="https://api.zukijourney.com/v1/models" className="text-blue-500 hover:underline">v1/models</a></li>
              <li><strong>Model Ownership:</strong> All models courtesy of their respective owners</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Global Rate Limits</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>/v1/ endpoints:</strong> ~12 requests/minute/key/IP</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  </TabsContent>

  <TabsContent value="quirks" className="space-y-4">
    <Card>
      <CardHeader>
        <CardTitle>ZukiJourney API: Important Considerations</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="request-handling">
            <AccordionTrigger>Request Processing</AccordionTrigger>
            <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li>
                  <strong>Understanding Downgrade Condition:</strong> <br></br>
                  Llama responding to you is part of our process. Zukijourney employs an internal algorithm to evaluate requests by their length and complexity.  <br></br>
                  Requests that are: <br></br>
                  1. Too short. <br></br>
                  2. Do not warrant the use of expensive models. <br></br>
                  Are handled by llama-3.1-8b-instruct.<br></br>
              </li>
              <li>
                  <strong>Important Points:</strong> <br></br>
                  • Subscribers and higher tiers are exempt from this process.<br></br>
                  • For downgraded requests, only the llama-3.1-8b-instruct coefficient cost applies.<br></br>
                  • This policy will remain unchanged.<br></br>
              </li>
          </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="api-key-management">
            <AccordionTrigger>API Key Management</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>IP-Locked Keys:</strong> One IP per key (except subscribers/enterprise)</li>
                <li><strong>Key Suspension:</strong> Leaving ZukiJourney server suspends key</li>
                <li><strong>Account Policy:</strong> One account per person</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="caramelldansen-1">
            <AccordionTrigger>caramelldansen-1 Model</AccordionTrigger>
            <AccordionContent>
              <p>In-house LLM, fine-tuned on Mixtral-8x22b. 0.25x cost for all users, -plus version for donator+ tiers</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  </TabsContent>

          <TabsContent value="code-samples" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Code Samples</CardTitle>
                <CardDescription>Explore our code samples and API tests below:</CardDescription>
              </CardHeader>
              <CardContent>
  <Tabs defaultValue="api-tests">
    <TabsList>
      <TabsTrigger value="api-tests">API Tests</TabsTrigger>
      <TabsTrigger value="python">Python</TabsTrigger>
      <TabsTrigger value="javascript">JavaScript</TabsTrigger>
    </TabsList>
    <TabsContent value="api-tests">
      <div className="space-y-4">
        <p>
          Our In-Production API Tests / Code Samples can be found in the zukijourney-tests repository. Explore it here: {" "}
          <a 
            href="https://github.com/zukijourney/api-tests" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            API-Tests
          </a>
        </p>
        <p>
          We utilize these code samples as part of our internal testing to verify whether certain parts of the API are operational.
        </p>
        <p>
          All of those samples are available in Python, using OpenAIs Python SDK 1.0.0+. However, you can convert them to any programming language using{" "}
          <a 
            href="https://www.bing.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            bing.com
          </a>s copilot. Simply instruct it to use the appropriate HTTP client, like Axios for JavaScript.
        </p>
      </div>
    </TabsContent>
    <TabsContent value="python">
      <CodeBlock
        language="python"
        code={`from openai import OpenAI

client = OpenAI(base_url="https://api.zukijourney.com/v1", api_key='zu-...')

response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What's the weather like today?"}
    ]
)

print(response.choices[0].message.content)`}
      />
    </TabsContent>
    <TabsContent value="javascript">
      <CodeBlock
        language="javascript"
        code={`import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://api.zukijourney.com/v1',
  apiKey: 'zu-...',
});

async function main() {
  const response = await client.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: "What's the weather like today?" }
    ],
  });

  console.log(response.choices[0].message.content);
}

main();`}
      />
    </TabsContent>
  </Tabs>
  <div className="mt-4">
    <h3 className="text-lg font-semibold">Community-Contributed Wrappers:</h3>
    <ul className="list-disc list-inside space-y-2 mt-2">
      <li><strong>JAVASCRIPT:</strong> <a href="https://github.com/Sabsterrexx/zukijs" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">zukijs</a></li>
      <li><strong>TYPESCRIPT:</strong> <a href="https://github.com/eL1fe/zukiTS" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">zukiTS</a></li>
      <li><strong>JAVA:</strong> <a href="https://github.com/Sabsterrexx/zukiJava" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">zukiJava</a></li>
      <li><strong>PYTHON:</strong> <a href="https://github.com/Launchers-1/zukiPy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">zukiPy</a></li>
      <li><strong>ASSEMBLY:</strong> <a href="https://github.com/programmer1o1/ZukiChatRequestAssembly" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">ZukiChatRequestAssembly</a></li>
      <li><strong>FORTRAN:</strong> <a href="https://github.com/programmer1o1/ZukiChatRequestFortran" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">ZukiChatRequestFortran</a></li>
    </ul>
  </div>
</CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="token-system" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Token System Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="daily-grant">
                    <AccordionTrigger>Daily Token Grant</AccordionTrigger>
                    <AccordionContent>
                      <p>Every 24 hours, you are eligible for a token grant if your current token balance is below ~15% of your daily token allowance.</p>
                      <p>You can check both of these values anytime on the Discord Server with /user lookup.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="token-equivalence">
                    <AccordionTrigger>Token Equivalence</AccordionTrigger>
                    <AccordionContent>
                      <p>1 OpenAI token ~ 1 ZukiJourney token</p>
                      <p>(Technically: 1 ZukiJourney token ~ 1 OpenAI token * the Cost Multiplier per Model)</p>
                      <p>Example: 200 (system prompt) + 20 (request) + 180 (response) = cost of 400 ZukiJourney tokens</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="cost-multipliers">
  <AccordionTrigger>Cost Multipliers by Model</AccordionTrigger>
  <AccordionContent>
    <p>Most up-to-date information can be found now found on <a href="https://docs.zukijourney.com/models" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">the Models page</a>!</p>
  </AccordionContent>
</AccordionItem>

<AccordionItem value="static-costs">
  <AccordionTrigger>Static Cost per Model/Endpoint</AccordionTrigger>
  <AccordionContent>
    <p>Most up-to-date information can be found now found on <a href="https://docs.zukijourney.com/models" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">the Models page</a>!</p>
  </AccordionContent>
</AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Daily Token Allowances (1 Token ~ 1 OpenAI Token)</CardTitle>
          </CardHeader>
          <CardContent>
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Role</TableHead>
      <TableHead>How to get?</TableHead>
      <TableHead>Tokens/Day</TableHead>
      <TableHead>Messages/Day</TableHead>
      <TableHead>Key Type</TableHead>
      <TableHead>Additional Benefits</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>@Member</TableCell>
      <TableCell>Join the server!</TableCell>
      <TableCell>42,069</TableCell>
      <TableCell>~200</TableCell>
      <TableCell>IP-Locked</TableCell>
      <TableCell>Access to all free models, basic bot access</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>@Donator/Booster</TableCell>
      <TableCell>$5 one-time or server boost</TableCell>
      <TableCell>300,000</TableCell>
      <TableCell>~600</TableCell>
      <TableCell>IP-Locked</TableCell>
      <TableCell>Premium models, 90% lower cooldowns</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>@Contributor</TableCell>
      <TableCell>Help improve community</TableCell>
      <TableCell>325,000</TableCell>
      <TableCell>~650</TableCell>
      <TableCell>IP-Locked</TableCell>
      <TableCell>All donator perks + staff benefits</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>@Subscriber</TableCell>
      <TableCell>$10/month</TableCell>
      <TableCell>750,000</TableCell>
      <TableCell>~1,200</TableCell>
      <TableCell>IP-Free</TableCell>
      <TableCell>Early access models, no downgrades</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>@OnlyFans Tier</TableCell>
      <TableCell>$25/month</TableCell>
      <TableCell>3,000,000</TableCell>
      <TableCell>~4,000</TableCell>
      <TableCell>IP-Free</TableCell>
      <TableCell>All subscriber perks + 4x tokens</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>@Enterprise</TableCell>
      <TableCell>$50/month</TableCell>
      <TableCell>7,000,000</TableCell>
      <TableCell>~10,000</TableCell>
      <TableCell>IP-Free</TableCell>
      <TableCell>Custom arrangements, priority support</TableCell>
    </TableRow>
  </TableBody>
</Table>
          </CardContent>
        </Card>
        <Card>
  <CardHeader>
    <CardTitle>Donate for Higher Tiers</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="mb-4">Support zukijourney-api and gain access to higher tiers with more benefits!</p>
    <ul className="list-disc list-inside space-y-2">
      <li>Donate on <a href="https://ko-fi.com/zukixa" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">KoFi</a> with various payment methods.</li>
      <li>For crypto payments, join the <a href="https://discord.gg/zukijourney" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">zukijourney Discord server</a> and coordinate via the <a href="https://discord.com/channels/1090022628946886726/1099424338287014029/1099426357219438612" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">tickets channel</a>.</li>
      <li>Any donation receives additional benefits from the zuki.gm bot. Check details <a href="https://discord.com/channels/1090022628946886726/1147595903537000539/1147600594316578926" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">on the Discord Server</a>.</li>
      <li>Crypto payments: Any Coinbase-supported cryptocurrency is accepted. Contact executives via the #tickets channel for details.</li>
      <li>Enterprise-level donors can request specific arrangements before donating by opening a ticket in the same channel.</li>
    </ul>
    <div className="mt-4">
      <Button variant="outline" asChild>
        <a href="https://ko-fi.com/zukixa" target="_blank" rel="noopener noreferrer">
          <Gift className="mr-2 h-4 w-4" />
          Donate on KoFi
        </a>
      </Button>
    </div>
  </CardContent>
</Card>

<footer className="text-center text-sm text-muted-foreground">
            <p>Thank you to @Leander, @voidii, @perl, @sobhansajjadii, @Lukinhas, @Launchers, and @sabsterrexx for being the best people from the AI sphere.</p>
            <p>Y&apos;all were the inspiration, and my continued motivation, for all of this ❤️</p>
            <p className="font-semibold mt-2">~zukixa</p>
            <span className="text-xs text-gray-500 mt-2 block">
              Everything may be fabricated and therefore not real, the team is unaware of any illegal activities, documentation will not be taken as admission of guilt.
            </span>
          </footer>
        </main>
      </div>
    </>
  );
}