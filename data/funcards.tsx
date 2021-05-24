class FunCard {
    type: string;
    question: string;

    constructor(type: string, question: string) {
        this.type = type;
        this.question = question;
    }
}

function _(type: string, question: string) {
    return new FunCard(type, question)
}

const funCards:FunCard[] = [
    _('Things you love', 'Who is your favourite superhero?'),
    _('Things you love', 'What is the best holiday you have ever been on?'),
    _('Things you love', 'What is your favourite movie?'),
    _('Things you love', 'What was your least favourite subject at school?'),
    _('Experiences', 'What was the most naughty thing you did as a child?'),
    _('Experiences', 'What did you buy of your first income?'),
    _('Experiences', 'What was the worst present you have ever received?'),
    _('Experiences', 'Have you ever received a parking ticket?'),
    _('Have you ever', 'Have you ever ridden a camel?'),
    _('Have you ever', 'Have you ever broken a bone?'),
    _('Have you ever', 'Have you ever stolen money from your parents when you were a kid?'),
    _('Have you ever', 'Have you ever stolen money from your parents when you were a kid?'),
    _('Hypothetical', 'If you could ban any word or phrase, what would it be?'),
    _('Hypothetical', 'You find a high-denomination note in a restaurant. Do you hand it in, or pocket it?'),
    _('Hypothetical', 'If your house was on fire and you could save one thing, what would it be?'),
    _('Hypothetical', 'Have you ever had a super-natural experience?'),
    _('Hypothetical', 'Which famous sporting moment would you like to have been part of?'),
    _('Hypothetical', 'If you could only eat one type of food for the rest of your life, what would it be?'),
    _('Challenge', 'Show us an impersonation of someone famous(we shall try to guess who it was)?'),
    _('Challenge', 'Make the noise of your favourite animal?'),
];

export default funCards