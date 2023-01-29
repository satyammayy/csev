const { create } = require('@open-wa/wa-automate');
const express = require("express")
function start(client) {

  //Participants add

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
      client.sendListMessage(event.chat,
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

  }
  });

  //Participant deleted a message

client.onMessageDeleted(async (message) => {
client.sendText(message.from, `Humans make mistakes! \n\n So you don't need to delete it ! HEHE`);
});

  //On Message Recieved from Participants

  client.onMessage(async (message) => {
   const command = (message.body || "").toLowerCase();
   if (command.includes("menu")){ 
    client.sendPtt(message.from, 'https://github.com/thegodofeverything/bot_community_edition/raw/main/resources/instructions-entry.mp3');             
await client.reply(message.from, ` \n\n✨A Group Dedicated for CSE-V Students \n\n _Made By Satyam Mayengbam_ \n\n In this group, you can find all the materials given upto-date. \n\n  /(_in case you messed up, since you are a human_  LOL!)/  \n\n *note* :✨ _if you are using gb or fm or any other unofficial whatsapp, type 'materials' in the chat to show the menu_ ✨ \n\n✨ *Group rules* ✨  \n\n1) Respect everyone here in this group \n\n2) Sharing memes is prohibited \n\n3) Don't send unnecessary messages! \n\n✨ *Feel free to ask and discuss lessons related to topics taught on class* ✨ \n _final words: if you want to show this message again, type 'menu'_  `, message.id);
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
}  
        
//BEE

if (command.includes("bee")){ 
await client.sendButtons(
  message.from,
  'CSE-V BOT',
  [
    { id: 'assignments', text: 'b-assignments' },
    { id: 'class-notes', text: 'b-notes' },
  ],
  'Category-BEE',
  'Managed by Satyam'
);    
}

if (command.includes("b-notes")){
  client.reply(message.from, ` \n\n✨Class Notes Section Reached\n\n`, message.id);
  client.sendListMessage(message.from,
    [
      {
        title: 'BEE (Ms. Ch Laxmi) Class notes',
        rows: [
          {
            title: 'chapter1-bn',
            description: 'DC-Circuits',
            rowId: 'row',
          },
          {
            title: 'chapter2-bn',
            description: 'AC-Circuits',
            rowId: 'row',
          },
          {
            title: 'chapter3-bn',
            description: 'Transformer',
            rowId: 'row',
          },
          {
            title: 'chapter4-bn',
            description: 'Eletrical Machines',
            rowId: 'row',
          },
          {
            title: 'chapter5-bn',
            description: 'Electrical Installations',
            rowId: 'row',
          },
        ],
      },
    ],
    'BEE-NOTES',
    'CSE-V',
    'CONTEXT'
  );
  }

//https://drive.google.com/file/d/1DYpiBUG7tNQrpVxzq0xsM8s0U5OlKKFk/view?usp=share_link

if (command.includes("chapter1-bn")){
client.sendFile(message.from, 'https://drive.google.com/uc?id=1DYpiBUG7tNQrpVxzq0xsM8s0U5OlKKFk&export=download', 'chapter1-bee A.pdf', 'Read Well', null, true)
client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
}  
  
//https://drive.google.com/file/d/1YF6wyA9iOjs2fPCUeR203snyACD8ev4b/view?usp=share_link A
//https://drive.google.com/file/d/1uH1yaQbEY4Ofau0ABAj57g6hKLndE1Ej/view?usp=share_link B
//https://drive.google.com/file/d/1h_YZpROGlPJmjMkxzUN4EEWux-Juj_2Y/view?usp=share_link C
if (command.includes("chapter2-bn")){
  client.sendFile(message.from, 'https://drive.google.com/uc?id=1YF6wyA9iOjs2fPCUeR203snyACD8ev4b&export=download', 'chapter2-bee A.pdf', 'Read Well', null, true)
  client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
  client.sendFile(message.from, 'https://drive.google.com/uc?id=1uH1yaQbEY4Ofau0ABAj57g6hKLndE1Ej&export=download', 'chapter2-bee B.pdf', 'Read Well', null, true)
  client.sendFile(message.from, 'https://drive.google.com/uc?id=1h_YZpROGlPJmjMkxzUN4EEWux-Juj_2Y&export=download', 'chapter2-bee C.pdf', 'Read Well', null, true)

  }
//https://drive.google.com/file/d/1SFLAaiL6vldfLX8q0SGPGfoAHWwQIGvJ/view?usp=share_link  A
//https://drive.google.com/file/d/1XENiOKRAtJj7Xm8Mt9-Ifa5bW_0DF_rv/view?usp=share_link  B

  
if (command.includes("chapter3-bn")){
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1SFLAaiL6vldfLX8q0SGPGfoAHWwQIGvJ&export=download', 'chapter3-bee A.pdf', 'Read Well', null, true)
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1XENiOKRAtJj7Xm8Mt9-Ifa5bW_0DF_rv&export=download', 'chapter3-bee B.pdf', 'Read Well', null, true)
    client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
    }
//https://drive.google.com/file/d/17pvBXLceHNU4aokm1Ule7KwRssFf-J6a/view?usp=share_link A
//https://drive.google.com/file/d/1-aD_zgpE2BFplWWQzebL0sKANy6NIIFt/view?usp=share_link B
//    
if (command.includes("chapter4-bn")){
      client.sendFile(message.from, 'https://drive.google.com/uc?id=17pvBXLceHNU4aokm1Ule7KwRssFf-J6a&export=download', 'chapter4-bee A.pdf', 'Read Well', null, true)
      client.sendFile(message.from, 'https://drive.google.com/uc?id=1-aD_zgpE2BFplWWQzebL0sKANy6NIIFt&export=download', 'chapter4-bee B', 'Read Well', null, true)
      client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
      }

//https://drive.google.com/file/d/1S6FKR0hcRi2iS3zdgbJ3yIZVRDbyFj4d/view?usp=share_link A 
//https://drive.google.com/file/d/1813setOrbErkndxDEzPAgzaYq4WSb5Et/view?usp=share_link B     
if (command.includes("chapter5-bn")){
        client.sendFile(message.from, 'https://drive.google.com/uc?id=1S6FKR0hcRi2iS3zdgbJ3yIZVRDbyFj4d&export=download', 'chapter5-bee A.pdf', 'Read Well', null, true)
        client.sendFile(message.from, 'https://drive.google.com/uc?id=1813setOrbErkndxDEzPAgzaYq4WSb5Et&export=download', 'chapter5-bee B.pdf', 'Read Well', null, true)
        client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
        }
        
                        
                  
            
        
    
  
  if (command.includes("b-importants")){
    client.reply(message.from, ` \n\n✨Importants for *BEE* Section Reached\n\n`, message.id);
    client.sendListMessage(message.from,
      [
        {
          title: 'BEE (Ms. Ch Laxmi) IMPORTANTS',
          rows: [
            {
              title: 'chapter1-i',
              description: 'DC-Circuits',
              rowId: 'row',
            },
            {
              title: 'chapter2-i',
              description: 'AC-Circuits',
              rowId: 'row',
            },
            {
              title: 'chapter3-i',
              description: 'Transformer',
              rowId: 'row',
            },
            {
              title: 'chapter4-i',
              description: 'Eletrical Machines',
              rowId: 'row',
            },
            {
              title: 'chapter5-i',
              description: 'Electrical Installations',
              rowId: 'row',
            },
            {
              title: 'mcqs',
              description: 'MCQs',
              rowId: 'row',
            },
          ],
        },
      ],
      'BEE-IMPORTANTS',
      'CSE-V',
      'CONTEXT'
    );         
 } 

//PPS

if (command.includes("pps")){ 
  await client.sendButtons(
    message.from,
    'CSE-V BOT',
    [
      { id: 'assignments', text: 'p-assignments' },
      { id: 'class-notes', text: 'p-notes' },
    ],
    'Category-PPS',
    'Managed by Satyam'
  );    
}
if (command.includes("mc")){ 
    await client.sendButtons(
      message.from,
      'CSE-V BOT',
      [
        { id: 'assignments', text: 'p-assignments' },
        { id: 'class-notes', text: 'p-notes' },
      ],
      'Category-PPS',
      'Managed by Satyam'
    );
}
    
if (command.includes("ec")){ 
      await client.sendButtons(
        message.from,
        'CSE-V BOT',
        [
          { id: 'assignments', text: 'p-assignments' },
          { id: 'class-notes', text: 'p-notes' },
        ],
        'Category-PPS',
        'Managed by Satyam'
      );    
}      
if (command.includes("ec-lab")){ 
        await client.sendButtons(
          message.from,
          'CSE-V BOT',
          [
            { id: 'assignments', text: 'p-assignments' },
            { id: 'class-notes', text: 'p-notes' },
          ],
          'Category-PPS',
          'Managed by Satyam'
        );    
}            
        
if (command.includes("ecse-lab")){ 
          await client.sendButtons(
            message.from,
            'CSE-V BOT',
            [
              { id: 'assignments', text: 'p-assignments' },
              { id: 'class-notes', text: 'p-notes' },
            ],
            'Category-PPS',
            'Managed by Satyam'
          );    
}                  
if (command.includes("caeg")){ 
            await client.sendButtons(
              message.from,
              'CSE-V BOT',
              [
                { id: 'assignments', text: 'p-assignments' },
                { id: 'class-notes', text: 'p-notes' },
              ],
              'Category-PPS',
              'Managed by Satyam'
            );
}                
if (command.includes("bee-lab")){ 
              await client.sendButtons(
                message.from,
                'CSE-V BOT',
                [
                  { id: 'assignments', text: 'b-lab' },
                  { id: 'class-notes', text: 'b-lab' },
                ],
                'Category-BEE-Lab',
                'Managed by Satyam'
              ); 
}                             
if (command.includes("pps-lab")){ 
                await client.sendButtons(
                  message.from,
                  'CSE-V BOT',
                  [
                    { id: 'assignments', text: 'p-fk' },
                    { id: 'class-notes', text: 'p-notes' },
                  ],
                  'Category-PPS',
                  'Managed by Satyam'
                );    
}


//new start gtv
//BEE Lab



       
     if (command.includes("gope-chapter3")){
   client.sendFile(message.from, 'https://drive.google.com/uc?id=1adqPrMr49kg1z-Xv1VRQcdeCJ3Kuf54y&export=download' , 'gope-chapter3.pdf', 'check this pdf', null, true)
              client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
   }
   
   
     if (command.includes("gope-chapter4")){
   client.sendFile(message.from, 'https://drive.google.com/uc?id=1tasAIZvpKKrQQCygupc18W3au0gpzPkS&export=download' , 'gope-chapter4.pdf', 'check this pdf', null, true)
               client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
   }
    
     if (command.includes("gope-chapter6")){
   client.sendFile(message.from, 'https://drive.google.com/uc?id=1TzdBDx5X18jpYME5MTN3kNwuBhUM8lVO&export=download' , 'gope-chapter6.pdf', 'check this pdf', null, true)
               client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
   }
    
       
     if (command.includes("prev-year-bio")){

   client.reply(message.from, ' *sending*......it could take one or two minutes to send. ', message.id);
   client.sendFile(message.from, 'https://drive.google.com/uc?id=1aCwgBQja5ekFVobjqSCjpT3H51yM-GcQ&export=download' , 'prev-year-bio.pdf', 'check this pdf', null, true)
   }
   
   if (command.includes("physics")){
    client.sendListMessage(
          message.from,
          [
            {
              title: 'Context Physics',
              rows: [
                {
                  title: 'jina-chapter1',
                  description: 'Electric charges and fields',
                  rowId: 'row',
                },
                {
                  title: 'bishwanath-chapter3',
                  description: 'Current Eletricity',
                  rowId: 'row',
                },
                {
                  title: 'bhogendro-chapter4',
                  description: 'Moving charges and Magnetism',
                  rowId: 'row',
                },
                {
                  title: 'bijayakaran-chapter6',
                  description: 'Electromagnetic Induction',
                  rowId: 'row',
                },
                {
                  title: 'bishwanath-chapter15',
                  description: 'Communication Systems',
                  rowId: 'row',
                },
                {
                  title: 'prev-year-phy',
                  description: 'Previous year questions by sir david',
                  rowId: 'row',
                },
                
              ],
            },
          ],
          'Materials',
          'by Community Bot',
          'PHYSICS'
        );
   }
    // https://drive.google.com/file/d/12Qh-P-_MY-A8-qvwh3TABdbs057ECxHW/view?usp=sharing
    if (command.includes("jina-chapter1")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=12Qh-P-_MY-A8-qvwh3TABdbs057ECxHW&export=download' , 'jina-chapter1.pdf', 'check this pdf', null, true)

   } 
 // https://drive.google.com/file/d/1Y9riaL-aiG2lppPTahghVEs5VNQVbH3Q/view?usp=sharing
    if (command.includes("bishwanath-chapter3")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1Y9riaL-aiG2lppPTahghVEs5VNQVbH3Q&export=download' , 'bishwanath-chapter3.pdf', 'check this pdf', null, true)

   } 
//https://drive.google.com/file/d/1BTUezDDaAJnc-mIF3Cj-ImtpF4mUtlRK/view?usp=sharing
//https://drive.google.com/file/d/1Hdh5SR-d4-DZIrVbUVNi-ngtLkVyBcbk/view?usp=sharing
//https://drive.google.com/file/d/1V8YWOgS8z4EwCigiXy0CG6VDOVY5ecm2/view?usp=sharing
    if (command.includes("bhogendro-chapter4")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1BTUezDDaAJnc-mIF3Cj-ImtpF4mUtlRK&export=download' , 'bhogendro-chapter4[1st-part].pdf', 'check this pdf', null, true)
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1Hdh5SR-d4-DZIrVbUVNi-ngtLkVyBcbk&export=download' , 'bhogendro-chapter4[2nd-part].pdf', 'check this pdf', null, true)
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1V8YWOgS8z4EwCigiXy0CG6VDOVY5ecm2&export=download' , 'bhogendro-chapter4[3rd-part].pdf', 'check this pdf', null, true)

   } 
//https://drive.google.com/file/d/13CchMse307u2NyYg-X7pZwduzKtgCp97/view?usp=sharing
//https://drive.google.com/file/d/1zq9y2yR3LylLaAHtH6Wd1Aa-J-7D-YAw/view?usp=sharing
    if (command.includes("bijayakaran-chapter6")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=13CchMse307u2NyYg-X7pZwduzKtgCp97&export=download' , 'bijayakaran-chapter6[1st-part].pdf', 'check this pdf', null, true)
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1zq9y2yR3LylLaAHtH6Wd1Aa-J-7D-YAw&export=download' , 'bijayakaran-chapter6[2nd-part].pdf', 'check this pdf', null, true)

   } 

//https://drive.google.com/file/d/1TQLWd2g2ClrIq93YISWzZzDzvOipMoGh/view?usp=sharing
    if (command.includes("bishwanath-chapter15")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1TQLWd2g2ClrIq93YISWzZzDzvOipMoGh&export=download' , 'bishwanath-chapter15.pdf', 'check this pdf', null, true)

   } 
//https://drive.google.com/file/d/1387w5I5xuUixDOCJ_AUAduivRbIrA7Kn/view?usp=sharing
//https://drive.google.com/file/d/1uwNhwgBBKkZhujfelONm4pytQUHKryY9/view?usp=sharing
    if (command.includes("prev-year-phy")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1387w5I5xuUixDOCJ_AUAduivRbIrA7Kn&export=download' , 'prev-year-phy[Sir David]1.pdf', 'check this pdf', null, true)
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1uwNhwgBBKkZhujfelONm4pytQUHKryY9&export=download' , 'prev-year-phy[Sir David]2.pdf', 'check this pdf', null, true)

   }  

   if (command.includes("chemistry")){
    client.sendListMessage(
          message.from,
          [
            {
              title: 'Context Chemistry',
              rows: [
                {
                  title: 'surjit-chapter3',
                  description: 'Electrochemistry',
                  rowId: 'row',
                },
                {
                  title: 'surjit-chapter11',
                  description: 'Alcohol Phenol and Ether',
                  rowId: 'row',
                },
              ],
            },
          ],
          'Materials',
          'by Community Bot',
          'CHEMISTRY'
        );
   }
   //https://drive.google.com/file/d/1Xsm3cssQ1cc2CVU7RWXKsFHuubf57cki/view?usp=sharing

   if (command.includes("surjit-chapter3")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1Xsm3cssQ1cc2CVU7RWXKsFHuubf57cki&export=download' , 'surjit-chapter3.pdf', 'check this pdf', null, true)

   }  

   if (command.includes("surjit-chapter11")){
     client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
     client.sendFile(message.from, 'https://drive.google.com/uc?id=13pnePj3xJ5SbAnyGE0Jh9_SeYnbpcFZU&export=download' , 'surjit-chapter11.pdf', 'check this pdf', null, true)
   }
  
   if (command.includes("english")){
    client.sendListMessage(
          message.from,
          [
            {
              title: 'Context English',
              rows: [
                {
                  title: 'tony-love',
                  description: 'Love Across Salt Desert by Sir tony',
                  rowId: 'row',
                },
                {
                  title: 'tony-departed',
                  description: 'The Dear Departed by Sir Tony',
                  rowId: 'row',
                },
                {
                  title: 'tony-dimension',
                  description: 'The Fourth Dimension by Sir Tony',
                  rowId: 'row',
                },
                {
                  title: 'tony-youth',
                  description: 'Youh and age by Sir Tony',
                  rowId: 'row',
                },
                {
                  title: 'gojendra-kitemaker',
                  description: 'The kite maker by Sir Gojendra',
                  rowId: 'row',
                },
                {
                  title: 'gojendra-skylark',
                  description: 'The Skylark by Sir Gojendra',
                  rowId: 'row',
                },
                
              ],
            },
          ],
          'Materials',
          'by Community Bot',
          'ENGLISH'
        );
   }

   if (command.includes("tony-love")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=12vA9RHaEF104RoRAupomB5aQpY6Ryh70&export=download' , 'love across salt desert[Sir Tony].pdf', 'check this pdf', null, true)

   }     
   if (command.includes("tony-departed")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1hfKerPWfiqpBf1zPivnqc-WzeaxEqfxt&export=download' , 'The dear departed [Sir Tony].pdf', 'check this pdf', null, true)

   }   
   if (command.includes("tony-dimension")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1F5g27wOEBiKeghsq3pV1BrP3shEFkBcg&export=download' , 'The fourth Dimension [Sir Tony].pdf', 'check this pdf', null, true)

   }
   if (command.includes("tony-youth")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1Ie-_KvLCId464Ioq9EfwAoTeVt5x4A86&export=download' , 'Youth and Age [Sir Tony].pdf', 'check this pdf', null, true)

   }      
   if (command.includes("gojendra-kitemaker")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1Q4s1V26Spvd8vSrA2T4t5O_D0zQJ6-X7&export=download' , 'The kite Maker [Sir Gojendra].pdf', 'check this pdf', null, true)

   }
   if (command.includes("gojendra-skylark")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1c7NslQvmBrQ8NzB-_Cncq7cB4RFBcU8Y&export=download' , 'The Skylark [Sir Gojendra].pdf', 'check this pdf', null, true)

   }
   
   



   // i dont have it
   if (command.includes("manipuri")){
    client.reply(message.from, '_Opps not yet added , no resources_' ,message.id);
   } 
   if (command.includes("alt-english")){
    client.reply(message.from, '_Opps not yet added , no resources_' ,message.id);
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


/*await client.sendButtons(
  message.from,
  'CSE-V BOT',
  [
    { id: 'button1', text: 'BEE' },
    { id: 'button2', text: 'BEE-Lab' },
    { id: 'button3', text: 'PPS'},
  ],
  'Subjects A',
  'Managed by Satyam'
);
await client.sendButtons(
  message.from,
  'CSE-V BOT',
  [
    { id: 'button1', text: 'PPS-Lab' },
    { id: 'button2', text: 'EC' },
    { id: 'button3', text: 'EC-Lab'},
  ],
  'Subjects B',
  'Managed By Satyam'
);
await client.sendButtons(
  message.from,
  'CSE-V BOT',
  [
    { id: 'button1', text: 'CAEG' },
    { id: 'button2', text: 'ECSE-Lab' },
    { id: 'button3', text: 'MC'},
  ],
  'Subjects C',
  'Managed By Satyam'
);      

} */