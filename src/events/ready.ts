import { Client , Events} from "discord.js";
import config from "../config";
export = {
    name: Events.ClientReady,
    run: async (client: Client) => {
        
        console.log(`Logged in as ${client.user?.tag}`)
        client.user?.setActivity({
            name: config.Activity,
            type: config.Type
        })

    
    }
}