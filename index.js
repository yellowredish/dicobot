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
  else if(message.content === 'Tlqkf') {
    message.reply('착한말을 사용해주세요..');
  }
else if(message.content === '안녕') {
message.reply('안녕하세요 :D')
}
else if(message.content === '미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고 나루토 노래부터 명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이 웅장해진다..') {
message.reply('ㄹㅇㅋㅋ') 
}
else if(message.content === '심준석') {
  message.reply('최고존엄자..?')
  }
  else if(message.content === '히오스하자') {
    message.reply('그망겜 왜함;;;')
    }
    else if(message.content === 'ㅎㅇ') {
      message.reply('안녕하세요 :D')
      }
      else if(message.content === 'ㅋㅋㄹㅃㅃ') {
        message.reply('쿠쿠루삥뽕')
        }     
          else if(message.content === '삔나') {
          message.reply('삔나?')
          } 
          else if(message.content === '17준석') {
            message.reply('어둠에서 살아가는 정의의 말살자 흐르는 눈물은 마치 보석같은 대지와 하늘을 떨리게 하는 최고존엄자이자 조물주 심준석')
            }
            else if(message.content === '민서') {
              message.reply('병신새퀴')
              } 
              else if(message.content === '천예강') {
                message.reply('섹시준석')
                } 
                else if(message.content === '소윤수') {
                  message.reply('메이플 프로선수')
                  } 
                  else if(message.content === '준석') {
                    message.reply('심준석')
                    } 
                    else if(message.content === '박준석') {
                      message.reply('심준석')
                      } 
});
client.on('message', (message) => {
  if(message.content === '불좀꺼줄래?') {
    message.reply('내 램좀보게..');
  }
});
client.login(token);
