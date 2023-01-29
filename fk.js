const { create } = require('@open-wa/wa-automate');
const express = require("express")
function start(client) {
  client.onGlobalParticipantsChanged(async (event) => {
    const host = (await client.getHostNumber()) + '@c.us';
    if (event.action === 'add' && event.who !== host){
      client.sendTextWithMentions(
        event.chat,
        `✨Hello, Welcome to the group @${event.who.replace(
          '@c.us ✨',
          ''
        )} \n\n✨A Group Dedicated for CSE-V Students \n\n _Made By Satyam Mayengbam_ \n\n In this group, you can find all the materials given upto-date. \n\n  /(_in case you messed up, since you are a human_  LOL!)/  \n\n *note* :✨ _if you are using gb or fm or any other unofficial whatsapp, type 'materials' in the chat to show the menu_ ✨ \n\n✨ *Group rules* ✨  \n\n1) Respect everyone here in this group \n\n2) Sharing memes is prohibited \n\n3) Don't send unnecessary messages! \n\n✨ *Feel free to ask and discuss lessons related to topics taught on class* ✨ \n _final words: if you want to show this message again, type 'menu'_ `
      );
   client.sendListMessage(
          event.chat,
          [
            {
              title: 'Context Subjects',
              rows: [
                {
                  title: 'BEE',
                  description: 'Ms. Ch Laxmi',
                  rowId: 'row',
                },
                {
                  title: 'PPS',
                  description: 'Ms. Vishalakshi',
                  rowId: 'row',
                },
                {
                  title: 'MC',
                  description: 'Dr. V. Shyam Prassad',
                  rowId: 'row',
                },
                {
                  title: 'EC',
                  description: 'Dr. Venkata Ramana',
                  rowId: 'row',
                },
                {
                  title: 'ECSE Lab',
                  description: 'Ms. Padma Rajani',
                  rowId: 'row',
                },
                {
                  title: 'EC Lab',
                  description: 'Ms. P. Shrenika',
                  rowId: 'row',
                },
                {
                  title: 'PPS Lab',
                  description: 'Ms. Vishalakshi',
                  rowId: 'row',
                },
                {
                  title: 'BEE Lab',
                  description: 'Ms. K. Ratna Kishori',
                  rowId: 'row',
                },
                {
                  title: 'CAEG',
                  description: 'Mr P. Shekar Reddy/Mr. P.Sathish',
                  rowId: 'row',
                },
              ],
            },
          ],
          'Materials',
          'CSE-V',
          'CONTEXT'
        );
  client.sendPtt(event.chat, 'https://github.com/Sirloya/sirloyav/raw/main/instructions_sirloya.mp3');

  }
  });




  client.onMessage(async (message) => {
   const command = (message.body || "").toLowerCase();
 
   if (command.includes("menu")){ 
               await client.reply(message.from, ` ✨A Group Dedicated for CSE-V Students \n\n _Made By Satyam Mayengbam_ \n\n In this group, you can find all the materials given upto-date. \n\n  /(_in case you messed up, since you are a human_  LOL!)/  \n\n *note* :✨ _if you are using gb or fm or any other unofficial whatsapp, type 'materials' in the chat to show the menu_ ✨ \n\n✨ *Group rules* ✨  \n\n1) Respect everyone here in this group \n\n2) Sharing memes is prohibited \n\n3) Don't send unnecessary messages! \n\n✨ *Feel free to ask and discuss lessons related to topics taught on class* ✨ \n _final words: if you want to show this message again, type 'menu'_ `, message.id);
               client.sendListMessage(message.from,
                [
                  {
                    title: 'Context Subjects',
                    rows: [
                      {
                        title: 'BEE',
                        description: 'Ms. Ch Laxmi',
                        rowId: 'row',
                      },
                      {
                        title: 'PPS',
                        description: 'Ms. Vishalakshi',
                        rowId: 'row',
                      },
                      {
                        title: 'MC',
                        description: 'Dr. V. Shyam Prassad',
                        rowId: 'row',
                      },
                      {
                        title: 'EC',
                        description: 'Dr. Venkata Ramana',
                        rowId: 'row',
                      },
                      {
                        title: 'ECSE-Lab',
                        description: 'Ms. Padma Rajani',
                        rowId: 'row',
                      },
                      {
                        title: 'EC-Lab',
                        description: 'Ms. P. Shrenika',
                        rowId: 'row',
                      },
                      {
                        title: 'PPS-Lab',
                        description: 'Ms. Vishalakshi',
                        rowId: 'row',
                      },
                      {
                        title: 'BEE-Lab',
                        description: 'Ms. K. Ratna Kishori',
                        rowId: 'row',
                      },
                      {
                        title: 'CAEG',
                        description: 'Mr P. Shekar Reddy/Mr. P.Sathish',
                        rowId: 'row',
                      },
                    ],
                  },
                ],
                'Materials',
                'CSE-V',
                'CONTEXT'
              );


// BEE section 
if (command.includes("bee")){ 
  await client.reply(message.from, `✨A Group Dedicated for CSE-V Students \n\n _Made By Satyam Mayengbam_ \n\n In this group, you can find all the materials given upto-date. \n\n  /(_in case you messed up, since you are a human_  LOL!)/  \n\n *note* :✨ _if you are using gb or fm or any other unofficial whatsapp, type 'materials' in the chat to show the menu_ ✨ \n\n✨ *Group rules* ✨  \n\n1) Respect everyone here in this group \n\n2) Sharing memes is prohibited \n\n3) Don't send unnecessary messages! \n\n✨ *Feel free to ask and discuss lessons related to topics taught on class* ✨ \n _final words: if you want to show this message again, type 'menu'_ `, message.id);
  client.sendListMessage(message.from,
   [
     {
       title: 'Context BEE Ms. Ch Laxmi',
       rows: [
         {
           title: 'b-importants',
           description: 'Ms. Ch Laxmi',
           rowId: 'row',
         },
         {
           title: 'b-class-notes',
           description: 'Ms. Vishalakshi',
           rowId: 'row',
         },
         {
           title: 'b-assignments',
           description: 'Dr. V. Shyam Prassad',
           rowId: 'row',
         },
       ],
     },
   ],
   'Materials',
   'CSE-V',
   'CONTEXT'
 );

// bee imps

if (command.includes("b-importants")){ 
  await client.reply(message.from, ` ✨A Group Dedicated for CSE-V Students \n\n _Made By Satyam Mayengbam_ \n\n In this group, you can find all the materials given upto-date. \n\n  /(_in case you messed up, since you are a human_  LOL!)/  \n\n *note* :✨ _if you are using gb or fm or any other unofficial whatsapp, type 'materials' in the chat to show the menu_ ✨ \n\n✨ *Group rules* ✨  \n\n1) Respect everyone here in this group \n\n2) Sharing memes is prohibited \n\n3) Don't send unnecessary messages! \n\n✨ *Feel free to ask and discuss lessons related to topics taught on class* ✨ \n _final words: if you want to show this message again, type 'menu'_ `, message.id);
  client.sendListMessage(message.from,
   [
     {
       title: 'BEE (Ms. Ch Laxmi) Importants',
       rows: [
         {
           title: 'chapter1',
           description: 'Ms. Ch Laxmi',
           rowId: 'row',
         },
         {
           title: 'chapter2',
           description: 'Ms. Vishalakshi',
           rowId: 'row',
         },
         {
           title: 'chapter3',
           description: 'Dr. V. Shyam Prassad',
           rowId: 'row',
         },
         {
           title: 'chapter4',
           description: 'Dr. Venkata Ramana',
           rowId: 'row',
         },
         {
           title: 'chapter5',
           description: 'Ms. Padma Rajani',
           rowId: 'row',
         },
       ],
     },
   ],
   'BEE-IMPORTANTS',
   'CSE-V',
   'CONTEXT'
 );

//Bee class

if (command.includes("b-class-notes")){ 
  await client.reply(message.from, ` ✨A Group Dedicated for CSE-V Students \n\n _Made By Satyam Mayengbam_ \n\n In this group, you can find all the materials given upto-date. \n\n  /(_in case you messed up, since you are a human_  LOL!)/  \n\n *note* :✨ _if you are using gb or fm or any other unofficial whatsapp, type 'materials' in the chat to show the menu_ ✨ \n\n✨ *Group rules* ✨  \n\n1) Respect everyone here in this group \n\n2) Sharing memes is prohibited \n\n3) Don't send unnecessary messages! \n\n✨ *Feel free to ask and discuss lessons related to topics taught on class* ✨ \n _final words: if you want to show this message again, type 'menu'_ `, message.id);
  client.sendListMessage(message.from,
   [
     {
       title: 'BEE Ms. Ch Laxmi Class-notes',
       rows: [
         {
           title: 'chapter1',
           description: 'Ms. Ch Laxmi',
           rowId: 'row',
         },
         {
           title: 'chapter2',
           description: 'Ms. Vishalakshi',
           rowId: 'row',
         },
         {
           title: 'chapter3',
           description: 'Dr. V. Shyam Prassad',
           rowId: 'row',
         },
         {
           title: 'chapter4',
           description: 'Dr. Venkata Ramana',
           rowId: 'row',
         },
         {
           title: 'chapter5',
           description: 'Ms. Padma Rajani',
           rowId: 'row',
         },
       ],
     },
   ],
   'BEE-CLASS',
   'CSE-V',
   'CONTEXT'
 );

//bee assignments

if (command.includes("b-assignments")){ 
  await client.reply(message.from, ` ✨A Group Dedicated for CSE-V Students \n\n _Made By Satyam Mayengbam_ \n\n In this group, you can find all the materials given upto-date. \n\n  /(_in case you messed up, since you are a human_  LOL!)/  \n\n *note* :✨ _if you are using gb or fm or any other unofficial whatsapp, type 'materials' in the chat to show the menu_ ✨ \n\n✨ *Group rules* ✨  \n\n1) Respect everyone here in this group \n\n2) Sharing memes is prohibited \n\n3) Don't send unnecessary messages! \n\n✨ *Feel free to ask and discuss lessons related to topics taught on class* ✨ \n _final words: if you want to show this message again, type 'menu'_ `, message.id);
  client.sendListMessage(message.from,
   [
     {
       title: 'BEE Ms. Ch Laxmi Importants',
       rows: [
         {
           title: 'chapter1',
           description: 'Ms. Ch Laxmi',
           rowId: 'row',
         },
         {
           title: 'chapter2',
           description: 'Ms. Vishalakshi',
           rowId: 'row',
         },
         {
           title: 'chapter3',
           description: 'Dr. V. Shyam Prassad',
           rowId: 'row',
         },
         {
           title: 'chapter4',
           description: 'Dr. Venkata Ramana',
           rowId: 'row',
         },
         {
           title: 'chapter5',
           description: 'Ms. Padma Rajani',
           rowId: 'row',
         },
       ],
     },
   ],
   'BEE-IMPORTANTS',
   'CSE-V',
   'CONTEXT'
 );



        
      
     client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/instructions_sirloya.mp3');

      }  
      
      if (command.includes("materials")){
        await client.reply(message.from, '  Hello \n\n Dear unofficail whatsapp user ! \n\n Type exactly chapter2 to get *chapter 2* notes \n\n Type exactly chapter3 to get *chapter 3* notes \n\n and so on ', message.id);
      }
       
        
     if (command=="bee"){
   client.reply(message.from, "This chapter has been removed and the syllabus for 2021 has not been updated yet!", message.id);
   }
    
     if (command.includes("chapter2")){
   client.sendFile(message.from, 'https://drive.google.com/uc?id=1X3GNKpA281sByjQpgDwWEw4ebi2-ITmV&export=download' , 'chapter2.pdf', 'check this pdf', null, true)
              client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
               client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/sirloya.mp3');
   }  
   
   
       
     if (command.includes("chapter3")){
   client.sendFile(message.from, 'https://drive.google.com/uc?id=1h3BNg0-t7G8kx9X6HqhsMrm2a6RoeXA6&export=download' , 'chapter3.pdf', 'check this pdf', null, true)
              client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
               client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/sirloya.mp3');
   }
   
   
   



    

    try{
    let {body, caption} = message
    const content = caption || body || ''
    const command = content.toLowerCase().split(' ')[0] || ''
    console.log(`Body: ${body}\n\nCaption: ${caption}\n\nContent: ${content}\n\nCommand: ${command}`)
}catch(error){
    console.log(`Error:\n${error}`)
}



});

}

create({
  licenseKey: "EE0DE51F-F8EB4F44-83289BC8-9B4A53C9",
}).then((client) => start(client));

const app = express();

app.get('/', (req, res) => res.status(200).send('xd'));
app.listen(process.env.PORT || 80);
