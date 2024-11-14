import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Plus, Info } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// [Previous imports remain the same]
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Command {
  name: string;
  usage: string;
  description: string;
  details: string[];
  category: string;
}

const commandData: Command[] = [
  // Overview
  {
    name: "privacy",
    usage: "/privacy",
    description: "View the bot's privacy policy",
    details: ["It is a link towards the zuki.gm privacy policy, and by extent all of zukijourney enterprises."],
    category: "overview"
  },
  {
    name: "settings",
    usage: "/settings [Task] [Text (Optional)]",
    description: "Adjust various bot settings for your server",
    details: [
      "1. Manage bot settings",
      "2. Manage the harshness of the /gm command (easy/normal/hard)",
      "3. Customize @zuki.gm system prompt",
      "4. Modify the /gm command output format",
      "5/6/7. View/Manage/Delete server-side context (The additional context of the /gm command)",
      "Note: Requires administrator permissions for most actions"
    ],
    category: "overview"
  },
  {
    name: "help",
    usage: "/help",
    description: "Get comprehensive information about the bot",
    details: ["It links back to here!"],
    category: "overview"
  },
  {
    name: "stats",
    usage: "/stats",
    description: "View detailed bot usage statistics",
    details: [
      "Shows the number of servers and unique users",
      "Displays top 20 most used commands",
      "Provides insights into the bot's performance and popularity"
    ],
    category: "overview"
  },
  {
    name: "report",
    usage: "/report [Message]",
    description: "Report issues or provide feedback to bot owners",
    details: [
      "Allows users to directly communicate with bot developers",
      "Helps improve the bot by reporting bugs or suggesting features",
      "Confirms successful submission of the report"
    ],
    category: "overview"
  },
  // AI GameMaster
  {
    name: "addreviser",
    usage: "/addreviser [Role]",
    description: "Add roles that can revise zuki.gm outputs",
    details: [
      "Requires administrator permissions",
      "Can only be used in a server, not in DMs",
      "Adds the specified role as a reviser for zuki.gm"
    ],
    category: "ai-gamemaster"
  },
  {
    name: "revise",
    usage: "/revise [Message Link] [New Content]",
    description: "Edit a previous zuki.gm message",
    details: [
      "Requires the user to have a reviser role",
      "Uses the message link to identify the bot's message to edit",
      "Applies changes based on the new content provided"
    ],
    category: "ai-gamemaster"
  },
  {
    name: "war",
    usage: "/war [Side 1] [Side 2 (Optional)] [Previous Results (Optional)]",
    description: "Experimental War GM alternative",
    details: [
      "Simulates war scenarios between two sides",
      "Can consider previous results for context",
      "Provides detailed outcomes of the simulated conflict"
    ],
    category: "ai-gamemaster"
  },
  {
    name: "un",
    usage: "/un [Option] [Text]",
    description: "United Nations RP helper",
    details: [
      "Options: generate, vote, propose, statement",
      "Can generate UNSC memberships, simulate votes, create resolutions, or draft statements",
      "Provides realistic UN-style responses and simulations"
    ],
    category: "ai-gamemaster"
  },
  {
    name: "realism",
    usage: "/realism [Engine] [Post]",
    description: "Have the AI gauge the realism of something",
    details: [
      "Engine options: GPT-3.5, MixtralUncensored, PerplexityAI",
      "Analyzes the realism of a given scenario or statement",
      "Provides a detailed assessment of the likelihood and feasibility"
    ],
    category: "ai-gamemaster"
  },
  {
    name: "gm",
    usage: "/gm [Engine] [Task] [Post] [WIWTK] [Previous (Optional)] [Context (Optional)] [Visual Context (Optional)]",
    description: "GM a post of your choosing",
    details: [
      "Multiple engine options available (e.g., GPT-3.5, GPT-4, Gemini Pro 1.5)",
      "Various task types (e.g., Political, Economic, Military, War simulations)",
      "Can consider previous results and additional context",
      "Supports visual context for enhanced simulations"
    ],
    category: "ai-gamemaster"
  },
  {
    name: "approve",
    usage: "/approve [GM Output Link] [Post in Channel] [Ping User] [Revision Instructions (Optional)]",
    description: "Approve and post GM outputs with optional revisions",
    details: [
      "Combines /revise functionality with posting to a specified channel",
      "Can optionally revise the GM output before posting",
      "Pings a specified user when posting the approved output",
      "Requires permission to post in the target channel"
    ],
    category: "ai-gamemaster"
  },
  // AI Video and Image Generation
  {
    name: "sd",
    usage: "/sd [Engine] [Style] [Prompt]",
    description: "A powerful image generator",
    details: [
      "Multiple engine options, some exclusive to donators",
      "16 different art styles to choose from",
      "Generates images based on the provided prompt"
    ],
    category: "ai-video-image"
  },
  {
    name: "sd-clip",
    usage: "/sd-clip [Engine] [Style] [Prompt] [Negative Prompt (Optional)]",
    description: "Additional generative tools for music and video",
    details: [
      "Engines: MusicGen, AnimateDiffusion, ZeroscopeXL",
      "Can generate music or video based on prompts",
      "Supports negative prompts for more control"
    ],
    category: "ai-video-image"
  },
  {
    name: "sdx-v2",
    usage: "/sdx-v2 [Engine] [Style] [Prompt] [Negative Prompt (Optional)] [Detail Boost (Optional)]",
    description: "Advanced image generation (Donator-only)",
    details: [
      "12 high-quality engine options",
      "Supports negative prompts and detail boost",
      "Includes a rating system for generated images"
    ],
    category: "ai-video-image"
  },
  {
    name: "sdx-v1",
    usage: "/sdx-v1 [Engine] [Style] [Prompt] [Negative Prompt (Optional)] [Detail Boost (Optional)]",
    description: "Free version of advanced image generation",
    details: [
      "11 engine options with various specialties",
      "Similar features to sdx-v2, but with different models",
      "Available to all users"
    ],
    category: "ai-video-image"
  },
  // AI-powered writing & related features
  {
    name: "check",
    usage: "/check [Message]",
    description: "Detect if a text was AI-written",
    details: [
      "Provides a detailed AI Content Detection Report",
      "Shows percentage of AI-generated content and word count",
      "Highlights potentially AI-generated sentences"
    ],
    category: "ai-writing"
  },
  {
    name: "translate",
    usage: "/translate [Content]",
    description: "Translate text back to English",
    details: [
      "Uses an AI-powered translation service",
      "Supports various input languages"
    ],
    category: "ai-writing"
  },
  {
    name: "write",
    usage: "/write [Task] [Engine] [Text] [Jailbreak] [MatchStyle (Optional)] [Context (Optional)] [PreviousResults (Optional)]",
    description: "AI Writing Assistant",
    details: [
      "Multiple task types: custom writing, RP posts, events, research, war moves, etc.",
      "Various AI engines to choose from",
      "Options for ethical considerations and style matching",
      "Can consider previous results and additional context"
    ],
    category: "ai-writing"
  },
  {
    name: "quran",
    usage: "/quran [Topic]",
    description: "Find a Quran verse for any need",
    details: [
      "Matches the given topic to the closest existing Quran verse",
      "Always returns an authentic verse, never a fabricated one"
    ],
    category: "ai-writing"
  },
  {
    name: "bible",
    usage: "/bible [Topic]",
    description: "Find a Bible verse for any need",
    details: [
      "Matches the given topic to the closest existing Bible verse",
      "Always returns an authentic verse, never a fabricated one"
    ],
    category: "ai-writing"
  },
  {
    name: "ask",
    usage: "/ask [Bot] [Question]",
    description: "Talk to any AI of your choice",
    details: [
      "Multiple AI options: InternetGPT, MixtralUncensored, OpenAI, Claude-3.5, Research, PerplexityAI",
      "Provides answers based on the chosen AI's capabilities",
      "Research option provides relevant paper references"
    ],
    category: "ai-writing"
  },
  {
    name: "tldr",
    usage: "/tldr [Message_Text]",
    description: "Summarizer command",
    details: [
      "Supports Discord and Google links, as well as plain text",
      "Provides a concise summary of the input text",
      "Useful for quickly understanding long content"
    ],
    category: "ai-writing"
  },
  // General features
  {
    name: "interpret",
    usage: "/interpret [Image]",
    description: "Image interpretation AI",
    details: [
      "Analyzes uploaded images and provides a description",
      "Supports various image file types",
      "Uses advanced AI model for interpretation"
    ],
    category: "general"
  },
  {
    name: "call",
    usage: "/call [User] [Type]",
    description: "Create a call-like thread with another user or AI",
    details: [
      "Options for private or public threads",
      "Requires appropriate permissions to create threads",
      "Cannot be used inside existing threads or DMs"
    ],
    category: "general"
  },
  {
    name: "hangup",
    usage: "/hangup",
    description: "End a call thread",
    details: [
      "Can only be used by the person who initiated the call",
      "Removes all users from the thread"
    ],
    category: "general"
  },
  {
    name: "calc",
    usage: "/calc [CalcType] [Val1] [Val2] [Val3 (Optional)]",
    description: "Calculation command for various economic and demographic metrics",
    details: [
      "GDP per Capita calculation",
      "Population Growth projection",
      "Provides formatted results for easy reading"
    ],
    category: "general"
  },
  {
    name: "growth",
    usage: "/growth [StartPop] [Average] [Years]",
    description: "Population Growth Calculator",
    details: [
      "Calculates future population based on starting population, growth rate, and years",
      "Provides formatted population projection",
      "Uses the same engine as the `/calc` command for consistency"
    ],
    category: "general"
  },
  // AI-Powered NPCs
  {
    name: "npc-update",
    usage: "/npc-update [Name of the NPC] [What to update] [New Data]",
    description: "Modify NPC Data",
    details: [
      "Update options: description, goals, interval, context, picture_url, channel, type",
      "Choose to append or override existing information",
      "Some updates (like picture and channel) have specific requirements"
    ],
    category: "npc"
  },
  {
    name: "npc-autopost",
    usage: "/npc-autopost [Name of the NPC] [Post Interval Hours] [Channel]",
    description: "Set Up Automatic Posting",
    details: [
      "Creates a webhook for the NPC in the specified channel",
      "Sets up periodic autoposting based on the given interval",
      "Requires manage_webhook permissions in the target channel"
    ],
    category: "npc"
  },
  {
    name: "npc-talk",
    usage: "/npc-talk [Name of the NPC] [Your Message]",
    description: "Interact directly with an NPC!",
    details: [
      "Generates a response based on the NPC's data and your message",
      "Updates the NPC's memory and goals after each interaction"
    ],
    category: "npc"
  },
  {
    name: "npc-create",
    usage: "/npc-create [Name] [Description] [Type] [Context] [Engine] [Goals]",
    description: "Craft a new NPC with rich backstory and purpose!",
    details: [
      "Choose from different NPC types: Company, Country, Character, AiAgent, EroticCharacter",
      "Select an AI engine: GPT-4, Gemini Pro 1.5, or MixtralUncensored",
      "Specify goals and context for more accurate roleplay"
    ],
    category: "npc"
  },
  {
    name: "npc-delete",
    usage: "/npc-delete [Name of the NPC]",
    description: "Remove an NPC from existence.",
    details: [
      "Permanently deletes the specified NPC from the server"
    ],
    category: "npc"
  },
  {
    name: "npc-list",
    usage: "/npc-list",
    description: "Review the NPCs that have been configured in your server.",
    details: [
      "Displays all NPCs created for the current server",
      "Shows each NPC's name and descriptions (excluding webhook information)"
    ],
    category: "npc"
  },
  {
    name: "rag_info",
    usage: "/rag_info",
    description: "Get information about the RAG system",
    details: [
      "Displays the current status of the RAG system (enabled/disabled)",
      "Shows the number of stored roleplay actions and GM results",
      "Provides an explanation of the RAG system and its benefits",
      "Available to all users"
    ],
    category: "rag"
  },
  {
    name: "rag_toggle",
    usage: "/rag_toggle",
    description: "Enable or disable the RAG system for this server (Admin only)",
    details: [
      "Toggles the RAG system on or off for the server",
      "Only available to users with administrator permissions",
      "Displays the new status of the RAG system after toggling"
    ],
    category: "rag"
  },
  {
    name: "rag_wipe",
    usage: "/rag_wipe",
    description: "Wipe the RAG memory for this server (Admin only)",
    details: [
      "Permanently deletes all stored RAG data for the server",
      "Only available to users with administrator permissions",
      "Should be used with caution as it cannot be undone",
      "Only works if the RAG system is enabled for the server"
    ],
    category: "rag"
  },
  {
    name: "rag_query",
    usage: "/rag_query [query]",
    description: "Ask questions about the server context",
    details: [
      "Allows users to query the stored RAG data",
      "Provides context-aware responses based on past roleplay actions and GM results",
      "Only works if the RAG system is enabled for the server",
      "Uses AI to synthesize relevant information and answer the query"
    ],
    category: "rag"
  }
]
const tabOverviews = {
    overview: "These commands provide essential information and controls for the zuki.gm bot. They allow you to view the privacy policy, adjust server settings, access help, view statistics, and report issues or provide feedback.",
    "ai-gamemaster": "The AI GameMaster commands are the core of zuki.gm's roleplay functionality. They allow you to simulate complex scenarios, manage revisions, conduct war simulations, and interact with AI-driven United Nations simulations.",
    "ai-video-image": "These commands harness the power of AI for image and video generation. From basic image creation to advanced, donator-only features, these tools can bring your roleplay scenarios to life visually.",
    "ai-writing": "The AI writing commands offer a range of text-based utilities. They can help with content creation, translation, text analysis, and even provide relevant quotes from religious texts.",
    general: "General commands cover a variety of useful utilities, from image interpretation to economic calculations. They also include features for creating call-like threads and managing server interactions.",
    npc: "The NPC (Non-Player Character) system allows you to create, manage, and interact with AI-driven characters in your roleplay scenarios. These commands provide full control over NPC creation, updating, and interaction.",
    rag: "The RAG (Retrieval-Augmented Generation) system is a beta feature designed to enhance your roleplay experience. It stores and retrieves relevant information from past interactions, allowing the AI to provide more context-aware responses.",
    all: "This tab displays all available commands for zuki.gm. Use the search bar above to find specific commands or browse through the full list to discover all the features available."
  }


