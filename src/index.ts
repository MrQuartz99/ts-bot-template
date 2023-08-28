import { Client, GatewayIntentBits  , Collection } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config({path: `./src/.env`})


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
})

const interactions = new Collection<string, any>()
const events = new Collection<string, any>()

// Handlers
import handleEvents from './handlers/events'
import handleInteractions from './handlers/interactions'

handleEvents(client, events)
handleInteractions(client, interactions)


process.on('unhandledRejection', (error) => console.log(error))
process.on('uncaughtException', (error) => console.log(error))

client.login(process.env.DiscordBotToken)



export {
    client,
    events,
    interactions
}