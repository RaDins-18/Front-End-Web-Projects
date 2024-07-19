/* QUESTION:

Create the cards like card.png by taking dynamic data.

Data of card is in the form of an array like below:

["https://www.youtube.com/watch?v=mx4QxSgzMOY", "https://i.ytimg.com/vi/mx4QxSgzMOY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYZhK33-8AO-IBVZmZlUDcLyRSsg", "HUMSAFAR - TAIMOUR BAIG | Prod. Raffey Anwar (Official Audio)", "Taimour Baig", 3484168, "Sep 3, 2022", "3:44"]

*/


// SOLUTION:

// createCard function can create a card by dynamic data and insert it into html.
function createCard(url, img_url, title, c_name, views, published, duration) {

    // viewsCalculator function can convert numeric value of views to (K, M, B) formate by calculate the numbers.
    function viewsCalculator(v) {
        if (v >= 0 && v <= 9) {
            v = v.toString();
            return `${v.slice(0, 1)} views`;
        } if (v >= 10 && v <= 99) {
            v = v.toString();
            return `${v.slice(0, 2)} views`;
        } if (v >= 100 && v <= 999) {
            v = v.toString();
            return `${v.slice(0, 3)} views`;
        } if (v >= 1000 && v <= 9999) {
            v = v.toString();
            return `${v.slice(0, 1)}.${v.slice(1, 2)}K views`;
        } if (v >= 10000 && v <= 99999) {
            v = v.toString();
            return `${v.slice(0, 2)}K views`;
        } if (v >= 100000 && v <= 999999) {
            v = v.toString();
            return `${v.slice(0, 3)}K views`;
        } if (v >= 1000000 && v <= 9999999) {
            v = v.toString();
            return `${v.slice(0, 1)}.${v.slice(1, 2)}M views`;
        } if (v >= 10000000 && v <= 99999999) {
            v = v.toString();
            return `${v.slice(0, 2)}M views`;
        } if (v >= 100000000 && v <= 999999999) {
            v = v.toString();
            return `${v.slice(0, 3)}M views`;
        } if (v >= 1000000000 && v <= 9999999999) {
            v = v.toString();
            return `${v.slice(0, 1)}.${v.slice(1, 2)}B views`;
        } if (v >= 10000000000 && v <= 99999999999) {
            v = v.toString();
            return `${v.slice(0, 2)}B views`;
        } else {
            v = v.toString();
            return `${v.slice(0, 3)}B views`;
        }
    }

    // timesCalculator function can calculate the time period that passed from the published date of video by mathematical calculations in miliseconds and convert it into (minute, hour, day, month, and year) formate for easy to understand the time period.
    function timesCalculator(p) {
        // publish variable is the publish date of video.
        let publish = new Date(p);
        // today variable is the today date.
        let today = new Date();
        // timeElapsed variable is the time difference between published date to today date.
        let timeElapsed = today - publish;

        // Convert milisecond into years, months, days, hours, and minutes format.
        let years = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365));
        let months = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 30.417));
        let days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
        // console.log(`years: ${years} - months: ${months} - days: ${days} - hours: ${hours} - minutes: ${minutes}`) // For seeing the time period.

        // arr array store the time period like (1 or 5) and also its suffix like (year or years).
        let arr = [
            [years, "year ago", "years ago"],
            [months, "month ago", "months ago"],
            [days, "day ago", "days ago"],
            [hours, "hour ago", "hours ago"],
            [minutes, "minute ago", "minutes ago"],
        ];

        // For loop for getting each element of arr array.
        for (const element of arr) {
            // If element value is not zero then execute the below is executed.
            if (element[0] != 0) {
                // If elemet value is 1 then add (year) suffix to it.
                if (element[0] == 1) {
                    return `${element[0]} ${element[1]}`;
                // Else add (years) suffix to it.
                } else {
                    return `${element[0]} ${element[2]}`;
                }
            }
        }
    }

    // Get .container class element by the name of cont.
    let cont = document.querySelector(".container");
    // Create anchor tag element by the name of a.
    let a = document.createElement("a");

    // Set attributes of anchor tag.
    a.setAttribute("class", "card");
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");

    // Create the structure of inner anchor tag and insert all values of card in the anchor tag element in the html.
    a.innerHTML = `
                    <div class="thumbnail">
                        <img src="${img_url}" alt="Your internet connection is slow" class="img">
                        <div class="duration">${duration}</div>
                    </div>
                    <div class="description">
                        <h2 class="title">${title}</h2>
                        <div class="meta-data">
                            <h5 class="channel-name">${c_name}</h5>
                            <p>•</p>
                            <h5 class="views">${viewsCalculator(views)}</h5>
                            <p>•</p>
                            <h5 class="old-ago">${timesCalculator(published)}</h5>
                        </div>
                    </div>
    `;

    // Insert the anchor tag element in the cont element.
    cont.insertAdjacentElement("beforeend", a);
}

