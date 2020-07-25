const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});
client.on('message', (message) => {
  if(message.content === '형주') {
    message.reply('형주가 기분나쁠거라 생각 안해봤어?');
  }
});
client.on('message', (message) => {
  if(message.content === 'ㅅㅂ') {
    message.reply('욕하지마');
  }
});
client.on('message', (message) => {
  if(message.content === 'ㅎㅈ') {
    message.reply('왜 ㅎㅈ라고 해??');
  }
});
client.on('message', (message) => {
  if(message.content === '박형주') {
    message.reply('형주한테 왜그래...;;');
  }
});
client.on('message', (message) => {
    if(message.content === '형준데?') {
      message.reply('뭐가 형주라는거니..;');
    }
});
client.on('message', (message) => {
  if(message.content === '롤하자') {
    message.reply('지금 시험기간이야');
  }
});
client.on('message', (message) => {
  if(message.content === '게임하자') {
    message.reply('지금 시험기간이야');
  }
});
client.on('message', (message) => {
  if(message.content === '겜하자') {
    message.reply(':unamused:');
  }
});
client.on('message', (message) => {
  if(message.content === '시발') {
    message.reply('욕하지마라 했다???');
  }
  else if(message.content === 'tlqkf') {
    message.reply('착한말을 사용해주세요..');
  }
  else if(message.content === 'lqkf') {
    message.reply('착한말을 사용해주세요..');
  }
else if(message.content === '안녕')
message.reply('안녕하세요 :D')
});
if(message.content == 'embed') {
  let img = 'https://cdn.discordapp.com/attachments/519451701502148622/736451267429269544/6fa2cd85c16e2e94.PNGsize=256';
  let embed = new Discord.RichEmbed()
    .setTitle('타이틀')
    .setURL('http://www.naver.com')
    .setAuthor('노란색치킨무', img, 'http://www.naver.com')
  
}

client.login(token);
