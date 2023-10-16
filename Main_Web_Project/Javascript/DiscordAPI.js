const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token, channelId } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });
function start(){
    client.once(Events.ClientReady, () => {
        console.log(`Ready! Logged in as ${client.user.tag}`);

        const guild = client.guilds.cache.first(); // Assuming the channel is in the first guild the bot is in

        if (guild) {
            const channel = guild.channels.cache.get('697642680292868112');

            if (channel) {
                if (channel.type === 2) {  // Check if the channel is a voice channel
                    const channelInfo = {
                        id: channel.id,
                        name: channel.name,
                        type: channel.type,
                        guildId: guild.id,
                        guildName: guild.name,
                        guildIcon: guild.iconURL(),
                        members: channel.members.map(member => ({
                            id: member.id,
                            username: member.user.username,
                            discriminator: member.user.discriminator,
                            avatar: member.user.avatarURL(),
                            nickname: member.nickname
                        }))
                    };

                    // console.log('Users in Channel:', channelInfo.members);
                    var channelInfoJson = JSON.stringify(channelInfo, null, 2);
                    console.log('Users in Channel JSON:', channelInfoJson);
                    document.querySelector(".jtest").innerHTML = channelInfoJson.members[0].username;                    
                } else {
                    console.error('The channel is not a voice channel.');
                }
            } else {
                console.error('Channel not found.');
            }
        } else {
            console.error('Guild not found.');
        }
    });
}

start();

client.login(token);
