import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity } from 'react-native';

import CharacterCard from "../components/CharacterCard/CharacterCard";
import firebase from "firebase";
import { Audio } from 'expo-av';



export default class DashboardScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

            charactersRound1: [{ id: 1, clicked: false, image: require("./Images/Nickfury.png") }, { id: 2, clicked: false, image: require("./Images/Thor.jpg") },
            { id: 3, clicked: false, image: require("./Images/ScarlettWitch.jpg") }, { id: 4, clicked: false, image: require("./Images/Hulk.png") },
            { id: 5, clicked: false, image: require("./Images/Blackpanther.jpg") }, { id: 6, clicked: false, image: require("./Images/ultron.png") },
            { id: 7, clicked: false, image: require("./Images/Ironman.jpg") }, { id: 8, clicked: false, image: require("./Images/Captainmarvel.jpg") },
            { id: 9, clicked: false, image: require("./Images/Thanos.jpg") }, { id: 10, clicked: false, image: require("./Images/Blackwidow.jpg") },
            { id: 11, clicked: false, image: require("./Images/Spiderman.jpg") }, { id: 12, clicked: false, image: require("./Images/Vision.jpg") }],

            charactersRound2: [{ id: 1, clicked: false, image: require("./Images/Nickfury.png") }, { id: 2, clicked: false, image: require("./Images/Thor.jpg") },
            { id: 3, clicked: false, image: require("./Images/ScarlettWitch.jpg") }, { id: 4, clicked: false, image: require("./Images/Hulk.png") },
            { id: 5, clicked: false, image: require("./Images/Blackpanther.jpg") }, { id: 6, clicked: false, image: require("./Images/ultron.png") },
            { id: 7, clicked: false, image: require("./Images/Ironman.jpg") }, { id: 8, clicked: false, image: require("./Images/Captainmarvel.jpg") },
            { id: 9, clicked: false, image: require("./Images/Thanos.jpg") }, { id: 10, clicked: false, image: require("./Images/Blackwidow.jpg") },
            { id: 11, clicked: false, image: require("./Images/Spiderman.jpg") }, { id: 12, clicked: false, image: require("./Images/Vision.jpg") },
            { id: 13, clicked: false, image: require("./Images/warmachine.jpg") }, { id: 14, clicked: false, image: require("./Images/antman.jpg") },
            { id: 15, clicked: false, image: require("./Images/mantis.png") }, { id: 16, clicked: false, image: require("./Images/pepper.jpg") },
            { id: 17, clicked: false, image: require("./Images/quick.png") }, { id: 18, clicked: false, image: require("./Images/Wasp.jpg") },
            { id: 19, clicked: false, image: require("./Images/shuri.jpg") }, { id: 20, clicked: false, image: require("./Images/okoye.jpg") },
            { id: 21, clicked: false, image: require("./Images/ubaka.jpg") }, { id: 22, clicked: false, image: require("./Images/redskull.jpg") }],

            AllCharacters: [{ id: 1, clicked: false, image: require("./Images/Nickfury.png") }, { id: 2, clicked: false, image: require("./Images/Thor.jpg") },
            { id: 3, clicked: false, image: require("./Images/ScarlettWitch.jpg") }, { id: 4, clicked: false, image: require("./Images/Hulk.png") },
            { id: 5, clicked: false, image: require("./Images/Blackpanther.jpg") }, { id: 6, clicked: false, image: require("./Images/ultron.png") },
            { id: 7, clicked: false, image: require("./Images/Ironman.jpg") }, { id: 8, clicked: false, image: require("./Images/Captainmarvel.jpg") },
            { id: 9, clicked: false, image: require("./Images/Thanos.jpg") }, { id: 10, clicked: false, image: require("./Images/Blackwidow.jpg") },
            { id: 11, clicked: false, image: require("./Images/Spiderman.jpg") }, { id: 12, clicked: false, image: require("./Images/Vision.jpg") },
            { id: 13, clicked: false, image: require("./Images/warmachine.jpg") }, { id: 14, clicked: false, image: require("./Images/antman.jpg") },
            { id: 15, clicked: false, image: require("./Images/mantis.png") }, { id: 16, clicked: false, image: require("./Images/pepper.jpg") },
            { id: 17, clicked: false, image: require("./Images/quick.png") }, { id: 18, clicked: false, image: require("./Images/Wasp.jpg") },
            { id: 19, clicked: false, image: require("./Images/shuri.jpg") }, { id: 20, clicked: false, image: require("./Images/okoye.jpg") },
            { id: 21, clicked: false, image: require("./Images/ubaka.jpg") }, { id: 22, clicked: false, image: require("./Images/redskull.jpg") },
            { id: 23, clicked: false, image: require("./Images/rocket.jpg") }, { id: 24, clicked: false, image: require("./Images/Groot.jpg") },
            { id: 25, clicked: false, image: require("./Images/hawkeye.jpg") }, { id: 26, clicked: false, image: require("./Images/gamora.jpg") },
            { id: 27, clicked: false, image: require("./Images/falcon.png") }, { id: 28, clicked: false, image: require("./Images/drstrange.jpg") },
            { id: 29, clicked: false, image: require("./Images/loki.jpg") }, { id: 30, clicked: false, image: require("./Images/nebula.jpg") },
            { id: 31, clicked: false, image: require("./Images/winter.png") }, { id: 32, clicked: false, image: require("./Images/vilian.jpg") },
            { id: 33, clicked: false, image: require("./Images/drax.jpg") }
            ],
            score: 0,
            topScore: 0,
            clicked: [],

            message: "Click on each character only once!",
            isbasic: true,
            isadvanced1: false,
            isadvanced2: false,
            deal: [],
            // user: firebase.auth().currentUser.displayName,
            isPlaying: false,
           
        };
    }






    componentDidMount() {
      
        // this.musicToggle();
       
        this.setState({ deal:this.state.charactersRound1 });
        this.arrayShuffle();
       
        // API.getTop()

        //     .then(res => {

        //         console.log(res.data[0].score);

        //         this.setState({ topScore:res.data[0].score })
        //     })

        //     .catch(err => console.log(err));





        // API.saveName({
        //     username: firebase.auth().currentUser.displayName,
        //     score: 0

        // })
        //     .then(res => this.scores())
        //     .catch(err => console.log(err));
        //
       this.btnplayerclicked()
    }


    btnplayerclicked = async() => {
        await Audio.Sound.createAsync(require("../assets/avengsong.mp3"), {shouldPlay:true, isLooping:true } )

        }

        gameOver = async() => {
            await Audio.Sound.createAsync(require("../assets/gameover.mp3"), {shouldPlay:true} )
    
            }

        levelUp1 = async() => {
            await Audio.Sound.createAsync(require("../assets/levelup.mp3"), {shouldPlay:true } )
    
            }


            levelUp2 = async() => {
                await Audio.Sound.createAsync(require("../assets/levelups.mp3"), {shouldPlay:true} )
        
                }

                clickSound = async() => {
                    await Audio.Sound.createAsync(require("../assets/gameclick.mp3"), {shouldPlay:true} )
            
                    }

    

    arrayShuffle = () => {
       
        let newPos,
            temp;
        let _characters = this.state.deal;
        for (let i = _characters.length - 1; i > 0; i--) {
            newPos = Math.floor(Math.random() * (i + 1));
            temp = _characters[i];
            _characters[i] = _characters[newPos];
            _characters[newPos] = temp;

        }
        return _characters;

    };

    handleClick = (id) => {
        console.log(id)

        let clicked = this.state.clicked;
        let score = this.state.score + 1;
        let topScore = this.state.topScore;
        let message = "";
        let isbasic = this.state.isbasic;
        let isadvanced1 = this.state.isadvanced1;
        let isadvanced2 = this.state.isadvanced2;
        let deal = this.arrayShuffle();

            this.clickSound();
        if (clicked.includes(id)) {
            score = 0;

            this.gameOver();
            message = "😟 Incorrect!! Click an image to start again!";
            clicked = [];
            isbasic = true;
            isadvanced1 = false;
            isadvanced2 = false;
            deal = this.state.charactersRound1


        }
        else {

            message = "😎 You are correct";
            clicked = [...this.state.clicked, id];

            // this.scoreSave(score);
        }

        if (score > topScore) {
            topScore = score;
            message = "😎 You are correct";
            clicked = [...this.state.clicked, id];
        }

        if (score === 12) {
            score = 12;
            message = "YAY!!! You have beat the first level would you like to try the next level 👍";
            this.levelUp1();
            this.levelUp2();
            clicked = [];
            isbasic = false;
            isadvanced1 = true;
            deal = this.state.charactersRound2;
        }
        if (score === 34) {
            score = 34;
            message = "YAY!!! You have beat the second level would you like to try the next level 👍";
            this.levelUp1();
            this.levelUp2();
            clicked = [];
            isbasic = false;
            isadvanced1 = false;
            isadvanced2 = true;
            deal = this.state.AllCharacters;
        }
        if (score === 67) {
            score = 67;
            message = "You Win Game Over";
            this.levelUp1();
            this.levelUp2();
            clicked = [];
            isbasic = true;
            isadvanced1 = false;
            isadvanced2 = false;
            deal = this.state.charactersRound1

        }



        this.setState({ deal, score, topScore, clicked, message, isbasic, isadvanced1, isadvanced2 })

    };

    // musicToggle = () => {
    //     let isPlaying = this.state.isPlaying;


    //     if (isPlaying === true) {
    //         themeSong.pauseAsync
    //         isPlaying = false;
    //     }
    //     else {
    //         themeSong.playAsync;
    //         isPlaying = true;
    //     }


    //     this.setState({ isPlaying })
    // };

    // scoreSave = (_score) => {

    //     API.saveScore(

    //         {
    //             username: this.state.user,

    //             score: _score
    //         }

    //     )

    //         .then(res => this.scores())
    //         .catch(err => console.log(err));
    // };






    render() {
        let deal
        let isbasic = this.state.isbasic;
        let isadvanced1 = this.state.isadvanced1;
        let isadvanced2 = this.state.isadvanced2;
        if (isbasic === true) {
            deal = this.state.charactersRound1.map(character => (


                <CharacterCard
                    handleClick={this.handleClick}
                    id={character.id}
                    name={character.name}
                    pic={character.image}
                    key={character.image}
                />

            ))
        } else if (isadvanced1 === true) {
            deal = this.state.charactersRound2.map(character => (

                <CharacterCard
                    handleClick={this.handleClick}
                    id={character.id}
                    name={character.name}
                    pic={character.image}
                    key={character.image}
                />

            ))
        }
        if (isadvanced2 === true) {
            deal = this.state.AllCharacters.map(character => (

                <CharacterCard
                    handleClick={this.handleClick}
                    id={character.id}
                    name={character.name}
                    pic={character.image}
                    key={character.image}

                />

            ))
        }

        return (



            <View style={styles.bigWrap}>

                <View style={styles.headContainer}>
                    


                    <Text style={styles.score}> Score:{this.state.score} || TopScore:{this.state.topScore}</Text>
                    <Button title="SIGN OUT"   onPress={() => firebase.auth().signOut()} />
                </View>
                <View>
                    <Text style={styles.message}>{this.state.message}</Text>
                </View>

                <View  style={styles.Container}>
                    {deal}
                </View>





            </View>


        );
    }
}






const styles = StyleSheet.create({

    bigWrap: {

        flex: 1,

        height: "100%",
        width: "100%",
        justifyContent: "center"

    },


    Container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
     
        flexDirection: 'row',
        flexWrap: 'wrap',

    },

    headContainer: {
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-between",
        height: "7%",
        width: "100%",

        marginTop: "5.5%",
    },
    message:{
        color:"white"
    },
    score:{
        color:"red",
        fontSize: 20,
    }


});