function CommandCard({ command }: { command: Command }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{command.name}</span>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </CardTitle>
      </CardHeader>
      {isExpanded && (
        <CardContent>
          <p className="font-bold mb-2">Usage:</p>
          <p className="mb-4">{command.usage}</p>
          <p className="font-bold mb-2">Description:</p>
          <p className="mb-4">{command.description}</p>
          <p className="font-bold mb-2">Details:</p>
          <ul className="list-disc pl-5 mb-4">
            {command.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  )
}

function FAQSection() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="improving-responses">
        <AccordionTrigger>Improving Bot Responses</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <h4 className="font-semibold">Key Elements for Better Responses:</h4>
            <ul className="list-disc pl-6">
              <li>Use Context Fields in /gm:
                <ul className="list-circle pl-6">
                  <li>Fill out context</li>
                  <li>Include visual_context</li>
                  <li>Provide previous information</li>
                </ul>
              </li>
              <li>Server Setup:
                <ul className="list-circle pl-6">
                  <li>Use /settings task:Add/Override Server-Context</li>
                  <li>Configure /rag_info system</li>
                </ul>
              </li>
              <li>Fine-tuning:
                <ul className="list-circle pl-6">
                  <li>Use /approve for manual adjustments</li>
                  <li>Provide detailed scenarios</li>
                </ul>
              </li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="context-system">
        <AccordionTrigger>Context System</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <h4 className="font-semibold">Essential Setup:</h4>
            <ul className="list-disc pl-6">
              <li>Use /settings task:Add/Override Server-Context</li>
              <li>Configure /rag_info system</li>
            </ul>
            <p>For Each Command:</p>
            <ul className="list-disc pl-6">
              <li>Provide detailed context</li>
              <li>Include visual descriptions</li>
              <li>Reference previous interactions</li>
            </ul>
            <p className="italic">The more context provided, the better the responses!</p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="difficulty-settings">
        <AccordionTrigger>Difficulty Settings</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <h4 className="font-semibold">Changing Difficulty:</h4>
            <ul className="list-disc pl-6">
              <li>Use /settings task:Harshness</li>
              <li>Default setting is easy</li>
              <li>Higher difficulty = harsher responses</li>
            </ul>
            <p className="italic">Note: If still not harsh enough after maximum setting, please provide feedback to staff!</p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="combat-improvement">
        <AccordionTrigger>Combat Responses</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <h4 className="font-semibold">For Better Military/Combat Responses, Include:</h4>
            <ul className="list-disc pl-6">
              <li>Equipment sheets</li>
              <li>Current battle plans</li>
              <li>War territory status</li>
              <li>Tactical maps</li>
              <li>Unit compositions</li>
            </ul>
            <p className="font-semibold mt-4">Remember:</p>
            <ul className="list-disc pl-6">
              <li>More detailed context = better responses</li>
              <li>Use /approve for tactical adjustments</li>
              <li>Keep information organized and clear</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function ZukiGMCommands() {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [activeTab, setActiveTab] = useState<string>("overview")

  const filteredCommands = commandData.filter(command =>
    (command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    command.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (activeTab === "all" || command.category === activeTab)
  )

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          zuki.gm Commands
          <div className="space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=1055209868899913788", "_blank")}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add to Server
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open("https://discord.com/application-directory/1055209868899913788", "_blank")}
            >
              <Info className="h-4 w-4 mr-2" />
              View in Directory
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-4">
            zuki.gm is an advanced AI-powered GameMaster bot for Discord, designed primarily for Nation Roleplay Servers. 
            It offers a wide range of features including AI-driven simulations, image generation, writing assistance, NPC management, and a new RAG system for enhanced context awareness.
          </p>
          <Input
            type="text"
            placeholder="Search commands..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            className="mb-4"
          />
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="ai-gamemaster">AI GameMaster</TabsTrigger>
            <TabsTrigger value="ai-video-image">AI Video/Image</TabsTrigger>
            <TabsTrigger value="ai-writing">AI Writing</TabsTrigger>
            <TabsTrigger value="npc">AI NPCs</TabsTrigger>
            <TabsTrigger value="rag">AI RAG System</TabsTrigger>
            <TabsTrigger value="general">Other</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="all">All Commands</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab}>
            {activeTab === 'faq' ? (
              <FAQSection />
            ) : (
              <>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">About this Category</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {tabOverviews[activeTab as keyof typeof tabOverviews]}
                  </p>
                </div>
                {filteredCommands.map(command => (
                  <CommandCard key={command.name} command={command} />
                ))}
              </>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default ZukiGMCommands