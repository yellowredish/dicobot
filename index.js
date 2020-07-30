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
  else if(message.content === '응ㅅㄱ') {
    message.reply('응삔나');
  }
  else if(message.content === 'ㅃㄴ') {
    message.reply('응삔나');
  }
  else if(message.content === '미안') {
    message.reply('미안할필요없어');
  }
  else if(message.content === '미안.') {
    message.reply('미안할필요없다고');
  }
  else if(message.content === '미안..') {
    message.reply('네잘못이 아니야');
  }
   else if(message.content === 'ㄹㅇㅋㅋ') {
    message.reply('ㄹㅇ 반박불가다 ㅋ');
  }
  else if(message.content === '아니?') {
    message.reply('뭐가아니라는거야..');
  }
  else if(message.content === '조이스') {
    message.reply('우욱');
  }
  else if(message.content === '아잉') {
    message.reply('아잉아잉');
  }
  else if(message.content === '너인성문제있어?') {
    message.reply('없슴다!!!!');
  }
  else if(message.content === '어이..') {
    message.reply('왜그러나 자네..');
  }
});
client.on('message', (message) => {
  if(message.content === 'ㅅㅂ') {
    message.reply('욕하지마');
  }
  else if(message.content === '잘가') {
    message.reply('안녕히가세요:D');
  }
  else if(message.content === 'ㅂㅂ') {
    message.reply('안녕히가세요:D');
  }
  else if(message.content === 'ㅂㅇ') {
    message.reply('안녕히가세요:D');
  }
  else if(message.content === '바이') {
    message.reply('안녕히가세요:D');
  }
  else if(message.content === '큰1돈을 벌거야') {
    message.reply("큰1돈을 벌어서 더큰1돈을 벌꺼야")
  }
  else if(message.content === '김도현') {
    message.reply("모든게임 골딱이")
  }
  else if(message.content === 'ㄴㅇㄱ') {
    message.reply("상상도 못한 정체")
  }
  else if(message.content === '아연') {
    message.reply("그의 이름을 불러선 안돼,,")
  }
  else if(message.content === '아디다스') {
    message.reply("아디오스")
  }
  
});
client.on('message', (message) => {
  if(message.content === 'ㅎㅈ') {
    message.reply('왜 ㅎㅈ라고 해??');
  }
  else if(message.content === '섹스') {
    message.reply("너 박제")
  }
  else if(message.content === 'sex') {
    message.reply("너이자식 박제")
  }
  else if(message.content === 'cex') {
    message.reply("이새기 박제")
  }
  else if(message.content === ':regional_indicator_s::regional_indicator_e::regional_indicator_x:') {
    message.reply("<<<<< 박제 ㅅㄱ")
  }
  else if(message.content === ':regional_indicator_s::regional_indicator_e:') {
    message.reply("어..?")
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
    message.reply('시험끝났다!!!!!');
  }
});
client.on('message', (message) => {
  if(message.content === '게임하자') {
    message.reply('시험끝났다!!!!!');
  }
});
client.on('message', (message) => {
  if(message.content === '겜하자') {
    message.reply('시험끝났다!!!!!');
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
  message.reply('어둠에서 살아가는 정의의 말살자 흐르는 눈물은 마치 보석같은 대지와 하늘을 떨리게 하는 최고존엄자이자 조물주 심준석')
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
  else if(message.content === '인천사는뚱이') {
    message.reply('살아있다');
  }
  else if(message.content === '히히') {
    message.reply('헤헤헤')
    } 
    else if(message.content === '너') {
      message.reply('뭐')
      }
      else if(message.content === 'ㅇㅇㄴㅇ') {
        message.reply('미안해...')
        }     
        else if(message.content === 'ㅎㅎ') {
          message.reply('웃어?')
          } 
          else if(message.content === '개꿀') {
            message.reply('개꿀 아닌데,,')
            } 
            else if(message.content === 'ㅅㄱ') {
            message.reply('응 ㅅㄱ')
             }
             else if(message.content === '?') {
              message.reply('??')
              } 
              else if(message.content === '??') {
                message.reply('?????')
                } 
                else if(message.content === 'nope') {
                  message.reply('아니야')
                  } 



});


client.login(token);
