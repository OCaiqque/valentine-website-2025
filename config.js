// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Camilla",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Você vai ser minha namorada namoradona? 💝🥺",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Você gosta de mim?",                                    // First interaction
            yesBtn: "Sim",                                             // Text for "Yes" button
            noBtn: "Não",                                               // Text for "No" button
            secretAnswer: "Eu não gosto de você, eu te amo amo mim ama muitao ❤️"           // Secret hover message
        },
        second: {
            text: "O quanto você me ama? 🥺",                          // For the love meter
            startText: "Esse tantãooo",                                   // Text before the percentage
            nextBtn: "Próximo ❤️"                                         // Text for the next button
        },
        third: {
            text: "Vai ser minha namoradona no dia 12, de junho de 2025? 🌹", // The big question!
            yesBtn: "Sim!!!!!",                                             // Text for "Yes" button
            noBtn: "Não 🥺"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "MEUUU DEUSSS VOCÊ ME AMA ESSE TANTÃO??? 🥰🚀💝",  // Shows when they go past 5000%
        high: "AO INFINITO E ALÉMMM 🚀💝",              // Shows when they go past 1000%
        normal: "E ALÉMMMMM 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "EU SOU O CABA MAIS SORTUDO DO MUNDO VAPOOO 🎉💝💖💝💓",
        message: "Agora venha buscar seu presente!!!! Abraços e beijinhos infinitos para sempre",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dbxxixdbu/video/upload/v1749704591/Como_Nunca_Amei_Ningu%C3%A9m_Live_From_Olimpo_Rio_De_Janeiro_Brazil_2002_brfbbe.mp3", // Music streaming URL
        startText: "🎵 Tocar música fogosa",        // Button text to start music
        stopText: "🔇 Parar música fogosa 🥺",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
