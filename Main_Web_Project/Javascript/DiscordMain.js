function aa() {
    const voiceChannel = ['697642680292868112','714629856691748895','842404940416679966','842405026265301012'];
    fetch('http://localhost:3594/discordAPI')
        .then(response => response.json())
        .then(json => {
        document.querySelector(".DiscordServerIMG").src = json[0].guildIcon;
        for (i = 0; i < json[0].members.length; i++){
            const newTotalDiv = document.createElement('div');
            document.querySelector(".voiceChannel_1_members").appendChild(newTotalDiv)
            // .members 곳에 div 라는 자식 태그를 만들어줌
            const newImg = document.createElement('img');
            newTotalDiv.appendChild(newImg)
            newImg.src = json[0].members[i].avatar;
            // 그 자식태그 안에 img 라는 태그를 넣어줌
            const newDiv = document.createElement('div');
            newTotalDiv.appendChild(newDiv);
            newDiv.append(json[0].members[i].username);
            // 그 자식태그 안에 div(디스코드 닉네임)을 넣어줌
        }

        for (i = 0; i < json[1].members.length; i++){
            const newTotalDiv = document.createElement('div');
            document.querySelector(".voiceChannel_2_members").appendChild(newTotalDiv)
            // .members 곳에 div 라는 자식 태그를 만들어줌
            const newImg = document.createElement('img');
            newTotalDiv.appendChild(newImg)
            newImg.src = json[1].members[i].avatar;
            // 그 자식태그 안에 img 라는 태그를 넣어줌
            const newDiv = document.createElement('div');
            newTotalDiv.appendChild(newDiv);
            newDiv.append(json[1].members[i].username);
            // 그 자식태그 안에 div(디스코드 닉네임)을 넣어줌
        }

        for (i = 0; i < json[2].members.length; i++){
            const newTotalDiv = document.createElement('div');
            document.querySelector(".voiceChannel_3_members").appendChild(newTotalDiv)
            // .members 곳에 div 라는 자식 태그를 만들어줌
            const newImg = document.createElement('img');
            newTotalDiv.appendChild(newImg)
            newImg.src = json[2].members[i].avatar;
            // 그 자식태그 안에 img 라는 태그를 넣어줌
            const newDiv = document.createElement('div');
            newTotalDiv.appendChild(newDiv);
            newDiv.append(json[2].members[i].username);
            // 그 자식태그 안에 div(디스코드 닉네임)을 넣어줌
        }

        for (i = 0; i < json[3].members.length; i++){
            const newTotalDiv = document.createElement('div');
            document.querySelector(".voiceChannel_4_members").appendChild(newTotalDiv)
            // .members 곳에 div 라는 자식 태그를 만들어줌
            const newImg = document.createElement('img');
            newTotalDiv.appendChild(newImg)
            newImg.src = json[3].members[i].avatar;
            // 그 자식태그 안에 img 라는 태그를 넣어줌
            const newDiv = document.createElement('div');
            newTotalDiv.appendChild(newDiv);
            newDiv.append(json[3].members[i].username);
            // 그 자식태그 안에 div(디스코드 닉네임)을 넣어줌
        }
        

    }); 
}
aa();
