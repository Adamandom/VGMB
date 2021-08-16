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
                    "answers": ["phoenix wright: dual destinies", "dual destinies", "phoenix wright dual destinies", "ace attorney dual destinies"],
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
                    "answers": ["phoenix wright: ace attorney", "ace attorney", "phoenix wright ace attorney", "ace attorney 1", "phoenix wright"],
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
                    "answers": ["phoenix wright: justice for all", "phoenix wright justice for all", "ace attorney 2", "justice for all", "ace attorney justice for all"],
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
                    "answers": ["phoenix wright: trials and tribulations", "ace attorney 3", "trials and tribulations", "pwaatt", "pw aa tt", "pwaa tt", "phoenix wright trials and tribulations", "ace attorney trials and tribulations", "phoenix wright ace attorney trials and tribulations"],
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
                    "answers": ["ace attorney investigations", "aai", "edgeworth investigations", "ace attorney: investigations", "ace attorney miles edgeworth", "ace attorney: miles edgeworth", "ace attorney miles edgeworth investigations", "ace attorney investigations miles edgeworth", "aai1", "aai 1"],
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
                    "answers": ["ape escape 2", "ae2"],
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
                "Bayonetta": {
                    "gameName": "Bayonetta",
                    "answers": ["bayonetta", "bayonetta 1", "bayonetta 1"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1070": {
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
                        "ID_1071": {
                            "title": "Will The Circle Be Unbroken (Choral version)",
                            "link": "https://youtu.be/LAIS-ADK6c8"
                        },
                        "ID_924": {
                            "title": "Lutece",
                            "link": "https://youtu.be/viO_5aaF0zc"
                        },
                        "ID_925": {
                            "title": "Will The Circle Be Unbroken (Full)",
                            "link": "https://youtu.be/9F1l6xXLSI0"
                        },
                        "ID_926": {
                            "title": "Solace",
                            "link": "https://youtu.be/38ms-WVWI9w"
                        },
                        "ID_927": {
                            "title": "God Only Knows",
                            "link": "https://youtu.be/x7ogV49WGco"
                        }
                    }
                }
            }
        },
        "Call of Duty": {
            "seriesName": "Call of Duty",
            "seriesColor": "red",
            "game": {
                "Modern Warfare 2": {
                    "gameName": "Modern Warfare 2",
                    "answers": ["modern warfare 2", "mw2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_928": {
                            "title": "Main Menu",
                            "link": "https://youtu.be/sY488LOjJLI"
                        },
                        "ID_1375": {
                            "title": "End Credits",
                            "link": "https://youtu.be/-UxtrD7aNYY"
                        }
                    }
                },
                "Modern Warfare 3": {
                    "gameName": "Modern Warfare 3",
                    "answers": ["modern warfare 3", "mw3"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1376": {
                            "title": "Multiplayer: Main Menu",
                            "link": "https://youtu.be/vx9IDAys0BY"
                        },
                        "ID_1377": {
                            "title": "End Credits",
                            "link": "https://youtu.be/bNv-uAUqr9k"
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
                        "ID_1378": {
                            "title": "Yo",
                            "link": "https://youtu.be/fkweKi2ONDE"
                        },
                        "ID_668": {
                            "title": "Roux",
                            "link": "https://youtu.be/9eMNwIezQSg"
                        },
                        "ID_669": {
                            "title": "Also Sprach Brooks",
                            "link": "https://youtu.be/PCZs1P4ZOJQ"
                        },
                        "ID_670": {
                            "title": "Pandemonium",
                            "link": "https://youtu.be/VYept9efrOw"
                        },
                        "ID_671": {
                            "title": "R30's Melancholy",
                            "link": "https://youtu.be/0M3OKODFBBg"
                        },
                        "ID_672": {
                            "title": "Zigeunerweisen Sarasate'",
                            "link": "https://youtu.be/R1acph7DOac"
                        },
                        "ID_673": {
                            "title": "Rapunzel -Game Play-",
                            "link": "https://youtu.be/aTRhtP6gOqA"
                        },
                        "ID_674": {
                            "title": "Holst Planets Suite Jupiter",
                            "link": "https://youtu.be/pNCyJohA_1U"
                        },
                        "ID_675": {
                            "title": "Dvorak Symphony No. 9 in E minor From the New World 1st Movement",
                            "link": "https://youtu.be/Q06iJrlVY5k"
                        },
                        "ID_676": {
                            "title": "Rossini William Tell Overture Part 2 The Storm and Part 3 The Ranz des",
                            "link": "https://youtu.be/EsuJth9FXec"
                        },
                        "ID_677": {
                            "title": "Mussorgsky - Pictures at an Exhibition The Hut on Fowl's Legs",
                            "link": "https://youtu.be/ZIDo4dLlITc"
                        },
                        "ID_678": {
                            "title": "Bizet L'Arlésienne Second Suite Farandole",
                            "link": "https://youtu.be/-MzPga31K98"
                        },
                        "ID_679": {
                            "title": "Chopin Revolutionary Etude",
                            "link": "https://youtu.be/IbV1awjnNm8"
                        },
                        "ID_680": {
                            "title": "Handel Messiah Hallelujah Chorus",
                            "link": "https://youtu.be/3vx5NcLA3nc"
                        },
                        "ID_681": {
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
                        "ID_682": {
                            "title": "Prologue",
                            "link": "https://youtu.be/Ctuo3ws3EKs"
                        },
                        "ID_618": {
                            "title": "First Steps",
                            "link": "https://youtu.be/N8OHSXvneOE"
                        },
                        "ID_619": {
                            "title": "Resurrections",
                            "link": "https://youtu.be/1rwAvUvvQzQ"
                        },
                        "ID_620": {
                            "title": "Awake",
                            "link": "https://youtu.be/BFVyvGmwlmk"
                        },
                        "ID_621": {
                            "title": "Postcard from Celeste Mountain",
                            "link": "https://youtu.be/V8qOjmWIPKs"
                        },
                        "ID_622": {
                            "title": "Checking In",
                            "link": "https://youtu.be/fOzvP1I5tLU"
                        },
                        "ID_623": {
                            "title": "Spirit of Hospitality",
                            "link": "https://youtu.be/NRpcwd9MSSE"
                        },
                        "ID_624": {
                            "title": "Scattered and Lost",
                            "link": "https://youtu.be/0etenwnI1wo"
                        },
                        "ID_625": {
                            "title": "Golden",
                            "link": "https://youtu.be/mr-SWzqNpM0"
                        },
                        "ID_626": {
                            "title": "Anxiety",
                            "link": "https://youtu.be/FMuQ11tVJnk"
                        },
                        "ID_627": {
                            "title": "Quiet and Falling",
                            "link": "https://youtu.be/FjG0ivBT4lQ"
                        },
                        "ID_628": {
                            "title": "In the Mirror",
                            "link": "https://youtu.be/bXfHKEaDg4s"
                        },
                        "ID_629": {
                            "title": "Madeline and Theo",
                            "link": "https://youtu.be/__oZ-LYZ8pU"
                        },
                        "ID_630": {
                            "title": "Starjump",
                            "link": "https://youtu.be/dTIeaqNXseY"
                        },
                        "ID_631": {
                            "title": "Reflection",
                            "link": "https://youtu.be/QfhUSYq7jEs"
                        },
                        "ID_632": {
                            "title": "Confronting Myself",
                            "link": "https://youtu.be/b_oEDGONSc4"
                        },
                        "ID_633": {
                            "title": "Little Goth",
                            "link": "https://youtu.be/oHdSK43cIf8"
                        },
                        "ID_634": {
                            "title": "Reach for the Summit",
                            "link": "https://youtu.be/iDVM9KED46Q"
                        },
                        "ID_635": {
                            "title": "Exhale",
                            "link": "https://youtu.be/q7QMTo-P6H0"
                        },
                        "ID_636": {
                            "title": "Heart of the Mountain",
                            "link": "https://youtu.be/DNOuancg5RY"
                        },
                        "ID_637": {
                            "title": "My Dearest Friends",
                            "link": "https://youtu.be/VHN63n9y1vg"
                        },
                        "ID_638": {
                            "title": "Forsaken City (Sever the Skyline Mix)",
                            "link": "https://youtu.be/6LbXujfutWk"
                        },
                        "ID_639": {
                            "title": "Old Site (Black Moonrise Mix)",
                            "link": "https://youtu.be/6eeIEMOQw4s"
                        },
                        "ID_640": {
                            "title": "Celestial Resort (Good Karma Mix)",
                            "link": "https://youtu.be/X-fmYK81MUQ"
                        },
                        "ID_641": {
                            "title": "Golden Ridge (Golden Feather Mix)",
                            "link": "https://youtu.be/AgDYV_IbPuo"
                        },
                        "ID_642": {
                            "title": "Mirror Temple (Mirror Magic Mix)",
                            "link": "https://youtu.be/iKnwVvXkWq0"
                        },
                        "ID_643": {
                            "title": "Reflection (Center of the Earth Mix)",
                            "link": "https://youtu.be/qJXKBLeXK9c"
                        },
                        "ID_644": {
                            "title": "Summit (No More Running Mix)",
                            "link": "https://youtu.be/_YLk0kJ3Naw"
                        },
                        "ID_645": {
                            "title": "The Core (Say Goodbye Mix)",
                            "link": "https://youtu.be/HoRvLKzNZWQ"
                        },
                        "ID_646": {
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
                        "ID_647": {
                            "title": "The Empty Space Above",
                            "link": "https://youtu.be/sciyyflf8c8"
                        },
                        "ID_648": {
                            "title": "Fear of the Unknown",
                            "link": "https://youtu.be/9wob-o9k7l0"
                        },
                        "ID_649": {
                            "title": "Joy of Remembrance",
                            "link": "https://youtu.be/CYQ43fwgW7Y"
                        },
                        "ID_650": {
                            "title": "In Stasis",
                            "link": "https://youtu.be/1ALFlNdxkx4"
                        },
                        "ID_651": {
                            "title": "Crash",
                            "link": "https://youtu.be/qa225q780u8"
                        },
                        "ID_652": {
                            "title": "Beyond the Heart",
                            "link": "https://youtu.be/K3HzzcI1cxE"
                        },
                        "ID_653": {
                            "title": "Final Defiance",
                            "link": "https://youtu.be/ccQfqKO2-bs"
                        },
                        "ID_654": {
                            "title": "Futility",
                            "link": "https://youtu.be/ZjLOKedxEoI"
                        },
                        "ID_655": {
                            "title": "Reconciliation",
                            "link": "https://youtu.be/RB0q5a9zVdQ"
                        },
                        "ID_656": {
                            "title": "Farewell",
                            "link": "https://youtu.be/9TczL8fJi-0"
                        },
                        "ID_657": {
                            "title": "The Woman and the Bird",
                            "link": "https://youtu.be/qeKPj2vLH2c"
                        },
                        "ID_658": {
                            "title": "Vovô e Vovó",
                            "link": "https://youtu.be/6kxGop2qSA8"
                        },
                        "ID_659": {
                            "title": "wavedash.ppt",
                            "link": "https://youtu.be/nI-u3opgki8"
                        }
                    }
                }
            }
        },
        "Chrono": {
            "seriesName": "Chrono",
            "seriesColor": "red",
            "game": {
                "Chrono Cross": {
                    "gameName": "Chrono Cross",
                    "answers": ["chrono cross"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_660": {
                            "title": "On the Beach of Dreams - Another World",
                            "link": "https://youtu.be/wCJt2zDkwDk"
                        },
                        "ID_1357": {
                            "title": "Arni Village - Another World",
                            "link": "https://youtu.be/H2nTz5VUc08"
                        },
                        "ID_1358": {
                            "title": "Forest of Illusion",
                            "link": "https://youtu.be/giR1EVc10UI"
                        },
                        "ID_1359": {
                            "title": "Voyage - Another World",
                            "link": "https://youtu.be/j7IoDqkJqkI"
                        },
                        "ID_1360": {
                            "title": "Voyage - Home World",
                            "link": "https://youtu.be/8mJ6X0n7lvA"
                        },
                        "ID_1361": {
                            "title": "The Girl Who Stole The Stars",
                            "link": "https://youtu.be/b-InhU-vsIw"
                        }
                    }
                },
                "Chrono Trigger": {
                    "gameName": "Chrono Trigger",
                    "answers": ["chrono trigger"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1362": {
                            "title": "Chrono Trigger",
                            "link": "https://youtu.be/aiOqsckDH7g"
                        },
                        "ID_1363": {
                            "title": "Peaceful Days",
                            "link": "https://youtu.be/1kD948Qg8sE"
                        },
                        "ID_1364": {
                            "title": "Memories of Green",
                            "link": "https://youtu.be/n-6jmvTuFVw"
                        },
                        "ID_1365": {
                            "title": "Gato's Song",
                            "link": "https://youtu.be/QCwC0Db75p8"
                        },
                        "ID_1366": {
                            "title": "Secret of the Forest",
                            "link": "https://youtu.be/x_ouo_Dlh0U"
                        },
                        "ID_1367": {
                            "title": "Frog's Theme",
                            "link": "https://youtu.be/mpiAEOB0dhs"
                        },
                        "ID_1368": {
                            "title": "The Last Day of the World",
                            "link": "https://youtu.be/J-hy0x5mwu8"
                        },
                        "ID_1369": {
                            "title": "Bike Chase",
                            "link": "https://youtu.be/jh1o6Wr7eX4"
                        },
                        "ID_1370": {
                            "title": "At the End of Time",
                            "link": "https://youtu.be/dujuo7LqE-U"
                        },
                        "ID_1371": {
                            "title": "Depths of the Night",
                            "link": "https://youtu.be/whCBXWMCAYI"
                        },
                        "ID_1372": {
                            "title": "Corridor of Time",
                            "link": "https://youtu.be/rsvN18iAzb4"
                        },
                        "ID_1373": {
                            "title": "Outskirts of Time",
                            "link": "https://youtu.be/DiuMEmsNCV8"
                        }
                    }
                }
            }
        },
        "Conker's Bad Fur Day": {
            "seriesName": "Conker's Bad Fur Day",
            "seriesColor": "red",
            "game": {
                "Conker's Bad Fur Day": {
                    "gameName": "Conker's Bad Fur Day",
                    "answers": ["conker's bad fur day", "conkers bad fur day"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1374": {
                            "title": "Windy And Co.",
                            "link": "https://youtu.be/A8lEcwFfq7c"
                        },
                        "ID_1082": {
                            "title": "Sloprano",
                            "link": "https://youtu.be/XkgH8YY2E-4"
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
                    "answers": ["trigger happy havoc", "danganronpa", "dr1", "trigger happy havoc", "dr", "drttt", "dr ttt", "dangan ronpa"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1083": {
                            "title": "DANGANRONPA",
                            "link": "https://youtu.be/JeitvjG-dgI"
                        },
                        "ID_162": {
                            "title": "Beautiful Days",
                            "link": "https://youtu.be/m5K9CIf-XoQ"
                        },
                        "ID_163": {
                            "title": "Beautiful Dead",
                            "link": "https://youtu.be/3WZb20NinCs"
                        },
                        "ID_164": {
                            "title": "Class Trial (Dawn Edition)",
                            "link": "https://youtu.be/5FbB_obzUNA"
                        },
                        "ID_165": {
                            "title": "Mr. Monokuma's Tutoring",
                            "link": "https://youtu.be/zpkl30bTHhw"
                        },
                        "ID_166": {
                            "title": "BOX 15",
                            "link": "https://youtu.be/xOpHT6gZ0Rs"
                        },
                        "ID_167": {
                            "title": "DISTRUST",
                            "link": "https://youtu.be/7Sbcm-Hb8Sk"
                        },
                        "ID_168": {
                            "title": "Desire for Execution",
                            "link": "https://youtu.be/FHlKfNSiM2c"
                        },
                        "ID_169": {
                            "title": "Trial Underground",
                            "link": "https://youtu.be/tJlAxq2WcVI"
                        },
                        "ID_170": {
                            "title": "M.T.B.",
                            "link": "https://youtu.be/AYsaZnce3ig"
                        },
                        "ID_171": {
                            "title": "Discussion -BREAK-",
                            "link": "https://youtu.be/NJ7g-RQQYzg"
                        },
                        "ID_172": {
                            "title": "Despair Pollution Noise Music",
                            "link": "https://youtu.be/9hn3gBV-nYc"
                        },
                        "ID_173": {
                            "title": "SUPER M.T.B.",
                            "link": "https://youtu.be/fsqfRUCSELU"
                        },
                        "ID_174": {
                            "title": "Welcome to Despair Academy",
                            "link": "https://youtu.be/pvXUPQDvpd4"
                        },
                        "ID_175": {
                            "title": "Beautiful Morning",
                            "link": "https://youtu.be/-fxT8Ev1AvU"
                        },
                        "ID_176": {
                            "title": "Climax Reasoning",
                            "link": "https://youtu.be/e0dZnWkzv2U"
                        },
                        "ID_177": {
                            "title": "Mr. Monokuma's Lesson",
                            "link": "https://youtu.be/ELfxtdEakhk"
                        },
                        "ID_178": {
                            "title": "SUPER FINAL M.T.B.",
                            "link": "https://youtu.be/kIwKwtYebcE"
                        },
                        "ID_179": {
                            "title": "BOX 16",
                            "link": "https://youtu.be/p4z_RMGB414"
                        },
                        "ID_180": {
                            "title": "Discussion -HEAT UP-",
                            "link": "https://youtu.be/HgOs-J9Pytc"
                        },
                        "ID_181": {
                            "title": "Flashing Anagram",
                            "link": "https://youtu.be/cTrVBMsVPb0"
                        },
                        "ID_182": {
                            "title": "New World Order",
                            "link": "https://youtu.be/m3EHCTP3jic"
                        },
                        "ID_183": {
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
                        "ID_184": {
                            "title": "Beautiful Ruin",
                            "link": "https://youtu.be/P-fMDaPFXME"
                        },
                        "ID_185": {
                            "title": "Beautiful Days [Piano Arrangement]",
                            "link": "https://youtu.be/mESVTvnIVnw"
                        },
                        "ID_186": {
                            "title": "Ms. Monomi's Practice Lesson",
                            "link": "https://youtu.be/emEg0zGS7KY"
                        },
                        "ID_187": {
                            "title": "Ikoroshia",
                            "link": "https://youtu.be/gCfpmW6s37U"
                        },
                        "ID_188": {
                            "title": "Tropical Despair",
                            "link": "https://youtu.be/zlCho8m4Zyc"
                        },
                        "ID_189": {
                            "title": "Third Island Theme",
                            "link": "https://youtu.be/dtsSngpkwKc"
                        },
                        "ID_190": {
                            "title": "Welcome DANGAN IsLand!! [OP Ver]",
                            "link": "https://youtu.be/5kHtDxCMa64"
                        },
                        "ID_191": {
                            "title": "P.T.A.",
                            "link": "https://youtu.be/hSdokoS408s"
                        },
                        "ID_192": {
                            "title": "A Dead End to the Ocean's Aroma",
                            "link": "https://youtu.be/uoh-Z_TS_xE"
                        },
                        "ID_193": {
                            "title": "Objection -CROSS SWORD-",
                            "link": "https://youtu.be/mymjF4AZJrg"
                        },
                        "ID_194": {
                            "title": "Suguikoroshia",
                            "link": "https://youtu.be/-tq5xapLVp0"
                        },
                        "ID_195": {
                            "title": "Class Trial - Future Part",
                            "link": "https://youtu.be/5F26Vt1Q2-E"
                        },
                        "ID_196": {
                            "title": "ANAGRAM.NET",
                            "link": "https://youtu.be/RK6R94HMgpM"
                        },
                        "ID_197": {
                            "title": "HYPER P.T.A.",
                            "link": "https://youtu.be/PnbAZMQ-jq0"
                        },
                        "ID_198": {
                            "title": "DIVE DRIVE",
                            "link": "https://youtu.be/HP7r1TVINsg"
                        },
                        "ID_199": {
                            "title": "HYPER ULTRA P.T.A.",
                            "link": "https://youtu.be/AyFrgi3emaM"
                        },
                        "ID_200": {
                            "title": "Fifth Island Theme",
                            "link": "https://youtu.be/PNY4F9im83k"
                        },
                        "ID_201": {
                            "title": "Alter Ego of the New World",
                            "link": "https://youtu.be/mxc-QIS5gbs"
                        },
                        "ID_202": {
                            "title": "Ekoroshia",
                            "link": "https://youtu.be/xjbgj2V6-o0"
                        },
                        "ID_203": {
                            "title": "Let Us Sing of a Hollow Victory",
                            "link": "https://youtu.be/yLaiZTOGTkA"
                        },
                        "ID_204": {
                            "title": "The Day Before the Future",
                            "link": "https://youtu.be/4ScJ__5-cso"
                        },
                        "ID_205": {
                            "title": "Searching the Twilight",
                            "link": "https://youtu.be/jzLJwzHI14s"
                        }
                    }
                },
                "Killing Harmony": {
                    "gameName": "Killing Harmony",
                    "answers": ["killing harmony", "danganronpa 3", "dangan ronpa 3", "danganronpa v3", "dr v3", "drv3", "dangan ronpa v3", "v3"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_206": {
                            "title": "EXISAL TRIBE",
                            "link": "https://youtu.be/ruP_SAaxiNQ"
                        },
                        "ID_207": {
                            "title": "Beautiful Lie",
                            "link": "https://youtu.be/-SnTpTE575M"
                        },
                        "ID_208": {
                            "title": "Anagram. NEW",
                            "link": "https://youtu.be/fv-fSZZ_iT0"
                        },
                        "ID_209": {
                            "title": "Living in a Lazy Parallel World",
                            "link": "https://youtu.be/H3klCeCLwww"
                        },
                        "ID_210": {
                            "title": "Rise of the Ultimates",
                            "link": "https://youtu.be/cQbDAuVbDZY"
                        },
                        "ID_211": {
                            "title": "Rise and Shine, Ursine!",
                            "link": "https://youtu.be/KOI5D928mvk"
                        },
                        "ID_212": {
                            "title": "Becoming Friends",
                            "link": "https://youtu.be/2bxYMupB5q0"
                        },
                        "ID_213": {
                            "title": "Nightmare in the Locker",
                            "link": "https://youtu.be/xD2XHF-XGY4"
                        },
                        "ID_214": {
                            "title": "NEW A.A. (Ch. 1)",
                            "link": "https://youtu.be/5KfnfvyPRtk"
                        },
                        "ID_215": {
                            "title": "Despair Searching",
                            "link": "https://youtu.be/FZLYRkiHk5I"
                        },
                        "ID_216": {
                            "title": "Cool Morning",
                            "link": "https://youtu.be/F7dhu57yeYU"
                        },
                        "ID_217": {
                            "title": "Death Road of Despair",
                            "link": "https://youtu.be/Ih0Tt10uFKI"
                        },
                        "ID_218": {
                            "title": "PSYCHE TAXI",
                            "link": "https://youtu.be/BNWw4Z9pB04"
                        },
                        "ID_219": {
                            "title": "Darkness Time",
                            "link": "https://youtu.be/gbZhzgIh-Ik"
                        },
                        "ID_220": {
                            "title": "Heaven of Almost Hell",
                            "link": "https://youtu.be/_F3p9pksJDs"
                        },
                        "ID_221": {
                            "title": "Clair de Lune",
                            "link": "https://youtu.be/nhnt4mLG92Y"
                        },
                        "ID_222": {
                            "title": "Spirit, Praise, and Beauty",
                            "link": "https://youtu.be/zwsGdXWv444"
                        },
                        "ID_223": {
                            "title": "DANGANVEGAS",
                            "link": "https://youtu.be/t-9yzPWIoLM"
                        },
                        "ID_224": {
                            "title": "Mind Mine",
                            "link": "https://youtu.be/2HNmTL-iju0"
                        },
                        "ID_225": {
                            "title": "Talent Selection",
                            "link": "https://youtu.be/cENv5uK8qLI"
                        },
                        "ID_226": {
                            "title": "Hope of Summer",
                            "link": "https://youtu.be/9jRL5WYhSeM"
                        },
                        "ID_227": {
                            "title": "Hope of Spring",
                            "link": "https://youtu.be/qzdP2cXtpT4"
                        },
                        "ID_228": {
                            "title": "Moon on the Water",
                            "link": "https://youtu.be/c3XeMcD154c"
                        },
                        "ID_229": {
                            "title": "Wonderful Story",
                            "link": "https://youtu.be/Z3hAsD8M4iM"
                        },
                        "ID_230": {
                            "title": "Let's Start the Killing Game",
                            "link": "https://youtu.be/apcEHrIMQN0"
                        },
                        "ID_231": {
                            "title": "HYPER NEW A.A. (Ch. 1)",
                            "link": "https://youtu.be/zaPGdlLgaEU"
                        },
                        "ID_232": {
                            "title": "Closing Argument V3",
                            "link": "https://youtu.be/bfM8rAq3RcA"
                        },
                        "ID_233": {
                            "title": "Climactic Re-Enactment V3",
                            "link": "https://youtu.be/en8PD91y0x8"
                        },
                        "ID_234": {
                            "title": "Danganronpa V3 (Full Version)",
                            "link": "https://youtu.be/Ewm8o6eEuDI"
                        },
                        "ID_235": {
                            "title": "V3 Gallery Music",
                            "link": "https://youtu.be/vTl_1FeyMSQ"
                        },
                        "ID_236": {
                            "title": "Debate Scrum",
                            "link": "https://youtu.be/KKMJYQar8cM"
                        },
                        "ID_237": {
                            "title": "Hangman's Gambit Ver 3.0",
                            "link": "https://youtu.be/ThfGLLTMSpo"
                        },
                        "ID_238": {
                            "title": "V3 Argument -Blade Lock-",
                            "link": "https://youtu.be/rJ4fXEs3M7Q"
                        },
                        "ID_239": {
                            "title": "Final a.A.",
                            "link": "https://youtu.be/Sgp39oFV6Js"
                        },
                        "ID_240": {
                            "title": "New World Order V3",
                            "link": "https://youtu.be/LlMAROvZ5gA"
                        },
                        "ID_241": {
                            "title": "Hope of Autumn",
                            "link": "https://youtu.be/HN3VTKpFbzE"
                        },
                        "ID_242": {
                            "title": "Hope of Winter",
                            "link": "https://youtu.be/H_Jh0kfrLY4"
                        },
                        "ID_243": {
                            "title": "Hope Searching",
                            "link": "https://youtu.be/5UYIS6enQCQ"
                        },
                        "ID_244": {
                            "title": "Hyper Final a.A.",
                            "link": "https://youtu.be/Baag6XirtJc"
                        },
                        "ID_245": {
                            "title": "Heartless Journey",
                            "link": "https://youtu.be/IIcIWQFYyx0"
                        },
                        "ID_246": {
                            "title": "Hyper Ultra New a.A. (Ch. 1)",
                            "link": "https://youtu.be/MBNZ20SzC6M"
                        },
                        "ID_247": {
                            "title": "Sing the Empty Truth",
                            "link": "https://youtu.be/bdvaPZl5kgQ"
                        },
                        "ID_248": {
                            "title": "Hyper Final Ultra a.A.",
                            "link": "https://youtu.be/on_ET4SUbx4"
                        },
                        "ID_249": {
                            "title": "Killing Game Completion Ceremony",
                            "link": "https://youtu.be/Rsic8ioDhSc"
                        },
                        "ID_250": {
                            "title": "Flashback Light",
                            "link": "https://youtu.be/jHRj--nz_IE"
                        },
                        "ID_251": {
                            "title": "Vote Slot",
                            "link": "https://youtu.be/IK8v3hkG5wM"
                        },
                        "ID_252": {
                            "title": "Beautiful Lie in the Virtual World",
                            "link": "https://youtu.be/5nsyLqVjRtY"
                        },
                        "ID_253": {
                            "title": "Despair Searching: Virtual World",
                            "link": "https://youtu.be/BM4eO7dEpps"
                        },
                        "ID_254": {
                            "title": "Island Ordeal",
                            "link": "https://youtu.be/XDXyKXZej0U"
                        },
                        "ID_255": {
                            "title": "School Ordeal",
                            "link": "https://youtu.be/zvi176Yj758"
                        },
                        "ID_256": {
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
                        "ID_257": {
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
                    "answers": ["deltarune: chapter 1", "deltarune", "deltarune chapter 1", "delta rune", "undertale 2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_935": {
                            "title": "ANOTHER HIM",
                            "link": "https://youtu.be/NNYfXTUTuyA"
                        },
                        "ID_500": {
                            "title": "Beginning",
                            "link": "https://youtu.be/OHhgmjijRWg"
                        },
                        "ID_501": {
                            "title": "School",
                            "link": "https://youtu.be/MVTmvDQwX2k"
                        },
                        "ID_502": {
                            "title": "Susie",
                            "link": "https://youtu.be/M-9qmTg_Xsc"
                        },
                        "ID_503": {
                            "title": "The Door",
                            "link": "https://youtu.be/VuM5pBqV4fM"
                        },
                        "ID_504": {
                            "title": "Cliffs",
                            "link": "https://youtu.be/ayuCfK1218s"
                        },
                        "ID_505": {
                            "title": "The Chase",
                            "link": "https://youtu.be/m9vD-_xYUwI"
                        },
                        "ID_506": {
                            "title": "The Legend",
                            "link": "https://youtu.be/CDH2MjvFGC0"
                        },
                        "ID_507": {
                            "title": "Lancer",
                            "link": "https://youtu.be/GhUEIy9j3b4"
                        },
                        "ID_508": {
                            "title": "Rude Buster",
                            "link": "https://youtu.be/xYVhUjee-oM"
                        },
                        "ID_509": {
                            "title": "Empty Town",
                            "link": "https://youtu.be/MjpukFi_CW0"
                        },
                        "ID_510": {
                            "title": "Weird Birds",
                            "link": "https://youtu.be/HlcNLYnhb0w"
                        },
                        "ID_511": {
                            "title": "Field of Hopes and Dreams",
                            "link": "https://youtu.be/PhhGEA_317w"
                        },
                        "ID_512": {
                            "title": "Fanfare (From Rose of Winter)",
                            "link": "https://youtu.be/_HxWaQhb7zc"
                        },
                        "ID_513": {
                            "title": "Lantern",
                            "link": "https://youtu.be/r9Wc9a2uD3c"
                        },
                        "ID_514": {
                            "title": "I'm Very Bad",
                            "link": "https://youtu.be/YetdpAvNPEc"
                        },
                        "ID_515": {
                            "title": "Checker Dance",
                            "link": "https://youtu.be/FfaYudbw9hA"
                        },
                        "ID_516": {
                            "title": "Quiet Autumn",
                            "link": "https://youtu.be/Lyswkjw3U9Q"
                        },
                        "ID_517": {
                            "title": "Scarlet Forest",
                            "link": "https://youtu.be/xxSpXQDOcAo"
                        },
                        "ID_518": {
                            "title": "Thrash Machine",
                            "link": "https://youtu.be/ONlbHu7aDNI"
                        },
                        "ID_519": {
                            "title": "Vs. Lancer",
                            "link": "https://youtu.be/gQZxGRucsMQ"
                        },
                        "ID_520": {
                            "title": "Basement",
                            "link": "https://youtu.be/9y8UXb7KfgU"
                        },
                        "ID_521": {
                            "title": "Imminent Death",
                            "link": "https://youtu.be/nedqvk48HWo"
                        },
                        "ID_522": {
                            "title": "Vs. Susie",
                            "link": "https://youtu.be/SBHgJzYNR6s"
                        },
                        "ID_523": {
                            "title": "Card Castle",
                            "link": "https://youtu.be/Euc8VllYbOU"
                        },
                        "ID_524": {
                            "title": "Rouxls Kaard",
                            "link": "https://youtu.be/5LcT1OubJsE"
                        },
                        "ID_525": {
                            "title": "[April 2012]",
                            "link": "https://youtu.be/Y5EvDuQoF9E"
                        },
                        "ID_526": {
                            "title": "Hip Shop",
                            "link": "https://youtu.be/Taxlj7nG4RY"
                        },
                        "ID_527": {
                            "title": "Gallery",
                            "link": "https://youtu.be/pOWoeXfNpXU"
                        },
                        "ID_528": {
                            "title": "Chaos King",
                            "link": "https://youtu.be/fFsTQCSYY4Q"
                        },
                        "ID_529": {
                            "title": "Darkness Falls",
                            "link": "https://youtu.be/FSn4p1Xx7NU"
                        },
                        "ID_530": {
                            "title": "The Circus",
                            "link": "https://youtu.be/tpIkEnzGd5U"
                        },
                        "ID_531": {
                            "title": "THE WORLD REVOLVING",
                            "link": "https://youtu.be/8gkTtNefxws"
                        },
                        "ID_532": {
                            "title": "Friendship",
                            "link": "https://youtu.be/l5D6Nfe7AMs"
                        },
                        "ID_533": {
                            "title": "THE HOLY",
                            "link": "https://youtu.be/1lHuP00QbMU"
                        },
                        "ID_534": {
                            "title": "Your Power",
                            "link": "https://youtu.be/hLG_tNvSHek"
                        },
                        "ID_535": {
                            "title": "A Town Called Hometown",
                            "link": "https://youtu.be/HMLrsPnk7dg"
                        },
                        "ID_536": {
                            "title": "You Can Always Come Home",
                            "link": "https://youtu.be/LJ2XM3fpVQk"
                        },
                        "ID_537": {
                            "title": "Don't Forget",
                            "link": "https://youtu.be/PEPbUhHhECU"
                        },
                        "ID_538": {
                            "title": "Before the Story",
                            "link": "https://youtu.be/niSJhhpBqjU"
                        },
                        "ID_539": {
                            "title": "Dogtarune / Dogcheck",
                            "link": "https://youtu.be/SDrBW7QVL-A"
                        }
                    }
                }
            }
        },
        "Donkey Kong": {
            "seriesName": "Donkey Kong",
            "seriesColor": "red",
            "game": {
                "Donkey Kong 64": {
                    "gameName": "Donkey Kong 64",
                    "answers": ["donkey kong 64", "dk64", "dk 64"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_540": {
                            "title": "DK Rap",
                            "link": "https://youtu.be/8KT7jcB72fQ"
                        }
                    }
                }
            }
        },
        "Doom": {
            "seriesName": "Doom",
            "seriesColor": "red",
            "game": {
                "DOOM": {
                    "gameName": "DOOM",
                    "answers": ["doom"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1084": {
                            "title": "Rip & Tear",
                            "link": "https://youtu.be/vyA1z2A-lhU"
                        },
                        "ID_1382": {
                            "title": "At Doom's Gate",
                            "link": "https://youtu.be/BSsfjHCFosw"
                        }
                    }
                }
            }
        },
        "DuckTales": {
            "seriesName": "DuckTales",
            "seriesColor": "red",
            "game": {
                "DuckTales": {
                    "gameName": "DuckTales",
                    "answers": ["ducktales"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1383": {
                            "title": "Duck Tales Theme",
                            "link": "https://youtu.be/uJSV_wo9CY0"
                        },
                        "ID_1102": {
                            "title": "The Amazon Theme",
                            "link": "https://youtu.be/1eG7rwvpu4E"
                        },
                        "ID_1103": {
                            "title": "The Moon Theme",
                            "link": "https://youtu.be/KF32DRg9opA"
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
                        "ID_1104": {
                            "title": "POINT OF NO RETURN",
                            "link": "https://youtu.be/IOSRTILzl1s"
                        }
                    }
                }
            }
        },
        "Far Cry": {
            "seriesName": "Far Cry",
            "seriesColor": "red",
            "game": {
                "Far Cry 3": {
                    "gameName": "Far Cry 3",
                    "answers": ["far cry 3", "fc3"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_898": {
                            "title": "Falling Into a Dream",
                            "link": "https://youtu.be/pLmAdCWzunM"
                        }
                    }
                }
            }
        },
        "FEZ": {
            "seriesName": "FEZ",
            "seriesColor": "red",
            "game": {
                "FEZ": {
                    "gameName": "FEZ",
                    "answers": ["fez"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1098": {
                            "title": "Adventure",
                            "link": "https://youtu.be/76GnOwHorn0"
                        },
                        "ID_1099": {
                            "title": "Home",
                            "link": "https://youtu.be/TA-SGTmKnP0"
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
                    "answers": ["final fantasy vii remake", "ffviir", "ffvii"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1085": {
                            "title": "Let The Battles Begin!!",
                            "link": "https://youtu.be/vOC_tuuWSXo"
                        },
                        "ID_1086": {
                            "title": "One Winged Angel Rebirth",
                            "link": "https://youtu.be/eLGn_dVA3ow"
                        }
                    }
                },
                "FINAL FANTASY VII": {
                    "gameName": "FINAL FANTASY VII",
                    "answers": ["final fantasy vii", "ffvii", "ff7", "ff7r", "ff7", "final fantasy 7 remake", "final fantasy 7", "final fantasy vii"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1060": {
                            "title": "One Winged Angel",
                            "link": "https://youtu.be/qDD-iYkHBhc"
                        },
                        "ID_1061": {
                            "title": "J-E-N-O-V-A",
                            "link": "https://youtu.be/J6GrZYE2il0"
                        }
                    }
                },
                "FINAL FANTASY VI": {
                    "gameName": "FINAL FANTASY VI",
                    "answers": ["final fantasy vi", "ffvi", "ff6", "final fantasy 7"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1062": {
                            "title": "Dancing Mad",
                            "link": "https://youtu.be/JbXVNKtmWnc"
                        },
                        "ID_1063": {
                            "title": "Terra's Theme",
                            "link": "https://youtu.be/a6t_uyg_pF8"
                        },
                        "ID_1064": {
                            "title": "Forever Rachel",
                            "link": "https://youtu.be/g_aX6I0xLbo"
                        }
                    }
                },
                "FINAL FANTASY X": {
                    "gameName": "FINAL FANTASY X",
                    "answers": ["final fantasy x", "ffx"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1316": {
                            "title": "Spiran Scenery",
                            "link": "https://youtu.be/U5A3f5K7NwA"
                        },
                        "ID_1317": {
                            "title": "To Zanarkand",
                            "link": "https://youtu.be/g_aX6I0xLbo"
                        },
                        "ID_1318": {
                            "title": "Normal Battle",
                            "link": "https://youtu.be/6RsawtJ6Kc8"
                        },
                        "ID_1319": {
                            "title": "Enemy Attack",
                            "link": "https://youtu.be/HQfDsVhS9BA"
                        },
                        "ID_1320": {
                            "title": "Silence Before the Storm",
                            "link": "https://youtu.be/vmHBqGG7TN0"
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
                    "answers": ["friday night funkin'", "fnf", "friday night", "final fantasy 6"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1321": {
                            "title": "Ugh",
                            "link": "https://youtu.be/_pLDBCkvyUg"
                        },
                        "ID_1322": {
                            "title": "Guns",
                            "link": "https://youtu.be/K5lp8aAoT1g"
                        },
                        "ID_959": {
                            "title": "M.I.L.F",
                            "link": "https://youtu.be/dOPrN6aJ7TI"
                        },
                        "ID_960": {
                            "title": "Roses",
                            "link": "https://youtu.be/DKs-Tkw4X3I"
                        }
                    }
                },
                "Friday Night Funkin' VS Kapi": {
                    "gameName": "Friday Night Funkin' VS Kapi",
                    "answers": ["friday night funkin' vs kapi", "fnf", "friday night", "friday night funking"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_961": {
                            "title": "Nyaw",
                            "link": "https://youtu.be/nEDtNRT7GwI"
                        }
                    }
                },
                "Friday Night Funkin': Mid-Fight Masses": {
                    "gameName": "Friday Night Funkin': Mid-Fight Masses",
                    "answers": ["friday night funkin': mid-fight masses", "fnf", "friday night", "friday night funking", "fnf kapi", "kapi mod", "fnf kapi mod", "friday night funkin vs kapi"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_962": {
                            "title": "Zavodila",
                            "link": "https://youtu.be/e7nIQ1yoCCc"
                        }
                    }
                },
                "Friday Night Funkin': Tricky Mod": {
                    "gameName": "Friday Night Funkin': Tricky Mod",
                    "answers": ["friday night funkin': tricky mod", "fnf", "friday night", "friday night funking", "fnf mfm", "fnf ruv", "fnf sarv", "fnf zavodila", "friday night funkin midfight masses", "friday night funkin mid fight masses", "friday night funkin mid-fight masses"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_963": {
                            "title": "Madness",
                            "link": "https://youtu.be/GZmoHrq0mEY"
                        },
                        "ID_964": {
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
                    "answers": ["furi", "", "", "friday night funking", "fnf tricky", "fnf madness", "fnf", "friday night funkin tricky mod"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_965": {
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
                        "ID_966": {
                            "title": "Prologue ~ The Beginning of the Night",
                            "link": "https://youtu.be/HVBDt3VRDfA"
                        },
                        "ID_904": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/IQ3khsva6E8"
                        },
                        "ID_65": {
                            "title": "4 Minutes Before Death",
                            "link": "https://youtu.be/r3C-FrmHn44"
                        },
                        "ID_66": {
                            "title": "Fate Updated",
                            "link": "https://youtu.be/8hw63HniDWE"
                        },
                        "ID_67": {
                            "title": "Countdown",
                            "link": "https://youtu.be/bXXrpgpWJQY"
                        },
                        "ID_68": {
                            "title": "The World of the Dead",
                            "link": "https://youtu.be/x2CklIRwJvI"
                        },
                        "ID_69": {
                            "title": "Lynne ~ A Targeted Redhead",
                            "link": "https://youtu.be/w6xMvGbwT7I"
                        },
                        "ID_70": {
                            "title": "Ray ~ A Ray of Light",
                            "link": "https://youtu.be/31jJ-pmGuO0"
                        },
                        "ID_71": {
                            "title": "Awakening",
                            "link": "https://youtu.be/Ybi0-OTvoXM"
                        },
                        "ID_72": {
                            "title": "Welcome to the Salon",
                            "link": "https://youtu.be/PGn9958vneI"
                        },
                        "ID_73": {
                            "title": "Complication",
                            "link": "https://youtu.be/OrxEVT0wHMc"
                        },
                        "ID_74": {
                            "title": "Missile ~ A Courageous Little Animal",
                            "link": "https://youtu.be/TWd3JA6cpY0"
                        },
                        "ID_75": {
                            "title": "Cabanela ~ A White Lovely Lanky Man",
                            "link": "https://youtu.be/eeVXa4cU21g"
                        },
                        "ID_76": {
                            "title": "Trauma",
                            "link": "https://youtu.be/3kwKogno3dk"
                        },
                        "ID_77": {
                            "title": "Jingle",
                            "link": "https://youtu.be/EwiF0n073zE"
                        },
                        "ID_78": {
                            "title": "4 Minutes Before Death ~ Variation",
                            "link": "https://youtu.be/L4X_DMcjYaI"
                        },
                        "ID_79": {
                            "title": "Fate Updated ~ Variation",
                            "link": "https://youtu.be/h--eFUupy-8"
                        },
                        "ID_80": {
                            "title": "Beauty and Dandy",
                            "link": "https://youtu.be/3zrqU53d0IA"
                        },
                        "ID_81": {
                            "title": "Deadline",
                            "link": "https://youtu.be/RkmcpQjZWVA"
                        },
                        "ID_82": {
                            "title": "Chained Past",
                            "link": "https://youtu.be/MgWCNGpwIYs"
                        },
                        "ID_83": {
                            "title": "Informing About the Parting",
                            "link": "https://youtu.be/VUGlC8WOQt0"
                        },
                        "ID_84": {
                            "title": "The Last Desperate Struggle",
                            "link": "https://youtu.be/mFXOJ1mkKtI"
                        },
                        "ID_85": {
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
                        "ID_86": {
                            "title": "Dawn Oblique",
                            "link": "https://youtu.be/q151CWLGZ0E"
                        },
                        "ID_87": {
                            "title": "Snow Delta",
                            "link": "https://youtu.be/REXRLt2E-kk"
                        },
                        "ID_899": {
                            "title": "Vapor Radian",
                            "link": "https://youtu.be/0luUyA5l99c"
                        },
                        "ID_900": {
                            "title": "Oasis Epsilon",
                            "link": "https://youtu.be/emuMQTOIyi4"
                        },
                        "ID_901": {
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
                        "ID_902": {
                            "title": "Lonely Rolling Star",
                            "link": "https://youtu.be/okEluVGlWio"
                        },
                        "ID_903": {
                            "title": "Katamari on the Rocks",
                            "link": "https://youtu.be/iMH49ieL4es"
                        },
                        "ID_1072": {
                            "title": "Dan Don Fuga",
                            "link": "https://youtu.be/i9tQrYuR42k"
                        }
                    }
                }
            }
        },
        "Kid Icarus": {
            "seriesName": "Kid Icarus",
            "seriesColor": "red",
            "game": {
                "Kid Icarus Uprising": {
                    "gameName": "Kid Icarus Uprising",
                    "answers": ["kid icarus uprising"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1073": {
                            "title": "Magnus's Theme",
                            "link": "https://youtu.be/2kPwTTQb6D8"
                        },
                        "ID_1190": {
                            "title": "Dark Pit",
                            "link": "https://youtu.be/QG77HTdreh0"
                        },
                        "ID_1094": {
                            "title": "Dark Pit's Theme",
                            "link": "https://youtu.be/COgGsetFrCM"
                        },
                        "ID_1095": {
                            "title": "Lightning Battle",
                            "link": "https://youtu.be/Uxnc2eoPjSs"
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
                    "answers": ["super mario sunshine", "mario sunshine", "sms"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1096": {
                            "title": "Shadow Mario",
                            "link": "https://youtu.be/bwRIQX8iLbI"
                        },
                        "ID_1097": {
                            "title": "Bianco Hills",
                            "link": "https://youtu.be/JA8JClD7jDg"
                        },
                        "ID_885": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/-uFpYEOGqV4"
                        },
                        "ID_886": {
                            "title": "Secret Course",
                            "link": "https://youtu.be/DvZWxiUfrNo"
                        },
                        "ID_887": {
                            "title": "Ricco Harbor",
                            "link": "https://youtu.be/P5iSWG8RHAs"
                        },
                        "ID_888": {
                            "title": "Gelato Beach",
                            "link": "https://youtu.be/el_r5y_AcrE"
                        },
                        "ID_889": {
                            "title": "Secret Course: Sky & Sea",
                            "link": "https://youtu.be/pVpKQljWtyo"
                        },
                        "ID_890": {
                            "title": "Pinna Park",
                            "link": "https://youtu.be/2HqGNaEMF70"
                        },
                        "ID_891": {
                            "title": "Pinna Beach",
                            "link": "https://youtu.be/WcSM-p1ch8E"
                        },
                        "ID_892": {
                            "title": "Noki Bay",
                            "link": "https://youtu.be/HqY0FnkqD98"
                        },
                        "ID_893": {
                            "title": "Sirena Beach",
                            "link": "https://youtu.be/Kr2C0jkVQfE"
                        },
                        "ID_894": {
                            "title": "Hotel Delfino",
                            "link": "https://youtu.be/E0Y6uNRtCfs"
                        },
                        "ID_895": {
                            "title": "Pianta Village",
                            "link": "https://youtu.be/etYb-p8uhWA"
                        }
                    }
                },
                "Super Mario Bros.": {
                    "gameName": "Super Mario Bros.",
                    "answers": ["super mario bros.", "smb", "mk8"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_896": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/iy3qq7zc4EY"
                        },
                        "ID_897": {
                            "title": "Underground Theme",
                            "link": "https://youtu.be/UOwyFPgjPQ4"
                        },
                        "ID_1223": {
                            "title": "Underwater Theme",
                            "link": "https://youtu.be/zc28zcBIX7U"
                        },
                        "ID_1224": {
                            "title": "Castle Theme",
                            "link": "https://youtu.be/In8WfBgBEis"
                        },
                        "ID_1225": {
                            "title": "Star Theme",
                            "link": "https://youtu.be/TLb33K8UO30"
                        },
                        "ID_1226": {
                            "title": "Ending Theme",
                            "link": "https://youtu.be/P1dcLvDlbCw"
                        }
                    }
                },
                "Super Mario Bros. 2": {
                    "gameName": "Super Mario Bros. 2",
                    "answers": ["super mario bros. 2", "smb2", "mario bros"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1227": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/fqtKBlK3YII"
                        },
                        "ID_1228": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/P9Ee4TevHfA"
                        },
                        "ID_1229": {
                            "title": "Dark World",
                            "link": "https://youtu.be/DqlQe9in1RU"
                        },
                        "ID_1230": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/1gQOprzFxxQ"
                        },
                        "ID_1231": {
                            "title": "Wart Battle",
                            "link": "https://youtu.be/krwnYb0g_Gg"
                        },
                        "ID_1232": {
                            "title": "Ending Theme",
                            "link": "https://youtu.be/9GB8SSIK0sQ"
                        }
                    }
                },
                "Super Mario Bros. 3": {
                    "gameName": "Super Mario Bros. 3",
                    "answers": ["super mario bros. 3", "smb 3", "mario bros 2", "super mario bros", "mario"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1233": {
                            "title": "Overworld Theme 1",
                            "link": "https://youtu.be/Qd78OMGLkVA"
                        },
                        "ID_1234": {
                            "title": "Overworld Theme 2",
                            "link": "https://youtu.be/2sH-l2xN3gU"
                        },
                        "ID_1235": {
                            "title": "Underground Theme",
                            "link": "https://youtu.be/decbYrsCjOk"
                        },
                        "ID_1236": {
                            "title": "Underwater Theme",
                            "link": "https://youtu.be/B7D0GKJDU3I"
                        },
                        "ID_1237": {
                            "title": "Castle Theme",
                            "link": "https://youtu.be/ixA3SzX6uUc"
                        },
                        "ID_1238": {
                            "title": "World Map 1",
                            "link": "https://youtu.be/1yfxp1NhLIs"
                        },
                        "ID_1239": {
                            "title": "World Map 3",
                            "link": "https://youtu.be/crth5dpq8Ns"
                        },
                        "ID_1240": {
                            "title": "World Map 6",
                            "link": "https://youtu.be/LF94p687yns"
                        },
                        "ID_1241": {
                            "title": "Recorder Theme",
                            "link": "https://youtu.be/tZqOqfgSWKU"
                        },
                        "ID_1242": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/8Tj3-bmDnS8"
                        },
                        "ID_1243": {
                            "title": "Ending Theme",
                            "link": "https://youtu.be/GzN-6zYmdAw"
                        }
                    }
                },
                "Super Mario 64": {
                    "gameName": "Super Mario 64",
                    "answers": ["super mario 64", "sm64", "smb3", "super mario bros 2", "mario 2", "smb 2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1244": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/pYAjvWCVkH0"
                        },
                        "ID_1245": {
                            "title": "Super Mario 64 (Main Theme)",
                            "link": "https://youtu.be/7hT04AB1JU4"
                        },
                        "ID_1246": {
                            "title": "Slider",
                            "link": "https://youtu.be/l7I8dYKeke8"
                        },
                        "ID_1247": {
                            "title": "Inside the Castle Walls",
                            "link": "https://youtu.be/ZkFpUQc3Y2o"
                        },
                        "ID_1248": {
                            "title": "Dire, Dire Docks",
                            "link": "https://youtu.be/Zqa2mgjbOIM"
                        },
                        "ID_1249": {
                            "title": "Cool, Cool Mountain",
                            "link": "https://youtu.be/LOADdASJnak"
                        },
                        "ID_1250": {
                            "title": "Pirahna Plant's Lullaby",
                            "link": "https://youtu.be/V1SdZyfXfOs"
                        },
                        "ID_1251": {
                            "title": "File Select",
                            "link": "https://youtu.be/hrJNgLGbYg0"
                        },
                        "ID_1252": {
                            "title": "Stage Boss",
                            "link": "https://youtu.be/kasePUUDdK8"
                        },
                        "ID_1253": {
                            "title": "Bowser's Road",
                            "link": "https://youtu.be/3WnQBZ6idbU"
                        },
                        "ID_1254": {
                            "title": "Staff Roll",
                            "link": "https://youtu.be/o-xRxXYpavU"
                        }
                    }
                },
                "Super Mario Odyssey": {
                    "gameName": "Super Mario Odyssey",
                    "answers": ["super mario odyssey", "odyssey", "sm 64", "smb"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1255": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/pAIOQIkZv1c"
                        },
                        "ID_1256": {
                            "title": "Bonneton",
                            "link": "https://youtu.be/KDeMFxTLCIM"
                        },
                        "ID_1257": {
                            "title": "Fossil Falls",
                            "link": "https://youtu.be/1y58yAB3Uvw"
                        },
                        "ID_1258": {
                            "title": "Steam Gardens",
                            "link": "https://youtu.be/s8Mx18uR1dY"
                        },
                        "ID_1259": {
                            "title": "New Donk City: Daytime",
                            "link": "https://youtu.be/4vWAZfLuNoE"
                        },
                        "ID_1260": {
                            "title": "Jump Up, Super Star!",
                            "link": "https://youtu.be/e9r5hx47kxM"
                        },
                        "ID_1261": {
                            "title": "New Donk City (Café)",
                            "link": "https://youtu.be/nrCNjM6wvsU"
                        }
                    }
                },
                "Super Mario Land": {
                    "gameName": "Super Mario Land",
                    "answers": ["super mario land", "mario land", "mario odyssey", "mario 64"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1262": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/Gb33Qnbw520"
                        },
                        "ID_1263": {
                            "title": "Muda Kingdom",
                            "link": "https://youtu.be/N7Ol9YqAu6M"
                        },
                        "ID_1264": {
                            "title": "Ending Theme",
                            "link": "https://youtu.be/xYtBAbqJO9k"
                        }
                    }
                },
                "Super Mario Land 2": {
                    "gameName": "Super Mario Land 2",
                    "answers": ["super mario land 2", "mario land 2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1265": {
                            "title": "Choose Your Pipe",
                            "link": "https://youtu.be/5q6PNPSdQ8A"
                        },
                        "ID_1266": {
                            "title": "Overworld Map",
                            "link": "https://youtu.be/yIWRa39K1gs"
                        },
                        "ID_1267": {
                            "title": "Athletic Theme",
                            "link": "https://youtu.be/tdESE94vQwg"
                        },
                        "ID_1268": {
                            "title": "Staff Roll",
                            "link": "https://youtu.be/J-eOtcyP9l4"
                        }
                    }
                },
                "Super Mario World": {
                    "gameName": "Super Mario World",
                    "answers": ["super mario world", "mario world"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1269": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/qEpaZR2Dvlg"
                        },
                        "ID_1270": {
                            "title": "Vanilla Dome",
                            "link": "https://youtu.be/3suEhQUt5Us"
                        },
                        "ID_1271": {
                            "title": "Forest of Illusion",
                            "link": "https://youtu.be/j89GDcp9H2k"
                        },
                        "ID_1272": {
                            "title": "Star Road",
                            "link": "https://youtu.be/wKiUx6vAwRY"
                        },
                        "ID_1273": {
                            "title": "Underwater Theme",
                            "link": "https://youtu.be/BHCBzTsg854"
                        },
                        "ID_1274": {
                            "title": "Castle Theme",
                            "link": "https://youtu.be/fdmS4ndSAT8"
                        },
                        "ID_1275": {
                            "title": "Bonus Screen",
                            "link": "https://youtu.be/wASQJUxZvaQ"
                        },
                        "ID_1276": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/tAaGKo4XVvM"
                        },
                        "ID_1277": {
                            "title": "Athletic Theme",
                            "link": "https://youtu.be/ksTILugMwZc"
                        },
                        "ID_1278": {
                            "title": "Ending",
                            "link": "https://youtu.be/98d4D6AQkSE"
                        }
                    }
                },
                "Super Mario World 2: Yoshi's Island": {
                    "gameName": "Super Mario World 2: Yoshi's Island",
                    "answers": ["super mario world 2: yoshi's island", "mario world 2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1279": {
                            "title": "Story Music Box",
                            "link": "https://youtu.be/if7Ekscjaq4"
                        },
                        "ID_1280": {
                            "title": "Flower Garden",
                            "link": "https://youtu.be/pqQq4hla0xo"
                        },
                        "ID_1281": {
                            "title": "Athletic",
                            "link": "https://youtu.be/tw7HHUItwAg"
                        },
                        "ID_1282": {
                            "title": "Overworld",
                            "link": "https://youtu.be/ryD1B3b6yug"
                        },
                        "ID_1283": {
                            "title": "Big Boss",
                            "link": "https://youtu.be/hYN15hD_hLg"
                        },
                        "ID_1284": {
                            "title": "Bowser",
                            "link": "https://youtu.be/44vSEmdSNww"
                        }
                    }
                },
                "New Super Mario Bros.": {
                    "gameName": "New Super Mario Bros.",
                    "answers": ["new super mario bros.", "nsmb", "yoshis island"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1285": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/-GK41pLUuP0"
                        },
                        "ID_1286": {
                            "title": "Athletic Theme",
                            "link": "https://youtu.be/6rvMRbcqTfk"
                        }
                    }
                },
                "Super Mario Galaxy": {
                    "gameName": "Super Mario Galaxy",
                    "answers": ["super mario galaxy", "mario galaxy", "new super mario bros", "yoshi's island"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1287": {
                            "title": "Overture",
                            "link": "https://youtu.be/Z0MFN_gTFM8"
                        },
                        "ID_1288": {
                            "title": "Luma",
                            "link": "https://youtu.be/LY_qs-ra_88"
                        },
                        "ID_1289": {
                            "title": "Good Egg Galaxy",
                            "link": "https://youtu.be/qy8Sn6DHIi0"
                        },
                        "ID_1290": {
                            "title": "Comet Observatory 1",
                            "link": "https://youtu.be/8iqMMGNixvk"
                        },
                        "ID_1291": {
                            "title": "Bowser Jr.",
                            "link": "https://youtu.be/smfAA6NN5Cs"
                        },
                        "ID_1292": {
                            "title": "Space Junk Galaxy",
                            "link": "https://youtu.be/EuYNxzSFRk8"
                        },
                        "ID_1293": {
                            "title": "Battlerock Galaxy",
                            "link": "https://youtu.be/KYhmHovdBxY"
                        },
                        "ID_1294": {
                            "title": "Buoy Base Galaxy",
                            "link": "https://youtu.be/z29bt-wjS88"
                        },
                        "ID_1295": {
                            "title": "Sad Story",
                            "link": "https://youtu.be/zNxRNSCGvaY"
                        },
                        "ID_1296": {
                            "title": "Gusty Garden Galaxy",
                            "link": "https://youtu.be/QWhhMxrX-Us"
                        }
                    }
                },
                "New Super Mario Bros. Wii": {
                    "gameName": "New Super Mario Bros. Wii",
                    "answers": ["new super mario bros. wii", "nsmb wii", "galaxy", "new mario bros"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1297": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/wLg8oUE4H9E"
                        }
                    }
                },
                "Super Mario Galaxy 2": {
                    "gameName": "Super Mario Galaxy 2",
                    "answers": ["super mario galaxy 2", "smg2", "new super mario wii", "smg"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1298": {
                            "title": "Overture",
                            "link": "https://youtu.be/u9oRXhtotuc"
                        },
                        "ID_1299": {
                            "title": "Another Story",
                            "link": "https://youtu.be/CuMrIZdeEIE"
                        },
                        "ID_1300": {
                            "title": "Sky Station Galaxy",
                            "link": "https://youtu.be/WTht2pC-9AA"
                        },
                        "ID_1301": {
                            "title": "Starship Mario 1",
                            "link": "https://youtu.be/g1fhegjp_Po"
                        },
                        "ID_1302": {
                            "title": "Puzzle Plank Galaxy",
                            "link": "https://youtu.be/Oaf2gUhy74o"
                        },
                        "ID_1303": {
                            "title": "Slider",
                            "link": "https://youtu.be/ZOeEQVbPp9Y"
                        },
                        "ID_1304": {
                            "title": "Throwback Galaxy",
                            "link": "https://youtu.be/fVt61oE5BfE"
                        },
                        "ID_1305": {
                            "title": "Rosalina",
                            "link": "https://youtu.be/xqqYECCYohY"
                        }
                    }
                },
                "Super Mario 3D Land": {
                    "gameName": "Super Mario 3D Land",
                    "answers": ["super mario 3d land", "mario 3d land", "mario galaxy 2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1306": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/89VuI2nyINw"
                        }
                    }
                },
                "Super Mario 3D World": {
                    "gameName": "Super Mario 3D World",
                    "answers": ["super mario 3d world", "mario 3d world", "3d land", "smg 2", "galaxy 2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1307": {
                            "title": "Super Bell Hill",
                            "link": "https://youtu.be/wFxzHKx1BYQ"
                        },
                        "ID_1308": {
                            "title": "Snowball Park",
                            "link": "https://youtu.be/8wR6cHwoZtM"
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
                        "ID_1309": {
                            "title": "Main Menu",
                            "link": "https://youtu.be/T0hNPBfVu1U"
                        },
                        "ID_1310": {
                            "title": "Ring Shot",
                            "link": "https://youtu.be/6sw3HNfWvhQ"
                        },
                        "ID_780": {
                            "title": "Mini Golf",
                            "link": "https://youtu.be/eAeQ8FGSTdQ"
                        },
                        "ID_781": {
                            "title": "Dormie Hole",
                            "link": "https://youtu.be/Psur418k86U"
                        },
                        "ID_782": {
                            "title": "Toad Highlands",
                            "link": "https://youtu.be/gelz7iduUgY"
                        },
                        "ID_783": {
                            "title": "Koopa Park",
                            "link": "https://youtu.be/RcKDgpfx8Rw"
                        },
                        "ID_784": {
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
                    "answers": ["mario kart wii", "mario kart wii", "mariokart wii", "mk wii"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_785": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/hm1JaJD4s9Y"
                        },
                        "ID_786": {
                            "title": "Main Menu",
                            "link": "https://youtu.be/Qlmurjko1NM"
                        },
                        "ID_822": {
                            "title": "Moo Moo Meadows",
                            "link": "https://youtu.be/Dgsa4sPWsYA"
                        },
                        "ID_823": {
                            "title": "Mushroom Gorge",
                            "link": "https://youtu.be/sKU40Ahiofg"
                        },
                        "ID_824": {
                            "title": "Toad's Factory",
                            "link": "https://youtu.be/NbWazKpuiC8"
                        },
                        "ID_825": {
                            "title": "Coconut Mall",
                            "link": "https://youtu.be/QY7SxnKqMmE"
                        },
                        "ID_826": {
                            "title": "DK Summit",
                            "link": "https://youtu.be/be337mef4XA"
                        },
                        "ID_827": {
                            "title": "Daisy Circuit",
                            "link": "https://youtu.be/O84YXguVcoc"
                        },
                        "ID_828": {
                            "title": "Koopa Cape",
                            "link": "https://youtu.be/IVjh8eKVSKM"
                        },
                        "ID_829": {
                            "title": "Maple Treeway",
                            "link": "https://youtu.be/YyTK5-d2nWU"
                        },
                        "ID_830": {
                            "title": "Rainbow Road",
                            "link": "https://youtu.be/rrx0XWPOplM"
                        },
                        "ID_831": {
                            "title": "Top Results",
                            "link": "https://youtu.be/_f1iv3qZJOs"
                        },
                        "ID_832": {
                            "title": "Wi-Fi Menu",
                            "link": "https://youtu.be/FT5EMBGKdhY"
                        }
                    }
                },
                "Mario Kart 64": {
                    "gameName": "Mario Kart 64",
                    "answers": ["mario kart 64", "mk 64", "breath of the wild", "loz ww", "the wind waker", "zelda wind waker", "zelda ww"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_833": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/s3ZZ-RXLgxU"
                        },
                        "ID_834": {
                            "title": "Setup and Kart Select",
                            "link": "https://youtu.be/Z3IsodCVEOc"
                        },
                        "ID_1178": {
                            "title": "Raceways",
                            "link": "https://youtu.be/IfLfUWBuygY"
                        },
                        "ID_1179": {
                            "title": "Moo Moo Farm",
                            "link": "https://youtu.be/O9DDMYif4eQ"
                        },
                        "ID_1180": {
                            "title": "Koopa Troopa Beach",
                            "link": "https://youtu.be/fwxnNZql554"
                        },
                        "ID_1181": {
                            "title": "Toad's Turnpike",
                            "link": "https://youtu.be/r1VFMRCY5aE"
                        },
                        "ID_1182": {
                            "title": "Frappe Snowland",
                            "link": "https://youtu.be/HW9WHjictHc"
                        },
                        "ID_1183": {
                            "title": "Choco Mountain",
                            "link": "https://youtu.be/N4FZgWjBas0"
                        },
                        "ID_1184": {
                            "title": "DK's Jungle Park",
                            "link": "https://youtu.be/mivjTMo6AcI"
                        },
                        "ID_1185": {
                            "title": "Rainbow Road",
                            "link": "https://youtu.be/shvbqQ-1vww"
                        },
                        "ID_1186": {
                            "title": "Winning Results",
                            "link": "https://youtu.be/a9SPWok6CuY"
                        },
                        "ID_1187": {
                            "title": "Rainbow Road",
                            "link": "https://youtu.be/w6mWWDkCLF4"
                        }
                    }
                },
                "Super Mario Kart": {
                    "gameName": "Super Mario Kart",
                    "answers": ["super mario kart", "smk", "mk64", "leg of zeg", "zelda botw", "loz botw"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1188": {
                            "title": "Mario Circuit",
                            "link": "https://youtu.be/0cWb4DN44WU"
                        },
                        "ID_1189": {
                            "title": "Koopa Beach",
                            "link": "https://youtu.be/VWwGKT5jU-4"
                        },
                        "ID_1191": {
                            "title": "Bowser's Castle",
                            "link": "https://youtu.be/7NMQUBOXu1g"
                        },
                        "ID_1192": {
                            "title": "Rainbow Road",
                            "link": "https://youtu.be/K03ATBNi3Vw"
                        }
                    }
                },
                "Mario Kart DS": {
                    "gameName": "Mario Kart DS",
                    "answers": ["mario kart ds", "mk ds", "mario kart snes"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1193": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/x4OIAKCsOQk"
                        },
                        "ID_1194": {
                            "title": "Yoshi Falls",
                            "link": "https://youtu.be/AHT5mZBNDZQ"
                        },
                        "ID_1195": {
                            "title": "Cheep Cheep Beach",
                            "link": "https://youtu.be/BGHdNU952kc"
                        },
                        "ID_1196": {
                            "title": "Luigi's Mansion",
                            "link": "https://youtu.be/XrFmsYIkiCA"
                        },
                        "ID_1197": {
                            "title": "Delfino Square",
                            "link": "https://youtu.be/gjMVjCsv_iU"
                        },
                        "ID_1198": {
                            "title": "Waluigi Pinball",
                            "link": "https://youtu.be/FT6PZUTdd04"
                        },
                        "ID_1199": {
                            "title": "Peach Gardens",
                            "link": "https://youtu.be/ko5Ea635M7U"
                        },
                        "ID_1200": {
                            "title": "Rainbow Road",
                            "link": "https://youtu.be/Zn9VjMEh9CM"
                        }
                    }
                },
                "Mario Kart: Double Dash!!": {
                    "gameName": "Mario Kart: Double Dash!!",
                    "answers": ["mario kart: double dash!!", "mk dd"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1201": {
                            "title": "Circuit Theme",
                            "link": "https://youtu.be/FKC5EfjgyT8"
                        },
                        "ID_1202": {
                            "title": "Baby Park",
                            "link": "https://youtu.be/y99wX-JZGJo"
                        },
                        "ID_1203": {
                            "title": "Waluigi Stadium & Wario Colosseum",
                            "link": "https://youtu.be/vMyFkraDzyY"
                        },
                        "ID_1204": {
                            "title": "DK Mountain & Dino Dino Jungle",
                            "link": "https://youtu.be/PbU6CCGhmeU"
                        },
                        "ID_1205": {
                            "title": "Rainbow Road",
                            "link": "https://youtu.be/FHdEjH_7YY8"
                        }
                    }
                },
                "Mario Kart 7": {
                    "gameName": "Mario Kart 7",
                    "answers": ["mario kart 7", "mk 7", "double dash", "mkds"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1206": {
                            "title": "Wuhu Loop",
                            "link": "https://youtu.be/A0b3JraEY-k"
                        },
                        "ID_1207": {
                            "title": "Rainbow Road",
                            "link": "https://youtu.be/FhWplirtLnQ"
                        },
                        "ID_1208": {
                            "title": "Rainbow Road (Moon)",
                            "link": "https://youtu.be/5gLkMsKu4-8"
                        }
                    }
                },
                "Mario Kart 8": {
                    "gameName": "Mario Kart 8",
                    "answers": ["mario kart 8", "mk 8", "mk7", "mkdd"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1209": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/OUkM4Kycj8c"
                        },
                        "ID_1210": {
                            "title": "Mario Kart Stadium",
                            "link": "https://youtu.be/LmmDXnnaWC4"
                        },
                        "ID_1211": {
                            "title": "Mario Circuit",
                            "link": "https://youtu.be/UO88SxpZiWY"
                        },
                        "ID_1212": {
                            "title": "Toad Harbor",
                            "link": "https://youtu.be/m3ALip0VUHQ"
                        },
                        "ID_1213": {
                            "title": "Sunshine Airport",
                            "link": "https://youtu.be/XBq7gHHioS4"
                        },
                        "ID_1214": {
                            "title": "Dolphin Shoals",
                            "link": "https://youtu.be/-ytaJRn0RSU"
                        },
                        "ID_1215": {
                            "title": "Electrodome",
                            "link": "https://youtu.be/xkfpgWvpBMg"
                        },
                        "ID_1216": {
                            "title": "Mount Wario",
                            "link": "https://youtu.be/OcMjtg8J6hc"
                        },
                        "ID_1217": {
                            "title": "Rainbow Road",
                            "link": "https://youtu.be/s7pe0VrcZXQ"
                        },
                        "ID_1218": {
                            "title": "Mute City",
                            "link": "https://youtu.be/PcpNJcVJ11k"
                        },
                        "ID_1219": {
                            "title": "Hyrule Circuit",
                            "link": "https://youtu.be/o6tKCjFYXDM"
                        },
                        "ID_1220": {
                            "title": "Staff Roll",
                            "link": "https://youtu.be/Ob708MC9O6Q"
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
                        "ID_1221": {
                            "title": "Winner",
                            "link": "https://youtu.be/NhEH0aZAyCo"
                        },
                        "ID_1222": {
                            "title": "Wide, Wide Ocean",
                            "link": "https://youtu.be/-UsOr5_PTBY"
                        },
                        "ID_787": {
                            "title": "Where Have The Stars Gone?",
                            "link": "https://youtu.be/rH9Otxf-G8c"
                        },
                        "ID_788": {
                            "title": "Tropical Island (Yoshi's Board)",
                            "link": "https://youtu.be/vHcMArHUYK4"
                        },
                        "ID_789": {
                            "title": "The Stolen Star",
                            "link": "https://youtu.be/9tZkxgEXpfE"
                        },
                        "ID_790": {
                            "title": "The Room Underground",
                            "link": "https://youtu.be/wPz59NlIZKs"
                        },
                        "ID_791": {
                            "title": "Slowly, Slowly",
                            "link": "https://youtu.be/AdhmG8Rppzw"
                        },
                        "ID_792": {
                            "title": "Saving Courage",
                            "link": "https://youtu.be/w_GOrEYkirg"
                        },
                        "ID_793": {
                            "title": "Results",
                            "link": "https://youtu.be/_bPtlScYnXI"
                        },
                        "ID_794": {
                            "title": "Rainbow Castle (Mario's Board)",
                            "link": "https://youtu.be/n47B16L6qo4"
                        },
                        "ID_795": {
                            "title": "Play A Mini-Game",
                            "link": "https://youtu.be/TGrWq6CvD04"
                        },
                        "ID_796": {
                            "title": "Peaceful Mushroom Village",
                            "link": "https://youtu.be/LLnbcbZMFuA"
                        },
                        "ID_797": {
                            "title": "Outcome of Adventure",
                            "link": "https://youtu.be/GI3zJ-dx010"
                        },
                        "ID_798": {
                            "title": "Option House Theme",
                            "link": "https://youtu.be/iS3zWtJWNt0"
                        },
                        "ID_799": {
                            "title": "Move To The Mambo!",
                            "link": "https://youtu.be/xB4m21mAyEQ"
                        },
                        "ID_800": {
                            "title": "Koopa Troopa's Theme",
                            "link": "https://youtu.be/7QDDhH8J1HE"
                        },
                        "ID_801": {
                            "title": "Hit or Miss Chance Game",
                            "link": "https://youtu.be/tIQ_qI871Ss"
                        },
                        "ID_802": {
                            "title": "Mario Party Theme",
                            "link": "https://youtu.be/9zcXQEjiZtc"
                        },
                        "ID_803": {
                            "title": "Let's Limbo!",
                            "link": "https://youtu.be/iQavbF9CCvI"
                        },
                        "ID_804": {
                            "title": "Let's Go Lightly",
                            "link": "https://youtu.be/iLClxxM0GSY"
                        },
                        "ID_805": {
                            "title": "Full of Danger",
                            "link": "https://youtu.be/F1N86WNDMbM"
                        },
                        "ID_806": {
                            "title": "Faster Than All",
                            "link": "https://youtu.be/TUkcoptWXDU"
                        },
                        "ID_807": {
                            "title": "Everyone's A SuperStar!",
                            "link": "https://youtu.be/zN2HJDDcKe0"
                        },
                        "ID_808": {
                            "title": "Engine Room (Luigi's Board)",
                            "link": "https://youtu.be/FfkCR4hZTro"
                        },
                        "ID_809": {
                            "title": "Ducking and Dodging (Mini-Game)",
                            "link": "https://youtu.be/gWPcaB5puKU"
                        },
                        "ID_810": {
                            "title": "Dodging Danger",
                            "link": "https://youtu.be/qM3NTI48jW8"
                        },
                        "ID_811": {
                            "title": "Coins of the World",
                            "link": "https://youtu.be/Bshe0RYNCgg"
                        },
                        "ID_812": {
                            "title": "Can It Be Done",
                            "link": "https://youtu.be/tzP6DiVqhLw"
                        },
                        "ID_813": {
                            "title": "Bowser's Theme",
                            "link": "https://youtu.be/o8rZ3IZuQf0"
                        },
                        "ID_814": {
                            "title": "Board Map (Overview)",
                            "link": "https://youtu.be/bn_7SUcQHnY"
                        },
                        "ID_815": {
                            "title": "Birthday Cake (Peach's Board)",
                            "link": "https://youtu.be/tFvIhW4ZNP0"
                        },
                        "ID_816": {
                            "title": "After The Victory",
                            "link": "https://youtu.be/IOmclZ-hv7g"
                        },
                        "ID_817": {
                            "title": "Battle Canyon (Wario's Board)",
                            "link": "https://youtu.be/VRlJXOVNzKs"
                        },
                        "ID_818": {
                            "title": "Adventure Begins",
                            "link": "https://youtu.be/otSddH7CSZg"
                        },
                        "ID_819": {
                            "title": "Mini-Game Island (All-In-One)",
                            "link": "https://youtu.be/4Swlo3DQPWA"
                        }
                    }
                }
            }
        },
        "Mega Man": {
            "seriesName": "Mega Man",
            "seriesColor": "red",
            "game": {
                "Mega Man": {
                    "gameName": "Mega Man",
                    "answers": ["mega man", "mega man 1", "", "ff10", "ff 10", "final fantasy 10"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_820": {
                            "title": "Select Screen",
                            "link": "https://youtu.be/8nHAde9X_D4"
                        },
                        "ID_821": {
                            "title": "Cut Man Stage",
                            "link": "https://youtu.be/GsXEqfDL40k"
                        },
                        "ID_1324": {
                            "title": "Elec Man Stage",
                            "link": "https://youtu.be/CJdFxTOysjo"
                        },
                        "ID_1325": {
                            "title": "Guts Man Stage",
                            "link": "https://youtu.be/m2jq2YCxAuE"
                        },
                        "ID_1326": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/5WduvI0CZ4c"
                        },
                        "ID_1327": {
                            "title": "Wily Battle",
                            "link": "https://youtu.be/ojWBRzs8-ts"
                        },
                        "ID_1328": {
                            "title": "Ending Theme",
                            "link": "https://youtu.be/9LmdO3TCzpM"
                        }
                    }
                },
                "Mega Man 2": {
                    "gameName": "Mega Man 2",
                    "answers": ["mega man 2", "megaman 2", "megaman"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1329": {
                            "title": "Opening",
                            "link": "https://youtu.be/CL02gX8hSTk"
                        },
                        "ID_1330": {
                            "title": "Title",
                            "link": "https://youtu.be/vFdby6ljawk"
                        },
                        "ID_1331": {
                            "title": "Menu Screen",
                            "link": "https://youtu.be/K_1IgParl80"
                        },
                        "ID_1332": {
                            "title": "Select Screen",
                            "link": "https://youtu.be/SZUI_QQjxRc"
                        },
                        "ID_1333": {
                            "title": "Metal Man Stage",
                            "link": "https://youtu.be/uQXA9RkC_-c"
                        },
                        "ID_1334": {
                            "title": "Air Man Stage",
                            "link": "https://youtu.be/IhK4D3ytYMc"
                        },
                        "ID_1335": {
                            "title": "Bubble Man Stage",
                            "link": "https://youtu.be/FEULEvmq7yE"
                        },
                        "ID_1336": {
                            "title": "Quick Man Stage",
                            "link": "https://youtu.be/FRa4LHSJf_M"
                        },
                        "ID_1337": {
                            "title": "Crash Man Stage",
                            "link": "https://youtu.be/7oO7QC32Wfs"
                        },
                        "ID_1338": {
                            "title": "Flash Man Stage",
                            "link": "https://youtu.be/26MopY4DTZU"
                        },
                        "ID_1339": {
                            "title": "Heat Man Stage",
                            "link": "https://youtu.be/2OJphbcA9SY"
                        },
                        "ID_1340": {
                            "title": "Wood Man Stage",
                            "link": "https://youtu.be/WvAAOmoEftg"
                        },
                        "ID_1341": {
                            "title": "Wily Fortress 1",
                            "link": "https://youtu.be/aTbfpkByIM8"
                        },
                        "ID_1342": {
                            "title": "Wily Fortress 2",
                            "link": "https://youtu.be/tgY2Sf5vitQ"
                        },
                        "ID_1343": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/GPVDroHSUic"
                        }
                    }
                },
                "Mega Man 3": {
                    "gameName": "Mega Man 3",
                    "answers": ["mega man 3", "megaman 3"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1344": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/U2kTeh7FNl0"
                        },
                        "ID_1345": {
                            "title": "Select Screen",
                            "link": "https://youtu.be/Xix6u4HyGPo"
                        },
                        "ID_1346": {
                            "title": "Gemini Man Stage",
                            "link": "https://youtu.be/J2LF3YR2dNM"
                        },
                        "ID_1347": {
                            "title": "Needle Man Stage",
                            "link": "https://youtu.be/wDJbOB1h2EU"
                        },
                        "ID_1348": {
                            "title": "Shadow Man Stage",
                            "link": "https://youtu.be/Usl7cw6VnLU"
                        },
                        "ID_1349": {
                            "title": "Snake Man Stage",
                            "link": "https://youtu.be/ZqGLXispP08"
                        },
                        "ID_1350": {
                            "title": "Spark Man Stage",
                            "link": "https://youtu.be/6J5cN87c2yM"
                        },
                        "ID_1351": {
                            "title": "Top Man Stage",
                            "link": "https://youtu.be/4dgtHw-uAxY"
                        },
                        "ID_1352": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/y3t6peqsorE"
                        },
                        "ID_1353": {
                            "title": "Wily Fortress 1",
                            "link": "https://youtu.be/sfOE4rJnYYc"
                        },
                        "ID_1354": {
                            "title": "Proto Man Theme",
                            "link": "https://youtu.be/MIDkiPAqhhk"
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
                        "ID_1355": {
                            "title": "Rules of Nature (Platinum Mix)",
                            "link": "https://youtu.be/_vfkzMAWWKE"
                        },
                        "ID_1356": {
                            "title": "The Only Thing I Know for Real (Maniac Agenda Mix)",
                            "link": "https://youtu.be/ZDupR9FXwCU"
                        },
                        "ID_866": {
                            "title": "Dark Skies (Platinum Mix)",
                            "link": "https://youtu.be/R7UVSupZ2ks"
                        },
                        "ID_867": {
                            "title": "I'm My Own Master Now (Platinum Mix)",
                            "link": "https://youtu.be/EPDDkrDpZhU"
                        },
                        "ID_868": {
                            "title": "A Stranger I Remain (Maniac Agenda Mix)",
                            "link": "https://youtu.be/QTnuw77_vzw"
                        },
                        "ID_869": {
                            "title": "Return to Ashes (Platinum Mix)",
                            "link": "https://youtu.be/1Bi6IGYRptY"
                        },
                        "ID_870": {
                            "title": "The Stains of Time (Maniac Agenda Mix)",
                            "link": "https://youtu.be/PEXB_Ewjmsk"
                        },
                        "ID_871": {
                            "title": "Red Sun (Maniac Agenda Mix)",
                            "link": "https://youtu.be/-PA9HmD42DE"
                        },
                        "ID_872": {
                            "title": "A Soul Can't Be Cut (Platinum Mix)",
                            "link": "https://youtu.be/jHYA0yVMjYw"
                        },
                        "ID_873": {
                            "title": "Collective Consciousness (Maniac Agenda Mix)",
                            "link": "https://youtu.be/ZYnDsr8z4iU"
                        },
                        "ID_874": {
                            "title": "It Has to Be This Way (Platinum Mix)",
                            "link": "https://youtu.be/fxq_B2KPQDY"
                        },
                        "ID_875": {
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
                        "ID_876": {
                            "title": "Metal Gear Solid Main Theme",
                            "link": "https://youtu.be/tAKi13Gb7es"
                        },
                        "ID_877": {
                            "title": "Cavern",
                            "link": "https://youtu.be/11uCccWmz0M"
                        },
                        "ID_878": {
                            "title": "Encounter",
                            "link": "https://youtu.be/n1fWzyDVesc"
                        },
                        "ID_879": {
                            "title": "Duel",
                            "link": "https://youtu.be/hnp_JgJSLoc"
                        },
                        "ID_880": {
                            "title": "Enclosure",
                            "link": "https://youtu.be/R7twkqY852I"
                        },
                        "ID_881": {
                            "title": "Escape",
                            "link": "https://youtu.be/LqZVNzNc23w"
                        },
                        "ID_882": {
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
                        "ID_883": {
                            "title": "Title",
                            "link": "https://youtu.be/gAQMtSM0zRk"
                        },
                        "ID_884": {
                            "title": "Caught Red Handed",
                            "link": "https://youtu.be/RCkoI4PGZNk"
                        },
                        "ID_843": {
                            "title": "Love You Love You Love",
                            "link": "https://youtu.be/eRyR27l7vks"
                        },
                        "ID_844": {
                            "title": "Jive Bot",
                            "link": "https://youtu.be/8-ngX7IWlUs"
                        },
                        "ID_845": {
                            "title": "Whoa I'm In Space Cuba",
                            "link": "https://youtu.be/anw6cFmR9hM"
                        },
                        "ID_846": {
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
                        "ID_847": {
                            "title": "Title",
                            "link": "https://youtu.be/Ia33wFGsHbg"
                        },
                        "ID_848": {
                            "title": "Exothermic",
                            "link": "https://youtu.be/QPJUzunUJVc"
                        },
                        "ID_849": {
                            "title": "Tally Screen",
                            "link": "https://youtu.be/_shWlfgnzZw"
                        },
                        "ID_850": {
                            "title": "Final Boss",
                            "link": "https://youtu.be/fMJzywHs0ls"
                        },
                        "ID_851": {
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
                        "ID_852": {
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
                        "ID_853": {
                            "title": "Battle Against an Otherworldly Foe",
                            "link": "https://youtu.be/BChh_cBLij0"
                        },
                        "ID_934": {
                            "title": "Buy Somethin' Will Ya!",
                            "link": "https://youtu.be/xIt4u-VdAP4"
                        },
                        "ID_1074": {
                            "title": "Battle Against a Weak Opponent",
                            "link": "https://youtu.be/AOSMoEKox8g"
                        },
                        "ID_1075": {
                            "title": "Sanctuary Guardian",
                            "link": "https://youtu.be/dmEvNtjD9OE"
                        },
                        "ID_1076": {
                            "title": "New Age Retro Hippie",
                            "link": "https://youtu.be/b1impjQvhvk"
                        },
                        "ID_1077": {
                            "title": "Onett",
                            "link": "https://youtu.be/6ppBSY92rzg"
                        },
                        "ID_1078": {
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
                        "ID_1079": {
                            "title": "Bein' Friends",
                            "link": "https://youtu.be/h-uNMPU6GtA"
                        }
                    }
                }
            }
        },
        "Papers, Please": {
            "seriesName": "Papers, Please",
            "seriesColor": "red",
            "game": {
                "Papers, Please": {
                    "gameName": "Papers, Please",
                    "answers": ["papers, please", "papers please", "va11 halla"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1080": {
                            "title": "Papers, Please",
                            "link": "https://youtu.be/OBQE_TNI7zw"
                        }
                    }
                }
            }
        },
        "Perfect Dark": {
            "seriesName": "Perfect Dark",
            "seriesColor": "red",
            "game": {
                "Perfect Dark": {
                    "gameName": "Perfect Dark",
                    "answers": ["perfect dark"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1081": {
                            "title": "Datadyne Central Defection",
                            "link": "https://youtu.be/ZLDJhm4Arzk"
                        },
                        "ID_1315": {
                            "title": "Datadyne Central Extraction",
                            "link": "https://youtu.be/whjfd7pqaTo"
                        },
                        "ID_1087": {
                            "title": "Chicago Stealth",
                            "link": "https://youtu.be/UV3RC2sDwQs"
                        },
                        "ID_1088": {
                            "title": "Area 51 Infiltration",
                            "link": "https://youtu.be/xKF1__kloY8"
                        },
                        "ID_1089": {
                            "title": "Carrington Institute",
                            "link": "https://youtu.be/6kLZP5LpAf8"
                        },
                        "ID_1090": {
                            "title": "Combat Simulator",
                            "link": "https://youtu.be/PJXrHu5O-08"
                        },
                        "ID_1091": {
                            "title": "Credits",
                            "link": "https://youtu.be/zvHrea_qQuA"
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
                    "answers": ["persona 5", "persona 5 royal", "persona 5 royal", "p5", "p5r", "persona 5 the royal"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1092": {
                            "title": "Wake Up, Get Up, Get Out There",
                            "link": "https://youtu.be/SmQ1ZXTHNKA"
                        },
                        "ID_1093": {
                            "title": "Phantom",
                            "link": "https://youtu.be/qI_g-fGLT7c"
                        },
                        "ID_706": {
                            "title": "Life Will Change",
                            "link": "https://youtu.be/r47XMimB2sw"
                        },
                        "ID_707": {
                            "title": "Interrogation Room",
                            "link": "https://youtu.be/8dgEOYcxSYU"
                        },
                        "ID_708": {
                            "title": "The Poem of Everyone’s Souls",
                            "link": "https://youtu.be/0y7isajW_r8"
                        },
                        "ID_709": {
                            "title": "Awakening",
                            "link": "https://youtu.be/ERJcBO_Yn7U"
                        },
                        "ID_710": {
                            "title": "Will Power",
                            "link": "https://youtu.be/KfeLWYThNAk"
                        },
                        "ID_711": {
                            "title": "King, Queen and Slave",
                            "link": "https://youtu.be/jSvDbFcSfvs"
                        },
                        "ID_712": {
                            "title": "Last Surprise",
                            "link": "https://youtu.be/qOp4TZeZ8mY"
                        },
                        "ID_713": {
                            "title": "Victory",
                            "link": "https://youtu.be/qMrqZuI-PuQ"
                        },
                        "ID_714": {
                            "title": "Layer Cake",
                            "link": "https://youtu.be/TFJxgfPYiMI"
                        },
                        "ID_715": {
                            "title": "Blooming Villain",
                            "link": "https://youtu.be/E8l57E8OKdI"
                        },
                        "ID_716": {
                            "title": "Beneath the Mask",
                            "link": "https://youtu.be/0-R0jxIxvh8"
                        },
                        "ID_717": {
                            "title": "Tokyo Daylight",
                            "link": "https://youtu.be/gyHTjoSI5qc"
                        },
                        "ID_718": {
                            "title": "Butterfly Kiss",
                            "link": "https://youtu.be/fTM2j1LWUa4"
                        },
                        "ID_719": {
                            "title": "Mementos",
                            "link": "https://youtu.be/e_57t7Z3ocQ"
                        },
                        "ID_720": {
                            "title": "Price",
                            "link": "https://youtu.be/bwpMx6BOJ78"
                        },
                        "ID_721": {
                            "title": "Price Another Version",
                            "link": "https://youtu.be/YZ7GYjJ5gT4"
                        },
                        "ID_722": {
                            "title": "Keeper of Lust",
                            "link": "https://youtu.be/tRag8osHZJs"
                        },
                        "ID_723": {
                            "title": "The Days When My Mother Was There",
                            "link": "https://youtu.be/jQXsCphBpw8"
                        },
                        "ID_724": {
                            "title": "New Beginning",
                            "link": "https://youtu.be/VZ-ylzqehKo"
                        },
                        "ID_725": {
                            "title": "Hawaii",
                            "link": "https://youtu.be/5Fxb6RjRF1o"
                        },
                        "ID_726": {
                            "title": "Break it Down Elp Version",
                            "link": "https://youtu.be/zGxXoeexhnM"
                        },
                        "ID_727": {
                            "title": "Sweatshop",
                            "link": "https://youtu.be/_VWV7ffGYJw"
                        },
                        "ID_728": {
                            "title": "The Whims of Fate",
                            "link": "https://youtu.be/58p--cGb8Rw"
                        },
                        "ID_729": {
                            "title": "Rivers In the Desert",
                            "link": "https://youtu.be/pwagDounDbM"
                        },
                        "ID_730": {
                            "title": "Jaldabaoth",
                            "link": "https://youtu.be/HawzmsbBC34"
                        },
                        "ID_731": {
                            "title": "Swear to My Bones",
                            "link": "https://youtu.be/5dUT-1zBuaA"
                        }
                    }
                },
                "Persona 5 Royal": {
                    "gameName": "Persona 5 Royal",
                    "answers": ["persona 5 royal", "persona 5 r", "p5r"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_732": {
                            "title": "Royal Days",
                            "link": "https://youtu.be/f8EzwCzII5s"
                        },
                        "ID_733": {
                            "title": "Take Over",
                            "link": "https://youtu.be/JhEL_OQfz2w"
                        },
                        "ID_734": {
                            "title": "No More What Ifs",
                            "link": "https://youtu.be/kCbU6HY8DOU"
                        },
                        "ID_735": {
                            "title": "Gentle Madman",
                            "link": "https://youtu.be/JaT0BNd7ymk"
                        },
                        "ID_736": {
                            "title": "Throw Away Your Mask",
                            "link": "https://youtu.be/94uGn2L_eXE"
                        }
                    }
                },
                "Persona 4 Dancing All Night": {
                    "gameName": "Persona 4 Dancing All Night",
                    "answers": ["persona 4 dancing all night", "persona 4 dancing", "p4d"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_737": {
                            "title": "Dance!",
                            "link": "https://youtu.be/hCpCsZCwDfs"
                        },
                        "ID_738": {
                            "title": "Pursuing My True Self - Kozuka Remix",
                            "link": "https://youtu.be/LCi2b6ZIghU"
                        },
                        "ID_739": {
                            "title": "Junes Theme - Vocal Version",
                            "link": "https://youtu.be/naFdddnyNFo"
                        },
                        "ID_740": {
                            "title": "Heartbeat, Heartbreak - Towa Tei Remix",
                            "link": "https://youtu.be/6dRNyLa3zF4"
                        },
                        "ID_741": {
                            "title": "Your Affection - Daisuke Asakura Remix",
                            "link": "https://youtu.be/WO7P3Vamwmk"
                        },
                        "ID_742": {
                            "title": "Dance Hymn of the Soul (Disco in Velvet Room)",
                            "link": "https://youtu.be/dO__cEi0ZUg"
                        }
                    }
                },
                "Persona 3 Portable": {
                    "gameName": "Persona 3 Portable",
                    "answers": ["persona 3 portable", "p3 p", "persona 3 portable", "p3 portable", "persona 3 p", "p3 psp", "persona 3 psp"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_743": {
                            "title": "Soul Phase",
                            "link": "https://youtu.be/SjNYJGHB2Ss"
                        },
                        "ID_744": {
                            "title": "A Way of Life",
                            "link": "https://youtu.be/Fd6MW-XhO5I"
                        },
                        "ID_745": {
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
                        "ID_746": {
                            "title": "Brand New days -The Beginning-",
                            "link": "https://youtu.be/HmTLEeM8A4Y"
                        },
                        "ID_747": {
                            "title": "Heartful Cry",
                            "link": "https://youtu.be/C3emFUXbC5U"
                        },
                        "ID_748": {
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
                        "ID_749": {
                            "title": "Burn My Dread",
                            "link": "https://youtu.be/AcCoPQE6g10"
                        },
                        "ID_750": {
                            "title": "Unavoidable Battle",
                            "link": "https://youtu.be/sqbsVjwXo3o"
                        },
                        "ID_751": {
                            "title": "When The Moon's Reaching Out Stars",
                            "link": "https://youtu.be/-kRJUKA_dFw"
                        },
                        "ID_752": {
                            "title": "Iwatodai Station",
                            "link": "https://youtu.be/egKF1UvMcZA"
                        },
                        "ID_753": {
                            "title": "Mass Destruction",
                            "link": "https://youtu.be/BjQHhDTbPCA"
                        },
                        "ID_754": {
                            "title": "Joy",
                            "link": "https://youtu.be/y7nIywla0DU"
                        },
                        "ID_755": {
                            "title": "Living With Determination",
                            "link": "https://youtu.be/oYuzXkDRRXE"
                        },
                        "ID_756": {
                            "title": "The Battle for Everyone's Souls",
                            "link": "https://youtu.be/DwzOrmQ43MQ"
                        },
                        "ID_757": {
                            "title": "Burn My Dread -Last Battle-",
                            "link": "https://youtu.be/-chq2BWWMhA"
                        },
                        "ID_758": {
                            "title": "Memories of You",
                            "link": "https://youtu.be/JiKMzXwOH-E"
                        }
                    }
                },
                "Persona 4": {
                    "gameName": "Persona 4",
                    "answers": ["persona 4", "p4", "p4g"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_759": {
                            "title": "Backside of The TV",
                            "link": "https://youtu.be/3_cp4g7YGic"
                        },
                        "ID_760": {
                            "title": "I'll Face Myself",
                            "link": "https://youtu.be/OtIxJwEZ-DY"
                        },
                        "ID_1045": {
                            "title": "Sauna",
                            "link": "https://youtu.be/B0uHhmSIjtY"
                        },
                        "ID_1046": {
                            "title": "Reach Out to the Truth",
                            "link": "https://youtu.be/Vd_PuNxt5Jg"
                        },
                        "ID_1047": {
                            "title": "Specialist",
                            "link": "https://youtu.be/4iPABiSH0Zg"
                        },
                        "ID_1048": {
                            "title": "Heartbeat, Heartbreak",
                            "link": "https://youtu.be/YzS9fxRFuNQ"
                        },
                        "ID_1049": {
                            "title": "New World Fool",
                            "link": "https://youtu.be/wbuMkOryqY8"
                        },
                        "ID_1050": {
                            "title": "The Fog",
                            "link": "https://youtu.be/GpVOjYty8kk"
                        },
                        "ID_1051": {
                            "title": "Junes Theme",
                            "link": "https://youtu.be/MJaLQhEObXY"
                        },
                        "ID_1052": {
                            "title": "Secret Base",
                            "link": "https://youtu.be/tVVk0LEUGmw"
                        },
                        "ID_1053": {
                            "title": "Heaven",
                            "link": "https://youtu.be/zQ7H4tZa8-k"
                        },
                        "ID_1054": {
                            "title": "Long Way",
                            "link": "https://youtu.be/IOgWP625RRE"
                        },
                        "ID_1055": {
                            "title": "Electronica in The Velvet Room",
                            "link": "https://youtu.be/UrjeZHsgxqg"
                        }
                    }
                },
                "Persona 4 Golden": {
                    "gameName": "Persona 4 Golden",
                    "answers": ["persona 4 golden", "p4g", "", "persona 4 golden"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1056": {
                            "title": "Time to Make History",
                            "link": "https://youtu.be/D8AGET-XQOA"
                        }
                    }
                },
                "Persona 4 Golden The Animation": {
                    "gameName": "Persona 4 Golden The Animation",
                    "answers": ["persona 4 golden the animation", "p4a", "p4 anime"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1057": {
                            "title": "Ying Yang",
                            "link": "https://youtu.be/OIsrm7ZFH1U"
                        }
                    }
                },
                "Persona Q2: New Cinema Labyrinth": {
                    "gameName": "Persona Q2: New Cinema Labyrinth",
                    "answers": ["persona q2: new cinema labyrinth", "pq2", "new cinema labyrinth", "p4", "p4g"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1058": {
                            "title": "Road Less Taken",
                            "link": "https://youtu.be/lGS9flfg8Vg"
                        },
                        "ID_1059": {
                            "title": "Pull the Trigger",
                            "link": "https://youtu.be/n5O_jq1CSv0"
                        }
                    }
                },
                "Persona 4 Arena": {
                    "gameName": "Persona 4 Arena",
                    "answers": ["persona 4 arena", "p4a", "p4 arena", "persona q2", "persona q2 new cinema labyrinth"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1065": {
                            "title": "Reach Out to the Truth",
                            "link": "https://youtu.be/xZ9ZAB3Jfr4"
                        }
                    }
                },
                "Persona 4 Arena Ultimax": {
                    "gameName": "Persona 4 Arena Ultimax",
                    "answers": ["persona 4 arena ultimax", "p4au", "", "p4au", "p4au", "persona 4 arena ultimax"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1066": {
                            "title": "Break out of...",
                            "link": "https://youtu.be/PM5L9Zyk3UQ"
                        },
                        "ID_1067": {
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
                    "answers": ["pes 5", "pes5", "pro evolution soccer 5"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1068": {
                            "title": "Main Menu Music (Spiral 2005)",
                            "link": "https://youtu.be/k6rPnOVVPjw"
                        },
                        "ID_1069": {
                            "title": "Formation Screen",
                            "link": "https://youtu.be/4gHa8Lq3kyc"
                        },
                        "ID_703": {
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
                    "answers": ["pokemon colosseum", "colosseum"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_704": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/yQKUxSKSZ88"
                        },
                        "ID_705": {
                            "title": "Main Menu",
                            "link": "https://youtu.be/QimoJx4lbNY"
                        },
                        "ID_761": {
                            "title": "Friendly Battle",
                            "link": "https://youtu.be/JkSeSjwppw4"
                        },
                        "ID_762": {
                            "title": "Normal Battle",
                            "link": "https://youtu.be/qrfhwpdjbPQ"
                        },
                        "ID_763": {
                            "title": "Phenac City",
                            "link": "https://youtu.be/BoBZqp25Dvs"
                        },
                        "ID_764": {
                            "title": "Pokemon Center",
                            "link": "https://youtu.be/UAdKWm-aMyE"
                        },
                        "ID_765": {
                            "title": "Snagem Hideout",
                            "link": "https://youtu.be/GMZCGEPIKvo"
                        },
                        "ID_766": {
                            "title": "Cipher Syndicate",
                            "link": "https://youtu.be/LnVPiA1zC4o"
                        },
                        "ID_767": {
                            "title": "Miror B.'s Retro Groove",
                            "link": "https://youtu.be/X67YWv5C6qQ"
                        },
                        "ID_768": {
                            "title": "Cipher Peon Battle",
                            "link": "https://youtu.be/0U5f_XivxDk"
                        },
                        "ID_769": {
                            "title": "Pyrite Town",
                            "link": "https://youtu.be/_QR-cfd6hCs"
                        },
                        "ID_770": {
                            "title": "Pyrite Building",
                            "link": "https://youtu.be/J8NBYomZ9MY"
                        },
                        "ID_771": {
                            "title": "Cipher Admin Battle",
                            "link": "https://youtu.be/5QvMqYZTR5Y"
                        },
                        "ID_772": {
                            "title": "Mirakle B. Imitation Groove",
                            "link": "https://youtu.be/8ZoqGBFdWf8"
                        },
                        "ID_773": {
                            "title": "Agate Village",
                            "link": "https://youtu.be/MxvZsYOVtO0"
                        },
                        "ID_774": {
                            "title": "Relic Forest",
                            "link": "https://youtu.be/I9v1DcE7a1E"
                        },
                        "ID_775": {
                            "title": "The Under",
                            "link": "https://youtu.be/pvFFxx3k38A"
                        },
                        "ID_776": {
                            "title": "Final Battle",
                            "link": "https://youtu.be/um0pkcPFCLs"
                        },
                        "ID_777": {
                            "title": "Staff Roll (US/PAL)",
                            "link": "https://youtu.be/yO7qWWD8VIU"
                        }
                    }
                },
                "Pokemon Diamond and Pearl": {
                    "gameName": "Pokemon Diamond and Pearl",
                    "answers": ["pokemon diamond and pearl", "dppt", "pokemon diamond"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_778": {
                            "title": "Team Galactic HQ",
                            "link": "https://youtu.be/1r2j54GCiEw"
                        },
                        "ID_779": {
                            "title": "Jubilife City (Night)",
                            "link": "https://youtu.be/lAKZZYNb8YI"
                        },
                        "ID_975": {
                            "title": "Oreburgh City (Day)",
                            "link": "https://youtu.be/TYfuavaMf10"
                        },
                        "ID_976": {
                            "title": "Eterna Forest",
                            "link": "https://youtu.be/y0Fg9xtjFxk"
                        },
                        "ID_977": {
                            "title": "Eterna City (Night)",
                            "link": "https://youtu.be/QRFmXPrOf3o"
                        },
                        "ID_978": {
                            "title": "Battle Galactic Cyrus",
                            "link": "https://youtu.be/SE5dBmWml34"
                        },
                        "ID_979": {
                            "title": "Route 216 (Day)",
                            "link": "https://youtu.be/1NALkdPuHDQ"
                        },
                        "ID_980": {
                            "title": "Mt. Coronet",
                            "link": "https://youtu.be/UhmygATFpLI"
                        },
                        "ID_981": {
                            "title": "Battle! Dialga and Palkia",
                            "link": "https://youtu.be/r6c99c4HKq8"
                        },
                        "ID_982": {
                            "title": "Route 225 (Night)",
                            "link": "https://youtu.be/xJ7TRUH-vWo"
                        },
                        "ID_983": {
                            "title": "Stark Mountain",
                            "link": "https://youtu.be/Db07wCTqQoE"
                        },
                        "ID_984": {
                            "title": "Route 228 (Night)",
                            "link": "https://youtu.be/BKerdWYF1SU"
                        },
                        "ID_985": {
                            "title": "Pokemon League (Night)",
                            "link": "https://youtu.be/7dzZl8ge1z0"
                        },
                        "ID_986": {
                            "title": "Encounter! Champion Cynthia",
                            "link": "https://youtu.be/K3l2H2uIb94"
                        },
                        "ID_987": {
                            "title": "Battle! Champion Cynthia",
                            "link": "https://youtu.be/DvlHaZIrndA"
                        },
                        "ID_988": {
                            "title": "Battle! Arceus",
                            "link": "https://youtu.be/glhEem71H-E"
                        }
                    }
                },
                "Pokemon Platinum": {
                    "gameName": "Pokemon Platinum",
                    "answers": ["pokemon platinum", "dppt", "pokemon platinum", "pokemon pearl", "diamond", "pearl", "platinum", "pokemon platinum"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_989": {
                            "title": "Battle! Giratina",
                            "link": "https://youtu.be/EfFqkIsn88U"
                        },
                        "ID_990": {
                            "title": "Battle! Frontier Brain",
                            "link": "https://youtu.be/W_4nBxJY5kM"
                        }
                    }
                },
                "Pokemon HeartGold and SoulSilver": {
                    "gameName": "Pokemon HeartGold and SoulSilver",
                    "answers": ["pokemon heartgold and soulsilver", "hgss", "pokemon heartgold"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_991": {
                            "title": "Battle! Champion",
                            "link": "https://youtu.be/9t03YXkyPrg"
                        },
                        "ID_992": {
                            "title": "Battle! Entei",
                            "link": "https://youtu.be/q7bLZdr4vOY"
                        },
                        "ID_993": {
                            "title": "Battle! Gym Leader (Kanto)",
                            "link": "https://youtu.be/V7e8j-EFkdQ"
                        },
                        "ID_994": {
                            "title": "Battle! Gym Leader (Johto)",
                            "link": "https://youtu.be/1lefOgf5ST4"
                        },
                        "ID_995": {
                            "title": "Battle! Lugia",
                            "link": "https://youtu.be/l9OdbpRU87I"
                        },
                        "ID_996": {
                            "title": "Battle! Trainer (Kanto)",
                            "link": "https://youtu.be/6ikAKfWkBeY"
                        },
                        "ID_997": {
                            "title": "Goldenrod City",
                            "link": "https://youtu.be/y5c3ZdABEsg"
                        },
                        "ID_998": {
                            "title": "Ice Path",
                            "link": "https://youtu.be/ygNaSq_lOhw"
                        },
                        "ID_999": {
                            "title": "Route 47",
                            "link": "https://youtu.be/BNd6YxZKlq0"
                        },
                        "ID_1000": {
                            "title": "Sinjoh Ruins",
                            "link": "https://youtu.be/HGYcq23JeSo"
                        },
                        "ID_1001": {
                            "title": "Encounter! Team Rocket",
                            "link": "https://youtu.be/hpgDFUhOvwQ"
                        }
                    }
                },
                "Pokemon Black and White": {
                    "gameName": "Pokemon Black and White",
                    "answers": ["pokemon black and white", "bw", "pokemon black", "pokemon soulsilver", "pokemon heart gold", "pokemon soul silver", "heartgold", "soulsilver", "heart gold", "soul silver"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1002": {
                            "title": "Battle! Gym Leader",
                            "link": "https://youtu.be/Rl6A4oGpOSw"
                        },
                        "ID_1003": {
                            "title": "Skyarrow Bridge",
                            "link": "https://youtu.be/G4N8a08SVtk"
                        },
                        "ID_1004": {
                            "title": "Unwavering Emotion",
                            "link": "https://youtu.be/kaEDY2eTg-M"
                        },
                        "ID_1005": {
                            "title": "Battle! N",
                            "link": "https://youtu.be/pZCbK4G44S0"
                        },
                        "ID_1006": {
                            "title": "Crisis in Battle!",
                            "link": "https://youtu.be/Y8OTqnErCuY"
                        },
                        "ID_1007": {
                            "title": "Driftveil City",
                            "link": "https://youtu.be/FHkvQX26EA4"
                        },
                        "ID_1008": {
                            "title": "Route 6 (Winter)",
                            "link": "https://youtu.be/K0rvJ4SLcuM"
                        },
                        "ID_1009": {
                            "title": "Opelucid City (White)",
                            "link": "https://youtu.be/hEmATwp7IC8"
                        },
                        "ID_1010": {
                            "title": "Opelucid City (Black)",
                            "link": "https://youtu.be/V1zHBoRFSrM"
                        },
                        "ID_1011": {
                            "title": "Route 10",
                            "link": "https://youtu.be/kt-ZzBeDHQs"
                        },
                        "ID_1012": {
                            "title": "Battle! Elite 4",
                            "link": "https://youtu.be/W3kqLhOuzu0"
                        },
                        "ID_1013": {
                            "title": "Battle! Reshiram and Zekrom",
                            "link": "https://youtu.be/tObYNbbAIw0"
                        },
                        "ID_1014": {
                            "title": "Battle! Ghetsis",
                            "link": "https://youtu.be/ktqqE5cmE8M"
                        },
                        "ID_1015": {
                            "title": "Battle! Legendary Pokemon",
                            "link": "https://youtu.be/o20vpORCWdI"
                        },
                        "ID_1016": {
                            "title": "Black City",
                            "link": "https://youtu.be/o20vpORCWdI"
                        },
                        "ID_1017": {
                            "title": "Village Bridge",
                            "link": "https://youtu.be/LY4QQ1fuEyo"
                        }
                    }
                },
                "Pokemon Black 2 and White 2": {
                    "gameName": "Pokemon Black 2 and White 2",
                    "answers": ["pokemon black 2 and white 2", "bw2", "pokemon black 2", "pokemon white", "pokemon black 2", "pokemon white 2", "black", "white", "black 2", "white 2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1018": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/CKjnlySgqOk"
                        },
                        "ID_1019": {
                            "title": "Virkbank City",
                            "link": "https://youtu.be/6IJsv3ai89M"
                        },
                        "ID_1020": {
                            "title": "Battle! Neo Plasma",
                            "link": "https://youtu.be/-vCbwiGamBw"
                        },
                        "ID_1021": {
                            "title": "Lentimas Town",
                            "link": "https://youtu.be/ILf8Lw24N4E"
                        },
                        "ID_1022": {
                            "title": "Reversal Mountain (Black)",
                            "link": "https://youtu.be/VlQKaJLbapE"
                        },
                        "ID_1023": {
                            "title": "N's Room",
                            "link": "https://youtu.be/nmZ5pSjeQVc"
                        },
                        "ID_1024": {
                            "title": "Battle! N",
                            "link": "https://youtu.be/AiRMLJIDnXM"
                        },
                        "ID_1025": {
                            "title": "Battle! Champion Iris",
                            "link": "https://youtu.be/G1kHPeGqSw8"
                        },
                        "ID_1026": {
                            "title": "Battle! Colress",
                            "link": "https://youtu.be/2FN2EfesYR0"
                        }
                    }
                },
                "Pokemon Sword and Shield": {
                    "gameName": "Pokemon Sword and Shield",
                    "answers": ["pokemon sword and shield", "swsh", "pokemon sword", "pokemon white 2", "white 2", "black2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1027": {
                            "title": "Battle! Bede",
                            "link": "https://youtu.be/z_TPXbH7ee4"
                        },
                        "ID_1028": {
                            "title": "Battle! Gym Leader Piers",
                            "link": "https://youtu.be/EeFJRaH2Mz8"
                        },
                        "ID_1029": {
                            "title": "Motostoke",
                            "link": "https://youtu.be/KEbqVR61O3k"
                        },
                        "ID_1030": {
                            "title": "Wyndon",
                            "link": "https://youtu.be/0GmX6x4v09Y"
                        },
                        "ID_1031": {
                            "title": "Battle! Battle Tower",
                            "link": "https://youtu.be/Pvm5yDtaGiY"
                        },
                        "ID_1032": {
                            "title": "Battle! Chairman Rose",
                            "link": "https://youtu.be/ugyONbAGE8E"
                        }
                    }
                },
                "Pokemon Ultra Sun and Ultra Moon": {
                    "gameName": "Pokemon Ultra Sun and Ultra Moon",
                    "answers": ["pokemon ultra sun and ultra moon", "usum", "pokemon ultra sun", "pokemon shield", "sword", "shield"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1033": {
                            "title": "Battle! Flare Boss Lysandre",
                            "link": "https://youtu.be/IBTqAsYC7NI"
                        },
                        "ID_1034": {
                            "title": "Battle! Galactic Boss Cyrus",
                            "link": "https://youtu.be/eqjb2vEIW4I"
                        },
                        "ID_1035": {
                            "title": "Battle! Ultra Necrozma",
                            "link": "https://youtu.be/NFTemk99fLU"
                        }
                    }
                },
                "Pokemon Sun and Moon": {
                    "gameName": "Pokemon Sun and Moon",
                    "answers": ["pokemon sun and moon", "sm", "pokemon sun", "pokemon ultra moon", "ultra sun", "ultra moon"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1036": {
                            "title": "Battle! Champion Title Match",
                            "link": "https://youtu.be/-dkK9r57BNk"
                        },
                        "ID_1037": {
                            "title": "Battle! Guzma",
                            "link": "https://youtu.be/OwzjXOPbz9Q"
                        },
                        "ID_1038": {
                            "title": "Battle! Plumeria",
                            "link": "https://youtu.be/OwzjXOPbz9Q"
                        }
                    }
                },
                "Pokemon Omega Ruby and Alpha Sapphire": {
                    "gameName": "Pokemon Omega Ruby and Alpha Sapphire",
                    "answers": ["pokemon omega ruby and alpha sapphire", "oras", "pokemon omega ruby", "pokemon moon", "pokemon ultra sun", "pokemon ultra moon", "moon", "sun", "ultra sun", "ultra moon"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1039": {
                            "title": "Battle! Wally",
                            "link": "https://youtu.be/9sX_54hHcEE"
                        },
                        "ID_1040": {
                            "title": "Battle! Lorekeeper Zinnia",
                            "link": "https://youtu.be/GIn8_Q27WFY"
                        },
                        "ID_1041": {
                            "title": "Battle! Aqua and Magma Leader",
                            "link": "https://youtu.be/dA3mccI1DjY"
                        },
                        "ID_1042": {
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
                    "answers": ["portal 2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1043": {
                            "title": "Science is Fun",
                            "link": "https://youtu.be/zxb1zoj-hcM"
                        },
                        "ID_1044": {
                            "title": "The Future Starts With You",
                            "link": "https://youtu.be/GzITksXiErI"
                        },
                        "ID_855": {
                            "title": "The Friendly Faith Plate",
                            "link": "https://youtu.be/aATyrpOMsOU"
                        },
                        "ID_856": {
                            "title": "I Saw a Deer Today",
                            "link": "https://youtu.be/GCTBPlEqsUw"
                        },
                        "ID_857": {
                            "title": "Turret Wife Serenade",
                            "link": "https://youtu.be/5UNISuSde1c"
                        },
                        "ID_858": {
                            "title": "Machiavellian Bach",
                            "link": "https://youtu.be/FJMXdikWpfk"
                        },
                        "ID_859": {
                            "title": "OMG, What Has He Done?",
                            "link": "https://youtu.be/3Qgwb9KaLp0"
                        },
                        "ID_860": {
                            "title": "Cara Mia Addio",
                            "link": "https://youtu.be/hpaiZHvweJc"
                        },
                        "ID_861": {
                            "title": "Want You Gone",
                            "link": "https://youtu.be/y_hD-aVeL2k"
                        },
                        "ID_862": {
                            "title": "Robots FTW",
                            "link": "https://youtu.be/bBak9CMoXoc"
                        },
                        "ID_863": {
                            "title": "Reconstructing More Science",
                            "link": "https://youtu.be/MjHmPZmi-k8"
                        }
                    }
                },
                "Portal": {
                    "gameName": "Portal",
                    "answers": ["portal", "portal", "", "pokemon alpha sapphire", "omega ruby", "alpha sapphire"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_864": {
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
                    "answers": ["curious village", "professor layton", "professor layton and the curious village", "professor layton curious village"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_865": {
                            "title": "Layton's Theme",
                            "link": "https://youtu.be/dFBKHSitIjo"
                        },
                        "ID_929": {
                            "title": "The Curious Village",
                            "link": "https://youtu.be/qPfAwPp9Apw"
                        },
                        "ID_88": {
                            "title": "Walking in the Village",
                            "link": "https://youtu.be/PDt86F-QWm0"
                        },
                        "ID_89": {
                            "title": "Mysterious Girl",
                            "link": "https://youtu.be/J1KmliLXVkE"
                        },
                        "ID_90": {
                            "title": "Puzzle",
                            "link": "https://youtu.be/x2nPysfmt0U"
                        },
                        "ID_91": {
                            "title": "Something Happens",
                            "link": "https://youtu.be/1FuyqT0MsNU"
                        },
                        "ID_92": {
                            "title": "Pursuit at Night",
                            "link": "https://youtu.be/NE_WVSv4sVo"
                        },
                        "ID_93": {
                            "title": "Night Falls",
                            "link": "https://youtu.be/ZPbImzHs5DE"
                        },
                        "ID_94": {
                            "title": "The Village Starts Moving",
                            "link": "https://youtu.be/HxS4AAPb7to"
                        },
                        "ID_95": {
                            "title": "Ferris Wheel Park",
                            "link": "https://youtu.be/xVP_E8IkbPM"
                        },
                        "ID_96": {
                            "title": "Memory of the Village",
                            "link": "https://youtu.be/UBGERI7m63Q"
                        },
                        "ID_97": {
                            "title": "Ending Theme",
                            "link": "https://youtu.be/SlICVgNj690"
                        }
                    }
                },
                "Pandora's / Diabolical Box": {
                    "gameName": "Pandora's / Diabolical Box",
                    "answers": ["pandora's / diabolical box", "professor layton pb", "professor layton db", "professor layton pandoras box", "professor layton pandora's box", "professor layton diabolical box", "professor layton and the diabolical box", "diabolical box", "pandoras box", "pandora's box"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_98": {
                            "title": "Theme of Diabolical Box",
                            "link": "https://youtu.be/WCZ-_U3md4I"
                        },
                        "ID_99": {
                            "title": "London",
                            "link": "https://youtu.be/HDyT-msFFCg"
                        },
                        "ID_541": {
                            "title": "The Molentary Express",
                            "link": "https://youtu.be/RR8_BMN68Ok"
                        },
                        "ID_542": {
                            "title": "Suspense",
                            "link": "https://youtu.be/7t2AMjtVv28"
                        },
                        "ID_543": {
                            "title": "Dropstone",
                            "link": "https://youtu.be/Z5wVNSvl1io"
                        },
                        "ID_544": {
                            "title": "A Disquieting Atmosphere",
                            "link": "https://youtu.be/DZWXHK0s5Dg"
                        },
                        "ID_545": {
                            "title": "Folsense",
                            "link": "https://youtu.be/t2OmAxetWrc"
                        },
                        "ID_546": {
                            "title": "Lost Forest",
                            "link": "https://youtu.be/mE-QE4_73KU"
                        },
                        "ID_547": {
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
                        "ID_548": {
                            "title": "The Unwound Future / The Lost Future",
                            "link": "https://youtu.be/K05xxq1-9ZY"
                        },
                        "ID_549": {
                            "title": "Puzzles (Reinvented)",
                            "link": "https://youtu.be/nXwm7AVhx_A"
                        },
                        "ID_550": {
                            "title": "London Streets",
                            "link": "https://youtu.be/MuSmUI25Ulw"
                        },
                        "ID_551": {
                            "title": "Tension",
                            "link": "https://youtu.be/GzDLP-jHmz4"
                        },
                        "ID_552": {
                            "title": "A Quiet Town",
                            "link": "https://youtu.be/PCokkvGl2AE"
                        },
                        "ID_553": {
                            "title": "Sorrow",
                            "link": "https://youtu.be/aWMpDVrcyvw"
                        },
                        "ID_554": {
                            "title": "Suspicion",
                            "link": "https://youtu.be/LUToNKrxT74"
                        },
                        "ID_555": {
                            "title": "Puzzle Battle",
                            "link": "https://youtu.be/w7xAH0NMd2s"
                        },
                        "ID_556": {
                            "title": "Memories",
                            "link": "https://youtu.be/hlG6-NK6N8Q"
                        },
                        "ID_557": {
                            "title": "The Professors Deductions",
                            "link": "https://youtu.be/3gbWiFxMvNU"
                        },
                        "ID_558": {
                            "title": "Don Paolo's Theme",
                            "link": "https://youtu.be/ohizEQsS6jY"
                        },
                        "ID_559": {
                            "title": "Puzzles Reinvented 2",
                            "link": "https://youtu.be/_hhRNn107lo"
                        },
                        "ID_560": {
                            "title": "The Research Facility",
                            "link": "https://youtu.be/wF4LCLp-xSo"
                        },
                        "ID_561": {
                            "title": "The Mobile Fortress",
                            "link": "https://youtu.be/ehCTkparvHI"
                        },
                        "ID_562": {
                            "title": "The Toy Car",
                            "link": "https://youtu.be/3agpqUJ0JeI"
                        },
                        "ID_563": {
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
                        "ID_564": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/TmQtwXr9PSo"
                        },
                        "ID_565": {
                            "title": "Game Select",
                            "link": "https://youtu.be/gjioI1QgyoY"
                        },
                        "ID_100": {
                            "title": "Built to Scale",
                            "link": "https://youtu.be/GbeQafrErOY"
                        },
                        "ID_101": {
                            "title": "Glee Club",
                            "link": "https://youtu.be/Mc4odqtZKFk"
                        },
                        "ID_102": {
                            "title": "Thrilling! Is this Love?",
                            "link": "https://youtu.be/XHXVFBKZ9i8"
                        },
                        "ID_103": {
                            "title": "Remix 1",
                            "link": "https://youtu.be/jz39FqoWA20"
                        },
                        "ID_104": {
                            "title": "Rhythm Rally",
                            "link": "https://youtu.be/Ix1Etc5eKck"
                        },
                        "ID_105": {
                            "title": "Remix 2",
                            "link": "https://youtu.be/qLUv4jj2640"
                        },
                        "ID_106": {
                            "title": "Love Ooh Ooh Paradise",
                            "link": "https://youtu.be/MhN1xBvmq2w"
                        },
                        "ID_107": {
                            "title": "Remix 3",
                            "link": "https://youtu.be/0SZMGTXKhNw"
                        },
                        "ID_108": {
                            "title": "Love Lab",
                            "link": "https://youtu.be/sScjtRcE7SQ"
                        },
                        "ID_109": {
                            "title": "Remix 4",
                            "link": "https://youtu.be/LxyG2WRmOD0"
                        },
                        "ID_110": {
                            "title": "Tunnel",
                            "link": "https://youtu.be/v7fphvqlx5I"
                        },
                        "ID_111": {
                            "title": "Tears of a Dog Ninja",
                            "link": "https://youtu.be/A67fTNF-kz8"
                        },
                        "ID_112": {
                            "title": "Remix 5",
                            "link": "https://youtu.be/2pWK8K3YBM0"
                        },
                        "ID_113": {
                            "title": "Lockstep",
                            "link": "https://youtu.be/6ixtYsFcaHw"
                        },
                        "ID_114": {
                            "title": "Rockers",
                            "link": "https://youtu.be/ZaDUZfbc9uY"
                        },
                        "ID_115": {
                            "title": "Karate Man (Struck by the Rain)",
                            "link": "https://youtu.be/b6fqlTB-nSo"
                        },
                        "ID_116": {
                            "title": "Remix 6",
                            "link": "https://youtu.be/IybcisI5oJc"
                        },
                        "ID_117": {
                            "title": "Staff Credits (That's Paradise)",
                            "link": "https://youtu.be/aKAFoq0m2CA"
                        },
                        "ID_118": {
                            "title": "Cast",
                            "link": "https://youtu.be/P3Wm4WuyZew"
                        },
                        "ID_119": {
                            "title": "Game Select 2",
                            "link": "https://youtu.be/2BIoQbGtSWE"
                        },
                        "ID_120": {
                            "title": "Remix 7",
                            "link": "https://youtu.be/0rD7i8qDDrM"
                        },
                        "ID_121": {
                            "title": "Rhythm Rally 2",
                            "link": "https://youtu.be/sgDl-eXB-i8"
                        },
                        "ID_122": {
                            "title": "Remix 8",
                            "link": "https://youtu.be/pHKkgTZS5K8"
                        },
                        "ID_123": {
                            "title": "Space Soccer 2",
                            "link": "https://youtu.be/Vz8g87hZ8qs"
                        },
                        "ID_124": {
                            "title": "Remix 9",
                            "link": "https://youtu.be/A0MGFrh0GBQ"
                        },
                        "ID_125": {
                            "title": "Munchy Monk Circus",
                            "link": "https://youtu.be/dC8kM1opPCg"
                        },
                        "ID_126": {
                            "title": "Shoot-'Em-Up 2",
                            "link": "https://youtu.be/W0wzAjKry7I"
                        },
                        "ID_127": {
                            "title": "Rockers 2",
                            "link": "https://youtu.be/gOCsXr6o3Nk"
                        },
                        "ID_128": {
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
                        "ID_129": {
                            "title": "Game Select 1",
                            "link": "https://youtu.be/0rF96AqSwmI"
                        },
                        "ID_130": {
                            "title": "Hole in One",
                            "link": "https://youtu.be/s_QQGykxEPI"
                        },
                        "ID_131": {
                            "title": "Remix 1",
                            "link": "https://youtu.be/TcufdwbnF0k"
                        },
                        "ID_132": {
                            "title": "Tambourine",
                            "link": "https://youtu.be/Ll43omBpo6E"
                        },
                        "ID_133": {
                            "title": "Monkey Watch",
                            "link": "https://youtu.be/Z_z2NYEOKXM"
                        },
                        "ID_134": {
                            "title": "Built to Scale",
                            "link": "https://youtu.be/NSAt95BnfM0"
                        },
                        "ID_135": {
                            "title": "Air Rally",
                            "link": "https://youtu.be/1MBM0ndrpB8"
                        },
                        "ID_136": {
                            "title": "Remix 3 ~ I Feel Fine!! (Japanese)",
                            "link": "https://youtu.be/boz_n3N_p5U"
                        },
                        "ID_137": {
                            "title": "Ringside",
                            "link": "https://youtu.be/tgPFSiIeP14"
                        },
                        "ID_138": {
                            "title": "Packing Pests",
                            "link": "https://youtu.be/ebdCqKixkgE"
                        },
                        "ID_139": {
                            "title": "Remix 4",
                            "link": "https://youtu.be/-XWxoXdeSOU"
                        },
                        "ID_140": {
                            "title": "Flipper Flop",
                            "link": "https://youtu.be/EcQ4upwXgX0"
                        },
                        "ID_141": {
                            "title": "Exhibition Match",
                            "link": "https://youtu.be/X1eCEd22UcQ"
                        },
                        "ID_142": {
                            "title": "Flock Step",
                            "link": "https://youtu.be/4HvtGK9-tD8"
                        },
                        "ID_143": {
                            "title": "Remix 5",
                            "link": "https://youtu.be/CHT2wj0qo9I"
                        },
                        "ID_144": {
                            "title": "Bossa Nova",
                            "link": "https://youtu.be/lZptJeDYtGs"
                        },
                        "ID_145": {
                            "title": "Remix 6",
                            "link": "https://youtu.be/F2WmMMfNFdQ"
                        },
                        "ID_146": {
                            "title": "Tap Troupe",
                            "link": "https://youtu.be/yhpfl45_HYs"
                        },
                        "ID_147": {
                            "title": "Cheer Readers",
                            "link": "https://youtu.be/HZ3eo3XSRWw"
                        },
                        "ID_148": {
                            "title": "Karate Man (Japanese)",
                            "link": "https://youtu.be/iy-obB3oLsg"
                        },
                        "ID_149": {
                            "title": "Remix 7",
                            "link": "https://youtu.be/KI6jFsrs-28"
                        },
                        "ID_150": {
                            "title": "Night Walk (Japanese)",
                            "link": "https://youtu.be/J05QRBGZ1sU"
                        },
                        "ID_151": {
                            "title": "Character Cast",
                            "link": "https://youtu.be/gXY5Mv4rqIk"
                        },
                        "ID_152": {
                            "title": "Game Select 2",
                            "link": "https://youtu.be/9gmk3IPraj8"
                        },
                        "ID_153": {
                            "title": "Built to Scale 2",
                            "link": "https://youtu.be/xOzgsI3wlwo"
                        },
                        "ID_154": {
                            "title": "Remix 8 (Japanese)",
                            "link": "https://youtu.be/dGpu0HZkEBg"
                        },
                        "ID_155": {
                            "title": "Cheer Readers 2",
                            "link": "https://youtu.be/sStZ-s85Cw4"
                        },
                        "ID_156": {
                            "title": "Remix 9 (Japanese)",
                            "link": "https://youtu.be/ORVMXQMVJxM"
                        },
                        "ID_157": {
                            "title": "Packing Pests 2",
                            "link": "https://youtu.be/YVzxJpxmiAA"
                        },
                        "ID_158": {
                            "title": "Karate Man 2 (Japanese)",
                            "link": "https://youtu.be/oCinvV0oooE"
                        },
                        "ID_159": {
                            "title": "Remix 10",
                            "link": "https://youtu.be/8tbDJYUc0z0"
                        }
                    }
                }
            }
        },
        "Ribbit King": {
            "seriesName": "Ribbit King",
            "seriesColor": "red",
            "game": {
                "Ribbit King": {
                    "gameName": "Ribbit King",
                    "answers": ["ribbit king", "", "ff x"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_160": {
                            "title": "Ribbetopia 1",
                            "link": "https://youtu.be/V0njPAsdeoU"
                        }
                    }
                }
            }
        },
        "Sonic The Hedgehog": {
            "seriesName": "Sonic The Hedgehog",
            "seriesColor": "red",
            "game": {
                "Sonic R": {
                    "gameName": "Sonic R",
                    "answers": ["sonic r"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_161": {
                            "title": "Super Sonic Racing",
                            "link": "https://youtu.be/EvuAVr88XoM"
                        },
                        "ID_1323": {
                            "title": "Can You Feel the Sunshine",
                            "link": "https://youtu.be/dgJWZiBt6_w"
                        },
                        "ID_1379": {
                            "title": "Living in the City",
                            "link": "https://youtu.be/XdwnHWnB7fM"
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
                        "ID_1380": {
                            "title": "Courtesy",
                            "link": "https://youtu.be/Jb0FPAnxSjY"
                        },
                        "ID_1381": {
                            "title": "Otis",
                            "link": "https://youtu.be/0_gBrYzLy3Y"
                        },
                        "ID_914": {
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
                    "answers": ["super meat boy", "super meat boy", "meat boy"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_915": {
                            "title": "Forest Funk",
                            "link": "https://youtu.be/3xHttYIwocY"
                        },
                        "ID_916": {
                            "title": "The Battle of Lil' Slugger",
                            "link": "https://youtu.be/WL-8rU8ltA4"
                        },
                        "ID_835": {
                            "title": "Betus Blues",
                            "link": "https://youtu.be/6Kf7ycHajX4"
                        },
                        "ID_836": {
                            "title": "Can o' Salt",
                            "link": "https://youtu.be/VKNJTrpQWsE"
                        },
                        "ID_837": {
                            "title": "Hot Damned",
                            "link": "https://youtu.be/AlAQ8fdqoFA"
                        },
                        "ID_838": {
                            "title": "It Ends",
                            "link": "https://youtu.be/s87s5CWfRus"
                        },
                        "ID_839": {
                            "title": "Dr Fetus' Castle",
                            "link": "https://youtu.be/LE_Lrs8LomE"
                        },
                        "ID_840": {
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
                    "answers": ["terraria calamity mod", "terraria calamity", "calamity"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_841": {
                            "title": "Guardian of The Former Seas",
                            "link": "https://youtu.be/hPEQLU-aD3I"
                        },
                        "ID_842": {
                            "title": "1NF3S+@+!0N",
                            "link": "https://youtu.be/17IZjvr5c1I"
                        },
                        "ID_967": {
                            "title": "Fly of Beelzebub",
                            "link": "https://youtu.be/fmt-2Uqx0K4"
                        },
                        "ID_968": {
                            "title": "Roar of The Jungle Dragon",
                            "link": "https://youtu.be/8rEw9sCwo8E"
                        }
                    }
                },
                "Terraria": {
                    "gameName": "Terraria",
                    "answers": ["terraria", "", "", "calamity mod"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_969": {
                            "title": "Plantera",
                            "link": "https://youtu.be/xmijN_nZeOU"
                        },
                        "ID_970": {
                            "title": "Frost Moon",
                            "link": "https://youtu.be/wTKvewEtnRY"
                        },
                        "ID_971": {
                            "title": "Underground",
                            "link": "https://youtu.be/c-OttnZEXZo"
                        },
                        "ID_972": {
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
                        "ID_973": {
                            "title": "The Last of Us",
                            "link": "https://youtu.be/8p2DjSwt4_g"
                        },
                        "ID_974": {
                            "title": "Vanishing Grace",
                            "link": "https://youtu.be/27wG5zSD-qI"
                        },
                        "ID_917": {
                            "title": "All Gone",
                            "link": "https://youtu.be/ihdpkjEukaM"
                        },
                        "ID_918": {
                            "title": "The Choice",
                            "link": "https://youtu.be/o2-tlEOMgzU"
                        },
                        "ID_919": {
                            "title": "All Gone (Aftermath)",
                            "link": "https://youtu.be/SDTS5Sohv4o"
                        },
                        "ID_920": {
                            "title": "The Path",
                            "link": "https://youtu.be/wjs6RAfrd60"
                        },
                        "ID_921": {
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
                        "ID_922": {
                            "title": "-kokkAI 2- (Confession 2) [Title Theme]",
                            "link": "https://youtu.be/YkOlxeeK8qM"
                        },
                        "ID_923": {
                            "title": "-isAI- (Delegation)",
                            "link": "https://youtu.be/9a5JpoqgeAQ"
                        },
                        "ID_661": {
                            "title": "-tenkAI- (Commence) [Police Headquarters]",
                            "link": "https://youtu.be/yiy8K2Ie8Z0"
                        },
                        "ID_662": {
                            "title": "Artist, Inc. [Lemniscate]",
                            "link": "https://youtu.be/2holbGVEG7c"
                        },
                        "ID_663": {
                            "title": "-yakusAI- (Disaster)",
                            "link": "https://youtu.be/PbL9rR0hnYw"
                        },
                        "ID_664": {
                            "title": "-syuurAI- (Attack)",
                            "link": "https://youtu.be/wS0HZcUurhY"
                        },
                        "ID_665": {
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
                    "answers": ["timesplitters 2", "ts2", "time splitters 2", "lou"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_666": {
                            "title": "Siberia",
                            "link": "https://youtu.be/AsetlRd-nvs"
                        },
                        "ID_667": {
                            "title": "Streets",
                            "link": "https://youtu.be/pSMZOU7lcK0"
                        },
                        "ID_936": {
                            "title": "TS2 Credits",
                            "link": "https://youtu.be/t443lJnz5Yc"
                        },
                        "ID_937": {
                            "title": "Return To Planet X",
                            "link": "https://youtu.be/3SF1yMNJ38k"
                        },
                        "ID_938": {
                            "title": "Retro Racer",
                            "link": "https://youtu.be/ArPOxUVmQaA"
                        },
                        "ID_939": {
                            "title": "Notre Dame",
                            "link": "https://youtu.be/w5ESVLi6_aA"
                        },
                        "ID_940": {
                            "title": "TS2 Industrial Tileset",
                            "link": "https://youtu.be/k9KdfMqzSG0"
                        },
                        "ID_941": {
                            "title": "Nightclub",
                            "link": "https://youtu.be/MsIDtDJvEck"
                        },
                        "ID_942": {
                            "title": "NeoTokyo",
                            "link": "https://youtu.be/NkQyJ2i86Tc"
                        },
                        "ID_943": {
                            "title": "Mexican Mission",
                            "link": "https://youtu.be/wQ9q8DwBBus"
                        },
                        "ID_944": {
                            "title": "Ice Station",
                            "link": "https://youtu.be/AIUl0thIKO4"
                        },
                        "ID_945": {
                            "title": "Circus",
                            "link": "https://youtu.be/rBfeKLafDUA"
                        },
                        "ID_946": {
                            "title": "TS2 Mission Failed",
                            "link": "https://youtu.be/WAnDCZGjoUM"
                        },
                        "ID_947": {
                            "title": "TS2 Mission Success",
                            "link": "https://youtu.be/cfnzXfyh_ds"
                        },
                        "ID_948": {
                            "title": "Chinese",
                            "link": "https://youtu.be/8iyHxf9oIWI"
                        },
                        "ID_949": {
                            "title": "TS2 Title Screen",
                            "link": "https://youtu.be/EshcPGYQCfo"
                        },
                        "ID_950": {
                            "title": "Chicago",
                            "link": "https://youtu.be/cykxQLTDf4s"
                        },
                        "ID_951": {
                            "title": "Aztec Interior",
                            "link": "https://youtu.be/kZ89aGXaL9A"
                        },
                        "ID_952": {
                            "title": "TS2 Virtual Tileset",
                            "link": "https://youtu.be/n_veFSRBTlQ"
                        },
                        "ID_953": {
                            "title": "Aztec Exterior",
                            "link": "https://youtu.be/IL4fdgFA2Lg"
                        },
                        "ID_954": {
                            "title": "Ufopia",
                            "link": "https://youtu.be/_v95qlOXD5w"
                        },
                        "ID_955": {
                            "title": "Wild West",
                            "link": "https://youtu.be/HMKX00bfSJI"
                        },
                        "ID_956": {
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
                        "ID_957": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/LsAsJUTsYxs"
                        },
                        "ID_958": {
                            "title": "Moonwisher",
                            "link": "https://youtu.be/TbdGWchHUAc"
                        },
                        "ID_930": {
                            "title": "For River - Piano (Johnny's Version)",
                            "link": "https://youtu.be/9QfPDmzpC2Q"
                        },
                        "ID_931": {
                            "title": "Everything's Alright",
                            "link": "https://youtu.be/OkvVr6n1cGk"
                        }
                    }
                }
            }
        },
        "Uncharted": {
            "seriesName": "Uncharted",
            "seriesColor": "red",
            "game": {
                "Uncharted 3: Drake's Deception": {
                    "gameName": "Uncharted 3: Drake's Deception",
                    "answers": ["uncharted 3: drake's deception", "uncharted 3"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_932": {
                            "title": "Nate's Theme 3.0",
                            "link": "https://youtu.be/QGwnYwTBV7I"
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
                        "ID_933": {
                            "title": "Once Upon A Time",
                            "link": "https://youtu.be/s7RRgF5Ve_E"
                        },
                        "ID_1100": {
                            "title": "Start Menu",
                            "link": "https://youtu.be/kRT9vY2f7tg"
                        },
                        "ID_1101": {
                            "title": "Your Best Friend",
                            "link": "https://youtu.be/83jGCWCcBzc"
                        },
                        "ID_399": {
                            "title": "Fallen Down",
                            "link": "https://youtu.be/B69GfSqEZEs"
                        },
                        "ID_400": {
                            "title": "Ruins",
                            "link": "https://youtu.be/QyPR77rg1to"
                        },
                        "ID_401": {
                            "title": "Uwa!! So Temperate♫",
                            "link": "https://youtu.be/rHU4rpQUshg"
                        },
                        "ID_402": {
                            "title": "Anticipation",
                            "link": "https://youtu.be/t62zFJATVPM"
                        },
                        "ID_403": {
                            "title": "Unnecessary Tension",
                            "link": "https://youtu.be/OSPbX0lkTmQ"
                        },
                        "ID_404": {
                            "title": "Enemy Approaching",
                            "link": "https://youtu.be/JRU6GnETSN4"
                        },
                        "ID_405": {
                            "title": "Ghost Fight",
                            "link": "https://youtu.be/Zz1bfhtKsHM"
                        },
                        "ID_406": {
                            "title": "Determination",
                            "link": "https://youtu.be/W1i4mTyidOc"
                        },
                        "ID_407": {
                            "title": "Home",
                            "link": "https://youtu.be/5_E_y1AWAfc"
                        },
                        "ID_408": {
                            "title": "Home (Music Box)",
                            "link": "https://youtu.be/ANEsXjSiYxI"
                        },
                        "ID_409": {
                            "title": "Heartache",
                            "link": "https://youtu.be/xflkF-sqNaM"
                        },
                        "ID_410": {
                            "title": "sans.",
                            "link": "https://youtu.be/Zzo6L3wsf8c"
                        },
                        "ID_411": {
                            "title": "Nyeh Heh Heh!",
                            "link": "https://youtu.be/FKdtstAo6iU"
                        },
                        "ID_412": {
                            "title": "Snowy",
                            "link": "https://youtu.be/8BIeGdBjJiU"
                        },
                        "ID_413": {
                            "title": "Uwa!! So Holiday♫",
                            "link": "https://youtu.be/XnG7HG8bmkU"
                        },
                        "ID_414": {
                            "title": "Dogbass",
                            "link": "https://youtu.be/a1OLiuNLpEs"
                        },
                        "ID_415": {
                            "title": "Mysterious Place",
                            "link": "https://youtu.be/gC11HJ99Egs"
                        },
                        "ID_416": {
                            "title": "Dogsong",
                            "link": "https://youtu.be/woPff-Tpkns"
                        },
                        "ID_417": {
                            "title": "Snowdin Town",
                            "link": "https://youtu.be/z6LmMCuGjfA"
                        },
                        "ID_418": {
                            "title": "Shop",
                            "link": "https://youtu.be/jCQ_5Gj6jlg"
                        },
                        "ID_419": {
                            "title": "Bonetrousle",
                            "link": "https://youtu.be/zdeZwAk6ULE"
                        },
                        "ID_420": {
                            "title": "Dating Start!",
                            "link": "https://youtu.be/dtYwq4aBr0E"
                        },
                        "ID_421": {
                            "title": "Dating Tense!",
                            "link": "https://youtu.be/ShK_Tj-Ee3Y"
                        },
                        "ID_422": {
                            "title": "Dating Fight!",
                            "link": "https://youtu.be/JQ8bpWkoC7A"
                        },
                        "ID_423": {
                            "title": "Premonition",
                            "link": "https://youtu.be/sQDiDDb1_9k"
                        },
                        "ID_424": {
                            "title": "Danger Mystery",
                            "link": "https://youtu.be/FhpJN6Khesw"
                        },
                        "ID_425": {
                            "title": "Undyne",
                            "link": "https://youtu.be/VH6HIHmhvQU"
                        },
                        "ID_426": {
                            "title": "Waterfall",
                            "link": "https://youtu.be/v712NiVK5uY"
                        },
                        "ID_427": {
                            "title": "Run!",
                            "link": "https://youtu.be/PPapt88_3aU"
                        },
                        "ID_428": {
                            "title": "Quiet Water",
                            "link": "https://youtu.be/AsvhQ-soLdg"
                        },
                        "ID_429": {
                            "title": "Memory",
                            "link": "https://youtu.be/eijdNQMYikY"
                        },
                        "ID_430": {
                            "title": "Bird That Carries You Over A Disproportionately Small Gap",
                            "link": "https://youtu.be/Z51lfE2k7jU"
                        },
                        "ID_431": {
                            "title": "Dummy!",
                            "link": "https://youtu.be/N3epEVMNJdY"
                        },
                        "ID_432": {
                            "title": "Pathetic House",
                            "link": "https://youtu.be/nu_ruGyTNEs"
                        },
                        "ID_433": {
                            "title": "Spooktune",
                            "link": "https://youtu.be/K1qjt_1geiI"
                        },
                        "ID_434": {
                            "title": "Spookwave",
                            "link": "https://youtu.be/o251comtNfk"
                        },
                        "ID_435": {
                            "title": "Ghouliday",
                            "link": "https://youtu.be/lWP9s44i-YA"
                        },
                        "ID_436": {
                            "title": "Chill",
                            "link": "https://youtu.be/D4Ximn7nZdc"
                        },
                        "ID_437": {
                            "title": "Thundersnail",
                            "link": "https://youtu.be/ewxyxByJPP0"
                        },
                        "ID_438": {
                            "title": "Temmie Village",
                            "link": "https://youtu.be/rNlyF43Te6U"
                        },
                        "ID_439": {
                            "title": "Tem Shop",
                            "link": "https://youtu.be/y_qHuDjE3CQ"
                        },
                        "ID_440": {
                            "title": "NGAHHH!!",
                            "link": "https://youtu.be/PLDyWLbuptQ"
                        },
                        "ID_441": {
                            "title": "Spear of Justice",
                            "link": "https://youtu.be/qrBB3_rFPjg"
                        },
                        "ID_442": {
                            "title": "Ooo",
                            "link": "https://youtu.be/vdE3R3BeH-I"
                        },
                        "ID_443": {
                            "title": "Alphys",
                            "link": "https://youtu.be/xG2AtyD3elY"
                        },
                        "ID_444": {
                            "title": "It's Showtime!",
                            "link": "https://youtu.be/9uwEAugeH8w"
                        },
                        "ID_445": {
                            "title": "Metal Crusher",
                            "link": "https://youtu.be/P0PpyUsvT9w"
                        },
                        "ID_446": {
                            "title": "Another Medium",
                            "link": "https://youtu.be/xLsuam9o9BA"
                        },
                        "ID_447": {
                            "title": "Uwa!! So HEATS!!?",
                            "link": "https://youtu.be/wyShNqRkQ1I"
                        },
                        "ID_448": {
                            "title": "Stronger Monsters",
                            "link": "https://youtu.be/HnmHqWU0z5M"
                        },
                        "ID_449": {
                            "title": "Hotel",
                            "link": "https://youtu.be/8wSYwqbp4S4"
                        },
                        "ID_450": {
                            "title": "Can You Really Call This A Hotel I Didn't Receive A Mint On My Pillow",
                            "link": "https://youtu.be/wRUdj1WgwIE"
                        },
                        "ID_451": {
                            "title": "Confession",
                            "link": "https://youtu.be/qzQyP99Q0pE"
                        },
                        "ID_452": {
                            "title": "Live Report",
                            "link": "https://youtu.be/4oi_XcH2sAw"
                        },
                        "ID_453": {
                            "title": "Death Report",
                            "link": "https://youtu.be/Z3ZULqzMutw"
                        },
                        "ID_454": {
                            "title": "Spider Dance",
                            "link": "https://youtu.be/YZ3XjVVNagU"
                        },
                        "ID_455": {
                            "title": "Wrong Enemy",
                            "link": "https://youtu.be/gTCSQevpuOg"
                        },
                        "ID_456": {
                            "title": "Oh! One True Love",
                            "link": "https://youtu.be/JlKHChbEcps"
                        },
                        "ID_457": {
                            "title": "Oh! Dungeon",
                            "link": "https://youtu.be/5aRE_J4UvYM"
                        },
                        "ID_458": {
                            "title": "It's Raining Somewhere Else",
                            "link": "https://youtu.be/zNd4apsr3WE"
                        },
                        "ID_459": {
                            "title": "CORE Approach",
                            "link": "https://youtu.be/qNi_6kXc2cc"
                        },
                        "ID_460": {
                            "title": "CORE",
                            "link": "https://youtu.be/tDuEWw648jo"
                        },
                        "ID_461": {
                            "title": "Last Episode!",
                            "link": "https://youtu.be/pzhYcYwg4vE"
                        },
                        "ID_462": {
                            "title": "Oh My...",
                            "link": "https://youtu.be/r-IvDZ8Wljo"
                        },
                        "ID_463": {
                            "title": "Death by Glamour",
                            "link": "https://youtu.be/2TgO-tN5wAM"
                        },
                        "ID_464": {
                            "title": "For the Fans",
                            "link": "https://youtu.be/6nOHNgotIPM"
                        },
                        "ID_465": {
                            "title": "Long Elevator",
                            "link": "https://youtu.be/XDQGK6ztbLs"
                        },
                        "ID_466": {
                            "title": "Undertale",
                            "link": "https://youtu.be/EBhFHJMVfiI"
                        },
                        "ID_467": {
                            "title": "Song That Might Play When You Fight Sans",
                            "link": "https://youtu.be/41YOknSl0zw"
                        },
                        "ID_468": {
                            "title": "The Choice",
                            "link": "https://youtu.be/C4Wv5M9JPao"
                        },
                        "ID_469": {
                            "title": "Small Shock",
                            "link": "https://youtu.be/EUJA3xRyVVM"
                        },
                        "ID_470": {
                            "title": "Barrier",
                            "link": "https://youtu.be/nJfzf--xqeQ"
                        },
                        "ID_471": {
                            "title": "Bergentrückung",
                            "link": "https://youtu.be/YivzBeEwzWI"
                        },
                        "ID_472": {
                            "title": "ASGORE",
                            "link": "https://youtu.be/hMa4hZQbrms"
                        },
                        "ID_473": {
                            "title": "You Idiot",
                            "link": "https://youtu.be/eOqq5kNBVoM"
                        },
                        "ID_474": {
                            "title": "Your Best Nightmare",
                            "link": "https://youtu.be/eUcThHVbrXY"
                        },
                        "ID_475": {
                            "title": "Finale",
                            "link": "https://youtu.be/yWjavxcGfqM"
                        },
                        "ID_476": {
                            "title": "An Ending",
                            "link": "https://youtu.be/l3sJ79C1Zyo"
                        },
                        "ID_477": {
                            "title": "She's Playing Piano",
                            "link": "https://youtu.be/zEAN2dna9To"
                        },
                        "ID_478": {
                            "title": "Here We Are",
                            "link": "https://youtu.be/y49b8aiQVBg"
                        },
                        "ID_479": {
                            "title": "Amalgam",
                            "link": "https://youtu.be/71u0i6J-Qes"
                        },
                        "ID_480": {
                            "title": "Fallen Down (Reprise)",
                            "link": "https://youtu.be/cGBMTAGzWPs"
                        },
                        "ID_481": {
                            "title": "Don't Give Up",
                            "link": "https://youtu.be/B4qdpiad_Q0"
                        },
                        "ID_482": {
                            "title": "Hopes and Dreams",
                            "link": "https://youtu.be/tz82xbLvK_k"
                        },
                        "ID_483": {
                            "title": "Burn in Despair!",
                            "link": "https://youtu.be/pumVu-WWhKM"
                        },
                        "ID_484": {
                            "title": "SAVE the World",
                            "link": "https://youtu.be/mZRP7nQkfrM"
                        },
                        "ID_485": {
                            "title": "His Theme",
                            "link": "https://youtu.be/IkOK8tdEsFY"
                        },
                        "ID_486": {
                            "title": "Final Power",
                            "link": "https://youtu.be/6nQbkE1DS0o"
                        },
                        "ID_487": {
                            "title": "Reunited",
                            "link": "https://youtu.be/WgRfPc1lfJk"
                        },
                        "ID_488": {
                            "title": "Menu (Full)",
                            "link": "https://youtu.be/brP9Q08kEfk"
                        },
                        "ID_489": {
                            "title": "Respite",
                            "link": "https://youtu.be/E-fyLcHg4iM"
                        },
                        "ID_490": {
                            "title": "Bring It In, Guys!",
                            "link": "https://youtu.be/x_P5smsopK0"
                        },
                        "ID_491": {
                            "title": "Last Goodbye",
                            "link": "https://youtu.be/5P8V4mP5RLg"
                        },
                        "ID_492": {
                            "title": "But the Earth Refused to Die",
                            "link": "https://youtu.be/ML6OV8fG74w"
                        },
                        "ID_493": {
                            "title": "Battle Against a True Hero",
                            "link": "https://youtu.be/aWBtpBwzzdM"
                        },
                        "ID_494": {
                            "title": "Power of -NEO-",
                            "link": "https://youtu.be/mwrUem9vM_A"
                        },
                        "ID_495": {
                            "title": "Megalovania",
                            "link": "https://youtu.be/c5daGZ96QGU"
                        },
                        "ID_496": {
                            "title": "Good Night",
                            "link": "https://youtu.be/BGpJrPY563A"
                        }
                    }
                }
            }
        },
        "VA-11 HALL-A": {
            "seriesName": "VA-11 HALL-A",
            "seriesColor": "red",
            "game": {
                "VA-11 HALL-A": {
                    "gameName": "VA-11 HALL-A",
                    "answers": ["va-11 hall-a", "vallhalla", "3d world"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_497": {
                            "title": "Hopes and Dreams",
                            "link": "https://youtu.be/utYouad0v5E"
                        },
                        "ID_498": {
                            "title": "Welcome to VA-11 Hall-A",
                            "link": "https://youtu.be/2Cz6Y4iqUSA"
                        },
                        "ID_499": {
                            "title": "Commencing Simulation",
                            "link": "https://youtu.be/WBT8aCfs5GQ"
                        },
                        "ID_1311": {
                            "title": "Friendly Conversation",
                            "link": "https://youtu.be/OOlWaWTlfuI"
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
                        "ID_1312": {
                            "title": "Presenting VVVVVV",
                            "link": "https://youtu.be/tdE3n-pxF5Y"
                        },
                        "ID_1313": {
                            "title": "Pushing Onwards",
                            "link": "https://youtu.be/25m3Gk7mRQM"
                        },
                        "ID_1314": {
                            "title": "Path Complete",
                            "link": "https://youtu.be/9QjRjmK-tXc"
                        },
                        "ID_905": {
                            "title": "Passion For Exploring",
                            "link": "https://youtu.be/C0j6pe043L4"
                        },
                        "ID_906": {
                            "title": "Positive Force",
                            "link": "https://youtu.be/Tp3qiOKuEBM"
                        },
                        "ID_907": {
                            "title": "Predestined Fate",
                            "link": "https://youtu.be/yv_lcgLFJmc"
                        },
                        "ID_908": {
                            "title": "Potential For Anything",
                            "link": "https://youtu.be/Uj8MsbgpjaQ"
                        },
                        "ID_909": {
                            "title": "Pressure Cooker",
                            "link": "https://youtu.be/L0gOUmQ39uk"
                        },
                        "ID_910": {
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
                    "answers": ["wario ware: smooth moves", "wario ware wii", "wario ware smooth moves", "wario ware: smooth moves", "smooth moves"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_911": {
                            "title": "Level Select",
                            "link": "https://youtu.be/pZ2Y98ZRxyA"
                        },
                        "ID_912": {
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
                    "answers": ["wii sports"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_913": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/kxxnTv6UaTg"
                        },
                        "ID_701": {
                            "title": "Main Menu",
                            "link": "https://youtu.be/TDiQgBvZ3XU"
                        },
                        "ID_702": {
                            "title": "Tennis (Result)",
                            "link": "https://youtu.be/UPnJFWjAUeY"
                        },
                        "ID_683": {
                            "title": "Baseball (Results)",
                            "link": "https://youtu.be/Rswr0dFYBMc"
                        },
                        "ID_684": {
                            "title": "Bowling (Results)",
                            "link": "https://youtu.be/pyUDEbmSHA4"
                        },
                        "ID_685": {
                            "title": "Golf (Results)",
                            "link": "https://youtu.be/eV1QHeVRrAc"
                        },
                        "ID_686": {
                            "title": "Boxing (Results)",
                            "link": "https://youtu.be/AsXqjRkQfMc"
                        },
                        "ID_687": {
                            "title": "Training Mode",
                            "link": "https://youtu.be/DAWTbuQx6hQ"
                        }
                    }
                },
                "Wii Sports Resort": {
                    "gameName": "Wii Sports Resort",
                    "answers": ["wii sports resort"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_688": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/xnxqn22-qMk"
                        },
                        "ID_689": {
                            "title": "Select Screen",
                            "link": "https://youtu.be/x1WE4T8pdJs"
                        },
                        "ID_690": {
                            "title": "Tutorial",
                            "link": "https://youtu.be/F6poHenvGGA"
                        },
                        "ID_691": {
                            "title": "Archery: Results",
                            "link": "https://youtu.be/x7Lw1SO9JIw"
                        },
                        "ID_692": {
                            "title": "Bowling: Results",
                            "link": "https://youtu.be/7VO35gW1cLc"
                        },
                        "ID_693": {
                            "title": "Basketball: Results",
                            "link": "https://youtu.be/fhqXLNKAa1E"
                        },
                        "ID_694": {
                            "title": "Golf: Results",
                            "link": "https://youtu.be/kWvaaunH254"
                        },
                        "ID_695": {
                            "title": "Ping-Pong: Winning Results",
                            "link": "https://youtu.be/Hj-6x90Rp7Y"
                        },
                        "ID_696": {
                            "title": "Swordplay: Winning Results 1",
                            "link": "https://youtu.be/PtOfWEG-YMc"
                        },
                        "ID_697": {
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
                    "answers": ["you have to burn the rope", "burn the rope"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_698": {
                            "title": "Now You're a Hero",
                            "link": "https://youtu.be/VmuiwOGi5gA"
                        }
                    }
                }
            }
        },
        "Zelda": {
            "seriesName": "Zelda",
            "seriesColor": "red",
            "game": {
                "The Legend of Zelda": {
                    "gameName": "The Legend of Zelda",
                    "answers": ["the legend of zelda", "loz"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_699": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/LvytTVeTxCE"
                        },
                        "ID_700": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/ncg72VswyTs"
                        },
                        "ID_854": {
                            "title": "Dungeon Theme",
                            "link": "https://youtu.be/cMssCMqMHuk"
                        }
                    }
                },
                "Zelda II: The Adventure of Link": {
                    "gameName": "Zelda II: The Adventure of Link",
                    "answers": ["zelda ii: the adventure of link", "loz2", "zelda"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1105": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/B2zxGm4cUB4"
                        },
                        "ID_1106": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/RHS5jM6xBHo"
                        },
                        "ID_1107": {
                            "title": "Dungeon Theme",
                            "link": "https://youtu.be/W-VUVvvlQK8"
                        }
                    }
                },
                "The Legend of Zelda: A Link to the Past": {
                    "gameName": "The Legend of Zelda: A Link to the Past",
                    "answers": ["the legend of zelda: a link to the past", "lttp", "zelda", "zelda 1"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1108": {
                            "title": "Beginning of the Journey",
                            "link": "https://youtu.be/8rA_u3CCPa4"
                        },
                        "ID_1109": {
                            "title": "Hyrule Castle",
                            "link": "https://youtu.be/_uR7doemZD0"
                        },
                        "ID_1110": {
                            "title": "Hyrule Field Main Theme",
                            "link": "https://youtu.be/r4MhlyFwmrA"
                        },
                        "ID_1111": {
                            "title": "Kakariko Village",
                            "link": "https://youtu.be/fw1O6-LjfeA"
                        },
                        "ID_1112": {
                            "title": "Lost Ancient Ruins",
                            "link": "https://youtu.be/zi0APizJuRU"
                        },
                        "ID_1113": {
                            "title": "Forest of Mystery",
                            "link": "https://youtu.be/X1CKttAmNKA"
                        },
                        "ID_1114": {
                            "title": "The Dark World",
                            "link": "https://youtu.be/BStjuHfP238"
                        }
                    }
                },
                "The Legend of Zelda: Link's Awakening": {
                    "gameName": "The Legend of Zelda: Link's Awakening",
                    "answers": ["the legend of zelda: link's awakening", "link's awakening", "alttp", "zelda 2"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1115": {
                            "title": "Title",
                            "link": "https://youtu.be/EgtyT0NEP_g"
                        },
                        "ID_1116": {
                            "title": "Overworld",
                            "link": "https://youtu.be/9FYkL2D3d7M"
                        }
                    }
                },
                "The Legend of Zelda: Phantom Hourglass": {
                    "gameName": "The Legend of Zelda: Phantom Hourglass",
                    "answers": ["the legend of zelda: phantom hourglass", "phantom hourglass", "links awakening", "zelda 3", "link to the past", "a link to the past", "loz3"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1117": {
                            "title": "Set Sail for Adventure (Title)",
                            "link": "https://youtu.be/G3gfqPdF7eQ"
                        },
                        "ID_1118": {
                            "title": "The Pirate Ship",
                            "link": "https://youtu.be/j3Zp9M5XwOY"
                        },
                        "ID_1119": {
                            "title": "Princess Zelda",
                            "link": "https://youtu.be/MMu79gKkPbM"
                        },
                        "ID_1120": {
                            "title": "Linebeck's Theme",
                            "link": "https://youtu.be/_HvVSQPGRzA"
                        },
                        "ID_1121": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/UGSxZBe6Uic"
                        }
                    }
                },
                "The Legend of Zelda: Spirit Tracks": {
                    "gameName": "The Legend of Zelda: Spirit Tracks",
                    "answers": ["the legend of zelda: spirit tracks", "spirit tracks", "loz ph", "zelda awakening", "zelda links awakening", "zelda link's awakening", "the legend of zelda spirit tracks"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1122": {
                            "title": "Opening",
                            "link": "https://youtu.be/Cov0YhIRbis"
                        },
                        "ID_1123": {
                            "title": "File Select",
                            "link": "https://youtu.be/W1xZp3LlVP0"
                        },
                        "ID_1124": {
                            "title": "Princess Zelda",
                            "link": "https://youtu.be/aePE5JVqU9w"
                        },
                        "ID_1125": {
                            "title": "Realm Overworld",
                            "link": "https://youtu.be/5W_bFLwB0WY"
                        },
                        "ID_1126": {
                            "title": "Boss Battle: Fraaz",
                            "link": "https://youtu.be/aSV4s-N1E24"
                        },
                        "ID_1127": {
                            "title": "Boss Battle: Phytops",
                            "link": "https://youtu.be/1b9lQwMf_-I"
                        }
                    }
                },
                "The Legend of Zelda: Ocarina of Time": {
                    "gameName": "The Legend of Zelda: Ocarina of Time",
                    "answers": ["the legend of zelda: ocarina of time", "oot", "loz st", "zelda phantom hourglass", "loz phantom hourglass", "the legend of zelda phantom hourglass"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1128": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/CHsAFs7w3ro"
                        },
                        "ID_1129": {
                            "title": "House",
                            "link": "https://youtu.be/hFj8ijstduI"
                        },
                        "ID_1130": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/uEmWdiMndok"
                        },
                        "ID_1131": {
                            "title": "Hyrule Field",
                            "link": "https://youtu.be/KG3kHhSHF0U"
                        },
                        "ID_1132": {
                            "title": "Market",
                            "link": "https://youtu.be/I_pJpCgT7Qs"
                        },
                        "ID_1133": {
                            "title": "Zora's Domain",
                            "link": "https://youtu.be/_VK9xWhZEyg"
                        },
                        "ID_1134": {
                            "title": "Forest Temple",
                            "link": "https://youtu.be/y2pdg9yGtyQ"
                        },
                        "ID_1135": {
                            "title": "Ganondorf Battle",
                            "link": "https://youtu.be/mNT-FouWfnw"
                        },
                        "ID_1136": {
                            "title": "Gerudo Valley",
                            "link": "https://youtu.be/aebc7Panr5Q"
                        },
                        "ID_1137": {
                            "title": "Hyrule Castle Courtyard",
                            "link": "https://youtu.be/uHubgxagyeQ"
                        },
                        "ID_1138": {
                            "title": "Kakariko Village",
                            "link": "https://youtu.be/8gbpIbQ5vvk"
                        },
                        "ID_1139": {
                            "title": "Kokiri Forest",
                            "link": "https://youtu.be/gEhERNugLzY"
                        },
                        "ID_1140": {
                            "title": "Lost Woods",
                            "link": "https://youtu.be/MqcEYdzZc6U"
                        },
                        "ID_1141": {
                            "title": "Shop",
                            "link": "https://youtu.be/HwZg6veZTUk"
                        },
                        "ID_1142": {
                            "title": "Windmill Hut",
                            "link": "https://youtu.be/dMpk6tAbonM"
                        },
                        "ID_1143": {
                            "title": "Zelda's Theme",
                            "link": "https://youtu.be/2OtDwn34iWY"
                        },
                        "ID_1144": {
                            "title": "Last Battle",
                            "link": "https://youtu.be/1U4Vv65OjVE"
                        }
                    }
                },
                "The Legend of Zelda: Majora's Mask": {
                    "gameName": "The Legend of Zelda: Majora's Mask",
                    "answers": ["the legend of zelda: majora's mask", "majora", "zelda ocarina", "zelda spirit tracks", "loz spirit tracks"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1145": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/AortGYe1sTI"
                        },
                        "ID_1146": {
                            "title": "Majora's Theme",
                            "link": "https://youtu.be/gJQu3iTi54M"
                        },
                        "ID_1147": {
                            "title": "Clock Town, First Day",
                            "link": "https://youtu.be/JaflMqvxIqA"
                        },
                        "ID_1148": {
                            "title": "Milk Bar",
                            "link": "https://youtu.be/tIhZrn8XxH4"
                        },
                        "ID_1149": {
                            "title": "Clock Town, Second Day",
                            "link": "https://youtu.be/eS_42yIISl8"
                        },
                        "ID_1150": {
                            "title": "Shop",
                            "link": "https://youtu.be/WUWlFnxFNF8"
                        },
                        "ID_1151": {
                            "title": "Clock Town, Third Day",
                            "link": "https://youtu.be/la40d6pm17w"
                        },
                        "ID_1152": {
                            "title": "Astral Observatory",
                            "link": "https://youtu.be/ErWVpxkdX_o"
                        },
                        "ID_1153": {
                            "title": "Battle",
                            "link": "https://youtu.be/9aWkaMI2fGc"
                        },
                        "ID_1154": {
                            "title": "Deku Palace",
                            "link": "https://youtu.be/2foI62hzyQ8"
                        },
                        "ID_1155": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/rbHz6IttTpg"
                        },
                        "ID_1156": {
                            "title": "Romani Ranch",
                            "link": "https://youtu.be/NHZygqc7-NU"
                        },
                        "ID_1157": {
                            "title": "Music Box House",
                            "link": "https://youtu.be/2uxk5lefp68"
                        },
                        "ID_1158": {
                            "title": "The End Credits",
                            "link": "https://youtu.be/joMEQmwV8Q8"
                        }
                    }
                },
                "The Legend of Zelda: The Wind Waker": {
                    "gameName": "The Legend of Zelda: The Wind Waker",
                    "answers": ["the legend of zelda: the wind waker", "wind waker", "majoras mask", "zelda ocarina", "zelda ocarina of time", "ocarina of time", "the legend of zelda ocarina of time"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1159": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/o78T9-I4OGA"
                        },
                        "ID_1160": {
                            "title": "File Select",
                            "link": "https://youtu.be/0Kcnmba7v9Q"
                        },
                        "ID_1161": {
                            "title": "The Legendary Hero",
                            "link": "https://youtu.be/2TOZwZIgPtI"
                        },
                        "ID_1162": {
                            "title": "Outset Island",
                            "link": "https://youtu.be/VJsviRJ4voc"
                        },
                        "ID_1163": {
                            "title": "Battle",
                            "link": "https://youtu.be/SRGii05yILI"
                        },
                        "ID_1164": {
                            "title": "Pirates",
                            "link": "https://youtu.be/lYCo08TfYlQ"
                        },
                        "ID_1165": {
                            "title": "Windfall Island",
                            "link": "https://youtu.be/go_XgaJNVgg"
                        },
                        "ID_1166": {
                            "title": "The Great Sea",
                            "link": "https://youtu.be/5J_bL2bjQ-k"
                        },
                        "ID_1167": {
                            "title": "Dragon Roost Island",
                            "link": "https://youtu.be/FkwhtdCW5rI"
                        },
                        "ID_1168": {
                            "title": "Princess Zelda's Theme",
                            "link": "https://youtu.be/kQRhQ9D6ZBQ"
                        },
                        "ID_1169": {
                            "title": "Fairy Spring",
                            "link": "https://youtu.be/9myFEqrzy9o"
                        },
                        "ID_1170": {
                            "title": "Molgera",
                            "link": "https://youtu.be/5CYQzPHpvU8"
                        },
                        "ID_1171": {
                            "title": "Ganondorf Battle",
                            "link": "https://youtu.be/MfbM3GTkTBo"
                        },
                        "ID_1172": {
                            "title": "Aryll's Theme",
                            "link": "https://youtu.be/1UZ1_UfZlUc"
                        },
                        "ID_1173": {
                            "title": "The Great Sea is Cursed",
                            "link": "https://youtu.be/uLTxak2HqAw"
                        }
                    }
                },
                "The Legend of Zelda: Breath of the Wild": {
                    "gameName": "The Legend of Zelda: Breath of the Wild",
                    "answers": ["the legend of zelda: breath of the wild", "botw", "loz wind waker", "majora's mask", "zelda mm", "zelda majoras mask"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1174": {
                            "title": "Riding - Night",
                            "link": "https://youtu.be/f2LgPr9xtAo"
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
                    "answers": ["9 hours, 9 persons, 9 doors", "999", "9 hours 9 persons 9 doors"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_1175": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/g9Qb3yDrj0c"
                        },
                        "ID_1176": {
                            "title": "Recollection",
                            "link": "https://youtu.be/HlC9XkvWvKo"
                        },
                        "ID_1177": {
                            "title": "Septenary Game",
                            "link": "https://youtu.be/hzQ3jse4ars"
                        },
                        "ID_20": {
                            "title": "Morphogenetic Sorrow",
                            "link": "https://youtu.be/U71iXAp0WRk"
                        },
                        "ID_21": {
                            "title": "Who Is Zero?",
                            "link": "https://youtu.be/rNnofSIGNWQ"
                        }
                    }
                },
                "Virtue's Last Reward": {
                    "gameName": "Virtue's Last Reward",
                    "answers": ["virtue's last reward", "virtues last reward", "vlr"],
                    "closeAnswers": [],
                    "songs": {
                        "ID_22": {
                            "title": "Virtue's Last Reward ~Orchestra~",
                            "link": "https://youtu.be/9VSCJAWEPRo"
                        },
                        "ID_23": {
                            "title": "Biotope",
                            "link": "https://youtu.be/nJKKOpiKJGY"
                        },
                        "ID_24": {
                            "title": "Monitor",
                            "link": "https://youtu.be/E1yVqJA3u4Y"
                        },
                        "ID_25": {
                            "title": "Portentousness",
                            "link": "https://youtu.be/rp75JGQCW2Y"
                        },
                        "ID_26": {
                            "title": "Clarification",
                            "link": "https://youtu.be/GJvZwZQV7fs"
                        },
                        "ID_27": {
                            "title": "Confession",
                            "link": "https://youtu.be/J8E20i-dLBI"
                        },
                        "ID_28": {
                            "title": "Demise",
                            "link": "https://youtu.be/qkTmE6zyW9Y"
                        },
                        "ID_29": {
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
                        "ID_30": {
                            "title": "Quondam Monitors [Monty Hall] [Monitor 2nd Mix]",
                            "link": "https://youtu.be/WzNS8Ah139Y"
                        },
                        "ID_31": {
                            "title": "Tough Decision [Make Your Choice]",
                            "link": "https://youtu.be/X_8o4si2A5w"
                        },
                        "ID_32": {
                            "title": "Nostalgic Scenery",
                            "link": "https://youtu.be/7eWaxTNbPJk"
                        },
                        "ID_33": {
                            "title": "Morphogenetic Sorrow [Mix 3] ZTD Ver.",
                            "link": "https://youtu.be/fWYdW5JPQ7c"
                        },
                        "ID_34": {
                            "title": "Transient Tranquility",
                            "link": "https://youtu.be/N_WlaxEkyYY"
                        },
                        "ID_35": {
                            "title": "Blue Bird",
                            "link": "https://youtu.be/4QOXPiSr8oQ"
                        },
                        "ID_36": {
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