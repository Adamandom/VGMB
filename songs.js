// should be the same format as the songs.json
// I only have it like this to avoid promises

const songsJSON = `
{
    "series" : {

        "pokemon" : {
            "seriesName" : "Pokémon",
            "seriesImage" : "pokemon.png",
            "color": "red",
            "game" : {
                "red_blue" : {
                    "gameName": "Red and Blue",
                    "image" : "redBlue.png",
                    "songs" : {
                        "wild battle" : {
                            "linkID" : "NrS523dOHU4",
                            "title" : "Battle! Wild Pokémon"                            
                        },
                        "champion battle" : {
                            "linkID" : "nXgAj5KdAC0",
                            "title" : "Battle! Champion"                            
                        }
                    },
                    "answers" : [
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
                    "closeAnswers" : [
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

        "zelda" : {
            "seriesName" : "The Legend of Zelda",
            "seriesImage" : "zelda.png",
            "color": "green",
            "game" : {
                "windWaker" : {
                    "gameName": "The Wind Waker",
                    "image" : "windWaker.png",
                    "songs" : {
                        "dragon_roost " : {
                            "linkID" : "s7fqllhtdHI",
                            "title" : "Dragon Roost Island"                            
                        },
                        "mini_boss" : {
                            "linkID" : "XF24XSYYiDw",
                            "title" : "Mini Boss Battle"                            
                        }
                    },
                    "answers" : [
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
                        "zelda ww",
                        "loz ww",
                        "lozww"
                    ],
                    "closeAnswers" : [
                        "zelda",
                        "twilight princess",
                        "ocarina of time",
                        "phantom hourglass",
                        "spirit tracks",
                        "pokemon",
                        "pokemon gold",
                        "pokemon silver",
                        "pokemon crystal"
                    ]
                }
            }
        }

    }
}

`;