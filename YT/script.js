// ===============================
// YouTube Skeleton - script.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------
    // Elements
    // -----------------------------

    const searchBar = document.querySelector("input");
    const videos = document.querySelectorAll("td");
    const categoryButtons = document.querySelectorAll("header:nth-of-type(2) button");
    const sidebarItems = document.querySelectorAll("aside li");
    const menuButton = document.querySelector("header button");
    const sidebar = document.querySelector("aside");
    const logo = document.querySelector("header img");
    const thumbnails = document.querySelectorAll("td img");

    // -----------------------------
    // Search Function
    // -----------------------------

    searchBar.addEventListener("keyup", function(){

        let search = this.value.toLowerCase();

        videos.forEach(video=>{

            let title = video.querySelector("h3").innerText.toLowerCase();
            let creator = video.querySelector("p").innerText.toLowerCase();

            if(title.includes(search) || creator.includes(search))
            {
                video.style.display="table-cell";
            }
            else
            {
                video.style.display="none";
            }

        });

    });

    // -----------------------------
    // Category Highlight
    // -----------------------------

    categoryButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            categoryButtons.forEach(btn=>{

                btn.style.background="#272727";
                btn.style.color="white";

            });

            button.style.background="white";
            button.style.color="black";

        });

    });

    // -----------------------------
    // Sidebar Highlight
    // -----------------------------

    sidebarItems.forEach(item=>{

        item.addEventListener("click",()=>{

            sidebarItems.forEach(i=>{

                i.style.background="transparent";

            });

            item.style.background="#303030";

        });

    });

    // -----------------------------
    // Menu Toggle
    // -----------------------------

    let sidebarVisible = true;

    menuButton.addEventListener("click",()=>{

        if(window.innerWidth>768){

            if(sidebarVisible){

                sidebar.style.display="none";

                document.querySelector("main").style.marginLeft="20px";

                document.querySelector("header:nth-of-type(2)").style.left="0";

            }

            else{

                sidebar.style.display="block";

                document.querySelector("main").style.marginLeft="230px";

                document.querySelector("header:nth-of-type(2)").style.left="220px";

            }

            sidebarVisible=!sidebarVisible;

        }

    });

    // -----------------------------
    // Logo Scroll Top
    // -----------------------------

    logo.style.cursor="pointer";

    logo.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    // -----------------------------
    // Thumbnail Animation
    // -----------------------------

    thumbnails.forEach(image=>{

        image.addEventListener("mouseenter",()=>{

            image.style.transform="scale(1.05)";

        });

        image.addEventListener("mouseleave",()=>{

            image.style.transform="scale(1)";

        });

    });

    // -----------------------------
    // Ripple Button Effect
    // -----------------------------

    document.querySelectorAll("button").forEach(button=>{

        button.addEventListener("mousedown",()=>{

            button.style.transform="scale(.90)";

        });

        button.addEventListener("mouseup",()=>{

            button.style.transform="scale(1)";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform="scale(1)";

        });

    });

    // -----------------------------
    // Video Hover Shadow
    // -----------------------------

    videos.forEach(video=>{

        video.addEventListener("mouseenter",()=>{

            video.style.boxShadow="0px 0px 20px rgba(255,255,255,.08)";

        });

        video.addEventListener("mouseleave",()=>{

            video.style.boxShadow="none";

        });

    });

    // -----------------------------
    // Smooth Fade-in
    // -----------------------------

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0px)";

            }

        });

    });

    videos.forEach(video=>{

        video.style.opacity="0";

        video.style.transform="translateY(40px)";

        video.style.transition=".5s";

        observer.observe(video);

    });

    // -----------------------------
    // Search Placeholder Animation
    // -----------------------------

    let placeholders=[

        "Search",
        "Search Videos",
        "Search Gaming",
        "Search Movies",
        "Search Anime"

    ];

    let index=0;

    setInterval(()=>{

        index++;

        if(index>=placeholders.length)
            index=0;

        searchBar.placeholder=placeholders[index];

    },2500);

    // -----------------------------
    // Fake Notifications
    // -----------------------------

    const bell=document.querySelectorAll("header button")[3];

    bell.addEventListener("click",()=>{

        alert("No new notifications.");

    });

    // -----------------------------
    // Google Apps
    // -----------------------------

    const apps=document.querySelectorAll("header button")[2];

    apps.addEventListener("click",()=>{

        alert("Google Apps Menu");

    });

    // -----------------------------
    // Microphone
    // -----------------------------

    const mic=document.querySelectorAll("header button")[1];

    mic.addEventListener("click",()=>{

        alert("Voice Search is not available in this demo.");

    });

    // -----------------------------
    // Disable Empty Links
    // -----------------------------

    document.querySelectorAll("a").forEach(link=>{

        link.addEventListener("click",(e)=>{

            e.preventDefault();

        });

    });

    // -----------------------------
    // Footer Year
    // -----------------------------

    const footer=document.querySelector("footer");

    footer.innerHTML="© "+new Date().getFullYear()+" | All Rights Reserved";

});