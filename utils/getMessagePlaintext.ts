const getMessagePlaintext = (
  topic: string, name: string, emailAddress: string, heading: string, text: string, origin: string
  ) => {
  return `
  Hi ${process.env.RECIPIENT_NAME}
  
  You have a new message from a visitor of ${origin}
  
  Topic: ${topic}
  Sender name: ${name}
  Email: ${emailAddress}
  Heading: ${heading}
  Message as follows: 
  ${text}
  `
}

export default getMessagePlaintext
