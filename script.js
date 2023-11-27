$(".landingPage_About").hide();
$(".landingPage_Credits").hide();
$(".landingPage_Play").hide();
$(".lampActivity").hide();
$(".homePage").hide();
$(".cookingPage").hide();
$(".foodActivity").hide();
$(".chooseActivityPage").hide();
$(".gardeningActivity").hide();
$(".gardeningSeedsActivity").hide();
$(".sewingActivity").hide();
$(".sewingClothesActivity").hide();
$(".duaInvitationPage").hide();
$(".duaPage").hide();
$(".closingPage").hide();


//User clicks play on landing page
$(".playButton").click(function() {
    $(".landingPage").hide();
    $(".landingPage_Play").show();
    $(".landingYesButton").show();
    $(".landingNoButton").show();
    $(".replayButton").hide();
});


//User clicks about on landing page
$(".aboutButton").click(function() {
    $(".landing").hide();
    $(".landingPage_About").show();
});


//User clicks credits on landing page
$(".creditsButton").click(function() {
    $(".landing").hide();
    $(".landingPage_Credits").show();
});


//User clicks back on landing page
$(".landingBackButton").click(function() {
    $(".landingPage_About").hide();
    $(".landingPage_Credits").hide();
    $(".landing").show();
});


//User clicks yes on landing Sitti page
$(".landingYesButton").click(function() {
    $(".landingPage_Play").hide();
    $(".homePage").show();
});


//User clicks no on landing Sitti page
$(".landingNoButton").click(function() {
    $(".landingPage_Play").show();
    $(".landingSitti").html("That's alright, dear one. Your presence alone is a gift, and your comfort in our home brings joy. Remember, as the olive tree stands resilient in our land, so does your spirit within our hearts.<br><br>Should you ever choose to engage, the door to our traditions remains open to you.");
    $(".landingYesButton").hide();
    $(".landingNoButton").hide();
    $(".replayButton").show();
});


//User clicks next on home page
$(".homeNextButton").click(function() {
    $(".homePage").hide();
    $(".lampActivity").show();
    $(".options").hide();
});


//User double clicks lamp on lamp activity page
$(".lampActivity").dblclick(function() {
    $(".lampActivity").css("background-image", "url(https://static.vecteezy.com/system/resources/previews/023/636/556/original/ramadan-kareem-greeting-card-poster-and-banner-design-single-continuous-line-drawing-of-islamic-ornament-quran-kitab-tasbih-and-lantern-lamp-muslim-festival-one-line-draw-illustration-png.png)");
    $(".lampText").html("Shukran! Your gesture brings light to this dwelling and to my heart. In our culture, lanterns symbolize the guiding light, a beacon of hope amidst darkness, much like the words of the Quran illuminate our souls. As it is written in Surah An-Nur [24:35]: 'Allah is the Light of the heavens and the earth.'<br><br>Your kindness mirrors the generosity of our Palestinian spirit, reminiscent of the endless stars that grace our skies.");
    $(".options").show();
}); 


//User clicks next on lamp activity
$(".lampNextButton").click(function() {
    $(".lampActivity").hide();
    $(".cookingPage").show();
});


//User clicks next on home page
$(".cookingNextButton").click(function() {
    $(".cookingPage").hide();
    $(".foodActivity").show();
});


//User hovers over food images
for (let i = 1; i <= 6; i++) {
    $(`.item${i}`).hover(function() {
        $(`.item${i}`).css("opacity", "0%");
  	});
}


//Initially disable the Next button on food activity
$(".foodNextButton").prop("disabled", true);

//Track whether each image is hovered
let hoveredImages = {
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false
};

//Function to check if all images are hovered
function checkAllImagesHovered() {
    for (let img in hoveredImages) {
        if (!hoveredImages[img]) {
            return false; //At least one image isn't hovered yet
        }
    }
    return true; //All images are hovered
}

//Event listener for image hover
$(".item1, .item2, .item3, .item4, .item5, .item6").hover(function() {
    const imageClass = $(this).attr("class");
    hoveredImages[imageClass] = true;
    //Check if all images are hovered
    const allImagesHovered = checkAllImagesHovered();
    //Enable Next button if all images are hovered
    if (allImagesHovered) {
        $(".foodNextButton").prop("disabled", false);
    }
});


//User clicks next on food activity
$(".foodNextButton").click(function() {
    $(".foodActivity").hide();
    $(".chooseActivityPage").show();
    $(".leftContainer").css("width", "20%");
    $(".rightContainer").css("width", "20%");
});


