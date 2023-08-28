import {SlashCommandBuilder, ChatInputCommandInteraction} from "discord.js"

const data = new SlashCommandBuilder()
    .setName(`ping`)
    .setDescription(`Replies with Pong!`)
    .addStringOption((option) => option.setName(`input`).setDescription(`The input to echo back`).setRequired(false))


const slash = async (interaction: ChatInputCommandInteraction ) : Promise<boolean> => {
    await interaction.reply({
        content: `Pong! ${interaction.options.getString(`input`) || ``}`,
    })
    return true
}

export = {
    data,
    slash,
}