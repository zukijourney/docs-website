import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Plus, Info } from "lucide-react"

interface Command {
  name: string;
  usage: string;
  description: string;
  example: string;
}
interface CommandCardProps {
    command: Command;
  }
const commandData: Command[] = [
  {
    name: "time-help",
    usage: "/time-help",
    description: "Displays help information for time-related commands.",
    example: "/time-help",
  },
  {
    name: "time-set",
    usage: "/time-set [speed] [notify_interval] [day] [month] [year] [channel] [role] [voice_channel]",
    description: "Sets up your server's roleplay time system. Requires administrator permissions.",
    example: "/time-set 60 24 1 1 2023 #time-channel @time-role #time-voice",
  },
  {
    name: "time-info",
    usage: "/time-info",
    description: "Displays information about your server's current time settings.",
    example: "/time-info",
  },
  {
    name: "time-do",
    usage: "/time-do [operation]",
    description: "Manage your server's RP time. Operations include: Get Current Time, Toggle Time Progression, Delete Time Data.",
    example: "/time-do Get Current Time",
  },
  {
    name: "time-until",
    usage: "/time-until [timestr]",
    description: "Calculate the real-life time until a specified fictional time. Use the format DD/MM/YYYY for the timestr parameter.",
    example: "/time-until 25/12/2023",
  },
  {
    name: "time-del",
    usage: "/time-del [object]",
    description: "Remove time-related configurations from the server, including Time Notification Channel, Time Notification Ping Role, and Voice Channel Update Channel.",
    example: "/time-del Time Notification Channel",
  },
  {
    name: "time-set-channel",
    usage: "/time-set-channel [channel]",
    description: "Set the channel where time update notifications will be posted.",
    example: "/time-set-channel #time-updates",
  },
  {
    name: "time-set-voice",
    usage: "/time-set-voice [voice_channel]",
    description: "Set the voice channel where the current time will be displayed.",
    example: "/time-set-voice #current-time",
  },
]

function CommandCard({ command }: CommandCardProps) {
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
            <p className="font-bold mb-2">Example:</p>
            <p className="bg-gray-100 p-2 rounded">{command.example}</p>
          </CardContent>
        )}
      </Card>
    )
  }
  
  export function ZukiTimeCommands() {
    const [searchTerm, setSearchTerm] = useState<string>("")
  
    const filteredCommands = commandData.filter(command =>
      command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      command.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            zuki.time Commands
            <div className="space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=1101035453710348339", "_blank")}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add to Server
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open("https://discord.com/application-directory/1101035453710348339", "_blank")}
              >
                <Info className="h-4 w-4 mr-2" />
                View in Directory
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">
              zuki.time is a powerful Discord bot for managing roleplay time in your server. 
              Add it to your server to get started, or view more details in the Discord Application Directory.
            </p>
          </div>
          <Input
            type="text"
            placeholder="Search commands..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            className="mb-4"
          />
          {filteredCommands.map(command => (
            <CommandCard key={command.name} command={command} />
          ))}
        </CardContent>
      </Card>
    )
  }