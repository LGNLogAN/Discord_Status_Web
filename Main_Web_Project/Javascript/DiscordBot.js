const { Client, Events, GatewayIntentBits } = require('discord.js');
// const { token, channelId } = require(''); json 형식에 토큰이랑 채널ID 동시에 받기 가능
const { token } = require('../JSON_File/config.json');
const fs = require('fs');
const filePath = './Main_Web_Project/JSON_File/channelInfo.json';
const FirstVoiceChannel = '697642680292868112';
const SecondVoiceChannel = '714629856691748895';
const ThirdVoiceChannel = '842404940416679966';
const FourthVoiceChannel = '842405026265301012';

function start(){ 
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });
    client.once(Events.ClientReady, () => {
        const date = new Date();

        console.log(`프로그램 실행이 완료되었습니다.\n활성화 봇 : ${client.user.tag}\n실행 시각 : ` , date);
        const guild = client.guilds.cache.first();
        if (guild) {
            const channel = guild.channels.cache.get(FirstVoiceChannel);
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
                    var channelInfoJson = JSON.stringify(channelInfo, null, 2);
                    console.log('Discord Information :\n', channelInfoJson);
                    fs.writeFileSync(filePath, channelInfoJson); 
                } else {
                    console.error('이 채널은 음성채팅방이 아닙니다');
                }
            } else {
                console.error('채널을 찾을 수 없습니다.');
            }
        } else {
            console.error('서버를 찾을 수 없습니다.');
        }
    });
    client.login(token);
}

start();
setInterval(start,5000);

