const prologues = [
    "September 2022 awal mula ku kenal dirinya. Futri namanya.. Gadis cantik dengan bola mata membulat besar..",
    "'Namanya aneh.. kirain typo :D'",
    "Yup begitu juga kesan pertamaku mengenalnya.. Cengeng, receh, mageran itulah dia.. anehnya sifatnya tak membuatku ingin pergi.. sebaliknya, aku malah ingin lebih dekat dengannya..",
    "Hari ini, tepat tanggal 30 Maret ini adalah hari spesial untuknya.. Jadi, aku hanya ingin mengucapkan..",
];

const messages = [
    "Selamat ulang tahun sayaaang, semoga mulai dari hari spesialmu ini kamu bisa menjadi manusia yang selalu mendapat kebahagiaan yaa meski banyaknya lika liku kehidupan hahaha..Sehat selalu dan panjang umur yaa, maaf aku belum bisa menemuimu tapi semoga pesan singkat ini bisa diterima hatimu..",
    "I LOVE YOU FUTRI :)",
];

const HbdSound = document.getElementById("HbdSound");
const HbdMusic = document.getElementById("HbdMusic");
$(document).ready(async function () {
    const scenes = [
        {
            params: null,
            function: () => {
                return new Promise((resolve, reject) => {
                    $("#Button").addClass("fadeOut");
                    setTimeout(() => {
                        $("#Button").hide();
                        resolve(true);
                    }, 500);
                });
            },
        },
    ];

    // for (let i = 0; i < prologues.length; i++) {
    //     scenes.push({
    //         params: { message: prologues[i], textStyle: "text-2xl" },
    //         function: textAnim,
    //     });
    // }

    scenes.push({
        params: null,
        function: imgAnim,
    });
    for (let i = 0; i < messages.length; i++) {
        let textStyle;
        let duration;
        if (i + 1 == messages.length) {
            textStyle = "text-2xl text-center";
            duration = 250;
        }
        scenes.push({
            params: {
                message: messages[i],
                textStyle: textStyle,
                duration: duration,
            },
            function: textAnim,
        });
    }

    scenes.push({
        params: null,
        function: () => {
            return new Promise((resolve, reject) => {
                $("#Birthday").addClass("lastBirthday-in");
                $("#Fut").addClass("fadeIn");
                $("#BirthdayText").addClass(
                    "animate-[wiggle_1s_ease-in-out_infinite]"
                );
                setTimeout(() => {
                    resolve(true);
                }, 2000);
            });
        },
    });

    // Run all scenes
    $("button").click(async function () {
        HbdMusic.play();
        for (let i = 0; i < scenes.length; i++) {
            const scene = scenes[i];
            await scene.function(scene.params);
        }
    });
});

function textAnim(params) {
    return new Promise((resolve, reject) => {
        if (params.textStyle) {
            $("p").removeClass("text-[2.2vh]");
            $("p").addClass(params.textStyle);
        } else {
            $("p").addClass("text-[2.2vh]");
        }
        $("p").addClass("fadeIn");
        let char = "";
        let i = 0;
        const interval = setInterval(
            () => {
                char += params.message[i];
                $("p").html(char);
                i++;

                if (i >= params.message.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        $("p").removeClass("fadeIn");
                        $("p").addClass("fadeOut");

                        setTimeout(() => {
                            $("p").html("");
                            $("p").removeClass("fadeOut");
                            resolve(true);
                        }, parseFloat($("p").css("animation-duration")) * 1000);
                    }, 2000);
                }
            },
            params.duration ? params.duration : 110
        );
    });
}

function imgAnim(params) {
    return new Promise((resolve, reject) => {
        HbdSound.play();
        $("#Birthday").addClass("birthdayIn");
        let duration =
            parseFloat($("#Birthday").css("animation-duration")) * 1000;
        setTimeout(() => {
            $("#Birthday").removeClass("birthdayIn");
            $("#Birthday").toggleClass("opacity-0");

            $("#Birthday").addClass("birthdayOut");
            let duration =
                parseFloat($("#Birthday").css("animation-duration")) * 1000;
            $("#Fut").addClass("fadeOut");
            $("#Pita").addClass("slideDown");
            $("#Cake").addClass("slideLeft");
            $("#Ballon").addClass("slideRight");
            setTimeout(() => {
                resolve(true);
            }, duration);
        }, duration + 1000);
    });
}
