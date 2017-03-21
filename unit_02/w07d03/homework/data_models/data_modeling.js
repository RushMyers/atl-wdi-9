var User = {
    id: Number,
    name: String,
    user_id: String,
    password: String
    providers: [];
    email_accounts: [];
};
var Email_Account = {
    id: Number,
    email_address: String,
    password: String,
    provider: String,
    inbox: [];
    outbox: [];
    emails: [];
};

var Emails = {
    id: Number,
    sender: String,
    recipient: String,
    subject: String,
    message: String,
    timestamp: Date,
    readStatus: boolean
};
