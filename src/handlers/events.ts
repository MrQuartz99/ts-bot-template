import { Client, Collection } from "discord.js";
import { readdirSync } from "fs";
const handleEvents = (client: Client , events: Collection<string, any>) => {
    const eventsFiles = readdirSync(`./src/events`).filter((file) => file.endsWith(`.ts`));
    for (const file of eventsFiles) {
        const event = require(`../events/${file.replace('.ts', '')}`);
        client.on(event.name, event.run.bind(null, client));
        events.set(event.name, event);
    }
    console.log(`Loaded ${eventsFiles.length} events`);

   
};
export default handleEvents;