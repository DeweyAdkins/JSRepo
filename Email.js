let appData = {
    name: 'Gmail',
    mailboxes: [
        {
            name: 'inbox',
            emails: [
                {
                    Subject: 'Code Update',
                    body: 'Added some code can you check up on it',
                    Sender: 'intern@gmail.com',
                    Receiver: 'myself@gmail.com',
                    date: '6/11/2024',
                    status: 'inbox'
                },
                {
                    Subject: 'Code Update v.2',
                    body: 'Added some code and revamped it',
                    Sender: 'Coworker@gmail.com',
                    Receiver: 'myself@gmail.com',
                    date: '6/17/2024',
                    status: 'inbox'
                }
            ]
        },
        {
            name: 'junk',
            emails: [
                {
                    Subject: 'UPS Update',
                    body: 'We can\'t reach your house please update location',
                    Sender: 'UPS.real@gmail.com',
                    Receiver: 'myself@gmail.com',
                    date: '1/12/2024',
                    status: 'inbox'
                }
            ]
        },
        {
            name: 'sent',
            emails: [
                {
                    Subject: 'Pictures',
                    body: 'The new pictures are printing',
                    Sender: 'myself@gmail.com',
                    Receiver: 'Coworker@gmail.com',
                    date: '5/26/2024',
                    status: 'sent'
                }
            ]
        },
        {
            name: 'drafts',
            emails: [
                {
                    Subject: 'Draft: Lunch Plans',
                    body: 'Movie Time',
                    Sender: 'myself@gmail.com',
                    Receiver: 'friend@gmail.com',
                    date: '5/30/24',
                    status: 'draft'
                }
            ]
        },
        {
            name: 'trash',
            emails: [
                {
                    subject: 'Party Time',
                    body: 'Is the party still happening?',
                    Sender: 'myself@gmail.com',
                    Receiver: 'oldfriend@gmail.com',
                    date: '6/21/23',
                    status: 'Trash'
                }
            ]
        }
    ],
    contacts: [
        {
            name: 'Derek',
            email: 'Derek@gmail.com',
            lastMessage: 'Wassup Man'
        },
        {
            name: 'Flynt',
            email: 'Flynt@gmail.com',
            lastMessage: 'What the heck!'
        },
        {
            name: 'Jack',
            email: 'Jack@gmail.com',
            lastMessage: 'Burn, baby burn!'
        }
    ]
}

let mailboxes = appData.mailboxes.map(mailbox => mailbox.name);
console.log('Mailbox Names: ', mailboxes)

let emailsList = [];
appData.mailboxes.forEach(mailbox => {
    emailsList = emailsList.concat(mailbox.emails);
});
console.log('Emails List: ', emailsList)

let secondEmailText = appData.mailboxes.find(mailbox => mailbox.name === 'inbox').emails[1].body;
console.log("Second Email Text:", secondEmailText);


let draftEmail = appData.mailboxes.find(mailbox => mailbox.name === 'drafts').emails.pop();
draftEmail.status = 'sent';
appData.mailboxes.find(mailbox => mailbox.name === 'sent').emails.push(draftEmail);
console.log("Updated Mailboxes after moving draft to sent:", appData.mailboxes);


let newDraftEmail = {
  subject: 'Draft: Follow Up',
  body: 'This is a draft of the follow-up email.',
  sender: 'you@gmail.com',
  receiver: 'client@gmail.com',
  date: '2024-06-12',
  status: 'draft'
};

appData.mailboxes.find(mailbox => mailbox.name === 'drafts').emails.push(newDraftEmail);
console.log("Updated Drafts Mailbox:", appData.mailboxes.find(mailbox => mailbox.name === 'drafts').emails);