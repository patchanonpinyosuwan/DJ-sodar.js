 // ให้สร้างไฟล์ auth.json แล้วใส่ token //
 const Discord = require('discord.js');
 const auth = require('./auth.json');
 const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
 const random_num = () => {
         return Math.floor(Math.random() * 10);
     }
     //คำสั่งพร้อมตอบ//
 client.on('message', (msg) => {
     if (msg.content === '!hello') {
         msg.reply('สวัสดีค่ะ');
     }

     if (msg.content === '!bye') {
         msg.reply('บาย');
     }

     if (msg.content === 'หิว') {
         msg.reply('หาไรกินสิ');
     }

     if (msg.content === 'รักนะดีเจ') {
         msg.reply('รักเหมือนกัน^_^');
     }

     if (msg.content === 'หิวไหมดีเจ') {
         msg.reply('ไม่อ่ะ OwO');
     }

     if (msg.content === 'ดีเจ') {
         msg.reply('ว่าไงวัยรุ่น');
     }

 });
 //สุ้มประโยค// //รอ 10 วินาที แล้วค่อยส่ง (ประมวลผลไม่ทัน)//
 client.on('messageCreate', msg => {
     let foods = ['ข้าวผัด', 'ไก่ทอด', 'ขาหมู', 'ผัดไทย', 'ไข่เจียว', 'ขนม', 'ข้าวต้ม', 'กุ้งดองน้ำปลา', 'ผัดกระเพรา', 'ไม่ต้องกิน']
     let boy = ['หล่อมาก', 'หล่อ', 'ไม่หล่อ', 'ไม่รู้สิ']
     let girl = ['สวยมาก', 'สวย', 'ไม่สวย', 'ไม่รู้สิ']
     if (msg.content == 'หิวจัง') {
         msg.reply(foods[random_num()]);
     }

     if (msg.content == 'เราหล่อไหม') {
         msg.reply(boy[random_num()]);
     }

     if (msg.content == 'เราสวยไหม') {
         msg.reply(girl[random_num()]);
     }

 });
 //ใช้งาน token//
 client.login(auth.token);