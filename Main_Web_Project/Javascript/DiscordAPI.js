const { Client, Events, GatewayIntentBits } = require('discord.js');
// const { token, channelId } = require(''); json 형식에 토큰이랑 채널ID 동시에 받기 가능
const { token } = require('../JSON_File/config.json');
const fs = require('fs');
const filePath = './JSON_File/channelInfo';

function start(){
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });
    client.once(Events.ClientReady, () => {
        console.log(`Ready! Logged in as ${client.user.tag}`);

        const guild = client.guilds.cache.first(); 
        if (guild) {
            const channel = guild.channels.cache.get('697642680292868112');

            if (channel) {
                if (channel.type === 2) { 
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
                    fs.writeFileSync(filePath, channelInfoJson); 
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

    client.login(token);
}

start();
setInterval(start,5000);