//User clicks gardening on choose activity page
$(".chooseGardeningButton").click(function() {
    $(".chooseActivityPage").hide();
    $(".gardeningActivity").show();
    $(".leftContainer").css("width", "40%");
});


//User clicks next on gardening activity
$(".gardeningNextButton").click(function() {
    $(".gardeningActivity").hide();
    $(".gardeningSeedsActivity").show();
});


//User mouseleaves seed images
for (let i = 1; i <= 6; i++) {
    $(`.seed${i}`).on('mouseleave', function() {
        $(this).attr("src", "https://static.vecteezy.com/system/resources/previews/026/980/823/original/one-single-line-drawing-of-natural-green-organic-plantation-for-farming-logo-identity-plant-bud-ecology-icon-concept-from-growth-leaf-shape-trendy-continuous-line-draw-design-illustration-png.png")
               .css("width", "150px");
    });
}


//Initially disable the Next button on gardening seeds activity
$(".gardeningSeedsNextButton").prop("disabled", true);

//Track whether each seed image is mouse leaved
let mouseLeavedSeeds = {
    seed1: false,
    seed2: false,
    seed3: false,
    seed4: false,
    seed5: false,
    seed6: false
};

//Function to check if all seed images are mouseleaved
function checkAllSeedsMouseLeaved() {
    for (let seed in mouseLeavedSeeds) {
        if (!mouseLeavedSeeds[seed]) {
            return false; //At least one seed isn't mouse leaved yet
        }
    }
    return true; //All seeds are mouse leaved
}

//Event listener for mouse leave on seed images
$(".seed1, .seed2, .seed3, .seed4, .seed5, .seed6").mouseleave(function() {
    const seedClass = $(this).attr("class");
    mouseLeavedSeeds[seedClass] = true;
    //Check if all seeds are mouse leaved
    const allSeedsMouseLeaved = checkAllSeedsMouseLeaved();
    //Enable Next button if all seeds are mouse leaved
    if (allSeedsMouseLeaved) {
        $(".gardeningSeedsNextButton").prop("disabled", false);
    }
});


//User clicks next on garden seeds activity
$(".gardeningSeedsNextButton").click(function() {
    $(".gardeningSeedsActivity").hide();
    $(".rightContainer").css("width", "40%");
    $(".duaInvitationPage").show();
    $(".duaInvitationYesNextButton").hide();
    $(".duaInvitationNoNextButton").hide();
});


//User clicks sewing on choose activity page
$(".chooseSewingButton").click(function() {
    $(".chooseActivityPage").hide();
    $(".sewingActivity").show();
    $(".rightContainer").css("width", "40%");
});


//User clicks next on sewing activity page
$(".sewingNextButton").click(function() {
    $(".sewingActivity").hide();
    $(".sewingClothesActivity").show();
    $(".leftContainer").css("width", "20%");
    $(".options").hide();
});


//User double clicks sewing machine on sewing clothes activity page
$(".sewingClothesActivity").dblclick(function() {
    $(".sewingClothesActivity").css("background-image", "url(https://static.vecteezy.com/system/resources/previews/026/983/400/original/one-single-line-drawing-of-young-happy-muslim-male-and-female-couple-give-thumb-up-gesture-saudi-arabia-cloth-shmag-kandora-headscarf-thobe-ghutra-continuous-line-draw-design-illustration-png.png)");
    $(".sewingClothesText").html("Celestial blessings upon you, dear one! The Quran teaches us, 'And be good to parents, relatives, orphans, the needy, neighbors who are near, neighbors who are strangers, the friend by your side, the traveler, and those whom your right hands possess.'<br><br>You've lent your hands to such a rewarding task. I mean just look at the joy adorned on the faces of my beautiful grandchildren. Their laughter echoes through our village, and in clothing woven with care, love finds its finest expression.");
    $(".options").show();
});


//User clicks next on sewing clothes activity page
$(".sewingClothesNextButton").click(function() {
    $(".sewingClothesActivity").hide();
    $(".leftContainer").css("width", "40%");
    $(".duaInvitationPage").show();
    $(".duaInvitationYesNextButton").hide();
    $(".duaInvitationNoNextButton").hide();
});


//User clicks yes on dua invitation page
$(".duaInvitationYesButton").click(function() {
    $(".duaInvitationPage").hide();
    $(".duaPage").show();
});


