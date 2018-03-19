import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  
})

export class MainComponent implements OnInit {

  trig: boolean = true;
  click: boolean = true;
  draw: boolean = false;
  turn: string = "Player ONE: your turn";
  playerOne: number = 0;
  playerTwo: number = 0;
  blocks = [];
  wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  won: string = ""; 
  buttonStartStyle:string = "block";
  rightStyle:string = "none";
  buttonRestartStyle:string = "none";

  start(){
    this.blocks = ["","","","","","","","",""];
    this.turn = "Player ONE: your turn";
    this.buttonStartStyle = "none";
    this.rightStyle = "block";
    this.buttonRestartStyle = "none";
    this.click = true; 
  }

  restart(){
    this.start();
    this.won = "";
    this.trig = true;
    this.draw = false;
  }
  

  // Click X|O and win functions
  XO(i){
    if(this.click && this.blocks[i] === "" && this.draw === false) {  
      if(this.trig){
        this.blocks[i] = "X";
        this.trig = false;
        this.turn = "Player TWO: your turn";
      }else{
        this.blocks[i] = "O";
        this.trig = true;
        this.turn = "Player ONE: your turn";
      }

    for(let i=0; i<this.blocks.length; i++){
      this.draw = true;
      if(this.blocks[i] === ""){
        this.draw = false;
        break;
      }
    }
    if(this.draw === true){
      this.won = "DRAW";
      this.buttonRestartStyle = "block";
      this.turn = "";
    }

    for(let i=0; i<this.wins.length; i++){
      if(this.win(i)){
        if(this.trig && this.draw === false){
          this.won = "Second player has WON the game";
          this.playerTwo ++;
          this.click = false;
          this.buttonRestartStyle = "block";
        }else if(!(this.trig) && this.draw === false){
          this.won = "First player has WON the game";
          this.click = false;
          this.playerOne ++;
          this.buttonRestartStyle = "block";
        }
        break;
      };
    }

  }
}

  win(i){
    let winTrig = false;
      for(let j in this.wins[i]){
          if(this.blocks[this.wins[i][j]] === "X"){
            winTrig = true;
          }else{
            winTrig = false;
            break;
        }
      }
    if(winTrig === true){
      return winTrig;
    }else{
      for(let j in this.wins[i]){
        if(this.blocks[this.wins[i][j]] === "O"){
           winTrig = true;
        }else{
          winTrig = false;
          break;
        }
      }
    }
    return winTrig;
  }




  constructor() { }

  ngOnInit() {
  }

}
