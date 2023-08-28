import { Client , Collection, REST , Routes } from 'discord.js'
import { readdirSync } from 'fs'
const handleInteractions = (client: Client , interactions: Collection<string, any>) => {
    const interactionFolders = readdirSync(`./src/interactions`)
    const commands: object[] = []
    for (const folder of interactionFolders) {
        const interactionFiles = readdirSync(`./src/interactions/${folder}`).filter((file) => file.endsWith(`.ts`))
        for (const file of interactionFiles) {
            const interaction = require(`../interactions/${folder}/${file.replace('.ts', '')}`)
            commands.push(interaction.data.toJSON())
            interactions.set(interaction.data.name, interaction)
        }
    }
    client.once('ready', () => {
        const rest = new REST({version: '10'}).setToken(process.env.DiscordBotToken || '')

        rest.put(Routes.applicationCommands(client.user?.id || ''), {body: commands}).then(() => console.log(`Successfully registered application commands.`))
        
    })

}
export default handleInteractions