//User clicks no on dua invitation page
$(".duaInvitationNoButton").click(function() {
    $(".duaInvitationPage").show();
    $(".duaInvitationText").html("In our land, the art of dua is more than words; it's an embrace of hope, whispered in every olive grove and woven into the fabric of our embroidered throbes. From the aroma of fresh za'atar mingling with olive oil to the melodies of the oud under starlit skies, our traditions speak of endurance and unity.<br><br>Your heart is kind, dear one. Your willingness to immerse yourself in our traditions, even in small ways, speaks volumes. After all, intentions resound in the chamber of our hearts.<br><br>May the spirit of sumood that defines us, echo through your endeavors. The Quran reminds us in Surah Al-Baqarah, 'A kind word and forgiveness are better than charity followed by injury' [Quran, 2:263].<br><br>Even if your words don't find their way into the skies, your open heart resonates with the spirit of empathy and understanding.");
    $(".duaInvitationYesButton").hide();
    $(".duaInvitationNoButton").hide();
    $(".duaInvitationNoNextButton").show();
});


//User clicks next after yes on dua invitation page
$(".duaInvitationYesNextButton").click(function() {
    $(".duaInvitationPage").hide();
    $(".duaPage").show();
});


//User clicks next after no on dua invitation page
$(".duaInvitationNoNextButton").click(function() {
    $(".duaInvitationPage").hide();
    $(".closingPage").show();
    $(".replayButton").show();
});


//User clicks next on dua page
$(".duaNextButton").click(function() {
    $(".duaPage").hide();
    $(".closingPage").show();
    $(".replayButton").show();
});


//Function to reset the game
function resetGame() {
    $(".landingPage").show();
    $(".landingPage_About").hide();
    $(".landingPage_Credits").hide();
    $(".landingPage_Play").hide();
    $(".landingSitti").html("Ahlan wa sahlan! I am Sitti, a Palestinian grandmother from the village of Dimra. The rhythms of our lives here are woven with stories passed down through generations. Here, in the humble embrace of Dimra, I invite you to join me on a journey through our cherished ways.<br><br>Would you join me in embracing our traditions and lending a hand with daily chores, dear friend?");
    $(".lampActivity").hide();
    $(".lampActivity").css("background-image", "url(https://i.postimg.cc/2yF6VSdF/lamp-No-Color-Photo-Room-png-Photo-Room.png)");
    $(".lampText").html("Dear one, as the sun sets upon our beloved Dimra, my humble adobe dims with the fading light. Would you kindly assist me in illuminating our surroundings? Look to the lantern resting on the table; it awaits your touch, just as the spirit of our ancestors beckons for unity and radiance.<br><br>Double-click on the lantern nearby; it holds the secret to our guiding light.");
    $(".homePage").hide();
    $(".cookingPage").hide();
    $(".foodActivity").hide();
    $(".item1, .item2, .item3, .item4, .item5, .item6").css("opacity", "100%");
    $(".chooseActivityPage").hide();
    $(".gardeningActivity").hide();
    $(".gardeningSeedsActivity").hide();
    $(".seed1, .seed2, .seed3, .seed4, .seed5, .seed6").attr("src", "https://static.vecteezy.com/system/resources/thumbnails/022/619/364/small_2x/one-continuous-line-drawing-of-whole-healthy-organic-almonds-group-for-garden-logo-identity-fresh-edible-seed-concept-for-fruit-icon-modern-single-line-draw-design-graphic-vector-illustration-png.png");
    $(".seed1, .seed2, .seed3, .seed4, .seed5, .seed6").css("width", "250px");
    $(".sewingActivity").hide();
    $(".sewingClothesActivity").hide();
    $(".sewingClothesActivity").css("background-image", "url(https://i.postimg.cc/LXZ98Xsh/sewing-Machine.jpg)");
    $(".sewingClothesText").html("Double click on the sewing machine to bring forth new clothes for my little ones.");
    $(".duaInvitationPage").hide();
    $(".duaInvitationText").html("Your kindness knows no bounds, my love. In these moments when hearts converge, I humbly invite you to join me in making dua for Palestine, our beloved land. In the embrace of our traditions, dua is a cherished act, an echo of hope that reverberates across our land.<br><br>As the Quran reminds us in Surah Al-Baqarah, 'Allah does not burden a soul beyond that it can bear' [Quran, 2:286]. Our land, our people, we hold them dear in our hearts, and in our prayers, we seek peace and justice.<br><br>Will you join me in this heartfelt prayer?");
    $(".duaInvitationYesButton").show();
    $(".duaInvitationNoButton").show();
    $(".duaInvitationYesNextButton").hide();
    $(".duaInvitationNoNextButton").hide();
    $(".duaPage").hide();
    $(".closingPage").hide();
}


//User clicks replay
$(".replayButton").click(function() {
    resetGame();
});