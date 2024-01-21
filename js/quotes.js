const quotes = [
    "But they plan and Allah plans. Surely, Allah is the best of planners. [Quran 8:30]",
    "Practise honesty, integrity and sincerity in every aspect of your life.",
    "Life is an echo: 'We get back what we give'.",
    "Never fear failure. Failure is your friend.",
    "Don’t race against others, race against yourself.",
    "The quality of our life depends on the quality of our thoughts.",
    "Your eyes show the strength of your soul.",
    "No heart has ever suffered when it goes in search of its dreams, because every second of the search is a second’s encounter with God and with eternity.",
    "When we strive to become better than we are, everything around us becomes better, too.",
    "Our thoughts lead to actions, actions lead to habits, and habits form character. 'Character determines our destiny'.",
    "Try to smile and be kind to others. Smile increases our face value.",
    "Don’t expect anything from others. Expect only from yourself and believe in your hard work.",
    "Try to make yourself a better person every passing day, learn new things, expand your knowledge, invest in yourself, and practice humility and kindness.",
    "Burning desire is the starting point of all achievements.",
    "When we form the habit of searching for the positive in every situation, our life will move into its highest dimensions.",
    "Winning is not everything, making an effort to win is the key.",
    "The tree that bears the most fruits also gets the most stones.",
    "Turn your promises into commitments. Try to fulfill your commitment in everything that you engage.",
    "Try not to be the man of success but rather try to be the man of value.",
    "You will never be able to hit a target that you cannot see. So visualize your success every moment.",
    "Life gives you what you ask of it; it's always listening.",
    "When you control your thoughts, you control your mind. When you control your mind, you control your life. When you control your life, you become the master of your destiny.",
    "Respect your time and simplify your life.",
    "Never, ever forget the gift of family. It is all you have at the end of your life.",
    "There is a huge difference between making a lot of money and making a lot of time.",
    "Stop being a prisoner of your past; become the architect of your future.",
    "Be humble in every stage of your life.",
    "And when you want something by heart, all the universe conspires in helping you to achieve it.",
    "You must always know what it is that you want.",
    "Every blessing ignored becomes a curse.",
    "Making a decision is the beginning of things. When someone makes a decision, he is really diving into a strong current that will carry him to places he had never dreamed of when he first made the decision.",
    "People need not fear the unknown if they are capable of achieving what they need and want.",
    "People are afraid to pursue their most important dreams because they feel that they don’t deserve them, or that they will be unable to achieve them.",
    "Tell your heart that the fear of suffering is worse than the suffering itself.",
    "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
    "All people who are happy have God within them.",
    "The darkest hour of the night comes just before the dawn."
];

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    const floatingQuote = document.getElementById('floating-quote');
    floatingQuote.innerText = randomQuote;

    floatingQuote.style.display = 'block';
    setTimeout(() => {
        floatingQuote.style.display = 'none';
    }, 15000); // Hide after 30 seconds
}