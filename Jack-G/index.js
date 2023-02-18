const {Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions} = require('discord.js');

const prefix = '>';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
    console.log("Bot is online!");

    client.user.setActivity('Botting', { type: "WATCHING" });
})

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //message array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //COMMANDS

//test command

if (command === 'test') {
    message.channel.send("Bot is working!")
}

//initial post command

if (command === 'newsemester') {
    message.channel.send("Please select the classes you want join by reacting with the corresponding emoji.")
}

//csc325 info

if (command === 'csc325') {
    message.channel.send("PR: CSC 275 or CSC 276. Techniques and practices pertaining to the development of complex software systems. Topics may include implementing abstract data types, design patterns for object-oriented programming, distribution and concurrency, debugging and associated tools, configuration management, and event-driven development. Focus on C++, Java, or another OO language each semester. Graded ABCDE.")
}

//csc375 info

if (command === 'csc375') {
    message.channel.send("PR: CSC 275 or CSC 276 with a grade of C (2.0) or better. Focus on the definition and development of data structures as abstract data types in a high-level programming language. Examine the theory and programming implementation of fundamental data structures including lists, stacks, queues, trees, graphs, and hashes. Discuss basic concepts of sorting and searching. Broadens and deepens the knowledge of high-level programming languages and their applications related to data structures.")
}

//csc379 info

if (command === 'csc379') {
    message.channel.send("PR: CSC 375 with a grade of C (2.0) or better, CSC/MTH 230. Introduction to concepts used in algorithm design and analysis, including criteria for selecting data structures for different applications. Design of algorithms with a focus on their relationship to the choice of data structure. Non-numerical algorithms such as sorting, searching, pattern matching, and graph and network algorithms. Commonly used algorithmic techniques such as greedy algorithms, divide and conquer, dynamic programming, randomization, and backtracking. Complexity analysis of algorithms, including order notation and proof techniques for algorithm correctness.")
}


})




client.login("MTA2NTcxMjYxMjczOTkxNTg0Nw.Gemn5g.sLD3EWZv9AgY-2TlEzQXD2sYVmb5ziyHB_2ElQ");