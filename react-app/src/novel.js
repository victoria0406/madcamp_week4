import './Game.css';


import React, { Component } from 'react';

const scenario = [
    {
      "name": "김애저",
      "text": "첫번째 샘플 텍스트입니다."
    },
    {
      "name": "김애저",
      "text": "두번쨰 샘플 텍스트입니다."
    },
    {
      "text": "이름이 없는 경우에는 이름 창이 사라졌으면 좋겠어요."
    },
    {
      "name": "rladowj",
      "text": "왈왈"
    }
  ]

class Novelview extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: scenario[0].name,
            text: scenario[0].text,
            count:1
        }
    }
    next_script = () =>{
        this.setState({name:scenario[this.state.count].name})
        this.setState({text:scenario[this.state.count].text})
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <div class="novel">
                <div>{this.state.name}</div>
                <div>{this.state.text}</div>
                <button onClick={this.next_script}>넘어가기</button>
            </div>
        );
    }
    
}
export default Novelview;