
class MiscFuncs {
    constructor() {
        this.messages = {};
        this.commands = {"empty": 0};
    }

    getText( message ) {
        this.messages = {
            correct: `
                <p>
                <span class="colorCorrect"> That was correct! </span> <br>
            `,
            timeTaken: `
                <span class="warningText">Time taken: ${quiz.state.timeToAnswer} seconds!</span> <br>
            `,
            timeMessage: `
                <span class="${quiz.state.timeMessage}"> ${quiz.state.timeMessage.toUpperCase()}! </span> <br>
            `,

            wrong: `
                <p>
                <span class="wrongText"> "${textInput.value}" is incorrect! </span>
                </p>
            `,
            songInfo: `
                Track: <a href="https://youtu.be/${quiz.SG.track.link}/" target="_blank" ><span class="boldText answerList"> \t${quiz.SG.track.title}</a> </span> <br>
                Game: <span class="boldText"> \t${quiz.SG.game.gameName} </span> <br>
                Series: <span class="boldText"> \t${quiz.SG.series.seriesName} </span> <br><br>
                Answers: <span class="boldText"> \t${quiz.OTHERFUNC.generateAnswers()}... </span>
                </p>
            `,
            skip: `
                <p>
                <span class="boldText warningText"> You skipped that round! </span>
                </p>
            `,
            commandError: `
                <p>
                <span class="warningText">"${quiz.state.failedCommand}" is not a command.</span>
                </p>
            `,
            closeAnswer: `
                <p>
                <span class="warningText">"${textInput.value}" is close!</span>
                </p>
            `,
            
            comboMessages: [
                `<p><span class="ultrasonic"> An insane combo!! </span> <br> `,
                `<p><span class="ultrasonic"> Keep it going!! </span> <br> `,
                `<p><span class="ultrasonic"> MADNESS!! </span> <br> `,
                `<p><span class="ultrasonic"> Well done!! </span> <br> `,
                `<p><span class="ultrasonic"> Alright settle down!! </span> <br> `,
            ],

            timeOut: `
                <p>
                <span class="wrongText boldText"> Time's Up! </span> <br>
                <span class="wrongText">That's too bad, better luck next time!</span> <br>
            `,
            shieldUsed: `
                <p>
                <span class="shieldColor boldText"> Shield raised! </span> <br>
                <span class="shieldColor">You won't lose points or your combo this turn, even if you skip!</span>
                </p>
            `,
            shieldRecharge: `
                <p>
                <span class="shieldColor boldText"> Your shield is ready to go! </span>
                </p>
            `,
            playerError: `
                <p>
                <span class="wrongText boldText"> Something went wrong! </span> <br>
                <span class="wrongText"> Please refresh the page. </span>
                </p>
            `

        }
        if ( message === "comboMessages" ) {
            return `${this.messages.comboMessages[this.randomInt(this.messages.comboMessages.length)]}
                <span class="comboColor">That's ${quiz.state.currentCombo} in a row!</span></p>`
        }
        let text = this.messages[message];

        return text;
    }

    generateAnswers() {
        let answers = new Set();
        let answersString = "";
        let sentinel = 5;
        if ( quiz.SG.game.answers.length < sentinel ) {
            sentinel = quiz.SG.game.answers.length;
        }

        while ( answers.length )

        answersString += quiz.SG.game.answers[ quiz.OTHERFUNC.randomInt( quiz.SG.game.answers.length ) ] 

        return answersString;
        
        
    }

    generateText( text ) {
        // prevents too many messages
        if ( text === "undefined" ) { return }
        if ( textArea.childNodes.length > 50 ) {
            textArea.removeChild( textArea.childNodes[0] );
        }
        let pEl = document.createElement("p");
        pEl.innerHTML += text;
        textArea.appendChild( pEl );
        quiz.OTHERFUNC.scrollToBottom();
    }
    /**
     * ie: "ultrasonic" or "supersonic"
     */
    getTimeMessage() {
        // calc time (TOTAL)
        quiz.state.timeToAnswer = (quiz.state.timeEnd - quiz.state.timeStart) / 1000;
    
        let time = quiz.state.timeToAnswer;
    
        if ( time < 2 ) { this.updateRoundPoints( 2 ); return "ultrasonic"; }
        else if ( time < 4 ) {  this.updateRoundPoints( 1 ); return "supersonic" }
        else { return ""; }
    
    }

    checkForCommand( input ) {
        if ( this.commands.hasOwnProperty("empty") ) {
            this.commands = {
                "/skip": quiz.SH.skipSong,
                "/pass": quiz.SH.skipSong,
                "/next": quiz.SH.skipSong,
            
                "/mute": quiz.SH.muteSong,
                "/unmute": quiz.SH.muteSong,

                "/shield": quiz.useShield,
                "/def": quiz.useShield,

                "/afk" : quiz.goAFK,
                "/away" : quiz.goAFK,
                "/back" : quiz.goAFK
            }
        }        
        
        for (let command in this.commands) {
            if ( input.trim().toLowerCase() === command ) {
                this.commands[command]();
                return
            }
        }
    
        quiz.state.failedCommand = input;
        this.generateText( this.getText("commandError") );
    }

    updateRoundPoints( amount ) {
        quiz.state.roundPoints += amount;
    }

    updateCounter() {
        quiz.state.pointCounterValue += quiz.state.roundPoints * quiz.state.comboMultiplier;
        pointCounter.innerText = quiz.state.pointCounterValue;
    }

    randomInt( max ) {
        return Math.floor( Math.random() * max );
    }

    scrollToBottom() {
        textArea.scrollTop = textArea.scrollHeight;
    }

}