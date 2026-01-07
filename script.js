const reelsData = [
  {
    id: 1,
    likes: 12400,
    comments: 340,
    shares: 120,
    profileName: "Aanya",
    profilePhoto: "https://randomuser.me/api/portraits/women/11.jpg",
    followed: true,
    liked: true,
    caption: "Silence, focus, hustle. Heroes are built quietly. ⚡",
    video: "./video/001.mp4"
  },
  {
    id: 2,
    likes: 9800,
    comments: 210,
    shares: 90,
    profileName: "Ishita",
    profilePhoto: "https://randomuser.me/api/portraits/women/12.jpg",
    followed: false,
    liked: false,
    caption: "Main character energy. No shortcuts, only strength. 🖤",
    video: "./video/002.mp4"
  },
  {
    id: 3,
    likes: 15600,
    comments: 410,
    shares: 200,
    profileName: "Kiara",
    profilePhoto: "https://randomuser.me/api/portraits/women/13.jpg",
    followed: true,
    liked: true,
    caption: "He wasn’t born a hero, he became one. 🔥",
    video: "./video/003.mp4"
  },
  {
    id: 4,
    likes: 8700,
    comments: 150,
    shares: 65,
    profileName: "Riya",
    profilePhoto: "https://randomuser.me/api/portraits/women/14.jpg",
    followed: false,
    liked: false,
    caption: "Every scar tells a story of strength. 🩶",
    video: "./video/004.mp4"
  },
  {
    id: 5,
    likes: 20300,
    comments: 560,
    shares: 310,
    profileName: "Ananya",
    profilePhoto: "https://randomuser.me/api/portraits/women/15.jpg",
    followed: true,
    liked: true,
    caption: "A hero trains when no one is watching. 💪",
    video: "./video/005.mp4"
  },
  {
    id: 6,
    likes: 11200,
    comments: 240,
    shares: 98,
    profileName: "Meera",
    profilePhoto: "https://randomuser.me/api/portraits/women/16.jpg",
    followed: false,
    liked: true,
    caption: "Pain today. Power tomorrow. ⚔️",
    video: "./video/006.mp4"
  },
  {
    id: 7,
    likes: 9400,
    comments: 180,
    shares: 70,
    profileName: "Pooja",
    profilePhoto: "https://randomuser.me/api/portraits/women/17.jpg",
    followed: true,
    liked: false,
    caption: "Built by discipline, driven by purpose. 🏹",
    video: "./video/007.mp4"
  },
  {
    id: 8,
    likes: 17600,
    comments: 430,
    shares: 260,
    profileName: "Nisha",
    profilePhoto: "https://randomuser.me/api/portraits/women/18.jpg",
    followed: true,
    liked: true,
    caption: "Heroes don’t complain, they conquer. 👑",
    video: "./video/008.mp4"
  },
  {
    id: 9,
    likes: 8200,
    comments: 130,
    shares: 55,
    profileName: "Kavya",
    profilePhoto: "https://randomuser.me/api/portraits/women/19.jpg",
    followed: false,
    liked: false,
    caption: "Stronger than yesterday, sharper than fear. 🖤",
    video: "./video/009.mp4"
  },
  {
    id: 10,
    likes: 25900,
    comments: 720,
    shares: 450,
    profileName: "Sanya",
    profilePhoto: "https://randomuser.me/api/portraits/women/20.jpg",
    followed: true,
    liked: true,
    caption: "From zero to legend — mindset matters. 🚀",
    video: "./video/010.mp4"
  },
  {
    id: 11,
    likes: 6700,
    comments: 95,
    shares: 40,
    profileName: "Neha",
    profilePhoto: "https://randomuser.me/api/portraits/women/21.jpg",
    followed: false,
    liked: false,
    caption: "No noise. Just results. 🧠",
    video: "./video/011.mp4"
  },
  {
    id: 12,
    likes: 14800,
    comments: 360,
    shares: 190,
    profileName: "Tanya",
    profilePhoto: "https://randomuser.me/api/portraits/women/22.jpg",
    followed: true,
    liked: true,
    caption: "A hero’s journey starts with self-belief. ✨",
    video: "./video/012.mp4"
  },
  {
    id: 13,
    likes: 9100,
    comments: 170,
    shares: 75,
    profileName: "Simran",
    profilePhoto: "https://randomuser.me/api/portraits/women/23.jpg",
    followed: false,
    liked: true,
    caption: "Fear fades when purpose rises. 🔥",
    video: "./video/013.mp4"
  },
  {
    id: 14,
    likes: 18700,
    comments: 510,
    shares: 280,
    profileName: "Alia",
    profilePhoto: "https://randomuser.me/api/portraits/women/24.jpg",
    followed: true,
    liked: true,
    caption: "Earn respect. Stay relentless. ⚡",
    video: "./video/014.mp4"
  },
  {
    id: 15,
    likes: 7400,
    comments: 120,
    shares: 48,
    profileName: "Mahi",
    profilePhoto: "https://randomuser.me/api/portraits/women/25.jpg",
    followed: false,
    liked: false,
    caption: "Calm mind. Warrior heart. 🖤",
    video: "./video/015.mp4"
  },
  {
    id: 16,
    likes: 22900,
    comments: 690,
    shares: 390,
    profileName: "Radhika",
    profilePhoto: "https://randomuser.me/api/portraits/women/26.jpg",
    followed: true,
    liked: true,
    caption: "Legends don’t wait for luck. They work. 🏆",
    video: "./video/016.mp4"
  },
  {
    id: 17,
    likes: 8600,
    comments: 140,
    shares: 60,
    profileName: "Sneha",
    profilePhoto: "https://randomuser.me/api/portraits/women/27.jpg",
    followed: false,
    liked: false,
    caption: "Strength is a habit, not a mood. 💪",
    video: "./video/017.mp4"
  },
  {
    id: 18,
    likes: 19500,
    comments: 580,
    shares: 340,
    profileName: "Priya",
    profilePhoto: "https://randomuser.me/api/portraits/women/28.jpg",
    followed: true,
    liked: true,
    caption: "Hero mode: ON. Excuses: OFF. ⚔️",
    video: "./video/018.mp4"
  },
  {
    id: 19,
    likes: 10200,
    comments: 260,
    shares: 110,
    profileName: "Shruti",
    profilePhoto: "https://randomuser.me/api/portraits/women/29.jpg",
    followed: false,
    liked: true,
    caption: "Built from pressure, shaped by fire. 🔥",
    video: "./video/019.mp4"
  },
  {
    id: 20,
    likes: 28500,
    comments: 890,
    shares: 520,
    profileName: "Zara",
    profilePhoto: "https://randomuser.me/api/portraits/women/30.jpg",
    followed: true,
    liked: true,
    caption: "This is what consistency looks like. 👑",
    video: "./video/020.mp4"
  }
];
function loadReels() {
  var sum = "";
  reelsData.forEach((elem, idx) => {
    sum += `<div class="reel">
                <video autoplay muted loop
                    src="${elem.video}"></video>


                <div class="bottom">


                    <div class="user">
                        <img src="${elem.profilePhoto}"
                            alt="">
                        <h5>${elem.profileName}</h5>
                        <button>${elem.followed ? "Following" : "Follow"}</button>
                    </div>
                    <p class="description">${elem.caption}</p>
                </div>
                <div class="right">
                    <div id="${idx}" class="like">
                        <i class="bubble ${elem.liked ? 'love ri-heart-fill' : 'ri-heart-line'}"></i>
                        <p>${elem.likes}</p>
                    </div>
                    <div class="comment">
                        <i class="bubble ri-chat-3-line"></i>
                        <p>${elem.comments}</p>
                    </div>
                    <div class="share">
                        <i class="ri-share-forward-line"></i>
                        <p>${elem.shares}</p>
                    </div>
                    <i class="ri-more-2-fill"></i>
                </div>

            </div>`
  })
  document.querySelector(".allReels").innerHTML = sum;
}
loadReels();

var allReels = document.querySelector('.allReels');
allReels.addEventListener('click', function (elem) {
  // reelsData[elem.target.id].likes++

  if (reelsData[elem.target.id].liked) {
    reelsData[elem.target.id].liked = false;
    reelsData[elem.target.id].likes--;
  } else {
    reelsData[elem.target.id].liked = true;
    reelsData[elem.target.id].likes++;
  }
  // console.log(reelsData)
  loadReels();
})


var reelvid = document.querySelectorAll(".reel video")
reelvid.forEach((video) => {
  video.addEventListener("click", function () {
    video.muted = !video.muted;
  });
});
