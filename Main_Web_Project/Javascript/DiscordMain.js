function aa() {
    fetch('http://localhost:3594/discordAPI')
        .then(response => response.json())
        .then(json => {
            document.querySelector(".DiscordServerIMG").src = json.guildIcon;
            for (i = 0; i < json.members.length; i++){

                const newTotalDiv = document.createElement('div');
                document.querySelector(".members").appendChild(newTotalDiv)
                // .members 곳에 div 라는 자식 태그를 만들어줌
                const newImg = document.createElement('img');
                newTotalDiv.appendChild(newImg)
                newImg.src = json.members[i].avatar;
                // 그 자식태그 안에 img 라는 태그를 넣어줌
                const newDiv = document.createElement('div');
                newTotalDiv.appendChild(newDiv);
                newDiv.append(json.members[i].username);
                // 그 자식태그 안에 div(디스코드 닉네임)을 넣어줌

            }
        });
}

aa();
