
// List of songs with names and file paths
const songs = [
    {
        name: 'Black Money',
        file: "musicfolder/black-money-loka-x-sambata-official-music-video-128-ytshorts.savetube.me.mp3",
    },
    {
        name: 'Ice',
        file: "musicfolder/shubh-ice-official-audio-128-ytshorts.savetube.me.mp3",
    },
    {
        name: '2055',
        file: "musicfolder/sleepy-hallow-2055-official-video-128-ytshorts.savetube.me.mp3",
    },
    {
        name: 'offshore',
        file: "musicfolder/offshore-official-audio-shubh-128-ytshorts.savetube.me.mp3",
    },{
        name: 'og',
        file: "musicfolder/shubh-og-official-music-video-128-ytshorts.savetube.me.mp3",
    },{
        name: 'ransom',
        file: "musicfolder/lil-tecca-ransom-official-music-video-128-ytshorts.savetube.me.mp3",
    },{
        name: 'jo tum mere ho',
        file: "musicfolder/anuv-jain-jo-tum-mere-ho-official-video-128-ytshorts.savetube.me.mp3",
    },{
        name: 'millionair',
        file: "musicfolder/millionaire-song-full-video-yoyohoneysingh-glory-bhushan-kumar-128-ytshorts.savetube.me.mp3",
    },{
        name: 'safety off- never fold',
        file: "musicfolder/safety-off-x-never-fold-remastered-128-ytshorts.savetube.me.mp3",
    },{
        name: 'Aura',
        file: "musicfolder/shubh-aura-official-audio-128-ytshorts.savetube.me.mp3",
    },
    {
        name: 'Ice',
        file: "musicfolder/shubh-ruthless-official-audio-128-ytshorts.savetube.me.mp3",
    },
    {
        name: 'Husn',
        file: "musicfolder/husn-re-imagined-128-ytshorts.savetube.me.mp3",
    }
];

// Select the container for the cards and create an audio player
const cardContainer = document.querySelector('.cardcontainer');
const audioPlayer = document.createElement('audio');
audioPlayer.classList.add('bottom-audio-player'); 
audioPlayer.setAttribute('controls', 'true');
document.querySelector('.spotifycontainer').appendChild(audioPlayer);

// Add event listeners to each card
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
    // Ensure there is a corresponding song for the card
    if (songs[index]) {
        card.addEventListener('click', () => {
            audioPlayer.src = songs[index].file; // Set the audio source to the corresponding song
            audioPlayer.play(); // Play the selected song
        });
    }
});
// adding event listner to hamburger
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".left").style.left= "0"
})
document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".left").style.left= "-100%"
})
