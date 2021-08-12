// should be the same format as the songs.json
// I only have it like this to avoid promises

let ALLSONGS_JSON =`{
    "series": {

        "pokemon": {
            "seriesName": "Pokémon",
            "seriesImage": "pokemon.png",
            "color": "red",
            "game": {
                "red and blue": {
                    "gameName": "Red and Blue",
                    "image": "redBlue.png",
                    "songs": {
                        "wild battle": {
                            "link": "https://youtu.be/NrS523dOHU4",
                            "title": "Battle! Wild Pokémon"
                        },
                        "champion battle": {
                            "link": "nXgAj5KdAC0",
                            "title": "Battle! Champion"
                        }
                    },
                    "answers": [
                        "pokemon rby",
                        "pokemon rb",
                        "pokemon red",
                        "pokemon blue",
                        "pokemon yellow",
                        "pokemon green",
                        "pokemon red and green",
                        "pokemon red and blue",
                        "red and green",
                        "red and blue"
                    ],
                    "closeAnswers": [
                        "pokemon",
                        "gsc",
                        "gold",
                        "silver",
                        "crystal",
                        "pokemon",
                        "pokemon gold",
                        "pokemon silver",
                        "pokemon crystal"
                    ]
                }
            }

        },

        "zelda": {
            "seriesName": "The Legend of Zelda",
            "seriesImage": "zelda.png",
            "color": "green",
            "game": {
                "wind waker": {
                    "gameName": "The Wind Waker",
                    "image": "windWaker.png",
                    "songs": {
                        "dragon_roost ": {
                            "link": "s7fqllhtdHI",
                            "title": "Dragon Roost Island"
                        },
                        "mini_boss": {
                            "link": "XF24XSYYiDw",
                            "title": "Mini Boss Battle"
                        }
                    },
                    "answers": [
                        "wind waker",
                        "windwaker",
                        "zelda wind waker",
                        "zelda windwaker",
                        "legend of zelda wind waker",
                        "legend of zelda windwaker",
                        "the legend of zelda wind waker",
                        "the legend of zelda windwaker",
                        "the legend of zelda the wind waker",
                        "the legend of zelda the windwaker",
                        "the wind waker",
                        "the windwaker",
                        "zelda ww",
                        "loz ww",
                        "lozww"
                    ],
                    "closeAnswers": [
                        "zelda",
                        "twilight princess",
                        "ocarina of time",
                        "phantom hourglass",
                        "spirit tracks"
                    ]
                }
            }
        },
        "ace attorney": {
            "seriesName": "Ace Attorney",
            "color": "blue",
            "game": {
                "Dual Destinies": {
                    "gameName": "Phoenix Wright: Dual Destinies",
                    "songs": {
                        "cross exam mod": {
                            "link": "https://youtu.be/HmTs0SJOjqo",
                            "title": "Cross Examination ~ Moderato"
                        },
                        "logic trinity": {
                            "link": "https://youtu.be/CQpdHIaIe-4",
                            "title": "Logic Trinity"
                        },
                        "objection 2013": {
                            "link": "https://youtu.be/Yy7NVfkEsvQ",
                            "title": "Phoenix Wright ~ Objection! 2013"
                        },
                        "cross exam all": {
                            "link": "https://youtu.be/LICY7XMIye0",
                            "title": "Cross Examination ~ Allegro"
                        },
                        "tursuit KPO": {
                            "link": "https://youtu.be/JpTQ7fr2yeM",
                            "title": "Pursuit ~ Keep Pressing On"
                        },
                        "trucy theme": {
                            "link": "https://youtu.be/NQaCuEkFFZU",
                            "title": "Trucy's Theme ~ Child of Magic 2013"
                        },
                        "investigation op 2013": {
                            "link": "https://youtu.be/Gl8TteaY0ig",
                            "title": "Investigation ~ Opening 2013"
                        },
                        "florent belle": {
                            "link": "https://youtu.be/El52iOqCAks",
                            "title": "Florent L'Belle ~ Je suis L'Belle"
                        },
                        "distorted swordsmanship": {
                            "link": "https://youtu.be/8Q0BwOvHzTk",
                            "title": "Simon Blackquill ~ Distorted Swordsmanship"
                        },
                        "apollo new chapter 2013": {
                            "link": "https://youtu.be/Y_EfUOJlBGY",
                            "title": "Apollo Justice ~ A New Chapter of Trials! 2013"
                        },
                        "lively people": {
                            "link": "https://youtu.be/bXUTeyZBEWA",
                            "title": "Lively People"
                        },
                        "suspicious people": {
                            "link": "https://youtu.be/hynQcpm71DY",
                            "title": "Suspicious People"
                        },
                        "difficult people": {
                            "link": "https://youtu.be/VtkILcf6ijM",
                            "title": "Difficult People"
                        },
                        "reminiscence WH": {
                            "link": "https://youtu.be/7Hs1P2eSv0o",
                            "title": "Reminiscence ~ Wandering Heart"
                        },
                        "athena cykes": {
                            "link": "https://youtu.be/HmCF8txfZnQ",
                            "title": "Athena Cykes ~ Courtroom Révolutionnaire"
                        },
                        "reminiscence asm": {
                            "link": "https://youtu.be/n42kjrhOMzs",
                            "title": "Reminiscence ~ A Sad Memory"
                        },
                        "investigation core": {
                            "link": "https://youtu.be/3AtY_tT9iL0",
                            "title": "Investigation ~ Core 2013"
                        },
                        "won the case ev": {
                            "link": "https://youtu.be/KEzxmtjkeAc",
                            "title": "Won the Case! ~ Everyone's Victory"
                        },
                        "aa5 end": {
                            "link": "https://youtu.be/WfFvmxG-6fU",
                            "title": "Ace Attorney 5 ~ End"
                        },
                        "reminiscence dfr": {
                            "link": "https://youtu.be/uJy3Plbgt_U",
                            "title": "Reminiscence ~ Departure from Regret"
                        }

                    },
                    "answers": [
                        "dual destinies",
                        "ace attorney dual destinies",
                        "phoenix wright ace attorney dual destinies",
                        "dual destinies",
                        "ace attorney: dual destinies",
                        "phoenix wright: ace attorney dual destinies",
                        "phoenix wright ace attorney: dual destinies",
                        "phoenix wright: ace attorney: dual destinies",
                        "pwaadd",
                        "pw aa dd",
                        "pwaa dd"
                    ],
                    "closeAnswers": [
                        "phoenix wright",
                        "phoenix wright ace attorney",
                        "ace attorney"
                    ]
                }
            }
        },
        "zero escape": {
            "seriesName": "Zero Escape",
            "color": "purple",
            "game": {
                "999": {
                    "gameName": "9 Hours, 9 Persons, 9 Doors",
                    "songs": {
                        "main theme 999": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/g9Qb3yDrj0c"
                        },
                        "recollection": {
                            "title": "Recollection",
                            "link": "https://youtu.be/HlC9XkvWvKo"
                        },
                        "septenary game": {
                            "title": "Septenary Game",
                            "link": "https://youtu.be/hzQ3jse4ars"
                        },
                        "morphogen sorrow": {
                            "title": "Morphogenetic Sorrow",
                            "link": "https://youtu.be/U71iXAp0WRk"
                        },
                        "who is zero": {
                            "title": "Who Is Zero?",
                            "link": "https://youtu.be/rNnofSIGNWQ"
                        }
                    },
                    "answers": [
                        "9 hours 9 persons 9 doors",
                        "9 hours, 9 persons, 9 doors",
                        "999",
                        "nine nine nine",
                        "nine hours nine persons nine doors"
                    ],
                    "closeAnswers": [
                        "vlr",
                        "virtues last reward",
                        "virtue's last reward"
                    ]
                },
                "VLR": {
                    "gameName": "Virtue's Last Reward",
                    "songs": {
                        "trackNo_247": {
                            "title": "Virtue's Last Reward ~Orchestra~",
                            "link": "https://youtu.be/9VSCJAWEPRo"
                        },
                        "trackNo_248": {
                            "title": "Biotope",
                            "link": "https://youtu.be/nJKKOpiKJGY"
                        },
                        "trackNo_249": {
                            "title": "Monitor",
                            "link": "https://youtu.be/E1yVqJA3u4Y"
                        },
                        "trackNo_250": {
                            "title": "Portentousness",
                            "link": "https://youtu.be/rp75JGQCW2Y"
                        },
                        "trackNo_251": {
                            "title": "Clarification",
                            "link": "https://youtu.be/GJvZwZQV7fs"
                        },
                        "trackNo_252": {
                            "title": "Confession",
                            "link": "https://youtu.be/J8E20i-dLBI"
                        },
                        "trackNo_253": {
                            "title": "Demise",
                            "link": "https://youtu.be/qkTmE6zyW9Y"
                        },
                        "trackNo_254": {
                            "title": "Blue Bird Lamentation",
                            "link": "https://youtu.be/gFJ1r6_4mW4"
                        }
                    },

                    "answers": [
                        "vlr",
                        "virtues last reward",
                        "virtue's last reward"
                    ],
                    "closeAnswers": [
                        "999",
                        "zero escape"
                    ]
                }
            }
        }

    }
}`

const ALLSONGS = JSON.parse( ALLSONGS_JSON );