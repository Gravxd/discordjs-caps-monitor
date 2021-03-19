client.on('message', message => {
  if(message.author.bot || !message.guild) return;
  const a = message.content; 
  const b = message.content.toUpperCase();
  if(a != b) {
    message.delete()
    message.reply('Caps only please!')
  }
}) 
