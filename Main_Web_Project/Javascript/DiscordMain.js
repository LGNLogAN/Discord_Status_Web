function aa() {
    fetch('http://localhost:3594/discordAPI')
        .then(response => response.json())
        .then(json => {
            document.querySelector(".DiscordServerIMG").src = json.guildIcon;
            for (i = 0; i < json.members.length; i++){
                document.querySelector(".first").innerHTML = json.members[i].username;
            }
            

        });
}

aa();
