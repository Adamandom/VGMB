// should be the same format as the songs.json
// I only have it like this to avoid promises

let ALLSONGS_JSON =`{
    "series": {
        "Ace Attorney": {
            "seriesName": "Ace Attorney",
            "seriesColor": "red",
            "game": {
                "Phoenix Wright: Dual Destinies": {
                    "gameName": "Phoenix Wright: Dual Destinies",
                    "answers": ["phoenix wright: dual destinies", "dual destinies", "phoenix wright dual destinies", "phoenix wright: dual destinies", "ace attorney dual destinies", "ace attorney: dual destinies", "pwaadd", "pw aa dd", "pwaa dd"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_0": {
                            "title": "Cross Examination ~ Moderato",
                            "link": "https://youtu.be/HmTs0SJOjqo"
                        },
                        "ID_1": {
                            "title": "Logic Trinity",
                            "link": "https://youtu.be/CQpdHIaIe-4"
                        },
                        "ID_2": {
                            "title": "Phoenix Wright ~ Objection! 2013",
                            "link": "https://youtu.be/Yy7NVfkEsvQ"
                        },
                        "ID_3": {
                            "title": "Cross Examination ~ Allegro",
                            "link": "https://youtu.be/LICY7XMIye0"
                        },
                        "ID_4": {
                            "title": "Pursuit ~ Keep Pressing On",
                            "link": "https://youtu.be/JpTQ7fr2yeM"
                        },
                        "ID_5": {
                            "title": "Trucy's Theme ~ Child of Magic 2013",
                            "link": "https://youtu.be/NQaCuEkFFZU"
                        },
                        "ID_6": {
                            "title": "Investigation ~ Opening 2013",
                            "link": "https://youtu.be/Gl8TteaY0ig"
                        },
                        "ID_7": {
                            "title": "Florent L'Belle ~ Je suis L'Belle",
                            "link": "https://youtu.be/El52iOqCAks"
                        },
                        "ID_8": {
                            "title": "Simon Blackquill ~ Distorted Swordsmanship",
                            "link": "https://youtu.be/8Q0BwOvHzTk"
                        },
                        "ID_9": {
                            "title": "Apollo Justice ~ A New Chapter of Trials! 2013",
                            "link": "https://youtu.be/Y_EfUOJlBGY"
                        },
                        "ID_10": {
                            "title": "Lively People",
                            "link": "https://youtu.be/bXUTeyZBEWA"
                        },
                        "ID_11": {
                            "title": "Suspicious People",
                            "link": "https://youtu.be/hynQcpm71DY"
                        },
                        "ID_12": {
                            "title": "Difficult People",
                            "link": "https://youtu.be/VtkILcf6ijM"
                        },
                        "ID_13": {
                            "title": "Reminiscence ~ Wandering Heart",
                            "link": "https://youtu.be/7Hs1P2eSv0o"
                        },
                        "ID_14": {
                            "title": "Athena Cykes ~ Courtroom Révolutionnaire",
                            "link": "https://youtu.be/HmCF8txfZnQ"
                        },
                        "ID_15": {
                            "title": "Reminiscence ~ A Sad Memory",
                            "link": "https://youtu.be/n42kjrhOMzs"
                        },
                        "ID_16": {
                            "title": "Investigation ~ Core 2013",
                            "link": "https://youtu.be/3AtY_tT9iL0"
                        },
                        "ID_17": {
                            "title": "Won the Case! ~ Everyone's Victory",
                            "link": "https://youtu.be/KEzxmtjkeAc"
                        },
                        "ID_18": {
                            "title": "Ace Attorney 5 ~ End",
                            "link": "https://youtu.be/WfFvmxG-6fU"
                        },
                        "ID_19": {
                            "title": "Reminiscence ~ Departure from Regret",
                            "link": "https://youtu.be/uJy3Plbgt_U"
                        }
                    }
                },
                "Phoenix Wright: Ace Attorney": {
                    "gameName": "Phoenix Wright: Ace Attorney",
                    "answers": ["phoenix wright: ace attorney", "ace attorney", "phoenix wright ace attorney", "phoenix wright: ace attorney", "pwaa", "phoenix wright", "pw aa"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_40": {
                            "title": "Trial",
                            "link": "https://youtu.be/UEGVxLs6Sr0"
                        },
                        "ID_41": {
                            "title": "Logic and Trick",
                            "link": "https://youtu.be/GDP4ds-ozOI"
                        },
                        "ID_42": {
                            "title": "Questioning ~ Moderato 2001",
                            "link": "https://youtu.be/9_sAzyTCZzQ"
                        },
                        "ID_43": {
                            "title": "Phoenix Wright ~ Objection! 2001",
                            "link": "https://youtu.be/ANcuqk7x33o"
                        },
                        "ID_44": {
                            "title": "Questioning ~ Allegro 2001",
                            "link": "https://youtu.be/HK2VLhbSaoc"
                        },
                        "ID_45": {
                            "title": "Pressing Pursuit ~ Cornered",
                            "link": "https://youtu.be/UxnvGDK0WGM"
                        },
                        "ID_46": {
                            "title": "Telling the Truth 2001",
                            "link": "https://youtu.be/0nPfjHuKtw8"
                        },
                        "ID_47": {
                            "title": "Victory! ~ The First Victory",
                            "link": "https://youtu.be/SPOFjeHS_hc"
                        },
                        "ID_48": {
                            "title": "Maya Fey ~ Turnabout Sisters Theme 2001",
                            "link": "https://youtu.be/upOhRRYVGkA"
                        },
                        "ID_49": {
                            "title": "Investigation ~ Opening 2001",
                            "link": "https://youtu.be/_ItfF7ZGDgE"
                        },
                        "ID_50": {
                            "title": "Detention Center ~ Jailers' Elegy",
                            "link": "https://youtu.be/B8eTxPdU4sQ"
                        },
                        "ID_51": {
                            "title": "Dick Gumshoe ~ Detective Gumshoe, Pal",
                            "link": "https://youtu.be/pLtzOZe1vZI"
                        },
                        "ID_52": {
                            "title": "Marvin Grossberg ~ Old Age, Regret, Retribution",
                            "link": "https://youtu.be/dr4fdf8F3Yk"
                        },
                        "ID_53": {
                            "title": "Happy People",
                            "link": "https://youtu.be/oVbFMCFl9xE"
                        },
                        "ID_54": {
                            "title": "The Steel Samurai",
                            "link": "https://youtu.be/UPdY_f1ybn8"
                        },
                        "ID_55": {
                            "title": "Recollection ~ The DL-6 Incident",
                            "link": "https://youtu.be/V32y9gHJP0E"
                        },
                        "ID_56": {
                            "title": "Investigation ~ Core 2001",
                            "link": "https://youtu.be/e_FwZ6E5adA"
                        },
                        "ID_57": {
                            "title": "Recollection ~ Class Trial",
                            "link": "https://youtu.be/EtMfvQc-Rh8"
                        },
                        "ID_58": {
                            "title": "Turnabout Sisters Ballad",
                            "link": "https://youtu.be/Sz-m7l_QoEo"
                        },
                        "ID_59": {
                            "title": "End",
                            "link": "https://youtu.be/en8l-_-rBgw"
                        },
                        "ID_60": {
                            "title": "Ema Skye ~ Turnabout Sisters Theme 2005",
                            "link": "https://youtu.be/2FXO-QVjh9g"
                        },
                        "ID_61": {
                            "title": "The Blue Badger ~ I Want to Protect You",
                            "link": "https://youtu.be/5_tPakMnuyI"
                        },
                        "ID_62": {
                            "title": "Damon Gant ~ Swimming, Anyone?",
                            "link": "https://youtu.be/HNBhziViepg"
                        },
                        "ID_63": {
                            "title": "Rise from the Ashes - End",
                            "link": "https://youtu.be/ANcWZHFIcIM"
                        },
                        "ID_64": {
                            "title": "Jingle ~ It Can't End Here",
                            "link": "https://youtu.be/yQpyHftAF5U"
                        }
                    }
                },
                "Phoenix Wright: Justice for All": {
                    "gameName": "Phoenix Wright: Justice for All",
                    "answers": ["phoenix wright: justice for all", "phoenix wright justice for all", "phoenix wright: justice for all", "justice for all", "ace attorney justice for all", "ace attorney: justice for all", "pwaajfa", "pwaa jfa", "pw jfa", "phoenix wright ace attorney justice for all", "phoenix wright: ace attorney: justice for all", "phoenix wright: ace attorney justice for all"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_258": {
                            "title": "Courtroom Lobby ~ Another Overture",
                            "link": "https://youtu.be/3tgDWKlJsSM"
                        },
                        "ID_259": {
                            "title": "Trial",
                            "link": "https://youtu.be/_HaMSS7-lwQ"
                        },
                        "ID_260": {
                            "title": "Questioning ~ Moderato 2002",
                            "link": "https://youtu.be/lP06Gve7VWg"
                        },
                        "ID_261": {
                            "title": "Trick and Magic",
                            "link": "https://youtu.be/-i5tt2-V2SE"
                        },
                        "ID_262": {
                            "title": "Phoenix Wright ~ Objection! 2002",
                            "link": "https://youtu.be/36pwF_fh5b0"
                        },
                        "ID_263": {
                            "title": "Questioning ~ Allegro 2002",
                            "link": "https://youtu.be/gBfFRGY-vto"
                        },
                        "ID_264": {
                            "title": "Pressing Pursuit ~ Cross-Examine",
                            "link": "https://youtu.be/7Cl98sQPDhU"
                        },
                        "ID_265": {
                            "title": "Telling the Truth 2002",
                            "link": "https://youtu.be/wVkyy04CkTk"
                        },
                        "ID_266": {
                            "title": "Jingle ~ Can't Sleep on a Night Like This",
                            "link": "https://youtu.be/KepUb2l6K3E"
                        },
                        "ID_267": {
                            "title": "Psyche-Lock",
                            "link": "https://youtu.be/9yA3qrxxues"
                        },
                        "ID_268": {
                            "title": "Investigation ~ Opening 2002",
                            "link": "https://youtu.be/f54XlAqBDug"
                        },
                        "ID_269": {
                            "title": "Maya Fey ~ Turnabout Sisters Theme 2002",
                            "link": "https://youtu.be/GjmCbOFI1bk"
                        },
                        "ID_270": {
                            "title": "Detention Center ~ Elegy of Surveillance Cameras",
                            "link": "https://youtu.be/z6kKqU-FkRc"
                        },
                        "ID_271": {
                            "title": "Kurain Village",
                            "link": "https://youtu.be/VXS56M5wLJE"
                        },
                        "ID_272": {
                            "title": "Recollection ~ Scars Etched by Flame",
                            "link": "https://youtu.be/72LiIZ3M8jM"
                        },
                        "ID_273": {
                            "title": "Eccentric",
                            "link": "https://youtu.be/vYPL7ZN4E_o"
                        },
                        "ID_274": {
                            "title": "Berry Big Circus",
                            "link": "https://youtu.be/UjvOaYK7SgM"
                        },
                        "ID_275": {
                            "title": "More Happy People",
                            "link": "https://youtu.be/HtlWpGcCl5k"
                        },
                        "ID_276": {
                            "title": "Recollection ~ True Pain",
                            "link": "https://youtu.be/sAqnzsnw1m0"
                        },
                        "ID_277": {
                            "title": "Pearl Fey ~ Pearly Questioning",
                            "link": "https://youtu.be/sAM-XMc8OAc"
                        },
                        "ID_278": {
                            "title": "Investigation ~ Middle Stage 2002",
                            "link": "https://youtu.be/dcuK7tHFg6M"
                        },
                        "ID_279": {
                            "title": "Great Revival ~ Miles Edgeworth",
                            "link": "https://youtu.be/QI55FRv28Kw"
                        },
                        "ID_280": {
                            "title": "Hotline of Fate",
                            "link": "https://youtu.be/aC_-WxlTMVQ"
                        },
                        "ID_281": {
                            "title": "Investigation ~ Core 2002",
                            "link": "https://youtu.be/jNPkCfUHgtI"
                        },
                        "ID_282": {
                            "title": "Recollection ~ Steel Samurai's Ballad",
                            "link": "https://youtu.be/VzW7ou4UaZg"
                        },
                        "ID_283": {
                            "title": "Victory! ~ Another Victory",
                            "link": "https://youtu.be/-Q2X1uoWEdI"
                        },
                        "ID_284": {
                            "title": "End",
                            "link": "https://youtu.be/4GeSY3Kkbgc"
                        }
                    }
                },
                "Phoenix Wright: Trials and Tribulations": {
                    "gameName": "Phoenix Wright: Trials and Tribulations",
                    "answers": ["phoenix wright: trials and tribulations", "phoenix wright: ace attorney trials and tribulations", "trials and tribulations", "pwaatt", "pw aa tt", "pwaa tt", "phoenix wright trials and tribulations", "ace attorney trials and tribulations", "phoenix wright ace attorney trials and tribulations"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_285": {
                            "title": "Courtroom Lobby ~ Neverending Overture",
                            "link": "https://youtu.be/QI_0ECz59ug"
                        },
                        "ID_286": {
                            "title": "Trial",
                            "link": "https://youtu.be/_TePxy7Hc3M"
                        },
                        "ID_287": {
                            "title": "Questioning ~ Moderato 2004",
                            "link": "https://youtu.be/9IoF2nhr1Jk"
                        },
                        "ID_288": {
                            "title": "Phoenix Wright ~ Objection! 2004",
                            "link": "https://youtu.be/lpSpJqFVMtc"
                        },
                        "ID_289": {
                            "title": "Questioning ~ Allegro 2004",
                            "link": "https://youtu.be/b6pvnwwbNFA"
                        },
                        "ID_290": {
                            "title": "Pressing Pursuit ~ Caught",
                            "link": "https://youtu.be/wP1DJ_D4chA"
                        },
                        "ID_291": {
                            "title": "Telling the Truth 2004",
                            "link": "https://youtu.be/UtXiYk1WUwQ"
                        },
                        "ID_292": {
                            "title": "Dahlia Hawthorne ~ Distant Traces of Beauty",
                            "link": "https://youtu.be/5quxFte-97o"
                        },
                        "ID_293": {
                            "title": "Godot ~ The Fragrance of Black Coffee",
                            "link": "https://youtu.be/2DTjNriHboA"
                        },
                        "ID_294": {
                            "title": "Jingle ~ Can't Go Back to a Normal Life",
                            "link": "https://youtu.be/vru3V9XcNDc"
                        },
                        "ID_295": {
                            "title": "Investigation ~ Opening 2004",
                            "link": "https://youtu.be/_6nkTj26ghk"
                        },
                        "ID_296": {
                            "title": "Lordly Tailor Department Store",
                            "link": "https://youtu.be/JKXJSVafDag"
                        },
                        "ID_297": {
                            "title": "Detention Center ~ Prisoner's Elegy",
                            "link": "https://youtu.be/xBk1GIy3m4I"
                        },
                        "ID_298": {
                            "title": "Mask☆deMasque ~ Pleeeeease Listen!",
                            "link": "https://youtu.be/t1rjTDfLhLM"
                        },
                        "ID_299": {
                            "title": "Luke Atmey ~ I Just Want Love",
                            "link": "https://youtu.be/QJa9u_5_zK4"
                        },
                        "ID_300": {
                            "title": "Larry Butz ~ When Something Smells, It's Usually Me",
                            "link": "https://youtu.be/Ry87VcpXwjo"
                        },
                        "ID_301": {
                            "title": "Beauty Hermitage",
                            "link": "https://youtu.be/ZI0JFEHElUA"
                        },
                        "ID_302": {
                            "title": "Victor Kudo ~ A Painful Declaration, and a War Song",
                            "link": "https://youtu.be/MIQXomPzm2I"
                        },
                        "ID_303": {
                            "title": "Furio Tigre ~ Swingin' Tiger",
                            "link": "https://youtu.be/iFQ8wVjTPiE"
                        },
                        "ID_304": {
                            "title": "Recollection ~ You Have Regrets",
                            "link": "https://youtu.be/maqy9IuJjCo"
                        },
                        "ID_305": {
                            "title": "Recollection ~ The Scenery Seen from Dusky Bridge",
                            "link": "https://youtu.be/76RcshkmOYk"
                        },
                        "ID_306": {
                            "title": "Hazakura Temple",
                            "link": "https://youtu.be/yDHWjWSxj2s"
                        },
                        "ID_307": {
                            "title": "Investigation ~ Middle Stage 2004",
                            "link": "https://youtu.be/6TjCzeXciV0"
                        },
                        "ID_308": {
                            "title": "Recollection ~ The Bitter Taste of Truth",
                            "link": "https://youtu.be/S-DHBEW9Lc8"
                        },
                        "ID_309": {
                            "title": "Pressing Pursuit ~ Cornered 2004",
                            "link": "https://youtu.be/hU6SWlTmapk"
                        },
                        "ID_310": {
                            "title": "Victory! Endless Victory",
                            "link": "https://youtu.be/Hy-qT6qfZSA"
                        },
                        "ID_311": {
                            "title": "End",
                            "link": "https://youtu.be/8bzmOd8KP7c"
                        }
                    }
                },
                "Apollo Justice: Ace Attorney": {
                    "gameName": "Apollo Justice: Ace Attorney",
                    "answers": ["apollo justice: ace attorney", "apollo justice", "apollo justice ace attorney", "apollo justice: ace attorney"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_312": {
                            "title": "Courtroom Lobby ~ New Prelude",
                            "link": "https://youtu.be/4t7gYBQV_po"
                        },
                        "ID_313": {
                            "title": "Trial",
                            "link": "https://youtu.be/w_lPgaV2bXw"
                        },
                        "ID_314": {
                            "title": "Cross Examination ~ Moderate 2007",
                            "link": "https://youtu.be/D4ragdexomw"
                        },
                        "ID_315": {
                            "title": "Trance Logic",
                            "link": "https://youtu.be/MfG8_1JpEcs"
                        },
                        "ID_316": {
                            "title": "Cross Examination ~ Allegro 2007",
                            "link": "https://youtu.be/ZSUD7ccpZx0"
                        },
                        "ID_317": {
                            "title": "Tell the Truth 2007",
                            "link": "https://youtu.be/58uoTlVgRNU"
                        },
                        "ID_318": {
                            "title": "Thrill Theme ~ Suspense",
                            "link": "https://youtu.be/lUUOVls2GkM"
                        },
                        "ID_319": {
                            "title": "Trucy's Theme ~ Child of Magic",
                            "link": "https://youtu.be/nyeM6Kywxp0"
                        },
                        "ID_320": {
                            "title": "Ema Skye ~ Scientific Detective",
                            "link": "https://youtu.be/c7rywnWMLyc"
                        },
                        "ID_321": {
                            "title": "Jingle ~ That's All for Today",
                            "link": "https://youtu.be/f10LFrjzM30"
                        },
                        "ID_322": {
                            "title": "Percieve ~ Surging Eyes",
                            "link": "https://youtu.be/u6ikBJePm_w"
                        },
                        "ID_323": {
                            "title": "Detention Center ~ Tragicomic Interview",
                            "link": "https://youtu.be/ZrZ_pX0rK1M"
                        },
                        "ID_324": {
                            "title": "Eccentric 2007",
                            "link": "https://youtu.be/xLYLW8YLQ-8"
                        },
                        "ID_325": {
                            "title": "Investigation ~ Opening 2007",
                            "link": "https://youtu.be/mvOZR_ag2Ms"
                        },
                        "ID_326": {
                            "title": "Kitaki Family",
                            "link": "https://youtu.be/4Tnc50uX2e4"
                        },
                        "ID_327": {
                            "title": "Recollection ~ A Fate Smeared by Tricks and Gadgets",
                            "link": "https://youtu.be/jmZ4NoTDtsQ"
                        },
                        "ID_328": {
                            "title": "Recollection ~ A Hurt Fox",
                            "link": "https://youtu.be/AYVPqAmx6jU"
                        },
                        "ID_329": {
                            "title": "The Guitar's Serenade",
                            "link": "https://youtu.be/iQbbu_YAt2Y"
                        },
                        "ID_330": {
                            "title": "Troupe Gramarye",
                            "link": "https://youtu.be/HP3FMYYb12Q"
                        },
                        "ID_331": {
                            "title": "Ace Attorney 4 ~ End",
                            "link": "https://youtu.be/cURga_rrpcc"
                        },
                        "ID_332": {
                            "title": "Solitary Confinement ~ Darkness Theme",
                            "link": "https://youtu.be/zAf5yfgICrE"
                        },
                        "ID_333": {
                            "title": "Recollection ~ Forgotten Legend",
                            "link": "https://youtu.be/cywf8AbDi_4"
                        },
                        "ID_334": {
                            "title": "Psyche Lock 2007",
                            "link": "https://youtu.be/OK5H_1lxENE"
                        },
                        "ID_335": {
                            "title": "Investigation ~ Core 2007",
                            "link": "https://youtu.be/093VR-LJ6H8"
                        },
                        "ID_336": {
                            "title": "Drew Studio",
                            "link": "https://youtu.be/9ExdtJJs11E"
                        },
                        "ID_337": {
                            "title": "We Won the Case! ~ Our Victory",
                            "link": "https://youtu.be/cF5z4tmHG68"
                        }
                    }
                },
                "Ace Attorney Investigations": {
                    "gameName": "Ace Attorney Investigations",
                    "answers": ["ace attorney investigations", "investigations", "ace attorney investigations", "ace attorney: investigations", "ace attorney miles edgeworth", "ace attorney: miles edgeworth", "ace attorney miles edgeworth investigations", "ace attorney investigations miles edgeworth"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_338": {
                            "title": "Investigation ~ Opening 2009",
                            "link": "https://youtu.be/FQPoqK3yjiU"
                        },
                        "ID_339": {
                            "title": "Investigation ~ Middlegame 2009",
                            "link": "https://youtu.be/GwD6O7kouw8"
                        },
                        "ID_340": {
                            "title": "Investigation ~ Contradiction at the Crime Scene",
                            "link": "https://youtu.be/i7qxaCpfJa4"
                        },
                        "ID_341": {
                            "title": "Logic ~ The Way to the Truth",
                            "link": "https://youtu.be/H-a60ITJ2Ko"
                        },
                        "ID_342": {
                            "title": "Investigation ~ Core 2009",
                            "link": "https://youtu.be/osF8px-GVjw"
                        },
                        "ID_343": {
                            "title": "Confrontation ~ Moderato 2009",
                            "link": "https://youtu.be/PwGFsVyJJ0c"
                        },
                        "ID_344": {
                            "title": "Objection! 2009",
                            "link": "https://youtu.be/pTwkH3prwzE"
                        },
                        "ID_345": {
                            "title": "Confrontation ~ Allegro 2009",
                            "link": "https://youtu.be/KNBgKVtfJZM"
                        },
                        "ID_346": {
                            "title": "Confrontation ~ Presto 2009",
                            "link": "https://youtu.be/pucxhTspFrQ"
                        },
                        "ID_347": {
                            "title": "Pursuit ~ Lying Coldly",
                            "link": "https://youtu.be/7JveQT6DfYk"
                        },
                        "ID_348": {
                            "title": "Announce the Truth 2009",
                            "link": "https://youtu.be/Rz0IgN_MfmI"
                        },
                        "ID_349": {
                            "title": "Tricks and Gimmicks",
                            "link": "https://youtu.be/Rmqrjndx-oQ"
                        },
                        "ID_350": {
                            "title": "Tricks and Baroque",
                            "link": "https://youtu.be/fjMQdNpwrwA"
                        },
                        "ID_351": {
                            "title": "Jingle ~ Slight Break",
                            "link": "https://youtu.be/sJjwqSyj0RM"
                        },
                        "ID_352": {
                            "title": "Kay Faraday ~ The Great Truth Burglar",
                            "link": "https://youtu.be/nYJRsaJBZn4"
                        },
                        "ID_353": {
                            "title": "Noisy People",
                            "link": "https://youtu.be/5SgT5dBvG5g"
                        },
                        "ID_354": {
                            "title": "Interesting People",
                            "link": "https://youtu.be/6y_Ln5o28gQ"
                        },
                        "ID_355": {
                            "title": "Reminiscence ~ False Relations",
                            "link": "https://youtu.be/QmuUS7zSOac"
                        },
                        "ID_356": {
                            "title": "Reproducing the Scene",
                            "link": "https://youtu.be/PJpIjCuV1vk"
                        },
                        "ID_357": {
                            "title": "Court ~ Guardians of the Law",
                            "link": "https://youtu.be/SfLR3zsIXB4"
                        },
                        "ID_358": {
                            "title": "Tyrell Badd ~ The Truth isn't Sweet",
                            "link": "https://youtu.be/R9Tex8sMZDk"
                        },
                        "ID_359": {
                            "title": "Reminiscence ~ KG-8 Case",
                            "link": "https://youtu.be/wYValsn56yA"
                        },
                        "ID_360": {
                            "title": "Dick Gumshoe ~ I can do it when it counts, pal!",
                            "link": "https://youtu.be/6vEwsdbrums"
                        },
                        "ID_361": {
                            "title": "Solution! ~ Splendid Deduction",
                            "link": "https://youtu.be/fx1QItiBqEs"
                        },
                        "ID_362": {
                            "title": "Miles Edgeworth ~ Great Revival 2009",
                            "link": "https://youtu.be/J5xsvQinV3Q"
                        }
                    }
                },
                "Spirit of Justice": {
                    "gameName": "Spirit of Justice",
                    "answers": ["spirit of justice", "spirit of justice", "ace attorney spirit of justice", "ace attorney: spirit of justice", "phoenix wright: ace attorney: spirit of justice", "phoenix wright ace attorney spirit of justice", "pw aa soj", "pwsoj", "aasoj", "pwaasoj", "aa soj", "pw soj"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_363": {
                            "title": "Defendant's Lobby ~ Prelude to the Revolution",
                            "link": "https://youtu.be/fSRxjWIJQd0"
                        },
                        "ID_364": {
                            "title": "Court Begins Abroad (Khura’in)",
                            "link": "https://youtu.be/IG7g8l7aEDc"
                        },
                        "ID_365": {
                            "title": "Logic Construct",
                            "link": "https://youtu.be/sF0UO7_UzC0"
                        },
                        "ID_366": {
                            "title": "Cross Examination ~ Moderato 2016",
                            "link": "https://youtu.be/YOkrI79UzzM"
                        },
                        "ID_367": {
                            "title": "Divination Seance ~ Last Sights",
                            "link": "https://youtu.be/6aNSb5Ljn-8"
                        },
                        "ID_368": {
                            "title": "Phoenix Wright ~ Objection! 2016",
                            "link": "https://youtu.be/0JpvZk3Xcxc"
                        },
                        "ID_369": {
                            "title": "Cross Examination ~ Allegro 2016",
                            "link": "https://youtu.be/7_InP3Qe2yg"
                        },
                        "ID_370": {
                            "title": "Pursuit ~ Cornering Together",
                            "link": "https://youtu.be/QV1B7oDbC-k"
                        },
                        "ID_371": {
                            "title": "Confess The Truth 2016",
                            "link": "https://youtu.be/uNWH9LBO69o"
                        },
                        "ID_372": {
                            "title": "Jingle ~ Take a Breather",
                            "link": "https://youtu.be/nrwNOXCjg_A"
                        },
                        "ID_373": {
                            "title": "It's show time!",
                            "link": "https://youtu.be/auWSVFxoDTg"
                        },
                        "ID_374": {
                            "title": "Troupe Gramarye 2016",
                            "link": "https://youtu.be/sNYVpQOG3FM"
                        },
                        "ID_375": {
                            "title": "Investigation ~ Opening 2016",
                            "link": "https://youtu.be/bbBrCya-sLk"
                        },
                        "ID_376": {
                            "title": "Ema Skye ~ The Scientific Detective 2016",
                            "link": "https://youtu.be/fvT0hP22vHU"
                        },
                        "ID_377": {
                            "title": "Detention Center ~ Cold-Glass Elegy",
                            "link": "https://youtu.be/LVpfjermoQI"
                        },
                        "ID_378": {
                            "title": "Apollo Justice ~ I'm Fine! 2013",
                            "link": "https://youtu.be/wsiT5a4UyqE"
                        },
                        "ID_379": {
                            "title": "Defendant Lobby's ~ Prelude to the Truth",
                            "link": "https://youtu.be/0gz3XNIM4YQ"
                        },
                        "ID_380": {
                            "title": "Court Begins (California)",
                            "link": "https://youtu.be/iA3lgdGcIlM"
                        },
                        "ID_381": {
                            "title": "Nahyuta Sahdmadhi ~ The Last Rites Prosecutor",
                            "link": "https://youtu.be/JNpRPEY1D4E"
                        },
                        "ID_382": {
                            "title": "Apollo Justice ~ A New Chapter of Trials! 2016",
                            "link": "https://youtu.be/jfIcDfHkC68"
                        },
                        "ID_383": {
                            "title": "Mr. Reus - The Masked Magician",
                            "link": "https://youtu.be/gk7Rfl4rpHo"
                        },
                        "ID_384": {
                            "title": "Reminiscence - Smile, No Matter What",
                            "link": "https://youtu.be/ESyFukRrUCc"
                        },
                        "ID_385": {
                            "title": "Maya Fey ~ Turnabout Sisters 2016",
                            "link": "https://youtu.be/SxyaeDGdpJI"
                        },
                        "ID_386": {
                            "title": "Investigation Opening Abroad",
                            "link": "https://youtu.be/Vvy9MFJjiRU"
                        },
                        "ID_387": {
                            "title": "Rayfa Padma Khura'in ~ The Unyielding Medium Princess",
                            "link": "https://youtu.be/Zrgd7fUnjmo"
                        },
                        "ID_388": {
                            "title": "The Revolutionaries ~ Dragons of Rebellion",
                            "link": "https://youtu.be/KMeRjoHp10E"
                        },
                        "ID_389": {
                            "title": "Detention Center ~ Iron-Bar Elegy",
                            "link": "https://youtu.be/rUvBgltIohQ"
                        },
                        "ID_390": {
                            "title": "Strange People",
                            "link": "https://youtu.be/1b_7kq9CdPI"
                        },
                        "ID_391": {
                            "title": "Reminiscence ~ A Final Conversation",
                            "link": "https://youtu.be/o5wyddM1Dc0"
                        },
                        "ID_392": {
                            "title": "Reminiscence ~ Farewell, Once Again",
                            "link": "https://youtu.be/4FwI5k3rLwc"
                        },
                        "ID_393": {
                            "title": "Athena Cykes ~ Courtroom Révolutionnaire 2016",
                            "link": "https://youtu.be/4WhZInUkekQ"
                        },
                        "ID_394": {
                            "title": "Investigation ~ Core 2016",
                            "link": "https://youtu.be/Hd_VBRY9zOU"
                        },
                        "ID_395": {
                            "title": "Investigation ~ Core Abroad",
                            "link": "https://youtu.be/giAgPUuBh54"
                        },
                        "ID_396": {
                            "title": "A Cornered Heart",
                            "link": "https://youtu.be/-L29-dbnY7k"
                        },
                        "ID_397": {
                            "title": "Won the Case! ~ Each of Their Victories",
                            "link": "https://youtu.be/zOTpymVr4us"
                        },
                        "ID_398": {
                            "title": "End (Credits Theme)",
                            "link": "https://youtu.be/35ABpHTarEU"
                        }
                    }
                }
            }
        },
        "Ape Escape": {
            "seriesName": "Ape Escape",
            "seriesColor": "red",
            "game": {
                "Ape Escape 2": {
                    "gameName": "Ape Escape 2",
                    "answers": ["ape escape 2", "ape escape 2", "ae2", "apeescape2", "apeescape 2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_566": {
                            "title": "Theme Tune (Title Screen)",
                            "link": "https://youtu.be/PLH1raKAKvs"
                        },
                        "ID_567": {
                            "title": "Monkeys on Parade!",
                            "link": "https://youtu.be/nTKFoBsecAg"
                        },
                        "ID_568": {
                            "title": "The Beginning",
                            "link": "https://youtu.be/ZCnW9gepAT8"
                        },
                        "ID_569": {
                            "title": "Liberty Island",
                            "link": "https://youtu.be/-2aleNGqOuU"
                        },
                        "ID_570": {
                            "title": "Breezy Village",
                            "link": "https://youtu.be/W0y_6ALGdU4"
                        },
                        "ID_571": {
                            "title": "Port Calm",
                            "link": "https://youtu.be/kefMnYavYSE"
                        },
                        "ID_572": {
                            "title": "Viva Apespania!",
                            "link": "https://youtu.be/fhdE89KBvD8"
                        },
                        "ID_573": {
                            "title": "Castle Frightmare",
                            "link": "https://youtu.be/OJN4PRjWmXE"
                        },
                        "ID_574": {
                            "title": "Vita-Z Factory",
                            "link": "https://youtu.be/eVtiMZgTNZo"
                        },
                        "ID_575": {
                            "title": "Casino City",
                            "link": "https://youtu.be/3GKXeeN8RQU"
                        },
                        "ID_576": {
                            "title": "Ninja Hideout",
                            "link": "https://youtu.be/z9RIMx4BmBI"
                        },
                        "ID_577": {
                            "title": "Snowball Mountain",
                            "link": "https://youtu.be/uuP8I6uxyeY"
                        },
                        "ID_578": {
                            "title": "Snowball Ski Slope",
                            "link": "https://youtu.be/q54MKVtOAmw"
                        },
                        "ID_579": {
                            "title": "Lookout Valley",
                            "link": "https://youtu.be/O-YjvueHnKQ"
                        },
                        "ID_580": {
                            "title": "Blue Baboon",
                            "link": "https://youtu.be/5OD48Hh5bMc"
                        },
                        "ID_581": {
                            "title": "Enter the Monkey",
                            "link": "https://youtu.be/wkyTun40CBc"
                        },
                        "ID_582": {
                            "title": "Simian Citadel",
                            "link": "https://youtu.be/eKhXO2LXdTw"
                        },
                        "ID_583": {
                            "title": "Panic Pyramid",
                            "link": "https://youtu.be/mLVLbeuQTL8"
                        },
                        "ID_584": {
                            "title": "Pirate Isle",
                            "link": "https://youtu.be/dmnLUvWEwsw"
                        },
                        "ID_585": {
                            "title": "Land of the Apes",
                            "link": "https://youtu.be/2awFAEM2n2Y"
                        },
                        "ID_586": {
                            "title": "Monkey Hot Spring",
                            "link": "https://youtu.be/WdZ_f8NMzA8"
                        },
                        "ID_587": {
                            "title": "Monkey Ski Slope",
                            "link": "https://youtu.be/RZbu4PXlQVA"
                        },
                        "ID_588": {
                            "title": "The Lost Valley",
                            "link": "https://youtu.be/VXF6EUWdyRA"
                        },
                        "ID_589": {
                            "title": "Skyscraper City",
                            "link": "https://youtu.be/JDaJBGxDulM"
                        },
                        "ID_590": {
                            "title": "Code C.H.I.M.P.",
                            "link": "https://youtu.be/d5LRUMXYkDQ"
                        },
                        "ID_591": {
                            "title": "Code C.H.I.M.P. II",
                            "link": "https://youtu.be/6WJrJjAI-8U"
                        },
                        "ID_592": {
                            "title": "Moon Base 1",
                            "link": "https://youtu.be/2ZhpAM8jzjw"
                        },
                        "ID_593": {
                            "title": "Moon Base 2",
                            "link": "https://youtu.be/JsnxikaTswc"
                        },
                        "ID_594": {
                            "title": "Scheming Specter",
                            "link": "https://youtu.be/BB-z64PfDP8"
                        },
                        "ID_595": {
                            "title": "Song of the Freaky Monkey Five",
                            "link": "https://youtu.be/96sFrd-tg3E"
                        },
                        "ID_596": {
                            "title": "Escape the Ape in You!",
                            "link": "https://youtu.be/IP486wsJdCA"
                        },
                        "ID_597": {
                            "title": "Freaky Monkey Five Battle!",
                            "link": "https://youtu.be/3rghC8ct9rE"
                        },
                        "ID_598": {
                            "title": "Giant Yellow Monkey Battle!",
                            "link": "https://youtu.be/5xPnx8JQe6Q"
                        },
                        "ID_599": {
                            "title": "Battle with Specter!",
                            "link": "https://youtu.be/6717X9LuXeo"
                        },
                        "ID_600": {
                            "title": "Specter's Theme",
                            "link": "https://youtu.be/ilJ2PMO9zvk"
                        },
                        "ID_601": {
                            "title": "Final Battle with Specter!",
                            "link": "https://youtu.be/rwam42o5poA"
                        },
                        "ID_602": {
                            "title": "Ending 1",
                            "link": "https://youtu.be/fh4_iXeVqoc"
                        },
                        "ID_603": {
                            "title": "Ending 2",
                            "link": "https://youtu.be/V1LwURLly7w"
                        },
                        "ID_604": {
                            "title": "Staff Credits",
                            "link": "https://youtu.be/jI5uycdJO4c"
                        },
                        "ID_605": {
                            "title": "Travel Station",
                            "link": "https://youtu.be/MRaHcP9j1Sg"
                        },
                        "ID_606": {
                            "title": "Gadget Trainer",
                            "link": "https://youtu.be/_CAiHb_FxZY"
                        },
                        "ID_607": {
                            "title": "New Gadget",
                            "link": "https://youtu.be/2eU4LQo0XbU"
                        },
                        "ID_608": {
                            "title": "Stage Cleared!",
                            "link": "https://youtu.be/AZJ0zSFwzrk"
                        },
                        "ID_609": {
                            "title": "Stage Perfectly Cleared!",
                            "link": "https://youtu.be/JEEOcwzpMCw"
                        },
                        "ID_610": {
                            "title": "Monkey Soccer!",
                            "link": "https://youtu.be/YATxtUgLEwg"
                        },
                        "ID_611": {
                            "title": "Kick Off!",
                            "link": "https://youtu.be/PSbU_DdGt6s"
                        },
                        "ID_612": {
                            "title": "Gotcha Rhythm",
                            "link": "https://youtu.be/XO7_unkLj3A"
                        },
                        "ID_613": {
                            "title": "Monkeys' Gonna Getchu!",
                            "link": "https://youtu.be/1w8SULf1oaQ"
                        },
                        "ID_614": {
                            "title": "Monkey Chorus",
                            "link": "https://youtu.be/sdoVBIsqiAc"
                        },
                        "ID_615": {
                            "title": "Monkey Climber",
                            "link": "https://youtu.be/KH_RYm-g11o"
                        },
                        "ID_616": {
                            "title": "Stage Intro",
                            "link": "https://youtu.be/0nhFjNioOJs"
                        },
                        "ID_617": {
                            "title": "All Done!",
                            "link": "https://youtu.be/W-sUh3ajAGg"
                        }
                    }
                }
            }
        },
        "Bayonetta": {
            "seriesName": "Bayonetta",
            "seriesColor": "red",
            "game": {
                "Bayonetta 2": {
                    "gameName": "Bayonetta 2",
                    "answers": ["bayonetta 2", "bayonetta2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1080": {
                            "title": "Moon River (Climax Mix)",
                            "link": "https://youtu.be/sXhhdNL05sY"
                        }
                    }
                },
                "Bayonetta": {
                    "gameName": "Bayonetta",
                    "answers": ["bayonetta", "bayonetta 1", "bayonetta 1"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1081": {
                            "title": "Fly Me to the Moon (Climax Mix)",
                            "link": "https://youtu.be/EV6E13xODyA"
                        }
                    }
                }
            }
        },
        "BioShock": {
            "seriesName": "BioShock",
            "seriesColor": "red",
            "game": {
                "BioShock Infinite": {
                    "gameName": "BioShock Infinite",
                    "answers": ["bioshock infinite"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_934": {
                            "title": "Will The Circle Be Unbroken (Choral version)",
                            "link": "https://youtu.be/LAIS-ADK6c8"
                        },
                        "ID_935": {
                            "title": "Lutece",
                            "link": "https://youtu.be/viO_5aaF0zc"
                        },
                        "ID_936": {
                            "title": "Will The Circle Be Unbroken (Full)",
                            "link": "https://youtu.be/9F1l6xXLSI0"
                        },
                        "ID_937": {
                            "title": "Solace",
                            "link": "https://youtu.be/38ms-WVWI9w"
                        },
                        "ID_938": {
                            "title": "God Only Knows",
                            "link": "https://youtu.be/x7ogV49WGco"
                        }
                    }
                }
            }
        },
        "Catherine": {
            "seriesName": "Catherine",
            "seriesColor": "red",
            "game": {
                "Catherine": {
                    "gameName": "Catherine",
                    "answers": ["catherine"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_668": {
                            "title": "Yo",
                            "link": "https://youtu.be/fkweKi2ONDE"
                        },
                        "ID_669": {
                            "title": "Roux",
                            "link": "https://youtu.be/9eMNwIezQSg"
                        },
                        "ID_670": {
                            "title": "Also Sprach Brooks",
                            "link": "https://youtu.be/PCZs1P4ZOJQ"
                        },
                        "ID_671": {
                            "title": "Pandemonium",
                            "link": "https://youtu.be/VYept9efrOw"
                        },
                        "ID_672": {
                            "title": "R30's Melancholy",
                            "link": "https://youtu.be/0M3OKODFBBg"
                        },
                        "ID_673": {
                            "title": "Zigeunerweisen Sarasate'",
                            "link": "https://youtu.be/R1acph7DOac"
                        },
                        "ID_674": {
                            "title": "Rapunzel -Game Play-",
                            "link": "https://youtu.be/aTRhtP6gOqA"
                        },
                        "ID_675": {
                            "title": "Holst Planets Suite Jupiter",
                            "link": "https://youtu.be/pNCyJohA_1U"
                        },
                        "ID_676": {
                            "title": "Dvorak Symphony No. 9 in E minor From the New World 1st Movement",
                            "link": "https://youtu.be/Q06iJrlVY5k"
                        },
                        "ID_677": {
                            "title": "Rossini William Tell Overture Part 2 The Storm and Part 3 The Ranz des",
                            "link": "https://youtu.be/EsuJth9FXec"
                        },
                        "ID_678": {
                            "title": "Mussorgsky - Pictures at an Exhibition The Hut on Fowl's Legs",
                            "link": "https://youtu.be/ZIDo4dLlITc"
                        },
                        "ID_679": {
                            "title": "Bizet L'Arlésienne Second Suite Farandole",
                            "link": "https://youtu.be/-MzPga31K98"
                        },
                        "ID_680": {
                            "title": "Chopin Revolutionary Etude",
                            "link": "https://youtu.be/IbV1awjnNm8"
                        },
                        "ID_681": {
                            "title": "Handel Messiah Hallelujah Chorus",
                            "link": "https://youtu.be/3vx5NcLA3nc"
                        },
                        "ID_682": {
                            "title": "Chopin Piano Sonata No. 2 Funeral March 3rd Movement",
                            "link": "https://youtu.be/3MkHe--TcM0"
                        }
                    }
                }
            }
        },
        "Celeste": {
            "seriesName": "Celeste",
            "seriesColor": "red",
            "game": {
                "Celeste": {
                    "gameName": "Celeste",
                    "answers": ["celeste"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_618": {
                            "title": "Prologue",
                            "link": "https://youtu.be/Ctuo3ws3EKs"
                        },
                        "ID_619": {
                            "title": "First Steps",
                            "link": "https://youtu.be/N8OHSXvneOE"
                        },
                        "ID_620": {
                            "title": "Resurrections",
                            "link": "https://youtu.be/1rwAvUvvQzQ"
                        },
                        "ID_621": {
                            "title": "Awake",
                            "link": "https://youtu.be/BFVyvGmwlmk"
                        },
                        "ID_622": {
                            "title": "Postcard from Celeste Mountain",
                            "link": "https://youtu.be/V8qOjmWIPKs"
                        },
                        "ID_623": {
                            "title": "Checking In",
                            "link": "https://youtu.be/fOzvP1I5tLU"
                        },
                        "ID_624": {
                            "title": "Spirit of Hospitality",
                            "link": "https://youtu.be/NRpcwd9MSSE"
                        },
                        "ID_625": {
                            "title": "Scattered and Lost",
                            "link": "https://youtu.be/0etenwnI1wo"
                        },
                        "ID_626": {
                            "title": "Golden",
                            "link": "https://youtu.be/mr-SWzqNpM0"
                        },
                        "ID_627": {
                            "title": "Anxiety",
                            "link": "https://youtu.be/FMuQ11tVJnk"
                        },
                        "ID_628": {
                            "title": "Quiet and Falling",
                            "link": "https://youtu.be/FjG0ivBT4lQ"
                        },
                        "ID_629": {
                            "title": "In the Mirror",
                            "link": "https://youtu.be/bXfHKEaDg4s"
                        },
                        "ID_630": {
                            "title": "Madeline and Theo",
                            "link": "https://youtu.be/__oZ-LYZ8pU"
                        },
                        "ID_631": {
                            "title": "Starjump",
                            "link": "https://youtu.be/dTIeaqNXseY"
                        },
                        "ID_632": {
                            "title": "Reflection",
                            "link": "https://youtu.be/QfhUSYq7jEs"
                        },
                        "ID_633": {
                            "title": "Confronting Myself",
                            "link": "https://youtu.be/b_oEDGONSc4"
                        },
                        "ID_634": {
                            "title": "Little Goth",
                            "link": "https://youtu.be/oHdSK43cIf8"
                        },
                        "ID_635": {
                            "title": "Reach for the Summit",
                            "link": "https://youtu.be/iDVM9KED46Q"
                        },
                        "ID_636": {
                            "title": "Exhale",
                            "link": "https://youtu.be/q7QMTo-P6H0"
                        },
                        "ID_637": {
                            "title": "Heart of the Mountain",
                            "link": "https://youtu.be/DNOuancg5RY"
                        },
                        "ID_638": {
                            "title": "My Dearest Friends",
                            "link": "https://youtu.be/VHN63n9y1vg"
                        },
                        "ID_639": {
                            "title": "Forsaken City (Sever the Skyline Mix)",
                            "link": "https://youtu.be/6LbXujfutWk"
                        },
                        "ID_640": {
                            "title": "Old Site (Black Moonrise Mix)",
                            "link": "https://youtu.be/6eeIEMOQw4s"
                        },
                        "ID_641": {
                            "title": "Celestial Resort (Good Karma Mix)",
                            "link": "https://youtu.be/X-fmYK81MUQ"
                        },
                        "ID_642": {
                            "title": "Golden Ridge (Golden Feather Mix)",
                            "link": "https://youtu.be/AgDYV_IbPuo"
                        },
                        "ID_643": {
                            "title": "Mirror Temple (Mirror Magic Mix)",
                            "link": "https://youtu.be/iKnwVvXkWq0"
                        },
                        "ID_644": {
                            "title": "Reflection (Center of the Earth Mix)",
                            "link": "https://youtu.be/qJXKBLeXK9c"
                        },
                        "ID_645": {
                            "title": "Summit (No More Running Mix)",
                            "link": "https://youtu.be/_YLk0kJ3Naw"
                        },
                        "ID_646": {
                            "title": "The Core (Say Goodbye Mix)",
                            "link": "https://youtu.be/HoRvLKzNZWQ"
                        },
                        "ID_647": {
                            "title": "Area 1 Demo",
                            "link": "https://youtu.be/N0rWxhSSFLg"
                        }
                    }
                },
                "Celeste: Farewell": {
                    "gameName": "Celeste: Farewell",
                    "answers": ["celeste: farewell", "celeste", "celeste farewell", "celeste: farewell", "farewell"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_648": {
                            "title": "The Empty Space Above",
                            "link": "https://youtu.be/sciyyflf8c8"
                        },
                        "ID_649": {
                            "title": "Fear of the Unknown",
                            "link": "https://youtu.be/9wob-o9k7l0"
                        },
                        "ID_650": {
                            "title": "Joy of Remembrance",
                            "link": "https://youtu.be/CYQ43fwgW7Y"
                        },
                        "ID_651": {
                            "title": "In Stasis",
                            "link": "https://youtu.be/1ALFlNdxkx4"
                        },
                        "ID_652": {
                            "title": "Crash",
                            "link": "https://youtu.be/qa225q780u8"
                        },
                        "ID_653": {
                            "title": "Beyond the Heart",
                            "link": "https://youtu.be/K3HzzcI1cxE"
                        },
                        "ID_654": {
                            "title": "Final Defiance",
                            "link": "https://youtu.be/ccQfqKO2-bs"
                        },
                        "ID_655": {
                            "title": "Futility",
                            "link": "https://youtu.be/ZjLOKedxEoI"
                        },
                        "ID_656": {
                            "title": "Reconciliation",
                            "link": "https://youtu.be/RB0q5a9zVdQ"
                        },
                        "ID_657": {
                            "title": "Farewell",
                            "link": "https://youtu.be/9TczL8fJi-0"
                        },
                        "ID_658": {
                            "title": "The Woman and the Bird",
                            "link": "https://youtu.be/qeKPj2vLH2c"
                        },
                        "ID_659": {
                            "title": "Vovô e Vovó",
                            "link": "https://youtu.be/6kxGop2qSA8"
                        },
                        "ID_660": {
                            "title": "wavedash.ppt",
                            "link": "https://youtu.be/nI-u3opgki8"
                        }
                    }
                }
            }
        },
        "Danganronpa": {
            "seriesName": "Danganronpa",
            "seriesColor": "red",
            "game": {
                "Trigger Happy Havoc": {
                    "gameName": "Trigger Happy Havoc",
                    "answers": ["trigger happy havoc", "danganronpa", "dr1", "trigger happy havoc", "dr ttt", "drttt", "dr ttt", "dangan ronpa"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_162": {
                            "title": "DANGANRONPA",
                            "link": "https://youtu.be/JeitvjG-dgI"
                        },
                        "ID_163": {
                            "title": "Beautiful Days",
                            "link": "https://youtu.be/m5K9CIf-XoQ"
                        },
                        "ID_164": {
                            "title": "Beautiful Dead",
                            "link": "https://youtu.be/3WZb20NinCs"
                        },
                        "ID_165": {
                            "title": "Class Trial (Dawn Edition)",
                            "link": "https://youtu.be/5FbB_obzUNA"
                        },
                        "ID_166": {
                            "title": "Mr. Monokuma's Tutoring",
                            "link": "https://youtu.be/zpkl30bTHhw"
                        },
                        "ID_167": {
                            "title": "BOX 15",
                            "link": "https://youtu.be/xOpHT6gZ0Rs"
                        },
                        "ID_168": {
                            "title": "DISTRUST",
                            "link": "https://youtu.be/7Sbcm-Hb8Sk"
                        },
                        "ID_169": {
                            "title": "Desire for Execution",
                            "link": "https://youtu.be/FHlKfNSiM2c"
                        },
                        "ID_170": {
                            "title": "Trial Underground",
                            "link": "https://youtu.be/tJlAxq2WcVI"
                        },
                        "ID_171": {
                            "title": "M.T.B.",
                            "link": "https://youtu.be/AYsaZnce3ig"
                        },
                        "ID_172": {
                            "title": "Discussion -BREAK-",
                            "link": "https://youtu.be/NJ7g-RQQYzg"
                        },
                        "ID_173": {
                            "title": "Despair Pollution Noise Music",
                            "link": "https://youtu.be/9hn3gBV-nYc"
                        },
                        "ID_174": {
                            "title": "SUPER M.T.B.",
                            "link": "https://youtu.be/fsqfRUCSELU"
                        },
                        "ID_175": {
                            "title": "Welcome to Despair Academy",
                            "link": "https://youtu.be/pvXUPQDvpd4"
                        },
                        "ID_176": {
                            "title": "Beautiful Morning",
                            "link": "https://youtu.be/-fxT8Ev1AvU"
                        },
                        "ID_177": {
                            "title": "Climax Reasoning",
                            "link": "https://youtu.be/e0dZnWkzv2U"
                        },
                        "ID_178": {
                            "title": "Mr. Monokuma's Lesson",
                            "link": "https://youtu.be/ELfxtdEakhk"
                        },
                        "ID_179": {
                            "title": "SUPER FINAL M.T.B.",
                            "link": "https://youtu.be/kIwKwtYebcE"
                        },
                        "ID_180": {
                            "title": "BOX 16",
                            "link": "https://youtu.be/p4z_RMGB414"
                        },
                        "ID_181": {
                            "title": "Discussion -HEAT UP-",
                            "link": "https://youtu.be/HgOs-J9Pytc"
                        },
                        "ID_182": {
                            "title": "Flashing Anagram",
                            "link": "https://youtu.be/cTrVBMsVPb0"
                        },
                        "ID_183": {
                            "title": "New World Order",
                            "link": "https://youtu.be/m3EHCTP3jic"
                        },
                        "ID_184": {
                            "title": "Goodbye, Despair Academy",
                            "link": "https://youtu.be/nMTloVZ-QLo"
                        }
                    }
                },
                "Goodbye Despair": {
                    "gameName": "Goodbye Despair",
                    "answers": ["goodbye despair", "danganronpa 2", "super danganronpa", "super dangan ronpa", "super danganronpa 2", "super dangan ronpa 2", "sdr2", "dr2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_185": {
                            "title": "Beautiful Ruin",
                            "link": "https://youtu.be/P-fMDaPFXME"
                        },
                        "ID_186": {
                            "title": "Beautiful Days [Piano Arrangement]",
                            "link": "https://youtu.be/mESVTvnIVnw"
                        },
                        "ID_187": {
                            "title": "Ms. Monomi's Practice Lesson",
                            "link": "https://youtu.be/emEg0zGS7KY"
                        },
                        "ID_188": {
                            "title": "Ikoroshia",
                            "link": "https://youtu.be/gCfpmW6s37U"
                        },
                        "ID_189": {
                            "title": "Tropical Despair",
                            "link": "https://youtu.be/zlCho8m4Zyc"
                        },
                        "ID_190": {
                            "title": "Third Island Theme",
                            "link": "https://youtu.be/dtsSngpkwKc"
                        },
                        "ID_191": {
                            "title": "Welcome DANGAN IsLand!! [OP Ver]",
                            "link": "https://youtu.be/5kHtDxCMa64"
                        },
                        "ID_192": {
                            "title": "P.T.A.",
                            "link": "https://youtu.be/hSdokoS408s"
                        },
                        "ID_193": {
                            "title": "A Dead End to the Ocean's Aroma",
                            "link": "https://youtu.be/uoh-Z_TS_xE"
                        },
                        "ID_194": {
                            "title": "Objection -CROSS SWORD-",
                            "link": "https://youtu.be/mymjF4AZJrg"
                        },
                        "ID_195": {
                            "title": "Suguikoroshia",
                            "link": "https://youtu.be/-tq5xapLVp0"
                        },
                        "ID_196": {
                            "title": "Class Trial - Future Part",
                            "link": "https://youtu.be/5F26Vt1Q2-E"
                        },
                        "ID_197": {
                            "title": "ANAGRAM.NET",
                            "link": "https://youtu.be/RK6R94HMgpM"
                        },
                        "ID_198": {
                            "title": "HYPER P.T.A.",
                            "link": "https://youtu.be/PnbAZMQ-jq0"
                        },
                        "ID_199": {
                            "title": "DIVE DRIVE",
                            "link": "https://youtu.be/HP7r1TVINsg"
                        },
                        "ID_200": {
                            "title": "HYPER ULTRA P.T.A.",
                            "link": "https://youtu.be/AyFrgi3emaM"
                        },
                        "ID_201": {
                            "title": "Fifth Island Theme",
                            "link": "https://youtu.be/PNY4F9im83k"
                        },
                        "ID_202": {
                            "title": "Alter Ego of the New World",
                            "link": "https://youtu.be/mxc-QIS5gbs"
                        },
                        "ID_203": {
                            "title": "Ekoroshia",
                            "link": "https://youtu.be/xjbgj2V6-o0"
                        },
                        "ID_204": {
                            "title": "Let Us Sing of a Hollow Victory",
                            "link": "https://youtu.be/yLaiZTOGTkA"
                        },
                        "ID_205": {
                            "title": "The Day Before the Future",
                            "link": "https://youtu.be/4ScJ__5-cso"
                        },
                        "ID_206": {
                            "title": "Searching the Twilight",
                            "link": "https://youtu.be/jzLJwzHI14s"
                        }
                    }
                },
                "Killing Harmony": {
                    "gameName": "Killing Harmony",
                    "answers": ["killing harmony", "danganronpa 3", "dangan ronpa 3", "danganronpa v3", "dr v3", "drv3", "dangan ronpa v3"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_207": {
                            "title": "EXISAL TRIBE",
                            "link": "https://youtu.be/ruP_SAaxiNQ"
                        },
                        "ID_208": {
                            "title": "Beautiful Lie",
                            "link": "https://youtu.be/-SnTpTE575M"
                        },
                        "ID_209": {
                            "title": "Anagram. NEW",
                            "link": "https://youtu.be/fv-fSZZ_iT0"
                        },
                        "ID_210": {
                            "title": "Living in a Lazy Parallel World",
                            "link": "https://youtu.be/H3klCeCLwww"
                        },
                        "ID_211": {
                            "title": "Rise of the Ultimates",
                            "link": "https://youtu.be/cQbDAuVbDZY"
                        },
                        "ID_212": {
                            "title": "Rise and Shine, Ursine!",
                            "link": "https://youtu.be/KOI5D928mvk"
                        },
                        "ID_213": {
                            "title": "Becoming Friends",
                            "link": "https://youtu.be/2bxYMupB5q0"
                        },
                        "ID_214": {
                            "title": "Nightmare in the Locker",
                            "link": "https://youtu.be/xD2XHF-XGY4"
                        },
                        "ID_215": {
                            "title": "NEW A.A. (Ch. 1)",
                            "link": "https://youtu.be/5KfnfvyPRtk"
                        },
                        "ID_216": {
                            "title": "Despair Searching",
                            "link": "https://youtu.be/FZLYRkiHk5I"
                        },
                        "ID_217": {
                            "title": "Cool Morning",
                            "link": "https://youtu.be/F7dhu57yeYU"
                        },
                        "ID_218": {
                            "title": "Death Road of Despair",
                            "link": "https://youtu.be/Ih0Tt10uFKI"
                        },
                        "ID_219": {
                            "title": "PSYCHE TAXI",
                            "link": "https://youtu.be/BNWw4Z9pB04"
                        },
                        "ID_220": {
                            "title": "Darkness Time",
                            "link": "https://youtu.be/gbZhzgIh-Ik"
                        },
                        "ID_221": {
                            "title": "Heaven of Almost Hell",
                            "link": "https://youtu.be/_F3p9pksJDs"
                        },
                        "ID_222": {
                            "title": "Clair de Lune",
                            "link": "https://youtu.be/nhnt4mLG92Y"
                        },
                        "ID_223": {
                            "title": "Spirit, Praise, and Beauty",
                            "link": "https://youtu.be/zwsGdXWv444"
                        },
                        "ID_224": {
                            "title": "DANGANVEGAS",
                            "link": "https://youtu.be/t-9yzPWIoLM"
                        },
                        "ID_225": {
                            "title": "Mind Mine",
                            "link": "https://youtu.be/2HNmTL-iju0"
                        },
                        "ID_226": {
                            "title": "Talent Selection",
                            "link": "https://youtu.be/cENv5uK8qLI"
                        },
                        "ID_227": {
                            "title": "Hope of Summer",
                            "link": "https://youtu.be/9jRL5WYhSeM"
                        },
                        "ID_228": {
                            "title": "Hope of Spring",
                            "link": "https://youtu.be/qzdP2cXtpT4"
                        },
                        "ID_229": {
                            "title": "Moon on the Water",
                            "link": "https://youtu.be/c3XeMcD154c"
                        },
                        "ID_230": {
                            "title": "Wonderful Story",
                            "link": "https://youtu.be/Z3hAsD8M4iM"
                        },
                        "ID_231": {
                            "title": "Let's Start the Killing Game",
                            "link": "https://youtu.be/apcEHrIMQN0"
                        },
                        "ID_232": {
                            "title": "HYPER NEW A.A. (Ch. 1)",
                            "link": "https://youtu.be/zaPGdlLgaEU"
                        },
                        "ID_233": {
                            "title": "Closing Argument V3",
                            "link": "https://youtu.be/bfM8rAq3RcA"
                        },
                        "ID_234": {
                            "title": "Climactic Re-Enactment V3",
                            "link": "https://youtu.be/en8PD91y0x8"
                        },
                        "ID_235": {
                            "title": "Danganronpa V3 (Full Version)",
                            "link": "https://youtu.be/Ewm8o6eEuDI"
                        },
                        "ID_236": {
                            "title": "V3 Gallery Music",
                            "link": "https://youtu.be/vTl_1FeyMSQ"
                        },
                        "ID_237": {
                            "title": "Debate Scrum",
                            "link": "https://youtu.be/KKMJYQar8cM"
                        },
                        "ID_238": {
                            "title": "Hangman's Gambit Ver 3.0",
                            "link": "https://youtu.be/ThfGLLTMSpo"
                        },
                        "ID_239": {
                            "title": "V3 Argument -Blade Lock-",
                            "link": "https://youtu.be/rJ4fXEs3M7Q"
                        },
                        "ID_240": {
                            "title": "Final a.A.",
                            "link": "https://youtu.be/Sgp39oFV6Js"
                        },
                        "ID_241": {
                            "title": "New World Order V3",
                            "link": "https://youtu.be/LlMAROvZ5gA"
                        },
                        "ID_242": {
                            "title": "Hope of Autumn",
                            "link": "https://youtu.be/HN3VTKpFbzE"
                        },
                        "ID_243": {
                            "title": "Hope of Winter",
                            "link": "https://youtu.be/H_Jh0kfrLY4"
                        },
                        "ID_244": {
                            "title": "Hope Searching",
                            "link": "https://youtu.be/5UYIS6enQCQ"
                        },
                        "ID_245": {
                            "title": "Hyper Final a.A.",
                            "link": "https://youtu.be/Baag6XirtJc"
                        },
                        "ID_246": {
                            "title": "Heartless Journey",
                            "link": "https://youtu.be/IIcIWQFYyx0"
                        },
                        "ID_247": {
                            "title": "Hyper Ultra New a.A. (Ch. 1)",
                            "link": "https://youtu.be/MBNZ20SzC6M"
                        },
                        "ID_248": {
                            "title": "Sing the Empty Truth",
                            "link": "https://youtu.be/bdvaPZl5kgQ"
                        },
                        "ID_249": {
                            "title": "Hyper Final Ultra a.A.",
                            "link": "https://youtu.be/on_ET4SUbx4"
                        },
                        "ID_250": {
                            "title": "Killing Game Completion Ceremony",
                            "link": "https://youtu.be/Rsic8ioDhSc"
                        },
                        "ID_251": {
                            "title": "Flashback Light",
                            "link": "https://youtu.be/jHRj--nz_IE"
                        },
                        "ID_252": {
                            "title": "Vote Slot",
                            "link": "https://youtu.be/IK8v3hkG5wM"
                        },
                        "ID_253": {
                            "title": "Beautiful Lie in the Virtual World",
                            "link": "https://youtu.be/5nsyLqVjRtY"
                        },
                        "ID_254": {
                            "title": "Despair Searching: Virtual World",
                            "link": "https://youtu.be/BM4eO7dEpps"
                        },
                        "ID_255": {
                            "title": "Island Ordeal",
                            "link": "https://youtu.be/XDXyKXZej0U"
                        },
                        "ID_256": {
                            "title": "School Ordeal",
                            "link": "https://youtu.be/zvi176Yj758"
                        },
                        "ID_257": {
                            "title": "Trial End",
                            "link": "https://youtu.be/sbtYgXjEhZY"
                        }
                    }
                }
            }
        },
        "Death Stranding": {
            "seriesName": "Death Stranding",
            "seriesColor": "red",
            "game": {
                "Death Stranding": {
                    "gameName": "Death Stranding",
                    "answers": ["death stranding"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_945": {
                            "title": "BB's Theme",
                            "link": "https://youtu.be/6_l4ltmDgr4"
                        }
                    }
                }
            }
        },
        "DELTARUNE": {
            "seriesName": "DELTARUNE",
            "seriesColor": "red",
            "game": {
                "DELTARUNE: Chapter 1": {
                    "gameName": "DELTARUNE: Chapter 1",
                    "answers": ["deltarune: chapter 1", "deltarune", "deltarune chapter 1", "delta rune ", "undertale 2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_500": {
                            "title": "ANOTHER HIM",
                            "link": "https://youtu.be/NNYfXTUTuyA"
                        },
                        "ID_501": {
                            "title": "Beginning",
                            "link": "https://youtu.be/OHhgmjijRWg"
                        },
                        "ID_502": {
                            "title": "School",
                            "link": "https://youtu.be/MVTmvDQwX2k"
                        },
                        "ID_503": {
                            "title": "Susie",
                            "link": "https://youtu.be/M-9qmTg_Xsc"
                        },
                        "ID_504": {
                            "title": "The Door",
                            "link": "https://youtu.be/VuM5pBqV4fM"
                        },
                        "ID_505": {
                            "title": "Cliffs",
                            "link": "https://youtu.be/ayuCfK1218s"
                        },
                        "ID_506": {
                            "title": "The Chase",
                            "link": "https://youtu.be/m9vD-_xYUwI"
                        },
                        "ID_507": {
                            "title": "The Legend",
                            "link": "https://youtu.be/CDH2MjvFGC0"
                        },
                        "ID_508": {
                            "title": "Lancer",
                            "link": "https://youtu.be/GhUEIy9j3b4"
                        },
                        "ID_509": {
                            "title": "Rude Buster",
                            "link": "https://youtu.be/xYVhUjee-oM"
                        },
                        "ID_510": {
                            "title": "Empty Town",
                            "link": "https://youtu.be/MjpukFi_CW0"
                        },
                        "ID_511": {
                            "title": "Weird Birds",
                            "link": "https://youtu.be/HlcNLYnhb0w"
                        },
                        "ID_512": {
                            "title": "Field of Hopes and Dreams",
                            "link": "https://youtu.be/PhhGEA_317w"
                        },
                        "ID_513": {
                            "title": "Fanfare (From Rose of Winter)",
                            "link": "https://youtu.be/_HxWaQhb7zc"
                        },
                        "ID_514": {
                            "title": "Lantern",
                            "link": "https://youtu.be/r9Wc9a2uD3c"
                        },
                        "ID_515": {
                            "title": "I'm Very Bad",
                            "link": "https://youtu.be/YetdpAvNPEc"
                        },
                        "ID_516": {
                            "title": "Checker Dance",
                            "link": "https://youtu.be/FfaYudbw9hA"
                        },
                        "ID_517": {
                            "title": "Quiet Autumn",
                            "link": "https://youtu.be/Lyswkjw3U9Q"
                        },
                        "ID_518": {
                            "title": "Scarlet Forest",
                            "link": "https://youtu.be/xxSpXQDOcAo"
                        },
                        "ID_519": {
                            "title": "Thrash Machine",
                            "link": "https://youtu.be/ONlbHu7aDNI"
                        },
                        "ID_520": {
                            "title": "Vs. Lancer",
                            "link": "https://youtu.be/gQZxGRucsMQ"
                        },
                        "ID_521": {
                            "title": "Basement",
                            "link": "https://youtu.be/9y8UXb7KfgU"
                        },
                        "ID_522": {
                            "title": "Imminent Death",
                            "link": "https://youtu.be/nedqvk48HWo"
                        },
                        "ID_523": {
                            "title": "Vs. Susie",
                            "link": "https://youtu.be/SBHgJzYNR6s"
                        },
                        "ID_524": {
                            "title": "Card Castle",
                            "link": "https://youtu.be/Euc8VllYbOU"
                        },
                        "ID_525": {
                            "title": "Rouxls Kaard",
                            "link": "https://youtu.be/5LcT1OubJsE"
                        },
                        "ID_526": {
                            "title": "[April 2012]",
                            "link": "https://youtu.be/Y5EvDuQoF9E"
                        },
                        "ID_527": {
                            "title": "Hip Shop",
                            "link": "https://youtu.be/Taxlj7nG4RY"
                        },
                        "ID_528": {
                            "title": "Gallery",
                            "link": "https://youtu.be/pOWoeXfNpXU"
                        },
                        "ID_529": {
                            "title": "Chaos King",
                            "link": "https://youtu.be/fFsTQCSYY4Q"
                        },
                        "ID_530": {
                            "title": "Darkness Falls",
                            "link": "https://youtu.be/FSn4p1Xx7NU"
                        },
                        "ID_531": {
                            "title": "The Circus",
                            "link": "https://youtu.be/tpIkEnzGd5U"
                        },
                        "ID_532": {
                            "title": "THE WORLD REVOLVING",
                            "link": "https://youtu.be/8gkTtNefxws"
                        },
                        "ID_533": {
                            "title": "Friendship",
                            "link": "https://youtu.be/l5D6Nfe7AMs"
                        },
                        "ID_534": {
                            "title": "THE HOLY",
                            "link": "https://youtu.be/1lHuP00QbMU"
                        },
                        "ID_535": {
                            "title": "Your Power",
                            "link": "https://youtu.be/hLG_tNvSHek"
                        },
                        "ID_536": {
                            "title": "A Town Called Hometown",
                            "link": "https://youtu.be/HMLrsPnk7dg"
                        },
                        "ID_537": {
                            "title": "You Can Always Come Home",
                            "link": "https://youtu.be/LJ2XM3fpVQk"
                        },
                        "ID_538": {
                            "title": "Don't Forget",
                            "link": "https://youtu.be/PEPbUhHhECU"
                        },
                        "ID_539": {
                            "title": "Before the Story",
                            "link": "https://youtu.be/niSJhhpBqjU"
                        },
                        "ID_540": {
                            "title": "Dogtarune / Dogcheck",
                            "link": "https://youtu.be/SDrBW7QVL-A"
                        }
                    }
                }
            }
        },
        "Eschatos": {
            "seriesName": "Eschatos",
            "seriesColor": "red",
            "game": {
                "Eschatos": {
                    "gameName": "Eschatos",
                    "answers": ["eschatos"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_908": {
                            "title": "POINT OF NO RETURN",
                            "link": "https://youtu.be/IOSRTILzl1s"
                        }
                    }
                }
            }
        },
        "FINAL FANTASY": {
            "seriesName": "FINAL FANTASY",
            "seriesColor": "red",
            "game": {
                "FINAL FANTASY VII REMAKE": {
                    "gameName": "FINAL FANTASY VII REMAKE",
                    "answers": ["final fantasy vii remake", "ffviir", "ffvii", "ff7r", "ff7", "final fantasy 7 remake", "final fantasy 7", "final fantasy vii"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1070": {
                            "title": "Let The Battles Begin!!",
                            "link": "https://youtu.be/vOC_tuuWSXo"
                        },
                        "ID_1071": {
                            "title": "One Winged Angel Rebirth",
                            "link": "https://youtu.be/eLGn_dVA3ow"
                        }
                    }
                },
                "FINAL FANTASY VII": {
                    "gameName": "FINAL FANTASY VII",
                    "answers": ["final fantasy vii", "ffvii", "ff7", "final fantasy 7"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1072": {
                            "title": "One Winged Angel",
                            "link": "https://youtu.be/qDD-iYkHBhc"
                        },
                        "ID_1073": {
                            "title": "J-E-N-O-V-A",
                            "link": "https://youtu.be/J6GrZYE2il0"
                        }
                    }
                },
                "FINAL FANTASY VI": {
                    "gameName": "FINAL FANTASY VI",
                    "answers": ["final fantasy vi", "ffvi", "ff6", "final fantasy 6"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1074": {
                            "title": "Dancing Mad",
                            "link": "https://youtu.be/JbXVNKtmWnc"
                        }
                    }
                }
            }
        },
        "Friday Night Funkin'": {
            "seriesName": "Friday Night Funkin'",
            "seriesColor": "red",
            "game": {
                "Friday Night Funkin'": {
                    "gameName": "Friday Night Funkin'",
                    "answers": ["friday night funkin'", "fnf", "friday night", "friday night funking"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_969": {
                            "title": "Ugh",
                            "link": "https://youtu.be/_pLDBCkvyUg"
                        },
                        "ID_970": {
                            "title": "Guns",
                            "link": "https://youtu.be/K5lp8aAoT1g"
                        },
                        "ID_971": {
                            "title": "M.I.L.F",
                            "link": "https://youtu.be/dOPrN6aJ7TI"
                        },
                        "ID_972": {
                            "title": "Roses",
                            "link": "https://youtu.be/DKs-Tkw4X3I"
                        }
                    }
                },
                "Friday Night Funkin' VS Kapi": {
                    "gameName": "Friday Night Funkin' VS Kapi",
                    "answers": ["friday night funkin' vs kapi", "fnf", "friday night", "friday night funking", "fnf kapi", "kapi mod", "fnf kapi mod", "friday night funkin vs kapi"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_973": {
                            "title": "Nyaw",
                            "link": "https://youtu.be/nEDtNRT7GwI"
                        }
                    }
                },
                "Friday Night Funkin': Mid-Fight Masses": {
                    "gameName": "Friday Night Funkin': Mid-Fight Masses",
                    "answers": ["friday night funkin': mid-fight masses", "fnf", "friday night", "friday night funking", "fnf mfm", "fnf ruv", "fnf sarv", "fnf zavodila", "friday night funkin midfight masses", "friday night funkin mid fight masses", "friday night funkin mid-fight masses"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_974": {
                            "title": "Zavodila",
                            "link": "https://youtu.be/e7nIQ1yoCCc"
                        }
                    }
                },
                "Friday Night Funkin': Tricky Mod": {
                    "gameName": "Friday Night Funkin': Tricky Mod",
                    "answers": ["friday night funkin': tricky mod", "fnf", "friday night", "friday night funking", "fnf tricky", "fnf madness", "fnf ", "friday night funkin tricky mod"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_975": {
                            "title": "Madness",
                            "link": "https://youtu.be/GZmoHrq0mEY"
                        },
                        "ID_976": {
                            "title": "Expurgation",
                            "link": "https://youtu.be/WmXn3L5bQy4"
                        }
                    }
                }
            }
        },
        "Furi": {
            "seriesName": "Furi",
            "seriesColor": "red",
            "game": {
                "Furi": {
                    "gameName": "Furi",
                    "answers": ["furi"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_914": {
                            "title": "A Picture in Motion",
                            "link": "https://youtu.be/ZUlAytznxn4"
                        }
                    }
                }
            }
        },
        "Ghost Trick": {
            "seriesName": "Ghost Trick",
            "seriesColor": "red",
            "game": {
                "Ghost Trick": {
                    "gameName": "Ghost Trick",
                    "answers": ["ghost trick", "ghost trick", "ghost trick phantom detective", "ghost trick: phantom detective", "phantom detective"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_65": {
                            "title": "Prologue ~ The Beginning of the Night",
                            "link": "https://youtu.be/HVBDt3VRDfA"
                        },
                        "ID_66": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/IQ3khsva6E8"
                        },
                        "ID_67": {
                            "title": "4 Minutes Before Death",
                            "link": "https://youtu.be/r3C-FrmHn44"
                        },
                        "ID_68": {
                            "title": "Fate Updated",
                            "link": "https://youtu.be/8hw63HniDWE"
                        },
                        "ID_69": {
                            "title": "Countdown",
                            "link": "https://youtu.be/bXXrpgpWJQY"
                        },
                        "ID_70": {
                            "title": "The World of the Dead",
                            "link": "https://youtu.be/x2CklIRwJvI"
                        },
                        "ID_71": {
                            "title": "Lynne ~ A Targeted Redhead",
                            "link": "https://youtu.be/w6xMvGbwT7I"
                        },
                        "ID_72": {
                            "title": "Ray ~ A Ray of Light",
                            "link": "https://youtu.be/31jJ-pmGuO0"
                        },
                        "ID_73": {
                            "title": "Awakening",
                            "link": "https://youtu.be/Ybi0-OTvoXM"
                        },
                        "ID_74": {
                            "title": "Welcome to the Salon",
                            "link": "https://youtu.be/PGn9958vneI"
                        },
                        "ID_75": {
                            "title": "Complication",
                            "link": "https://youtu.be/OrxEVT0wHMc"
                        },
                        "ID_76": {
                            "title": "Missile ~ A Courageous Little Animal",
                            "link": "https://youtu.be/TWd3JA6cpY0"
                        },
                        "ID_77": {
                            "title": "Cabanela ~ A White Lovely Lanky Man",
                            "link": "https://youtu.be/eeVXa4cU21g"
                        },
                        "ID_78": {
                            "title": "Trauma",
                            "link": "https://youtu.be/3kwKogno3dk"
                        },
                        "ID_79": {
                            "title": "Jingle",
                            "link": "https://youtu.be/EwiF0n073zE"
                        },
                        "ID_80": {
                            "title": "4 Minutes Before Death ~ Variation",
                            "link": "https://youtu.be/L4X_DMcjYaI"
                        },
                        "ID_81": {
                            "title": "Fate Updated ~ Variation",
                            "link": "https://youtu.be/h--eFUupy-8"
                        },
                        "ID_82": {
                            "title": "Beauty and Dandy",
                            "link": "https://youtu.be/3zrqU53d0IA"
                        },
                        "ID_83": {
                            "title": "Deadline",
                            "link": "https://youtu.be/RkmcpQjZWVA"
                        },
                        "ID_84": {
                            "title": "Chained Past",
                            "link": "https://youtu.be/MgWCNGpwIYs"
                        },
                        "ID_85": {
                            "title": "Informing About the Parting",
                            "link": "https://youtu.be/VUGlC8WOQt0"
                        },
                        "ID_86": {
                            "title": "The Last Desperate Struggle",
                            "link": "https://youtu.be/mFXOJ1mkKtI"
                        },
                        "ID_87": {
                            "title": "Reincarnation",
                            "link": "https://youtu.be/6HNuTV0GaUk"
                        }
                    }
                }
            }
        },
        "Globulous": {
            "seriesName": "Globulous",
            "seriesColor": "red",
            "game": {
                "Globulous": {
                    "gameName": "Globulous",
                    "answers": ["globulous"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_909": {
                            "title": "Dawn Oblique",
                            "link": "https://youtu.be/q151CWLGZ0E"
                        },
                        "ID_910": {
                            "title": "Snow Delta",
                            "link": "https://youtu.be/REXRLt2E-kk"
                        },
                        "ID_911": {
                            "title": "Vapor Radian",
                            "link": "https://youtu.be/0luUyA5l99c"
                        },
                        "ID_912": {
                            "title": "Oasis Epsilon",
                            "link": "https://youtu.be/emuMQTOIyi4"
                        },
                        "ID_913": {
                            "title": "Coccoon Altitude",
                            "link": "https://youtu.be/-RnvOOtBlUI"
                        }
                    }
                }
            }
        },
        "Katamari": {
            "seriesName": "Katamari",
            "seriesColor": "red",
            "game": {
                "Katamari Damacy": {
                    "gameName": "Katamari Damacy",
                    "answers": ["katamari damacy"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1082": {
                            "title": "Lonely Rolling Star",
                            "link": "https://youtu.be/okEluVGlWio"
                        },
                        "ID_1083": {
                            "title": "Katamari on the Rocks",
                            "link": "https://youtu.be/iMH49ieL4es"
                        }
                    }
                }
            }
        },
        "Mario": {
            "seriesName": "Mario",
            "seriesColor": "red",
            "game": {
                "Super Mario Sunshine": {
                    "gameName": "Super Mario Sunshine",
                    "answers": ["super mario sunshine"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_895": {
                            "title": "Shadow Mario",
                            "link": "https://youtu.be/bwRIQX8iLbI"
                        },
                        "ID_896": {
                            "title": "Bianco Hills",
                            "link": "https://youtu.be/JA8JClD7jDg"
                        },
                        "ID_897": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/-uFpYEOGqV4"
                        },
                        "ID_898": {
                            "title": "Secret Course",
                            "link": "https://youtu.be/DvZWxiUfrNo"
                        },
                        "ID_899": {
                            "title": "Ricco Harbor",
                            "link": "https://youtu.be/P5iSWG8RHAs"
                        },
                        "ID_900": {
                            "title": "Gelato Beach",
                            "link": "https://youtu.be/el_r5y_AcrE"
                        },
                        "ID_901": {
                            "title": "Secret Course: Sky & Sea",
                            "link": "https://youtu.be/pVpKQljWtyo"
                        },
                        "ID_902": {
                            "title": "Pinna Park",
                            "link": "https://youtu.be/2HqGNaEMF70"
                        },
                        "ID_903": {
                            "title": "Pinna Beach",
                            "link": "https://youtu.be/WcSM-p1ch8E"
                        },
                        "ID_904": {
                            "title": "Noki Bay",
                            "link": "https://youtu.be/HqY0FnkqD98"
                        },
                        "ID_905": {
                            "title": "Sirena Beach",
                            "link": "https://youtu.be/Kr2C0jkVQfE"
                        },
                        "ID_906": {
                            "title": "Hotel Delfino",
                            "link": "https://youtu.be/E0Y6uNRtCfs"
                        },
                        "ID_907": {
                            "title": "Pianta Village",
                            "link": "https://youtu.be/etYb-p8uhWA"
                        }
                    }
                }
            }
        },
        "Mario Golf": {
            "seriesName": "Mario Golf",
            "seriesColor": "red",
            "game": {
                "Mario Golf 64": {
                    "gameName": "Mario Golf 64",
                    "answers": ["mario golf 64", "mario golf", "mario golf 64"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_790": {
                            "title": "Main Menu",
                            "link": "https://youtu.be/T0hNPBfVu1U"
                        },
                        "ID_791": {
                            "title": "Ring Shot",
                            "link": "https://youtu.be/6sw3HNfWvhQ"
                        },
                        "ID_792": {
                            "title": "Mini Golf",
                            "link": "https://youtu.be/eAeQ8FGSTdQ"
                        },
                        "ID_793": {
                            "title": "Dormie Hole",
                            "link": "https://youtu.be/Psur418k86U"
                        },
                        "ID_794": {
                            "title": "Toad Highlands",
                            "link": "https://youtu.be/gelz7iduUgY"
                        },
                        "ID_795": {
                            "title": "Koopa Park",
                            "link": "https://youtu.be/RcKDgpfx8Rw"
                        },
                        "ID_796": {
                            "title": "Yoshi's Island",
                            "link": "https://youtu.be/cwxMADY-dok"
                        }
                    }
                }
            }
        },
        "Mario Kart": {
            "seriesName": "Mario Kart",
            "seriesColor": "red",
            "game": {
                "Mario Kart Wii": {
                    "gameName": "Mario Kart Wii",
                    "answers": ["mario kart wii", "mario kart wii", "mariokart wii"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_832": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/hm1JaJD4s9Y"
                        },
                        "ID_833": {
                            "title": "Main Menu",
                            "link": "https://youtu.be/Qlmurjko1NM"
                        },
                        "ID_834": {
                            "title": "Moo Moo Meadows",
                            "link": "https://youtu.be/Dgsa4sPWsYA"
                        },
                        "ID_835": {
                            "title": "Mushroom Gorge",
                            "link": "https://youtu.be/sKU40Ahiofg"
                        },
                        "ID_836": {
                            "title": "Toad's Factory",
                            "link": "https://youtu.be/NbWazKpuiC8"
                        },
                        "ID_837": {
                            "title": "Coconut Mall",
                            "link": "https://youtu.be/QY7SxnKqMmE"
                        },
                        "ID_838": {
                            "title": "DK Summit",
                            "link": "https://youtu.be/be337mef4XA"
                        },
                        "ID_839": {
                            "title": "Daisy Circuit",
                            "link": "https://youtu.be/O84YXguVcoc"
                        },
                        "ID_840": {
                            "title": "Koopa Cape",
                            "link": "https://youtu.be/IVjh8eKVSKM"
                        },
                        "ID_841": {
                            "title": "Maple Treeway",
                            "link": "https://youtu.be/YyTK5-d2nWU"
                        },
                        "ID_842": {
                            "title": "Rainbow Road",
                            "link": "https://youtu.be/rrx0XWPOplM"
                        },
                        "ID_843": {
                            "title": "Top Results",
                            "link": "https://youtu.be/_f1iv3qZJOs"
                        },
                        "ID_844": {
                            "title": "Wi-Fi Menu",
                            "link": "https://youtu.be/FT5EMBGKdhY"
                        }
                    }
                }
            }
        },
        "Mario Party": {
            "seriesName": "Mario Party",
            "seriesColor": "red",
            "game": {
                "Mario Party": {
                    "gameName": "Mario Party",
                    "answers": ["mario party", "mario party", "mario party 1"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_797": {
                            "title": "Winner",
                            "link": "https://youtu.be/NhEH0aZAyCo"
                        },
                        "ID_798": {
                            "title": "Wide, Wide Ocean",
                            "link": "https://youtu.be/-UsOr5_PTBY"
                        },
                        "ID_799": {
                            "title": "Where Have The Stars Gone?",
                            "link": "https://youtu.be/rH9Otxf-G8c"
                        },
                        "ID_800": {
                            "title": "Tropical Island (Yoshi's Board)",
                            "link": "https://youtu.be/vHcMArHUYK4"
                        },
                        "ID_801": {
                            "title": "The Stolen Star",
                            "link": "https://youtu.be/9tZkxgEXpfE"
                        },
                        "ID_802": {
                            "title": "The Room Underground",
                            "link": "https://youtu.be/wPz59NlIZKs"
                        },
                        "ID_803": {
                            "title": "Slowly, Slowly",
                            "link": "https://youtu.be/AdhmG8Rppzw"
                        },
                        "ID_804": {
                            "title": "Saving Courage",
                            "link": "https://youtu.be/w_GOrEYkirg"
                        },
                        "ID_805": {
                            "title": "Results",
                            "link": "https://youtu.be/_bPtlScYnXI"
                        },
                        "ID_806": {
                            "title": "Rainbow Castle (Mario's Board)",
                            "link": "https://youtu.be/n47B16L6qo4"
                        },
                        "ID_807": {
                            "title": "Play A Mini-Game",
                            "link": "https://youtu.be/TGrWq6CvD04"
                        },
                        "ID_808": {
                            "title": "Peaceful Mushroom Village",
                            "link": "https://youtu.be/LLnbcbZMFuA"
                        },
                        "ID_809": {
                            "title": "Outcome of Adventure",
                            "link": "https://youtu.be/GI3zJ-dx010"
                        },
                        "ID_810": {
                            "title": "Option House Theme",
                            "link": "https://youtu.be/iS3zWtJWNt0"
                        },
                        "ID_811": {
                            "title": "Move To The Mambo!",
                            "link": "https://youtu.be/xB4m21mAyEQ"
                        },
                        "ID_812": {
                            "title": "Koopa Troopa's Theme",
                            "link": "https://youtu.be/7QDDhH8J1HE"
                        },
                        "ID_813": {
                            "title": "Hit or Miss Chance Game",
                            "link": "https://youtu.be/tIQ_qI871Ss"
                        },
                        "ID_814": {
                            "title": "Mario Party Theme",
                            "link": "https://youtu.be/9zcXQEjiZtc"
                        },
                        "ID_815": {
                            "title": "Let's Limbo!",
                            "link": "https://youtu.be/iQavbF9CCvI"
                        },
                        "ID_816": {
                            "title": "Let's Go Lightly",
                            "link": "https://youtu.be/iLClxxM0GSY"
                        },
                        "ID_817": {
                            "title": "Full of Danger",
                            "link": "https://youtu.be/F1N86WNDMbM"
                        },
                        "ID_818": {
                            "title": "Faster Than All",
                            "link": "https://youtu.be/TUkcoptWXDU"
                        },
                        "ID_819": {
                            "title": "Everyone's A SuperStar!",
                            "link": "https://youtu.be/zN2HJDDcKe0"
                        },
                        "ID_820": {
                            "title": "Engine Room (Luigi's Board)",
                            "link": "https://youtu.be/FfkCR4hZTro"
                        },
                        "ID_821": {
                            "title": "Ducking and Dodging (Mini-Game)",
                            "link": "https://youtu.be/gWPcaB5puKU"
                        },
                        "ID_822": {
                            "title": "Dodging Danger",
                            "link": "https://youtu.be/qM3NTI48jW8"
                        },
                        "ID_823": {
                            "title": "Coins of the World",
                            "link": "https://youtu.be/Bshe0RYNCgg"
                        },
                        "ID_824": {
                            "title": "Can It Be Done",
                            "link": "https://youtu.be/tzP6DiVqhLw"
                        },
                        "ID_825": {
                            "title": "Bowser's Theme",
                            "link": "https://youtu.be/o8rZ3IZuQf0"
                        },
                        "ID_826": {
                            "title": "Board Map (Overview)",
                            "link": "https://youtu.be/bn_7SUcQHnY"
                        },
                        "ID_827": {
                            "title": "Birthday Cake (Peach's Board)",
                            "link": "https://youtu.be/tFvIhW4ZNP0"
                        },
                        "ID_828": {
                            "title": "After The Victory",
                            "link": "https://youtu.be/IOmclZ-hv7g"
                        },
                        "ID_829": {
                            "title": "Battle Canyon (Wario's Board)",
                            "link": "https://youtu.be/VRlJXOVNzKs"
                        },
                        "ID_830": {
                            "title": "Adventure Begins",
                            "link": "https://youtu.be/otSddH7CSZg"
                        },
                        "ID_831": {
                            "title": "Mini-Game Island (All-In-One)",
                            "link": "https://youtu.be/4Swlo3DQPWA"
                        }
                    }
                }
            }
        },
        "Metal Gear": {
            "seriesName": "Metal Gear",
            "seriesColor": "red",
            "game": {
                "Metal Gear Rising: Revengeance": {
                    "gameName": "Metal Gear Rising: Revengeance",
                    "answers": ["metal gear rising: revengeance", "metal gear rising revengeance", "metal gear rising: revengeance", "mgr revengeance", "mgr", "revengeance"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_876": {
                            "title": "Rules of Nature (Platinum Mix)",
                            "link": "https://youtu.be/_vfkzMAWWKE"
                        },
                        "ID_877": {
                            "title": "The Only Thing I Know for Real (Maniac Agenda Mix)",
                            "link": "https://youtu.be/ZDupR9FXwCU"
                        },
                        "ID_878": {
                            "title": "Dark Skies (Platinum Mix)",
                            "link": "https://youtu.be/R7UVSupZ2ks"
                        },
                        "ID_879": {
                            "title": "I'm My Own Master Now (Platinum Mix)",
                            "link": "https://youtu.be/EPDDkrDpZhU"
                        },
                        "ID_880": {
                            "title": "A Stranger I Remain (Maniac Agenda Mix)",
                            "link": "https://youtu.be/QTnuw77_vzw"
                        },
                        "ID_881": {
                            "title": "Return to Ashes (Platinum Mix)",
                            "link": "https://youtu.be/1Bi6IGYRptY"
                        },
                        "ID_882": {
                            "title": "The Stains of Time (Maniac Agenda Mix)",
                            "link": "https://youtu.be/PEXB_Ewjmsk"
                        },
                        "ID_883": {
                            "title": "Red Sun (Maniac Agenda Mix)",
                            "link": "https://youtu.be/-PA9HmD42DE"
                        },
                        "ID_884": {
                            "title": "A Soul Can't Be Cut (Platinum Mix)",
                            "link": "https://youtu.be/jHYA0yVMjYw"
                        },
                        "ID_885": {
                            "title": "Collective Consciousness (Maniac Agenda Mix)",
                            "link": "https://youtu.be/ZYnDsr8z4iU"
                        },
                        "ID_886": {
                            "title": "It Has to Be This Way (Platinum Mix)",
                            "link": "https://youtu.be/fxq_B2KPQDY"
                        },
                        "ID_887": {
                            "title": "The War Still Rages Within",
                            "link": "https://youtu.be/LehMuyIkxNE"
                        }
                    }
                },
                "Metal Gear Solid": {
                    "gameName": "Metal Gear Solid",
                    "answers": ["metal gear solid", "mgs", "metal gear solid"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_888": {
                            "title": "Metal Gear Solid Main Theme",
                            "link": "https://youtu.be/tAKi13Gb7es"
                        },
                        "ID_889": {
                            "title": "Cavern",
                            "link": "https://youtu.be/11uCccWmz0M"
                        },
                        "ID_890": {
                            "title": "Encounter",
                            "link": "https://youtu.be/n1fWzyDVesc"
                        },
                        "ID_891": {
                            "title": "Duel",
                            "link": "https://youtu.be/hnp_JgJSLoc"
                        },
                        "ID_892": {
                            "title": "Enclosure",
                            "link": "https://youtu.be/R7twkqY852I"
                        },
                        "ID_893": {
                            "title": "Escape",
                            "link": "https://youtu.be/LqZVNzNc23w"
                        },
                        "ID_894": {
                            "title": "End Title (The Best is Yet to Come)",
                            "link": "https://youtu.be/OReM-Vm2vj4"
                        }
                    }
                }
            }
        },
        "Mighty Switch Force": {
            "seriesName": "Mighty Switch Force",
            "seriesColor": "red",
            "game": {
                "Mighty Switch Force": {
                    "gameName": "Mighty Switch Force",
                    "answers": ["mighty switch force", "msf", "mighty switch force", "mighty switch force 1", "msf1"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_853": {
                            "title": "Title",
                            "link": "https://youtu.be/gAQMtSM0zRk"
                        },
                        "ID_854": {
                            "title": "Caught Red Handed",
                            "link": "https://youtu.be/RCkoI4PGZNk"
                        },
                        "ID_855": {
                            "title": "Love You Love You Love",
                            "link": "https://youtu.be/eRyR27l7vks"
                        },
                        "ID_856": {
                            "title": "Jive Bot",
                            "link": "https://youtu.be/8-ngX7IWlUs"
                        },
                        "ID_857": {
                            "title": "Whoa I'm In Space Cuba",
                            "link": "https://youtu.be/anw6cFmR9hM"
                        },
                        "ID_858": {
                            "title": "Tally Screen",
                            "link": "https://youtu.be/xxknxT6VvFE"
                        }
                    }
                },
                "Mighty Switch Force 2": {
                    "gameName": "Mighty Switch Force 2",
                    "answers": ["mighty switch force 2", "msf2", "mighty switch force 2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_859": {
                            "title": "Title",
                            "link": "https://youtu.be/Ia33wFGsHbg"
                        },
                        "ID_860": {
                            "title": "Exothermic",
                            "link": "https://youtu.be/QPJUzunUJVc"
                        },
                        "ID_861": {
                            "title": "Tally Screen",
                            "link": "https://youtu.be/_shWlfgnzZw"
                        },
                        "ID_862": {
                            "title": "Final Boss",
                            "link": "https://youtu.be/fMJzywHs0ls"
                        },
                        "ID_863": {
                            "title": "Credits (Rescue Girl)",
                            "link": "https://youtu.be/RiTB5NL-aUg"
                        }
                    }
                }
            }
        },
        "Mirror's Edge": {
            "seriesName": "Mirror's Edge",
            "seriesColor": "red",
            "game": {
                "Mirror's Edge": {
                    "gameName": "Mirror's Edge",
                    "answers": ["mirror's edge", "mirrors edge"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_944": {
                            "title": "Still Alive",
                            "link": "https://youtu.be/FleMt6ChQOI"
                        }
                    }
                }
            }
        },
        "MOTHER": {
            "seriesName": "MOTHER",
            "seriesColor": "red",
            "game": {
                "Mother 2": {
                    "gameName": "Mother 2",
                    "answers": ["mother 2", "earthbound"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1084": {
                            "title": "Battle Against an Otherworldly Foe",
                            "link": "https://youtu.be/BChh_cBLij0"
                        },
                        "ID_1085": {
                            "title": "Buy Somethin' Will Ya!",
                            "link": "https://youtu.be/xIt4u-VdAP4"
                        },
                        "ID_1086": {
                            "title": "Battle Against a Weak Opponent",
                            "link": "https://youtu.be/AOSMoEKox8g"
                        },
                        "ID_1087": {
                            "title": "Sanctuary Guardian",
                            "link": "https://youtu.be/dmEvNtjD9OE"
                        },
                        "ID_1088": {
                            "title": "New Age Retro Hippie",
                            "link": "https://youtu.be/b1impjQvhvk"
                        },
                        "ID_1089": {
                            "title": "Onett",
                            "link": "https://youtu.be/6ppBSY92rzg"
                        },
                        "ID_1090": {
                            "title": "Fourside",
                            "link": "https://youtu.be/a9sp3emk1QA"
                        }
                    }
                },
                "Mother": {
                    "gameName": "Mother",
                    "answers": ["mother", "earthbound beginnings"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1091": {
                            "title": "Bein' Friends",
                            "link": "https://youtu.be/h-uNMPU6GtA"
                        }
                    }
                }
            }
        },
        "Persona": {
            "seriesName": "Persona",
            "seriesColor": "red",
            "game": {
                "Persona 5": {
                    "gameName": "Persona 5",
                    "answers": ["persona 5", "persona 5", "persona 5 royal", "persona 5 royal", "p5", "p5r", "persona 5 the royal"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_716": {
                            "title": "Wake Up, Get Up, Get Out There",
                            "link": "https://youtu.be/SmQ1ZXTHNKA"
                        },
                        "ID_717": {
                            "title": "Phantom",
                            "link": "https://youtu.be/qI_g-fGLT7c"
                        },
                        "ID_718": {
                            "title": "Life Will Change",
                            "link": "https://youtu.be/r47XMimB2sw"
                        },
                        "ID_719": {
                            "title": "Interrogation Room",
                            "link": "https://youtu.be/8dgEOYcxSYU"
                        },
                        "ID_720": {
                            "title": "The Poem of Everyone’s Souls",
                            "link": "https://youtu.be/0y7isajW_r8"
                        },
                        "ID_721": {
                            "title": "Awakening",
                            "link": "https://youtu.be/ERJcBO_Yn7U"
                        },
                        "ID_722": {
                            "title": "Will Power",
                            "link": "https://youtu.be/KfeLWYThNAk"
                        },
                        "ID_723": {
                            "title": "King, Queen and Slave",
                            "link": "https://youtu.be/jSvDbFcSfvs"
                        },
                        "ID_724": {
                            "title": "Last Surprise",
                            "link": "https://youtu.be/qOp4TZeZ8mY"
                        },
                        "ID_725": {
                            "title": "Victory",
                            "link": "https://youtu.be/qMrqZuI-PuQ"
                        },
                        "ID_726": {
                            "title": "Layer Cake",
                            "link": "https://youtu.be/TFJxgfPYiMI"
                        },
                        "ID_727": {
                            "title": "Blooming Villain",
                            "link": "https://youtu.be/E8l57E8OKdI"
                        },
                        "ID_728": {
                            "title": "Beneath the Mask",
                            "link": "https://youtu.be/0-R0jxIxvh8"
                        },
                        "ID_729": {
                            "title": "Tokyo Daylight",
                            "link": "https://youtu.be/gyHTjoSI5qc"
                        },
                        "ID_730": {
                            "title": "Butterfly Kiss",
                            "link": "https://youtu.be/fTM2j1LWUa4"
                        },
                        "ID_731": {
                            "title": "Mementos",
                            "link": "https://youtu.be/e_57t7Z3ocQ"
                        },
                        "ID_732": {
                            "title": "Price",
                            "link": "https://youtu.be/bwpMx6BOJ78"
                        },
                        "ID_733": {
                            "title": "Price Another Version",
                            "link": "https://youtu.be/YZ7GYjJ5gT4"
                        },
                        "ID_734": {
                            "title": "Keeper of Lust",
                            "link": "https://youtu.be/tRag8osHZJs"
                        },
                        "ID_735": {
                            "title": "The Days When My Mother Was There",
                            "link": "https://youtu.be/jQXsCphBpw8"
                        },
                        "ID_736": {
                            "title": "New Beginning",
                            "link": "https://youtu.be/VZ-ylzqehKo"
                        },
                        "ID_737": {
                            "title": "Hawaii",
                            "link": "https://youtu.be/5Fxb6RjRF1o"
                        },
                        "ID_738": {
                            "title": "Break it Down Elp Version",
                            "link": "https://youtu.be/zGxXoeexhnM"
                        },
                        "ID_739": {
                            "title": "Sweatshop",
                            "link": "https://youtu.be/_VWV7ffGYJw"
                        },
                        "ID_740": {
                            "title": "The Whims of Fate",
                            "link": "https://youtu.be/58p--cGb8Rw"
                        },
                        "ID_741": {
                            "title": "Rivers In the Desert",
                            "link": "https://youtu.be/pwagDounDbM"
                        },
                        "ID_742": {
                            "title": "Jaldabaoth",
                            "link": "https://youtu.be/HawzmsbBC34"
                        },
                        "ID_743": {
                            "title": "Swear to My Bones",
                            "link": "https://youtu.be/5dUT-1zBuaA"
                        }
                    }
                },
                "Persona 5 Royal": {
                    "gameName": "Persona 5 Royal",
                    "answers": ["persona 5 royal", "persona 5 royal", "persona 5 r", "persona 5 the royal", "p5r"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_744": {
                            "title": "Royal Days",
                            "link": "https://youtu.be/f8EzwCzII5s"
                        },
                        "ID_745": {
                            "title": "Take Over",
                            "link": "https://youtu.be/JhEL_OQfz2w"
                        },
                        "ID_746": {
                            "title": "No More What Ifs",
                            "link": "https://youtu.be/kCbU6HY8DOU"
                        },
                        "ID_747": {
                            "title": "Gentle Madman",
                            "link": "https://youtu.be/JaT0BNd7ymk"
                        },
                        "ID_748": {
                            "title": "Throw Away Your Mask",
                            "link": "https://youtu.be/94uGn2L_eXE"
                        }
                    }
                },
                "Persona 4 Dancing All Night": {
                    "gameName": "Persona 4 Dancing All Night",
                    "answers": ["persona 4 dancing all night", "persona 4 dancing all night", "persona 4 dancing", "p4d"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_749": {
                            "title": "Dance!",
                            "link": "https://youtu.be/hCpCsZCwDfs"
                        },
                        "ID_750": {
                            "title": "Pursuing My True Self - Kozuka Remix",
                            "link": "https://youtu.be/LCi2b6ZIghU"
                        },
                        "ID_751": {
                            "title": "Junes Theme - Vocal Version",
                            "link": "https://youtu.be/naFdddnyNFo"
                        },
                        "ID_752": {
                            "title": "Heartbeat, Heartbreak - Towa Tei Remix",
                            "link": "https://youtu.be/6dRNyLa3zF4"
                        },
                        "ID_753": {
                            "title": "Your Affection - Daisuke Asakura Remix",
                            "link": "https://youtu.be/WO7P3Vamwmk"
                        },
                        "ID_754": {
                            "title": "Dance Hymn of the Soul (Disco in Velvet Room)",
                            "link": "https://youtu.be/dO__cEi0ZUg"
                        }
                    }
                },
                "Persona 3 Portable": {
                    "gameName": "Persona 3 Portable",
                    "answers": ["persona 3 portable", "p3 p", "persona 3 portable", "p3 portable", "persona 3 p"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_755": {
                            "title": "Soul Phase",
                            "link": "https://youtu.be/SjNYJGHB2Ss"
                        },
                        "ID_756": {
                            "title": "A Way of Life",
                            "link": "https://youtu.be/Fd6MW-XhO5I"
                        },
                        "ID_757": {
                            "title": "Danger Zone",
                            "link": "https://youtu.be/cwABWVby-Xw"
                        }
                    }
                },
                "Persona 3 FES": {
                    "gameName": "Persona 3 FES",
                    "answers": ["persona 3 fes", "persona 3 fes", "p3 fes", "p3 fes", "persona 3 festival", "p3 festival"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_758": {
                            "title": "Brand New days -The Beginning-",
                            "link": "https://youtu.be/HmTLEeM8A4Y"
                        },
                        "ID_759": {
                            "title": "Heartful Cry",
                            "link": "https://youtu.be/C3emFUXbC5U"
                        },
                        "ID_760": {
                            "title": "Brand New Days",
                            "link": "https://youtu.be/pNgFR_ttx2s"
                        }
                    }
                },
                "Persona 3": {
                    "gameName": "Persona 3",
                    "answers": ["persona 3", "persona 3", "p3"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_761": {
                            "title": "Burn My Dread",
                            "link": "https://youtu.be/AcCoPQE6g10"
                        },
                        "ID_762": {
                            "title": "Unavoidable Battle",
                            "link": "https://youtu.be/sqbsVjwXo3o"
                        },
                        "ID_763": {
                            "title": "When The Moon's Reaching Out Stars",
                            "link": "https://youtu.be/-kRJUKA_dFw"
                        },
                        "ID_764": {
                            "title": "Iwatodai Station",
                            "link": "https://youtu.be/egKF1UvMcZA"
                        },
                        "ID_765": {
                            "title": "Mass Destruction",
                            "link": "https://youtu.be/BjQHhDTbPCA"
                        },
                        "ID_766": {
                            "title": "Joy",
                            "link": "https://youtu.be/y7nIywla0DU"
                        },
                        "ID_767": {
                            "title": "Living With Determination",
                            "link": "https://youtu.be/oYuzXkDRRXE"
                        },
                        "ID_768": {
                            "title": "The Battle for Everyone's Souls",
                            "link": "https://youtu.be/DwzOrmQ43MQ"
                        },
                        "ID_769": {
                            "title": "Burn My Dread -Last Battle-",
                            "link": "https://youtu.be/-chq2BWWMhA"
                        },
                        "ID_770": {
                            "title": "Memories of You",
                            "link": "https://youtu.be/JiKMzXwOH-E"
                        }
                    }
                },
                "Persona 4": {
                    "gameName": "Persona 4",
                    "answers": ["persona 4", "p4", "p4g", "persona 4 golden"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1055": {
                            "title": "Backside of The TV",
                            "link": "https://youtu.be/3_cp4g7YGic"
                        },
                        "ID_1056": {
                            "title": "I'll Face Myself",
                            "link": "https://youtu.be/OtIxJwEZ-DY"
                        },
                        "ID_1057": {
                            "title": "Sauna",
                            "link": "https://youtu.be/B0uHhmSIjtY"
                        },
                        "ID_1058": {
                            "title": "Reach Out to the Truth",
                            "link": "https://youtu.be/Vd_PuNxt5Jg"
                        },
                        "ID_1059": {
                            "title": "Specialist",
                            "link": "https://youtu.be/4iPABiSH0Zg"
                        },
                        "ID_1060": {
                            "title": "Heartbeat, Heartbreak",
                            "link": "https://youtu.be/YzS9fxRFuNQ"
                        },
                        "ID_1061": {
                            "title": "New World Fool",
                            "link": "https://youtu.be/wbuMkOryqY8"
                        },
                        "ID_1062": {
                            "title": "The Fog",
                            "link": "https://youtu.be/GpVOjYty8kk"
                        },
                        "ID_1063": {
                            "title": "Junes Theme",
                            "link": "https://youtu.be/MJaLQhEObXY"
                        },
                        "ID_1064": {
                            "title": "Secret Base",
                            "link": "https://youtu.be/tVVk0LEUGmw"
                        },
                        "ID_1065": {
                            "title": "Heaven",
                            "link": "https://youtu.be/zQ7H4tZa8-k"
                        },
                        "ID_1066": {
                            "title": "Long Way",
                            "link": "https://youtu.be/IOgWP625RRE"
                        },
                        "ID_1067": {
                            "title": "Electronica in The Velvet Room",
                            "link": "https://youtu.be/UrjeZHsgxqg"
                        }
                    }
                },
                "Persona 4 Golden": {
                    "gameName": "Persona 4 Golden",
                    "answers": ["persona 4 golden", "p4g"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1068": {
                            "title": "Time to Make History",
                            "link": "https://youtu.be/D8AGET-XQOA"
                        }
                    }
                },
                "Persona 4 Golden The Animation": {
                    "gameName": "Persona 4 Golden The Animation",
                    "answers": ["persona 4 golden the animation", "p4a", "p4 anime", "p4", "p4g"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1069": {
                            "title": "Ying Yang",
                            "link": "https://youtu.be/OIsrm7ZFH1U"
                        }
                    }
                },
                "Persona Q2: New Cinema Labyrinth": {
                    "gameName": "Persona Q2: New Cinema Labyrinth",
                    "answers": ["persona q2: new cinema labyrinth", "pq2", "new cinema labyrinth", "persona q2", "persona q2 new cinema labyrinth"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1075": {
                            "title": "Road Less Taken",
                            "link": "https://youtu.be/lGS9flfg8Vg"
                        },
                        "ID_1076": {
                            "title": "Pull the Trigger",
                            "link": "https://youtu.be/n5O_jq1CSv0"
                        }
                    }
                },
                "Persona 4 Arena": {
                    "gameName": "Persona 4 Arena",
                    "answers": ["persona 4 arena", "p4a", "p4 arena", "p4au", "p4au", "persona 4 arena ultimax"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1077": {
                            "title": "Reach Out to the Truth",
                            "link": "https://youtu.be/xZ9ZAB3Jfr4"
                        }
                    }
                },
                "Persona 4 Arena Ultimax": {
                    "gameName": "Persona 4 Arena Ultimax",
                    "answers": ["persona 4 arena ultimax", "p4au"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1078": {
                            "title": "Break out of...",
                            "link": "https://youtu.be/PM5L9Zyk3UQ"
                        },
                        "ID_1079": {
                            "title": "A Fool or Clown?",
                            "link": "https://youtu.be/p5-3EQ0itcY"
                        }
                    }
                }
            }
        },
        "PES": {
            "seriesName": "PES",
            "seriesColor": "red",
            "game": {
                "PES 5": {
                    "gameName": "PES 5",
                    "answers": ["pes 5", "pes 5", "pro evolution soccer 5"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_712": {
                            "title": "Main Menu Music (Spiral 2005)",
                            "link": "https://youtu.be/k6rPnOVVPjw"
                        },
                        "ID_713": {
                            "title": "Formation Screen",
                            "link": "https://youtu.be/4gHa8Lq3kyc"
                        },
                        "ID_714": {
                            "title": "Master League",
                            "link": "https://youtu.be/q1wDlX7EL3o"
                        }
                    }
                }
            }
        },
        "Pokemon": {
            "seriesName": "Pokemon",
            "seriesColor": "red",
            "game": {
                "Pokemon Colosseum": {
                    "gameName": "Pokemon Colosseum",
                    "answers": ["pokemon colosseum", "colosseum", "pokemon colosseum"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_771": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/yQKUxSKSZ88"
                        },
                        "ID_772": {
                            "title": "Main Menu",
                            "link": "https://youtu.be/QimoJx4lbNY"
                        },
                        "ID_773": {
                            "title": "Friendly Battle",
                            "link": "https://youtu.be/JkSeSjwppw4"
                        },
                        "ID_774": {
                            "title": "Normal Battle",
                            "link": "https://youtu.be/qrfhwpdjbPQ"
                        },
                        "ID_775": {
                            "title": "Phenac City",
                            "link": "https://youtu.be/BoBZqp25Dvs"
                        },
                        "ID_776": {
                            "title": "Pokemon Center",
                            "link": "https://youtu.be/UAdKWm-aMyE"
                        },
                        "ID_777": {
                            "title": "Snagem Hideout",
                            "link": "https://youtu.be/GMZCGEPIKvo"
                        },
                        "ID_778": {
                            "title": "Cipher Syndicate",
                            "link": "https://youtu.be/LnVPiA1zC4o"
                        },
                        "ID_779": {
                            "title": "Miror B.'s Retro Groove",
                            "link": "https://youtu.be/X67YWv5C6qQ"
                        },
                        "ID_780": {
                            "title": "Cipher Peon Battle",
                            "link": "https://youtu.be/0U5f_XivxDk"
                        },
                        "ID_781": {
                            "title": "Pyrite Town",
                            "link": "https://youtu.be/_QR-cfd6hCs"
                        },
                        "ID_782": {
                            "title": "Pyrite Building",
                            "link": "https://youtu.be/J8NBYomZ9MY"
                        },
                        "ID_783": {
                            "title": "Cipher Admin Battle",
                            "link": "https://youtu.be/5QvMqYZTR5Y"
                        },
                        "ID_784": {
                            "title": "Mirakle B. Imitation Groove",
                            "link": "https://youtu.be/8ZoqGBFdWf8"
                        },
                        "ID_785": {
                            "title": "Agate Village",
                            "link": "https://youtu.be/MxvZsYOVtO0"
                        },
                        "ID_786": {
                            "title": "Relic Forest",
                            "link": "https://youtu.be/I9v1DcE7a1E"
                        },
                        "ID_787": {
                            "title": "The Under",
                            "link": "https://youtu.be/pvFFxx3k38A"
                        },
                        "ID_788": {
                            "title": "Final Battle",
                            "link": "https://youtu.be/um0pkcPFCLs"
                        },
                        "ID_789": {
                            "title": "Staff Roll (US/PAL)",
                            "link": "https://youtu.be/yO7qWWD8VIU"
                        }
                    }
                },
                "Pokemon Diamond and Pearl": {
                    "gameName": "Pokemon Diamond and Pearl",
                    "answers": ["pokemon diamond and pearl", "dppt", "pokemon diamond", "pokemon pearl"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_985": {
                            "title": "Team Galactic HQ",
                            "link": "https://youtu.be/1r2j54GCiEw"
                        },
                        "ID_986": {
                            "title": "Jubilife City (Night)",
                            "link": "https://youtu.be/lAKZZYNb8YI"
                        },
                        "ID_987": {
                            "title": "Oreburgh City (Day)",
                            "link": "https://youtu.be/TYfuavaMf10"
                        },
                        "ID_988": {
                            "title": "Eterna Forest",
                            "link": "https://youtu.be/y0Fg9xtjFxk"
                        },
                        "ID_989": {
                            "title": "Eterna City (Night)",
                            "link": "https://youtu.be/QRFmXPrOf3o"
                        },
                        "ID_990": {
                            "title": "Battle Galactic Cyrus",
                            "link": "https://youtu.be/SE5dBmWml34"
                        },
                        "ID_991": {
                            "title": "Route 216 (Day)",
                            "link": "https://youtu.be/1NALkdPuHDQ"
                        },
                        "ID_992": {
                            "title": "Mt. Coronet",
                            "link": "https://youtu.be/UhmygATFpLI"
                        },
                        "ID_993": {
                            "title": "Battle! Dialga and Palkia",
                            "link": "https://youtu.be/r6c99c4HKq8"
                        },
                        "ID_994": {
                            "title": "Route 225 (Night)",
                            "link": "https://youtu.be/xJ7TRUH-vWo"
                        },
                        "ID_995": {
                            "title": "Stark Mountain",
                            "link": "https://youtu.be/Db07wCTqQoE"
                        },
                        "ID_996": {
                            "title": "Route 228 (Night)",
                            "link": "https://youtu.be/BKerdWYF1SU"
                        },
                        "ID_997": {
                            "title": "Pokemon League (Night)",
                            "link": "https://youtu.be/7dzZl8ge1z0"
                        },
                        "ID_998": {
                            "title": "Encounter! Champion Cynthia",
                            "link": "https://youtu.be/K3l2H2uIb94"
                        },
                        "ID_999": {
                            "title": "Battle! Champion Cynthia",
                            "link": "https://youtu.be/DvlHaZIrndA"
                        },
                        "ID_1000": {
                            "title": "Battle! Arceus",
                            "link": "https://youtu.be/glhEem71H-E"
                        }
                    }
                },
                "Pokemon Platinum": {
                    "gameName": "Pokemon Platinum",
                    "answers": ["pokemon platinum", "dppt", "pokemon platinum"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1001": {
                            "title": "Battle! Giratina",
                            "link": "https://youtu.be/EfFqkIsn88U"
                        },
                        "ID_1002": {
                            "title": "Battle! Frontier Brain",
                            "link": "https://youtu.be/W_4nBxJY5kM"
                        }
                    }
                },
                "Pokemon HeartGold and SoulSilver": {
                    "gameName": "Pokemon HeartGold and SoulSilver",
                    "answers": ["pokemon heartgold and soulsilver", "hgss", "pokemon heartgold", "pokemon soulsilver", "pokemon heart gold", "pokemon soul silver"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1003": {
                            "title": "Battle! Champion",
                            "link": "https://youtu.be/9t03YXkyPrg"
                        },
                        "ID_1004": {
                            "title": "Battle! Entei",
                            "link": "https://youtu.be/q7bLZdr4vOY"
                        },
                        "ID_1005": {
                            "title": "Battle! Gym Leader (Kanto)",
                            "link": "https://youtu.be/V7e8j-EFkdQ"
                        },
                        "ID_1006": {
                            "title": "Battle! Gym Leader (Johto)",
                            "link": "https://youtu.be/1lefOgf5ST4"
                        },
                        "ID_1007": {
                            "title": "Battle! Lugia",
                            "link": "https://youtu.be/l9OdbpRU87I"
                        },
                        "ID_1008": {
                            "title": "Battle! Trainer (Kanto)",
                            "link": "https://youtu.be/6ikAKfWkBeY"
                        },
                        "ID_1009": {
                            "title": "Goldenrod City",
                            "link": "https://youtu.be/y5c3ZdABEsg"
                        },
                        "ID_1010": {
                            "title": "Ice Path",
                            "link": "https://youtu.be/ygNaSq_lOhw"
                        },
                        "ID_1011": {
                            "title": "Route 47",
                            "link": "https://youtu.be/BNd6YxZKlq0"
                        },
                        "ID_1012": {
                            "title": "Sinjoh Ruins",
                            "link": "https://youtu.be/HGYcq23JeSo"
                        },
                        "ID_1013": {
                            "title": "Encounter! Team Rocket",
                            "link": "https://youtu.be/hpgDFUhOvwQ"
                        }
                    }
                },
                "Pokemon Black and White": {
                    "gameName": "Pokemon Black and White",
                    "answers": ["pokemon black and white", "bw", "pokemon black", "pokemon white", "pokemon black 2", "pokemon white 2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1014": {
                            "title": "Battle! Gym Leader",
                            "link": "https://youtu.be/Rl6A4oGpOSw"
                        },
                        "ID_1015": {
                            "title": "Skyarrow Bridge",
                            "link": "https://youtu.be/G4N8a08SVtk"
                        },
                        "ID_1016": {
                            "title": "Unwavering Emotion",
                            "link": "https://youtu.be/kaEDY2eTg-M"
                        },
                        "ID_1017": {
                            "title": "Battle! N",
                            "link": "https://youtu.be/pZCbK4G44S0"
                        },
                        "ID_1018": {
                            "title": "Crisis in Battle!",
                            "link": "https://youtu.be/Y8OTqnErCuY"
                        },
                        "ID_1019": {
                            "title": "Driftveil City",
                            "link": "https://youtu.be/FHkvQX26EA4"
                        },
                        "ID_1020": {
                            "title": "Route 6 (Winter)",
                            "link": "https://youtu.be/K0rvJ4SLcuM"
                        },
                        "ID_1021": {
                            "title": "Opelucid City (White)",
                            "link": "https://youtu.be/hEmATwp7IC8"
                        },
                        "ID_1022": {
                            "title": "Opelucid City (Black)",
                            "link": "https://youtu.be/V1zHBoRFSrM"
                        },
                        "ID_1023": {
                            "title": "Route 10",
                            "link": "https://youtu.be/kt-ZzBeDHQs"
                        },
                        "ID_1024": {
                            "title": "Battle! Elite 4",
                            "link": "https://youtu.be/W3kqLhOuzu0"
                        },
                        "ID_1025": {
                            "title": "Battle! Reshiram and Zekrom",
                            "link": "https://youtu.be/tObYNbbAIw0"
                        },
                        "ID_1026": {
                            "title": "Battle! Ghetsis",
                            "link": "https://youtu.be/ktqqE5cmE8M"
                        },
                        "ID_1027": {
                            "title": "Battle! Legendary Pokemon",
                            "link": "https://youtu.be/o20vpORCWdI"
                        },
                        "ID_1028": {
                            "title": "Black City",
                            "link": "https://youtu.be/o20vpORCWdI"
                        },
                        "ID_1029": {
                            "title": "Village Bridge",
                            "link": "https://youtu.be/LY4QQ1fuEyo"
                        }
                    }
                },
                "Pokemon Black 2 and White 2": {
                    "gameName": "Pokemon Black 2 and White 2",
                    "answers": ["pokemon black 2 and white 2", "bw2", "pokemon black 2", "pokemon white 2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1030": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/CKjnlySgqOk"
                        },
                        "ID_1031": {
                            "title": "Virkbank City",
                            "link": "https://youtu.be/6IJsv3ai89M"
                        },
                        "ID_1032": {
                            "title": "Battle! Neo Plasma",
                            "link": "https://youtu.be/-vCbwiGamBw"
                        },
                        "ID_1033": {
                            "title": "Lentimas Town",
                            "link": "https://youtu.be/ILf8Lw24N4E"
                        },
                        "ID_1034": {
                            "title": "Reversal Mountain (Black)",
                            "link": "https://youtu.be/VlQKaJLbapE"
                        },
                        "ID_1035": {
                            "title": "N's Room",
                            "link": "https://youtu.be/nmZ5pSjeQVc"
                        },
                        "ID_1036": {
                            "title": "Battle! N",
                            "link": "https://youtu.be/AiRMLJIDnXM"
                        },
                        "ID_1037": {
                            "title": "Battle! Champion Iris",
                            "link": "https://youtu.be/G1kHPeGqSw8"
                        },
                        "ID_1038": {
                            "title": "Battle! Colress",
                            "link": "https://youtu.be/2FN2EfesYR0"
                        }
                    }
                },
                "Pokemon Sword and Shield": {
                    "gameName": "Pokemon Sword and Shield",
                    "answers": ["pokemon sword and shield", "swsh", "pokemon sword", "pokemon shield"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1039": {
                            "title": "Battle! Bede",
                            "link": "https://youtu.be/z_TPXbH7ee4"
                        },
                        "ID_1040": {
                            "title": "Battle! Gym Leader Piers",
                            "link": "https://youtu.be/EeFJRaH2Mz8"
                        },
                        "ID_1041": {
                            "title": "Motostoke",
                            "link": "https://youtu.be/KEbqVR61O3k"
                        },
                        "ID_1042": {
                            "title": "Wyndon",
                            "link": "https://youtu.be/0GmX6x4v09Y"
                        },
                        "ID_1043": {
                            "title": "Battle! Battle Tower",
                            "link": "https://youtu.be/Pvm5yDtaGiY"
                        },
                        "ID_1044": {
                            "title": "Battle! Chairman Rose",
                            "link": "https://youtu.be/ugyONbAGE8E"
                        }
                    }
                },
                "Pokemon Ultra Sun and Ultra Moon": {
                    "gameName": "Pokemon Ultra Sun and Ultra Moon",
                    "answers": ["pokemon ultra sun and ultra moon", "usum", "pokemon ultra sun", "pokemon ultra moon"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1045": {
                            "title": "Battle! Flare Boss Lysandre",
                            "link": "https://youtu.be/IBTqAsYC7NI"
                        },
                        "ID_1046": {
                            "title": "Battle! Galactic Boss Cyrus",
                            "link": "https://youtu.be/eqjb2vEIW4I"
                        },
                        "ID_1047": {
                            "title": "Battle! Ultra Necrozma",
                            "link": "https://youtu.be/NFTemk99fLU"
                        }
                    }
                },
                "Pokemon Sun and Moon": {
                    "gameName": "Pokemon Sun and Moon",
                    "answers": ["pokemon sun and moon", "sm", "pokemon sun", "pokemon moon", "pokemon ultra sun", "pokemon ultra moon"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1048": {
                            "title": "Battle! Champion Title Match",
                            "link": "https://youtu.be/-dkK9r57BNk"
                        },
                        "ID_1049": {
                            "title": "Battle! Guzma",
                            "link": "https://youtu.be/OwzjXOPbz9Q"
                        },
                        "ID_1050": {
                            "title": "Battle! Plumeria",
                            "link": "https://youtu.be/A6Sx25tAd9I"
                        }
                    }
                },
                "Pokemon Omega Ruby and Alpha Sapphire": {
                    "gameName": "Pokemon Omega Ruby and Alpha Sapphire",
                    "answers": ["pokemon omega ruby and alpha sapphire", "oras", "pokemon omega ruby", "pokemon alpha sapphire"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1051": {
                            "title": "Battle! Wally",
                            "link": "https://youtu.be/9sX_54hHcEE"
                        },
                        "ID_1052": {
                            "title": "Battle! Lorekeeper Zinnia",
                            "link": "https://youtu.be/GIn8_Q27WFY"
                        },
                        "ID_1053": {
                            "title": "Battle! Aqua and Magma Leader",
                            "link": "https://youtu.be/dA3mccI1DjY"
                        },
                        "ID_1054": {
                            "title": "Battle! Champion Steven",
                            "link": "https://youtu.be/UDFWznA_L2k"
                        }
                    }
                }
            }
        },
        "Portal": {
            "seriesName": "Portal",
            "seriesColor": "red",
            "game": {
                "Portal 2": {
                    "gameName": "Portal 2",
                    "answers": ["portal 2", "portal 2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_865": {
                            "title": "Science is Fun",
                            "link": "https://youtu.be/zxb1zoj-hcM"
                        },
                        "ID_866": {
                            "title": "The Future Starts With You",
                            "link": "https://youtu.be/GzITksXiErI"
                        },
                        "ID_867": {
                            "title": "The Friendly Faith Plate",
                            "link": "https://youtu.be/aATyrpOMsOU"
                        },
                        "ID_868": {
                            "title": "I Saw a Deer Today",
                            "link": "https://youtu.be/GCTBPlEqsUw"
                        },
                        "ID_869": {
                            "title": "Turret Wife Serenade",
                            "link": "https://youtu.be/5UNISuSde1c"
                        },
                        "ID_870": {
                            "title": "Machiavellian Bach",
                            "link": "https://youtu.be/FJMXdikWpfk"
                        },
                        "ID_871": {
                            "title": "OMG, What Has He Done?",
                            "link": "https://youtu.be/3Qgwb9KaLp0"
                        },
                        "ID_872": {
                            "title": "Cara Mia Addio",
                            "link": "https://youtu.be/hpaiZHvweJc"
                        },
                        "ID_873": {
                            "title": "Want You Gone",
                            "link": "https://youtu.be/y_hD-aVeL2k"
                        },
                        "ID_874": {
                            "title": "Robots FTW",
                            "link": "https://youtu.be/bBak9CMoXoc"
                        },
                        "ID_875": {
                            "title": "Reconstructing More Science",
                            "link": "https://youtu.be/MjHmPZmi-k8"
                        }
                    }
                },
                "Portal": {
                    "gameName": "Portal",
                    "answers": ["portal", "portal"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_939": {
                            "title": "Still Alive",
                            "link": "https://youtu.be/Mk0PqG79JQI"
                        }
                    }
                }
            }
        },
        "Professor Layton": {
            "seriesName": "Professor Layton",
            "seriesColor": "red",
            "game": {
                "Curious Village": {
                    "gameName": "Curious Village",
                    "answers": ["curious village", "professor layton", "professor layton and the curious village", "professor layton curious village", "curious village", "plcc", "professor layton cc"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_88": {
                            "title": "Layton's Theme",
                            "link": "https://youtu.be/dFBKHSitIjo"
                        },
                        "ID_89": {
                            "title": "The Curious Village",
                            "link": "https://youtu.be/qPfAwPp9Apw"
                        },
                        "ID_90": {
                            "title": "Walking in the Village",
                            "link": "https://youtu.be/PDt86F-QWm0"
                        },
                        "ID_91": {
                            "title": "Mysterious Girl",
                            "link": "https://youtu.be/J1KmliLXVkE"
                        },
                        "ID_92": {
                            "title": "Puzzle",
                            "link": "https://youtu.be/x2nPysfmt0U"
                        },
                        "ID_93": {
                            "title": "Something Happens",
                            "link": "https://youtu.be/1FuyqT0MsNU"
                        },
                        "ID_94": {
                            "title": "Pursuit at Night",
                            "link": "https://youtu.be/NE_WVSv4sVo"
                        },
                        "ID_95": {
                            "title": "Night Falls",
                            "link": "https://youtu.be/ZPbImzHs5DE"
                        },
                        "ID_96": {
                            "title": "The Village Starts Moving",
                            "link": "https://youtu.be/HxS4AAPb7to"
                        },
                        "ID_97": {
                            "title": "Ferris Wheel Park",
                            "link": "https://youtu.be/xVP_E8IkbPM"
                        },
                        "ID_98": {
                            "title": "Memory of the Village",
                            "link": "https://youtu.be/UBGERI7m63Q"
                        },
                        "ID_99": {
                            "title": "Ending Theme",
                            "link": "https://youtu.be/SlICVgNj690"
                        }
                    }
                },
                "Pandora's / Diabolical Box": {
                    "gameName": "Pandora's / Diabolical Box",
                    "answers": ["pandora's / diabolical box", "professor layton pb", "professor layton db", "professor layton pandoras box", "professor layton pandora's box", "professor layton diabolical box ", "professor layton and the diabolical box", "diabolical box", "pandoras box", "pandora's box"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_541": {
                            "title": "Theme of Diabolical Box",
                            "link": "https://youtu.be/WCZ-_U3md4I"
                        },
                        "ID_542": {
                            "title": "London",
                            "link": "https://youtu.be/HDyT-msFFCg"
                        },
                        "ID_543": {
                            "title": "The Molentary Express",
                            "link": "https://youtu.be/RR8_BMN68Ok"
                        },
                        "ID_544": {
                            "title": "Suspense",
                            "link": "https://youtu.be/7t2AMjtVv28"
                        },
                        "ID_545": {
                            "title": "Dropstone",
                            "link": "https://youtu.be/Z5wVNSvl1io"
                        },
                        "ID_546": {
                            "title": "A Disquieting Atmosphere",
                            "link": "https://youtu.be/DZWXHK0s5Dg"
                        },
                        "ID_547": {
                            "title": "Folsense",
                            "link": "https://youtu.be/t2OmAxetWrc"
                        },
                        "ID_548": {
                            "title": "Lost Forest",
                            "link": "https://youtu.be/mE-QE4_73KU"
                        },
                        "ID_549": {
                            "title": "Iris",
                            "link": "https://youtu.be/ngKf9Uummqk"
                        }
                    }
                },
                "Lost / Unwound Future": {
                    "gameName": "Lost / Unwound Future",
                    "answers": ["lost / unwound future", "professor layton lf", "professor layton uf", "unwound future", "lost future"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_550": {
                            "title": "The Unwound Future / The Lost Future",
                            "link": "https://youtu.be/K05xxq1-9ZY"
                        },
                        "ID_551": {
                            "title": "Puzzles (Reinvented)",
                            "link": "https://youtu.be/nXwm7AVhx_A"
                        },
                        "ID_552": {
                            "title": "London Streets",
                            "link": "https://youtu.be/MuSmUI25Ulw"
                        },
                        "ID_553": {
                            "title": "Tension",
                            "link": "https://youtu.be/GzDLP-jHmz4"
                        },
                        "ID_554": {
                            "title": "A Quiet Town",
                            "link": "https://youtu.be/PCokkvGl2AE"
                        },
                        "ID_555": {
                            "title": "Sorrow",
                            "link": "https://youtu.be/aWMpDVrcyvw"
                        },
                        "ID_556": {
                            "title": "Suspicion",
                            "link": "https://youtu.be/LUToNKrxT74"
                        },
                        "ID_557": {
                            "title": "Puzzle Battle",
                            "link": "https://youtu.be/w7xAH0NMd2s"
                        },
                        "ID_558": {
                            "title": "Memories",
                            "link": "https://youtu.be/hlG6-NK6N8Q"
                        },
                        "ID_559": {
                            "title": "The Professors Deductions",
                            "link": "https://youtu.be/3gbWiFxMvNU"
                        },
                        "ID_560": {
                            "title": "Don Paolo's Theme",
                            "link": "https://youtu.be/ohizEQsS6jY"
                        },
                        "ID_561": {
                            "title": "Puzzles Reinvented 2",
                            "link": "https://youtu.be/_hhRNn107lo"
                        },
                        "ID_562": {
                            "title": "The Research Facility",
                            "link": "https://youtu.be/wF4LCLp-xSo"
                        },
                        "ID_563": {
                            "title": "The Mobile Fortress",
                            "link": "https://youtu.be/ehCTkparvHI"
                        },
                        "ID_564": {
                            "title": "The Toy Car",
                            "link": "https://youtu.be/3agpqUJ0JeI"
                        },
                        "ID_565": {
                            "title": "Time Travel [Instrumental]",
                            "link": "https://youtu.be/jmX9uJBVWH0"
                        }
                    }
                }
            }
        },
        "Rhythm Heaven": {
            "seriesName": "Rhythm Heaven",
            "seriesColor": "red",
            "game": {
                "Rhythm Heaven (DS)": {
                    "gameName": "Rhythm Heaven (DS)",
                    "answers": ["rhythm heaven (ds)", "rhythm heaven ds", "rhythm heaven", "rhythm paradise", "rhythm paradise ds"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_100": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/TmQtwXr9PSo"
                        },
                        "ID_101": {
                            "title": "Game Select",
                            "link": "https://youtu.be/gjioI1QgyoY"
                        },
                        "ID_102": {
                            "title": "Built to Scale",
                            "link": "https://youtu.be/GbeQafrErOY"
                        },
                        "ID_103": {
                            "title": "Glee Club",
                            "link": "https://youtu.be/Mc4odqtZKFk"
                        },
                        "ID_104": {
                            "title": "Thrilling! Is this Love?",
                            "link": "https://youtu.be/XHXVFBKZ9i8"
                        },
                        "ID_105": {
                            "title": "Remix 1",
                            "link": "https://youtu.be/jz39FqoWA20"
                        },
                        "ID_106": {
                            "title": "Rhythm Rally",
                            "link": "https://youtu.be/Ix1Etc5eKck"
                        },
                        "ID_107": {
                            "title": "Remix 2",
                            "link": "https://youtu.be/qLUv4jj2640"
                        },
                        "ID_108": {
                            "title": "Love Ooh Ooh Paradise",
                            "link": "https://youtu.be/MhN1xBvmq2w"
                        },
                        "ID_109": {
                            "title": "Remix 3",
                            "link": "https://youtu.be/0SZMGTXKhNw"
                        },
                        "ID_110": {
                            "title": "Love Lab",
                            "link": "https://youtu.be/sScjtRcE7SQ"
                        },
                        "ID_111": {
                            "title": "Remix 4",
                            "link": "https://youtu.be/LxyG2WRmOD0"
                        },
                        "ID_112": {
                            "title": "Tunnel",
                            "link": "https://youtu.be/v7fphvqlx5I"
                        },
                        "ID_113": {
                            "title": "Tears of a Dog Ninja",
                            "link": "https://youtu.be/A67fTNF-kz8"
                        },
                        "ID_114": {
                            "title": "Remix 5",
                            "link": "https://youtu.be/2pWK8K3YBM0"
                        },
                        "ID_115": {
                            "title": "Lockstep",
                            "link": "https://youtu.be/6ixtYsFcaHw"
                        },
                        "ID_116": {
                            "title": "Rockers",
                            "link": "https://youtu.be/ZaDUZfbc9uY"
                        },
                        "ID_117": {
                            "title": "Karate Man (Struck by the Rain)",
                            "link": "https://youtu.be/b6fqlTB-nSo"
                        },
                        "ID_118": {
                            "title": "Remix 6",
                            "link": "https://youtu.be/IybcisI5oJc"
                        },
                        "ID_119": {
                            "title": "Staff Credits (That's Paradise)",
                            "link": "https://youtu.be/aKAFoq0m2CA"
                        },
                        "ID_120": {
                            "title": "Cast",
                            "link": "https://youtu.be/P3Wm4WuyZew"
                        },
                        "ID_121": {
                            "title": "Game Select 2",
                            "link": "https://youtu.be/2BIoQbGtSWE"
                        },
                        "ID_122": {
                            "title": "Remix 7",
                            "link": "https://youtu.be/0rD7i8qDDrM"
                        },
                        "ID_123": {
                            "title": "Rhythm Rally 2",
                            "link": "https://youtu.be/sgDl-eXB-i8"
                        },
                        "ID_124": {
                            "title": "Remix 8",
                            "link": "https://youtu.be/pHKkgTZS5K8"
                        },
                        "ID_125": {
                            "title": "Space Soccer 2",
                            "link": "https://youtu.be/Vz8g87hZ8qs"
                        },
                        "ID_126": {
                            "title": "Remix 9",
                            "link": "https://youtu.be/A0MGFrh0GBQ"
                        },
                        "ID_127": {
                            "title": "Munchy Monk Circus",
                            "link": "https://youtu.be/dC8kM1opPCg"
                        },
                        "ID_128": {
                            "title": "Shoot-'Em-Up 2",
                            "link": "https://youtu.be/W0wzAjKry7I"
                        },
                        "ID_129": {
                            "title": "Rockers 2",
                            "link": "https://youtu.be/gOCsXr6o3Nk"
                        },
                        "ID_130": {
                            "title": "Remix 10",
                            "link": "https://youtu.be/QYcyLdhgqQI"
                        }
                    }
                },
                "Rhythm Heaven Fever": {
                    "gameName": "Rhythm Heaven Fever",
                    "answers": ["rhythm heaven fever", "rhythm heaven fever", "beat the beat rhythm paradise", "beat the beat: rhythm paradise", "rhythm heaven wii", "rhythm paradise wii"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_131": {
                            "title": "Game Select 1",
                            "link": "https://youtu.be/0rF96AqSwmI"
                        },
                        "ID_132": {
                            "title": "Hole in One",
                            "link": "https://youtu.be/s_QQGykxEPI"
                        },
                        "ID_133": {
                            "title": "Remix 1",
                            "link": "https://youtu.be/TcufdwbnF0k"
                        },
                        "ID_134": {
                            "title": "Tambourine",
                            "link": "https://youtu.be/Ll43omBpo6E"
                        },
                        "ID_135": {
                            "title": "Monkey Watch",
                            "link": "https://youtu.be/Z_z2NYEOKXM"
                        },
                        "ID_136": {
                            "title": "Built to Scale",
                            "link": "https://youtu.be/NSAt95BnfM0"
                        },
                        "ID_137": {
                            "title": "Air Rally",
                            "link": "https://youtu.be/1MBM0ndrpB8"
                        },
                        "ID_138": {
                            "title": "Remix 3 ~ I Feel Fine!! (Japanese)",
                            "link": "https://youtu.be/boz_n3N_p5U"
                        },
                        "ID_139": {
                            "title": "Ringside",
                            "link": "https://youtu.be/tgPFSiIeP14"
                        },
                        "ID_140": {
                            "title": "Packing Pests",
                            "link": "https://youtu.be/ebdCqKixkgE"
                        },
                        "ID_141": {
                            "title": "Remix 4",
                            "link": "https://youtu.be/-XWxoXdeSOU"
                        },
                        "ID_142": {
                            "title": "Flipper Flop",
                            "link": "https://youtu.be/EcQ4upwXgX0"
                        },
                        "ID_143": {
                            "title": "Exhibition Match",
                            "link": "https://youtu.be/X1eCEd22UcQ"
                        },
                        "ID_144": {
                            "title": "Flock Step",
                            "link": "https://youtu.be/4HvtGK9-tD8"
                        },
                        "ID_145": {
                            "title": "Remix 5",
                            "link": "https://youtu.be/CHT2wj0qo9I"
                        },
                        "ID_146": {
                            "title": "Bossa Nova",
                            "link": "https://youtu.be/lZptJeDYtGs"
                        },
                        "ID_147": {
                            "title": "Remix 6",
                            "link": "https://youtu.be/F2WmMMfNFdQ"
                        },
                        "ID_148": {
                            "title": "Tap Troupe",
                            "link": "https://youtu.be/yhpfl45_HYs"
                        },
                        "ID_149": {
                            "title": "Cheer Readers",
                            "link": "https://youtu.be/HZ3eo3XSRWw"
                        },
                        "ID_150": {
                            "title": "Karate Man (Japanese)",
                            "link": "https://youtu.be/iy-obB3oLsg"
                        },
                        "ID_151": {
                            "title": "Remix 7",
                            "link": "https://youtu.be/KI6jFsrs-28"
                        },
                        "ID_152": {
                            "title": "Night Walk (Japanese)",
                            "link": "https://youtu.be/J05QRBGZ1sU"
                        },
                        "ID_153": {
                            "title": "Character Cast",
                            "link": "https://youtu.be/gXY5Mv4rqIk"
                        },
                        "ID_154": {
                            "title": "Game Select 2",
                            "link": "https://youtu.be/9gmk3IPraj8"
                        },
                        "ID_155": {
                            "title": "Built to Scale 2",
                            "link": "https://youtu.be/xOzgsI3wlwo"
                        },
                        "ID_156": {
                            "title": "Remix 8 (Japanese)",
                            "link": "https://youtu.be/dGpu0HZkEBg"
                        },
                        "ID_157": {
                            "title": "Cheer Readers 2",
                            "link": "https://youtu.be/sStZ-s85Cw4"
                        },
                        "ID_158": {
                            "title": "Remix 9 (Japanese)",
                            "link": "https://youtu.be/ORVMXQMVJxM"
                        },
                        "ID_159": {
                            "title": "Packing Pests 2",
                            "link": "https://youtu.be/YVzxJpxmiAA"
                        },
                        "ID_160": {
                            "title": "Karate Man 2 (Japanese)",
                            "link": "https://youtu.be/oCinvV0oooE"
                        },
                        "ID_161": {
                            "title": "Remix 10",
                            "link": "https://youtu.be/8tbDJYUc0z0"
                        }
                    }
                }
            }
        },
        "Super Hexagon": {
            "seriesName": "Super Hexagon",
            "seriesColor": "red",
            "game": {
                "Super Hexagon": {
                    "gameName": "Super Hexagon",
                    "answers": ["super hexagon", "super hexagon"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_924": {
                            "title": "Courtesy",
                            "link": "https://youtu.be/Jb0FPAnxSjY"
                        },
                        "ID_925": {
                            "title": "Otis",
                            "link": "https://youtu.be/0_gBrYzLy3Y"
                        },
                        "ID_926": {
                            "title": "Focus",
                            "link": "https://youtu.be/wD3j1O1XHQY"
                        }
                    }
                }
            }
        },
        "Super Meat Boy": {
            "seriesName": "Super Meat Boy",
            "seriesColor": "red",
            "game": {
                "Super Meat Boy": {
                    "gameName": "Super Meat Boy",
                    "answers": ["super meat boy", "super meat boy", "meat boy", "smb"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_845": {
                            "title": "Forest Funk",
                            "link": "https://youtu.be/3xHttYIwocY"
                        },
                        "ID_846": {
                            "title": "The Battle of Lil' Slugger",
                            "link": "https://youtu.be/WL-8rU8ltA4"
                        },
                        "ID_847": {
                            "title": "Betus Blues",
                            "link": "https://youtu.be/6Kf7ycHajX4"
                        },
                        "ID_848": {
                            "title": "Can o' Salt",
                            "link": "https://youtu.be/VKNJTrpQWsE"
                        },
                        "ID_849": {
                            "title": "Hot Damned",
                            "link": "https://youtu.be/AlAQ8fdqoFA"
                        },
                        "ID_850": {
                            "title": "It Ends",
                            "link": "https://youtu.be/s87s5CWfRus"
                        },
                        "ID_851": {
                            "title": "Dr Fetus' Castle",
                            "link": "https://youtu.be/LE_Lrs8LomE"
                        },
                        "ID_852": {
                            "title": "McLarty Party People",
                            "link": "https://youtu.be/H37HJSEl4ug"
                        }
                    }
                }
            }
        },
        "Terraria": {
            "seriesName": "Terraria",
            "seriesColor": "red",
            "game": {
                "Terraria Calamity Mod": {
                    "gameName": "Terraria Calamity Mod",
                    "answers": ["terraria calamity mod", "terraria calamity", "calamity", "calamity mod"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_977": {
                            "title": "Guardian of The Former Seas",
                            "link": "https://youtu.be/hPEQLU-aD3I"
                        },
                        "ID_978": {
                            "title": "1NF3S+@+!0N",
                            "link": "https://youtu.be/17IZjvr5c1I"
                        },
                        "ID_979": {
                            "title": "Fly of Beelzebub",
                            "link": "https://youtu.be/fmt-2Uqx0K4"
                        },
                        "ID_980": {
                            "title": "Roar of The Jungle Dragon",
                            "link": "https://youtu.be/8rEw9sCwo8E"
                        }
                    }
                },
                "Terraria": {
                    "gameName": "Terraria",
                    "answers": ["terraria"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_981": {
                            "title": "Plantera",
                            "link": "https://youtu.be/xmijN_nZeOU"
                        },
                        "ID_982": {
                            "title": "Frost Moon",
                            "link": "https://youtu.be/wTKvewEtnRY"
                        },
                        "ID_983": {
                            "title": "Underground",
                            "link": "https://youtu.be/c-OttnZEXZo"
                        },
                        "ID_984": {
                            "title": "Underground Crimson",
                            "link": "https://youtu.be/1MPrk78diZo"
                        }
                    }
                }
            }
        },
        "The Last of Us": {
            "seriesName": "The Last of Us",
            "seriesColor": "red",
            "game": {
                "The Last of Us": {
                    "gameName": "The Last of Us",
                    "answers": ["the last of us", "tlou", "last of us"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_927": {
                            "title": "The Last of Us",
                            "link": "https://youtu.be/8p2DjSwt4_g"
                        },
                        "ID_928": {
                            "title": "Vanishing Grace",
                            "link": "https://youtu.be/27wG5zSD-qI"
                        },
                        "ID_929": {
                            "title": "All Gone",
                            "link": "https://youtu.be/ihdpkjEukaM"
                        },
                        "ID_930": {
                            "title": "The Choice",
                            "link": "https://youtu.be/o2-tlEOMgzU"
                        },
                        "ID_931": {
                            "title": "All Gone (Aftermath)",
                            "link": "https://youtu.be/SDTS5Sohv4o"
                        },
                        "ID_932": {
                            "title": "The Path",
                            "link": "https://youtu.be/wjs6RAfrd60"
                        },
                        "ID_933": {
                            "title": "The Path (A New Beginning)",
                            "link": "https://youtu.be/STyGc4rMOeo"
                        }
                    }
                }
            }
        },
        "The Somnium Files": {
            "seriesName": "The Somnium Files",
            "seriesColor": "red",
            "game": {
                "AI: The Somnium Files": {
                    "gameName": "AI: The Somnium Files",
                    "answers": ["ai: the somnium files", "somnium files", "ai the somnium files", "ai somnium files"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_661": {
                            "title": "-kokkAI 2- (Confession 2) [Title Theme]",
                            "link": "https://youtu.be/YkOlxeeK8qM"
                        },
                        "ID_662": {
                            "title": "-isAI- (Delegation)",
                            "link": "https://youtu.be/9a5JpoqgeAQ"
                        },
                        "ID_663": {
                            "title": "-tenkAI- (Commence) [Police Headquarters]",
                            "link": "https://youtu.be/yiy8K2Ie8Z0"
                        },
                        "ID_664": {
                            "title": "Artist, Inc. [Lemniscate]",
                            "link": "https://youtu.be/2holbGVEG7c"
                        },
                        "ID_665": {
                            "title": "-yakusAI- (Disaster)",
                            "link": "https://youtu.be/PbL9rR0hnYw"
                        },
                        "ID_666": {
                            "title": "-syuurAI- (Attack)",
                            "link": "https://youtu.be/wS0HZcUurhY"
                        },
                        "ID_667": {
                            "title": "Invincible Rainbow Arrow -Vocal Solo- - ENG ver.",
                            "link": "https://youtu.be/272GrLpPSQo"
                        }
                    }
                }
            }
        },
        "Timesplitters": {
            "seriesName": "Timesplitters",
            "seriesColor": "red",
            "game": {
                "Timesplitters 2": {
                    "gameName": "Timesplitters 2",
                    "answers": ["timesplitters 2", "ts2", "time splitters 2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_946": {
                            "title": "Siberia",
                            "link": "https://youtu.be/AsetlRd-nvs"
                        },
                        "ID_947": {
                            "title": "Streets",
                            "link": "https://youtu.be/pSMZOU7lcK0"
                        },
                        "ID_948": {
                            "title": "TS2 Credits",
                            "link": "https://youtu.be/t443lJnz5Yc"
                        },
                        "ID_949": {
                            "title": "Return To Planet X",
                            "link": "https://youtu.be/3SF1yMNJ38k"
                        },
                        "ID_950": {
                            "title": "Retro Racer",
                            "link": "https://youtu.be/ArPOxUVmQaA"
                        },
                        "ID_951": {
                            "title": "Notre Dame",
                            "link": "https://youtu.be/w5ESVLi6_aA"
                        },
                        "ID_952": {
                            "title": "TS2 Industrial Tileset",
                            "link": "https://youtu.be/k9KdfMqzSG0"
                        },
                        "ID_953": {
                            "title": "Nightclub",
                            "link": "https://youtu.be/MsIDtDJvEck"
                        },
                        "ID_954": {
                            "title": "NeoTokyo",
                            "link": "https://youtu.be/NkQyJ2i86Tc"
                        },
                        "ID_955": {
                            "title": "Mexican Mission",
                            "link": "https://youtu.be/wQ9q8DwBBus"
                        },
                        "ID_956": {
                            "title": "Ice Station",
                            "link": "https://youtu.be/AIUl0thIKO4"
                        },
                        "ID_957": {
                            "title": "Circus",
                            "link": "https://youtu.be/rBfeKLafDUA"
                        },
                        "ID_958": {
                            "title": "TS2 Mission Failed",
                            "link": "https://youtu.be/WAnDCZGjoUM"
                        },
                        "ID_959": {
                            "title": "TS2 Mission Success",
                            "link": "https://youtu.be/cfnzXfyh_ds"
                        },
                        "ID_960": {
                            "title": "Chinese",
                            "link": "https://youtu.be/8iyHxf9oIWI"
                        },
                        "ID_961": {
                            "title": "TS2 Title Screen",
                            "link": "https://youtu.be/EshcPGYQCfo"
                        },
                        "ID_962": {
                            "title": "Chicago",
                            "link": "https://youtu.be/cykxQLTDf4s"
                        },
                        "ID_963": {
                            "title": "Aztec Interior",
                            "link": "https://youtu.be/kZ89aGXaL9A"
                        },
                        "ID_964": {
                            "title": "TS2 Virtual Tileset",
                            "link": "https://youtu.be/n_veFSRBTlQ"
                        },
                        "ID_965": {
                            "title": "Aztec Exterior",
                            "link": "https://youtu.be/IL4fdgFA2Lg"
                        },
                        "ID_966": {
                            "title": "Ufopia",
                            "link": "https://youtu.be/_v95qlOXD5w"
                        },
                        "ID_967": {
                            "title": "Wild West",
                            "link": "https://youtu.be/HMKX00bfSJI"
                        },
                        "ID_968": {
                            "title": "Anaconda",
                            "link": "https://youtu.be/08G7iGJyZKI"
                        }
                    }
                }
            }
        },
        "To The Moon": {
            "seriesName": "To The Moon",
            "seriesColor": "red",
            "game": {
                "To The Moon": {
                    "gameName": "To The Moon",
                    "answers": ["to the moon"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_940": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/LsAsJUTsYxs"
                        },
                        "ID_941": {
                            "title": "Moonwisher",
                            "link": "https://youtu.be/TbdGWchHUAc"
                        },
                        "ID_942": {
                            "title": "For River - Piano (Johnny's Version)",
                            "link": "https://youtu.be/9QfPDmzpC2Q"
                        },
                        "ID_943": {
                            "title": "Everything's Alright",
                            "link": "https://youtu.be/OkvVr6n1cGk"
                        }
                    }
                }
            }
        },
        "UNDERTALE": {
            "seriesName": "UNDERTALE",
            "seriesColor": "red",
            "game": {
                "UNDERTALE": {
                    "gameName": "UNDERTALE",
                    "answers": ["undertale", "undertale"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_399": {
                            "title": "Once Upon A Time",
                            "link": "https://youtu.be/s7RRgF5Ve_E"
                        },
                        "ID_400": {
                            "title": "Start Menu",
                            "link": "https://youtu.be/kRT9vY2f7tg"
                        },
                        "ID_401": {
                            "title": "Your Best Friend",
                            "link": "https://youtu.be/83jGCWCcBzc"
                        },
                        "ID_402": {
                            "title": "Fallen Down",
                            "link": "https://youtu.be/B69GfSqEZEs"
                        },
                        "ID_403": {
                            "title": "Ruins",
                            "link": "https://youtu.be/QyPR77rg1to"
                        },
                        "ID_404": {
                            "title": "Uwa!! So Temperate♫",
                            "link": "https://youtu.be/rHU4rpQUshg"
                        },
                        "ID_405": {
                            "title": "Anticipation",
                            "link": "https://youtu.be/t62zFJATVPM"
                        },
                        "ID_406": {
                            "title": "Unnecessary Tension",
                            "link": "https://youtu.be/OSPbX0lkTmQ"
                        },
                        "ID_407": {
                            "title": "Enemy Approaching",
                            "link": "https://youtu.be/JRU6GnETSN4"
                        },
                        "ID_408": {
                            "title": "Ghost Fight",
                            "link": "https://youtu.be/Zz1bfhtKsHM"
                        },
                        "ID_409": {
                            "title": "Determination",
                            "link": "https://youtu.be/W1i4mTyidOc"
                        },
                        "ID_410": {
                            "title": "Home",
                            "link": "https://youtu.be/5_E_y1AWAfc"
                        },
                        "ID_411": {
                            "title": "Home (Music Box)",
                            "link": "https://youtu.be/ANEsXjSiYxI"
                        },
                        "ID_412": {
                            "title": "Heartache",
                            "link": "https://youtu.be/xflkF-sqNaM"
                        },
                        "ID_413": {
                            "title": "sans.",
                            "link": "https://youtu.be/Zzo6L3wsf8c"
                        },
                        "ID_414": {
                            "title": "Nyeh Heh Heh!",
                            "link": "https://youtu.be/FKdtstAo6iU"
                        },
                        "ID_415": {
                            "title": "Snowy",
                            "link": "https://youtu.be/8BIeGdBjJiU"
                        },
                        "ID_416": {
                            "title": "Uwa!! So Holiday♫",
                            "link": "https://youtu.be/XnG7HG8bmkU"
                        },
                        "ID_417": {
                            "title": "Dogbass",
                            "link": "https://youtu.be/a1OLiuNLpEs"
                        },
                        "ID_418": {
                            "title": "Mysterious Place",
                            "link": "https://youtu.be/gC11HJ99Egs"
                        },
                        "ID_419": {
                            "title": "Dogsong",
                            "link": "https://youtu.be/woPff-Tpkns"
                        },
                        "ID_420": {
                            "title": "Snowdin Town",
                            "link": "https://youtu.be/z6LmMCuGjfA"
                        },
                        "ID_421": {
                            "title": "Shop",
                            "link": "https://youtu.be/jCQ_5Gj6jlg"
                        },
                        "ID_422": {
                            "title": "Bonetrousle",
                            "link": "https://youtu.be/zdeZwAk6ULE"
                        },
                        "ID_423": {
                            "title": "Dating Start!",
                            "link": "https://youtu.be/dtYwq4aBr0E"
                        },
                        "ID_424": {
                            "title": "Dating Tense!",
                            "link": "https://youtu.be/ShK_Tj-Ee3Y"
                        },
                        "ID_425": {
                            "title": "Dating Fight!",
                            "link": "https://youtu.be/JQ8bpWkoC7A"
                        },
                        "ID_426": {
                            "title": "Premonition",
                            "link": "https://youtu.be/sQDiDDb1_9k"
                        },
                        "ID_427": {
                            "title": "Danger Mystery",
                            "link": "https://youtu.be/FhpJN6Khesw"
                        },
                        "ID_428": {
                            "title": "Undyne",
                            "link": "https://youtu.be/VH6HIHmhvQU"
                        },
                        "ID_429": {
                            "title": "Waterfall",
                            "link": "https://youtu.be/v712NiVK5uY"
                        },
                        "ID_430": {
                            "title": "Run!",
                            "link": "https://youtu.be/PPapt88_3aU"
                        },
                        "ID_431": {
                            "title": "Quiet Water",
                            "link": "https://youtu.be/AsvhQ-soLdg"
                        },
                        "ID_432": {
                            "title": "Memory",
                            "link": "https://youtu.be/eijdNQMYikY"
                        },
                        "ID_433": {
                            "title": "Bird That Carries You Over A Disproportionately Small Gap",
                            "link": "https://youtu.be/Z51lfE2k7jU"
                        },
                        "ID_434": {
                            "title": "Dummy!",
                            "link": "https://youtu.be/N3epEVMNJdY"
                        },
                        "ID_435": {
                            "title": "Pathetic House",
                            "link": "https://youtu.be/nu_ruGyTNEs"
                        },
                        "ID_436": {
                            "title": "Spooktune",
                            "link": "https://youtu.be/K1qjt_1geiI"
                        },
                        "ID_437": {
                            "title": "Spookwave",
                            "link": "https://youtu.be/o251comtNfk"
                        },
                        "ID_438": {
                            "title": "Ghouliday",
                            "link": "https://youtu.be/lWP9s44i-YA"
                        },
                        "ID_439": {
                            "title": "Chill",
                            "link": "https://youtu.be/D4Ximn7nZdc"
                        },
                        "ID_440": {
                            "title": "Thundersnail",
                            "link": "https://youtu.be/ewxyxByJPP0"
                        },
                        "ID_441": {
                            "title": "Temmie Village",
                            "link": "https://youtu.be/rNlyF43Te6U"
                        },
                        "ID_442": {
                            "title": "Tem Shop",
                            "link": "https://youtu.be/y_qHuDjE3CQ"
                        },
                        "ID_443": {
                            "title": "NGAHHH!!",
                            "link": "https://youtu.be/PLDyWLbuptQ"
                        },
                        "ID_444": {
                            "title": "Spear of Justice",
                            "link": "https://youtu.be/qrBB3_rFPjg"
                        },
                        "ID_445": {
                            "title": "Ooo",
                            "link": "https://youtu.be/vdE3R3BeH-I"
                        },
                        "ID_446": {
                            "title": "Alphys",
                            "link": "https://youtu.be/xG2AtyD3elY"
                        },
                        "ID_447": {
                            "title": "It's Showtime!",
                            "link": "https://youtu.be/9uwEAugeH8w"
                        },
                        "ID_448": {
                            "title": "Metal Crusher",
                            "link": "https://youtu.be/P0PpyUsvT9w"
                        },
                        "ID_449": {
                            "title": "Another Medium",
                            "link": "https://youtu.be/xLsuam9o9BA"
                        },
                        "ID_450": {
                            "title": "Uwa!! So HEATS!!?",
                            "link": "https://youtu.be/wyShNqRkQ1I"
                        },
                        "ID_451": {
                            "title": "Stronger Monsters",
                            "link": "https://youtu.be/HnmHqWU0z5M"
                        },
                        "ID_452": {
                            "title": "Hotel",
                            "link": "https://youtu.be/8wSYwqbp4S4"
                        },
                        "ID_453": {
                            "title": "Can You Really Call This A Hotel I Didn't Receive A Mint On My Pillow",
                            "link": "https://youtu.be/wRUdj1WgwIE"
                        },
                        "ID_454": {
                            "title": "Confession",
                            "link": "https://youtu.be/qzQyP99Q0pE"
                        },
                        "ID_455": {
                            "title": "Live Report",
                            "link": "https://youtu.be/4oi_XcH2sAw"
                        },
                        "ID_456": {
                            "title": "Death Report",
                            "link": "https://youtu.be/Z3ZULqzMutw"
                        },
                        "ID_457": {
                            "title": "Spider Dance",
                            "link": "https://youtu.be/YZ3XjVVNagU"
                        },
                        "ID_458": {
                            "title": "Wrong Enemy",
                            "link": "https://youtu.be/gTCSQevpuOg"
                        },
                        "ID_459": {
                            "title": "Oh! One True Love",
                            "link": "https://youtu.be/JlKHChbEcps"
                        },
                        "ID_460": {
                            "title": "Oh! Dungeon",
                            "link": "https://youtu.be/5aRE_J4UvYM"
                        },
                        "ID_461": {
                            "title": "It's Raining Somewhere Else",
                            "link": "https://youtu.be/zNd4apsr3WE"
                        },
                        "ID_462": {
                            "title": "CORE Approach",
                            "link": "https://youtu.be/qNi_6kXc2cc"
                        },
                        "ID_463": {
                            "title": "CORE",
                            "link": "https://youtu.be/tDuEWw648jo"
                        },
                        "ID_464": {
                            "title": "Last Episode!",
                            "link": "https://youtu.be/pzhYcYwg4vE"
                        },
                        "ID_465": {
                            "title": "Oh My...",
                            "link": "https://youtu.be/r-IvDZ8Wljo"
                        },
                        "ID_466": {
                            "title": "Death by Glamour",
                            "link": "https://youtu.be/2TgO-tN5wAM"
                        },
                        "ID_467": {
                            "title": "For the Fans",
                            "link": "https://youtu.be/6nOHNgotIPM"
                        },
                        "ID_468": {
                            "title": "Long Elevator",
                            "link": "https://youtu.be/XDQGK6ztbLs"
                        },
                        "ID_469": {
                            "title": "Undertale",
                            "link": "https://youtu.be/EBhFHJMVfiI"
                        },
                        "ID_470": {
                            "title": "Song That Might Play When You Fight Sans",
                            "link": "https://youtu.be/41YOknSl0zw"
                        },
                        "ID_471": {
                            "title": "The Choice",
                            "link": "https://youtu.be/C4Wv5M9JPao"
                        },
                        "ID_472": {
                            "title": "Small Shock",
                            "link": "https://youtu.be/EUJA3xRyVVM"
                        },
                        "ID_473": {
                            "title": "Barrier",
                            "link": "https://youtu.be/nJfzf--xqeQ"
                        },
                        "ID_474": {
                            "title": "Bergentrückung",
                            "link": "https://youtu.be/YivzBeEwzWI"
                        },
                        "ID_475": {
                            "title": "ASGORE",
                            "link": "https://youtu.be/hMa4hZQbrms"
                        },
                        "ID_476": {
                            "title": "You Idiot",
                            "link": "https://youtu.be/eOqq5kNBVoM"
                        },
                        "ID_477": {
                            "title": "Your Best Nightmare",
                            "link": "https://youtu.be/eUcThHVbrXY"
                        },
                        "ID_478": {
                            "title": "Finale",
                            "link": "https://youtu.be/yWjavxcGfqM"
                        },
                        "ID_479": {
                            "title": "An Ending",
                            "link": "https://youtu.be/l3sJ79C1Zyo"
                        },
                        "ID_480": {
                            "title": "She's Playing Piano",
                            "link": "https://youtu.be/zEAN2dna9To"
                        },
                        "ID_481": {
                            "title": "Here We Are",
                            "link": "https://youtu.be/y49b8aiQVBg"
                        },
                        "ID_482": {
                            "title": "Amalgam",
                            "link": "https://youtu.be/71u0i6J-Qes"
                        },
                        "ID_483": {
                            "title": "Fallen Down (Reprise)",
                            "link": "https://youtu.be/cGBMTAGzWPs"
                        },
                        "ID_484": {
                            "title": "Don't Give Up",
                            "link": "https://youtu.be/B4qdpiad_Q0"
                        },
                        "ID_485": {
                            "title": "Hopes and Dreams",
                            "link": "https://youtu.be/tz82xbLvK_k"
                        },
                        "ID_486": {
                            "title": "Burn in Despair!",
                            "link": "https://youtu.be/pumVu-WWhKM"
                        },
                        "ID_487": {
                            "title": "SAVE the World",
                            "link": "https://youtu.be/mZRP7nQkfrM"
                        },
                        "ID_488": {
                            "title": "His Theme",
                            "link": "https://youtu.be/IkOK8tdEsFY"
                        },
                        "ID_489": {
                            "title": "Final Power",
                            "link": "https://youtu.be/6nQbkE1DS0o"
                        },
                        "ID_490": {
                            "title": "Reunited",
                            "link": "https://youtu.be/WgRfPc1lfJk"
                        },
                        "ID_491": {
                            "title": "Menu (Full)",
                            "link": "https://youtu.be/brP9Q08kEfk"
                        },
                        "ID_492": {
                            "title": "Respite",
                            "link": "https://youtu.be/E-fyLcHg4iM"
                        },
                        "ID_493": {
                            "title": "Bring It In, Guys!",
                            "link": "https://youtu.be/x_P5smsopK0"
                        },
                        "ID_494": {
                            "title": "Last Goodbye",
                            "link": "https://youtu.be/5P8V4mP5RLg"
                        },
                        "ID_495": {
                            "title": "But the Earth Refused to Die",
                            "link": "https://youtu.be/ML6OV8fG74w"
                        },
                        "ID_496": {
                            "title": "Battle Against a True Hero",
                            "link": "https://youtu.be/aWBtpBwzzdM"
                        },
                        "ID_497": {
                            "title": "Power of -NEO-",
                            "link": "https://youtu.be/mwrUem9vM_A"
                        },
                        "ID_498": {
                            "title": "Megalovania",
                            "link": "https://youtu.be/c5daGZ96QGU"
                        },
                        "ID_499": {
                            "title": "Good Night",
                            "link": "https://youtu.be/BGpJrPY563A"
                        }
                    }
                }
            }
        },
        "VVVVVV": {
            "seriesName": "VVVVVV",
            "seriesColor": "red",
            "game": {
                "VVVVVV": {
                    "gameName": "VVVVVV",
                    "answers": ["vvvvvv", "v"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_915": {
                            "title": "Presenting VVVVVV",
                            "link": "https://youtu.be/tdE3n-pxF5Y"
                        },
                        "ID_916": {
                            "title": "Pushing Onwards",
                            "link": "https://youtu.be/25m3Gk7mRQM"
                        },
                        "ID_917": {
                            "title": "Path Complete",
                            "link": "https://youtu.be/9QjRjmK-tXc"
                        },
                        "ID_918": {
                            "title": "Passion For Exploring",
                            "link": "https://youtu.be/C0j6pe043L4"
                        },
                        "ID_919": {
                            "title": "Positive Force",
                            "link": "https://youtu.be/Tp3qiOKuEBM"
                        },
                        "ID_920": {
                            "title": "Predestined Fate",
                            "link": "https://youtu.be/yv_lcgLFJmc"
                        },
                        "ID_921": {
                            "title": "Potential For Anything",
                            "link": "https://youtu.be/Uj8MsbgpjaQ"
                        },
                        "ID_922": {
                            "title": "Pressure Cooker",
                            "link": "https://youtu.be/L0gOUmQ39uk"
                        },
                        "ID_923": {
                            "title": "Popular Potpourri",
                            "link": "https://youtu.be/T1zxRWDb4V4"
                        }
                    }
                }
            }
        },
        "Wario Ware": {
            "seriesName": "Wario Ware",
            "seriesColor": "red",
            "game": {
                "Wario Ware: Smooth Moves": {
                    "gameName": "Wario Ware: Smooth Moves",
                    "answers": ["wario ware: smooth moves", "wario ware wii", "wario ware smooth moves", "wario ware: smooth moves"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_701": {
                            "title": "Level Select",
                            "link": "https://youtu.be/pZ2Y98ZRxyA"
                        },
                        "ID_702": {
                            "title": "Tomorrow Hill",
                            "link": "https://youtu.be/KTjltCVOMXA"
                        }
                    }
                }
            }
        },
        "Wii Sports": {
            "seriesName": "Wii Sports",
            "seriesColor": "red",
            "game": {
                "Wii Sports": {
                    "gameName": "Wii Sports",
                    "answers": ["wii sports", "wii sports"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_683": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/kxxnTv6UaTg"
                        },
                        "ID_684": {
                            "title": "Main Menu",
                            "link": "https://youtu.be/TDiQgBvZ3XU"
                        },
                        "ID_685": {
                            "title": "Tennis (Result)",
                            "link": "https://youtu.be/UPnJFWjAUeY"
                        },
                        "ID_686": {
                            "title": "Baseball (Results)",
                            "link": "https://youtu.be/Rswr0dFYBMc"
                        },
                        "ID_687": {
                            "title": "Bowling (Results)",
                            "link": "https://youtu.be/pyUDEbmSHA4"
                        },
                        "ID_688": {
                            "title": "Golf (Results)",
                            "link": "https://youtu.be/eV1QHeVRrAc"
                        },
                        "ID_689": {
                            "title": "Boxing (Results)",
                            "link": "https://youtu.be/AsXqjRkQfMc"
                        },
                        "ID_690": {
                            "title": "Training Mode",
                            "link": "https://youtu.be/DAWTbuQx6hQ"
                        }
                    }
                },
                "Wii Sports Resort": {
                    "gameName": "Wii Sports Resort",
                    "answers": ["wii sports resort", "wii sports resort"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_691": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/xnxqn22-qMk"
                        },
                        "ID_692": {
                            "title": "Select Screen",
                            "link": "https://youtu.be/x1WE4T8pdJs"
                        },
                        "ID_693": {
                            "title": "Tutorial",
                            "link": "https://youtu.be/F6poHenvGGA"
                        },
                        "ID_694": {
                            "title": "Archery: Results",
                            "link": "https://youtu.be/x7Lw1SO9JIw"
                        },
                        "ID_695": {
                            "title": "Bowling: Results",
                            "link": "https://youtu.be/7VO35gW1cLc"
                        },
                        "ID_696": {
                            "title": "Basketball: Results",
                            "link": "https://youtu.be/fhqXLNKAa1E"
                        },
                        "ID_697": {
                            "title": "Golf: Results",
                            "link": "https://youtu.be/kWvaaunH254"
                        },
                        "ID_698": {
                            "title": "Ping-Pong: Winning Results",
                            "link": "https://youtu.be/Hj-6x90Rp7Y"
                        },
                        "ID_699": {
                            "title": "Swordplay: Winning Results 1",
                            "link": "https://youtu.be/PtOfWEG-YMc"
                        },
                        "ID_700": {
                            "title": "Swordplay: Losing Results",
                            "link": "https://youtu.be/OgjJou9BSVM"
                        }
                    }
                }
            }
        },
        "You Have to Burn the Rope": {
            "seriesName": "You Have to Burn the Rope",
            "seriesColor": "red",
            "game": {
                "You Have to Burn the Rope": {
                    "gameName": "You Have to Burn the Rope",
                    "answers": ["you have to burn the rope", "burn the rope", "you have to burn the rope"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_864": {
                            "title": "Now You're a Hero",
                            "link": "https://youtu.be/VmuiwOGi5gA"
                        }
                    }
                }
            }
        },
        "Zero Escape": {
            "seriesName": "Zero Escape",
            "seriesColor": "red",
            "game": {
                "9 Hours, 9 Persons, 9 Doors": {
                    "gameName": "9 Hours, 9 Persons, 9 Doors",
                    "answers": ["9 hours, 9 persons, 9 doors", "999", "9 hours 9 persons 9 doors", "9 hours, 9 persons, 9 doors"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_20": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/g9Qb3yDrj0c"
                        },
                        "ID_21": {
                            "title": "Recollection",
                            "link": "https://youtu.be/HlC9XkvWvKo"
                        },
                        "ID_22": {
                            "title": "Septenary Game",
                            "link": "https://youtu.be/hzQ3jse4ars"
                        },
                        "ID_23": {
                            "title": "Morphogenetic Sorrow",
                            "link": "https://youtu.be/U71iXAp0WRk"
                        },
                        "ID_24": {
                            "title": "Who Is Zero?",
                            "link": "https://youtu.be/rNnofSIGNWQ"
                        }
                    }
                },
                "Virtue's Last Reward": {
                    "gameName": "Virtue's Last Reward",
                    "answers": ["virtue's last reward", "virtue's last reward", "virtues last reward", "vlr"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_25": {
                            "title": "Virtue's Last Reward ~Orchestra~",
                            "link": "https://youtu.be/9VSCJAWEPRo"
                        },
                        "ID_26": {
                            "title": "Biotope",
                            "link": "https://youtu.be/nJKKOpiKJGY"
                        },
                        "ID_27": {
                            "title": "Monitor",
                            "link": "https://youtu.be/E1yVqJA3u4Y"
                        },
                        "ID_28": {
                            "title": "Portentousness",
                            "link": "https://youtu.be/rp75JGQCW2Y"
                        },
                        "ID_29": {
                            "title": "Clarification",
                            "link": "https://youtu.be/GJvZwZQV7fs"
                        },
                        "ID_30": {
                            "title": "Confession",
                            "link": "https://youtu.be/J8E20i-dLBI"
                        },
                        "ID_31": {
                            "title": "Demise",
                            "link": "https://youtu.be/qkTmE6zyW9Y"
                        },
                        "ID_32": {
                            "title": "Blue Bird Lamentation",
                            "link": "https://youtu.be/gFJ1r6_4mW4"
                        }
                    }
                },
                "Zero Time Dilemma": {
                    "gameName": "Zero Time Dilemma",
                    "answers": ["zero time dilemma", "zero time dilemma", "ztd"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_33": {
                            "title": "Quondam Monitors [Monty Hall] [Monitor 2nd Mix]",
                            "link": "https://youtu.be/WzNS8Ah139Y"
                        },
                        "ID_34": {
                            "title": "Tough Decision [Make Your Choice]",
                            "link": "https://youtu.be/X_8o4si2A5w"
                        },
                        "ID_35": {
                            "title": "Nostalgic Scenery",
                            "link": "https://youtu.be/7eWaxTNbPJk"
                        },
                        "ID_36": {
                            "title": "Morphogenetic Sorrow [Mix 3] ZTD Ver.",
                            "link": "https://youtu.be/fWYdW5JPQ7c"
                        },
                        "ID_37": {
                            "title": "Transient Tranquility",
                            "link": "https://youtu.be/N_WlaxEkyYY"
                        },
                        "ID_38": {
                            "title": "Blue Bird",
                            "link": "https://youtu.be/4QOXPiSr8oQ"
                        },
                        "ID_39": {
                            "title": "Zero Times",
                            "link": "https://youtu.be/4jBNXIWE7oE"
                        }
                    }
                }
            }
        }
    }
}`

const ALLSONGS = JSON.parse( ALLSONGS_JSON );