// List of dynamic data of the cards.
let listOfCards = [
    ["https://www.youtube.com/watch?v=mx4QxSgzMOY", "https://i.ytimg.com/vi/mx4QxSgzMOY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYZhK33-8AO-IBVZmZlUDcLyRSsg", "HUMSAFAR - TAIMOUR BAIG | Prod. Raffey Anwar (Official Audio)", "Taimour Baig", 3484168, "Sep 3, 2022", "3:44"],
    ["https://www.youtube.com/watch?v=AX6OrbgS8lI", "https://i.ytimg.com/vi/AX6OrbgS8lI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqDd7Z22OwtJpf50NjZa_3Cnn-zQ", "AUR - TU HAI KAHAN - Raffey - Usama - Ahad (Official Music Video)", "AUR", 165915653, "Jun 10, 2023", "4:23"],
    ["https://www.youtube.com/watch?v=r5Ak4KY8-cs", "https://i.ytimg.com/vi/6DtPF9W3ejI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcuyCydLH3uucDaTnBLEYfgdnJuQ", "Asim Azhar - Jo Tu Na Mila", "VYRLOriginals", 233213401, "Nov 20, 2018", "4:19"],
    ["https://www.youtube.com/watch?v=f-x83gtvqgA", "https://i.ytimg.com/vi/f-x83gtvqgA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArICypUlolO14MrMrE_JirlU3Bpg", "aleemrk - Cold Hours (Official Audio) | Prod. by @umairmusicxx", "aleemrk", 12496413, "Jul 28, 2022", "3:26"],
    ["https://www.youtube.com/watch?v=ijE2MMtzkHg", "https://i.ytimg.com/vi/ijE2MMtzkHg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtzG-g8pljpWgdbOIZ8rdT4OAjsg", "AFSANAY - Young Stunners | Talhah Yunus | Talha Anjum | Prod. By Jokhay (Official Music Video)", "Young Stunners", 40070363, "Mar 19, 2021", "6:29"],
    ["https://www.youtube.com/watch?v=wDduyqS9gZk", "https://i.ytimg.com/vi/wDduyqS9gZk/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgWAAtAFigIMCAAQARhfIF8oXzAP&rs=AOn4CLAMWfQK99o1sUrQ9bLPWDdFEonb8g", "RAAT DIN - aleemrk (Official Audio)", "aleemrk", 2622608, "Mar 3, 2021", "3:01"],
    ["https://www.youtube.com/watch?v=_ZkYVKKqMK0", "https://i.ytimg.com/vi/_ZkYVKKqMK0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBkKwT3EP8QrXJ9E2uAwPEuxh7l1w", "MERE HO TUM - Taimour Baig | Prod. Raffey Anwar (Official Music Video)", "Taimour Baig", 3583938, "Mar 8, 2023", "3:34"],
    ["https://www.youtube.com/watch?v=42Ekv1x_Qdo", "https://i.ytimg.com/vi/42Ekv1x_Qdo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwm2Kl3GVW_KfMqp_E1pi9OqFPbg", "Agency - Talha Anjum | Rap Demon | Prod. by UMAIR (Official Lyric Video)", "High Zone Records", 27232696, "May 25, 2021", "4:25"],
    ["https://www.youtube.com/watch?v=-yuY4oxyUPQ", "https://i.ytimg.com/vi/-yuY4oxyUPQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCvdG7tNTabU7U6eV3PSjSKpoRzXg", "LAJAWAB - TAIMOUR BAIG | Prod. Dizzla D Beats (Official Lyrical Video)", "Taimour Baig", 14578891, "Nov 25, 2020", "3:31"],
    ["https://www.youtube.com/watch?v=DTjibK1z0Vo", "https://i.ytimg.com/vi/DTjibK1z0Vo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3rXxJmwSSyO9Di10os-oLxW4QDw", "LAGA REH - Young Stunners | Talha Anjum | Talhah Yunus | Prod. Jokhay (Official Music Video)", "Young Stunners", 14105809, "Jan 4, 2021", "4:14"],
    ["https://www.youtube.com/watch?v=wlzf273PM1Q", "https://i.ytimg.com/vi/wlzf273PM1Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4rJ867zUFyj5H6FiTcngcMKYZEA", "aleemrk - No Need | Prod. by UMAIR", "aleemrk", 1583399, "Sep 26, 2022", "2:34"],
    ["https://www.youtube.com/watch?v=ITMg062PYcI", "https://i.ytimg.com/vi/ITMg062PYcI/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBMoMDAP&rs=AOn4CLAbK1wux-yYfltmj4zPvZNuKQ1ohA", "AADAT - Talhah Yunus | Prod. By Jokhay (Official Audio)", "Talhah Yunus", 2993081, "Dec 7, 2022", "3:32"],
    ["https://www.youtube.com/watch?v=ko7YMs9Q3KU", "https://i.ytimg.com/vi/ko7YMs9Q3KU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoDmO2IGmm28nlnHOlDyN2n4KvDw", "LONG TIME NO SEE - TAIMOUR BAIG ft. AUR | Prod. Raffey Anwar (Official Lyrical Video)", "Taimour Baig", 17893822, "Jul 16, 2023", "3:38"],
    ["https://www.youtube.com/watch?v=YdKwr0l176M", "https://i.ytimg.com/vi/YdKwr0l176M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEqnh2BcEwEi1wpgOAaJ6gWGYxzQ", "WAKE ME UP - aleemrk | Prod. by @Jokhay", "aleemrk", 1145229, "Feb 19, 2024", "3:30"],
    ["https://www.youtube.com/watch?v=CJfynWLD11c", "https://i.ytimg.com/vi/CJfynWLD11c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDb_pLUJqs0CRqIoKaEv4brtRzY_A", "Umair & Talha Anjum - No Other Place (Official Music Video)", "Umair", 3430916, "Jul 28, 2022", "3:11"],
    ["https://www.youtube.com/watch?v=rco9FFRxDZ0", "https://i.ytimg.com/vi/rco9FFRxDZ0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoSEpeaSwoMGWnUEuNOtRdbYnrTg", "LIFE GOES ON - aleemrk (Official Audio)", "aleemrk", 5881724, "Oct 27, 2021", "3:37"],
    ["https://www.youtube.com/watch?v=AS8F3np9laQ", "https://i.ytimg.com/vi/AS8F3np9laQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARg2IFsoZTAP&rs=AOn4CLDIBekZyZtzWVK74YNY0TrK8uII3Q", "DONT MIND - Young Stunners | Talhah Yunus | Talha Anjum | Rap Demon (Official Audio)", "Young Stunners", 17986937, "Dec 9, 2020", "3:14"],
    ["https://www.youtube.com/watch?v=IFMSNfkvRUM", "https://i.ytimg.com/vi/IFMSNfkvRUM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCY_3mEuxrq5rU_OF30qpiPI7fksA", "aleemrk - Living In The City (Official Music Video)", "aleemrk", 3924937, "Jun 7, 2023", "3:09"],
    ["https://www.youtube.com/watch?v=jIQ0Dx-4peE", "https://i.ytimg.com/vi/jIQ0Dx-4peE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-8jnkSSRv-3flcUoqD_t7Mi7q5A", "GUMAAN - Young Stunners | Talha Anjum | Talhah Yunus | Prod. By Jokhay (Official Music Video)", "Young Stunners", 52640623, "Sep 18, 2020", "4:31"],
    ["https://www.youtube.com/watch?v=r5Ak4KY8-cs", "https://i.ytimg.com/vi/r5Ak4KY8-cs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpoP8q0xtHUhr43RoNHh6x6__wgw", "INTRODUCTION - FARIS SHAFI", "Faris Shafi", 25333252, "Apr 3, 2021", "2:10"],
    ["https://www.youtube.com/watch?v=9-Vc4xmTZKk", "https://i.ytimg.com/vi/9-Vc4xmTZKk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBc56xv5voVx_yq0cNOtm_WwbojqA", "Downers At Dusk - Talha Anjum | Prod. by Umair (Official Music Video)", "Talha Anjum", 18583699, "Sep 23, 2023", "4:39"],
    ["https://www.youtube.com/watch?v=YtL8BuJQSX0", "https://i.ytimg.com/vi/YtL8BuJQSX0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBeO-JKl9Ei1Kz9GrHx90UH3C6erQ", "AUR - TANHA - Raffey - Usama - Ahad (Official Video)", "AUR", 1127072, "Oct 16, 2022", "3:30"],
    ["https://www.youtube.com/watch?v=KzO0iKufUc0", "https://i.ytimg.com/vi/KzO0iKufUc0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvrHY5H2eYhhMekBQEI6I12nFHeA", "QUARANTINE - Young Stunners | Talha Anjum x Talhah Yunus x KR$NA (Official Music Video)", "Young Stunners", 27156243, "Mar 24, 2020", "4:19"],
    ["https://www.youtube.com/watch?v=XQjblm54RCU", "https://i.ytimg.com/vi/XQjblm54RCU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAe-CPbOIG4Lr52nCmFizIP_RoVQQ", "AUR - SOMETIMES - Raffey - Usama - Ahad (Official Audio)", "AUR", 2106250, "Dec 30, 2022", "3:16"],
    ["https://www.youtube.com/watch?v=pwxvbzCU_oU", "https://i.ytimg.com/vi/pwxvbzCU_oU/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIDkofzAP&rs=AOn4CLCqjkcD6tARmUK7IKI5GilxRniUYg", "WHY - Young Stunners | Talha Anjum | Talhah Yunus | Prod. by Jokhay (Official Audio)", "Young Stunners", 7957506, "Jan 19, 2022", "4:21"],
];

// Number of cards that displays at starting of home page.
let n_of_c = 5;

// For loop for getting (n_of_c = 5) cards data and give it to createCard function.
for (let i = 0; i < n_of_c; i++) {
    createCard(listOfCards[i][0], listOfCards[i][1], listOfCards[i][2], listOfCards[i][3], listOfCards[i][4], listOfCards[i][5], listOfCards[i][6]);
}

// showMore function can display more cards if click on the show more button.
function showMore() {
    // Remove previous cards from html.
    document.querySelectorAll(".card").forEach(e => {
        e.remove();
    });

    // Add 3 in the initial value of n_of_c variable.
    n_of_c += 3;

    // If all cards are displayed then remove show more button from html.
    if (n_of_c >= listOfCards.length) {
        document.querySelector(".btn").remove();
    }

    // For loop for getting (n_of_c += 3) cards data and give it to createCard function.
    for (let i = 0; i < n_of_c; i++) {
        createCard(listOfCards[i][0], listOfCards[i][1], listOfCards[i][2], listOfCards[i][3], listOfCards[i][4], listOfCards[i][5], listOfCards[i][6]);
    }
}