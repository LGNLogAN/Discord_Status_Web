import discord
 
TOKEN = 'MTE2MzM2MjY2NTYxMjE4OTY5Ng.Gm6Yur.E-7nFvUbLk4VfkgMn0Y8GMF6vIpwl6muNpWO00'
CHANNEL_ID = '697642680292868112'
 
 
class MyClient(discord.Client):
    async def on_ready(self):
        channel = self.get_channel(int(CHANNEL_ID))
        await channel.guild.id('Hello World')
 
 
intents = discord.Intents.default()
intents.message_content = True
client = MyClient(intents=intents)
client.run(TOKEN)