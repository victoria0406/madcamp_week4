import React, { Component } from 'react';


//images of items
import img_fresh from './images/공기청정기.jpg';
import img_clean from "./images/청소기.jpg";
import img_coffee from "./images/캡슐커피머신.jpg"
import img_wind from "./images/바람막이.jpg";
import img_healthy from "./images/홍삼.jpg";
//따로 선언해야 합니당

//function for choosing items

const list_of_items = ["공기청정기","청소기","캠슐커피머신","바람막이","홍삼"];
const cost_of_items = [400000, 800000, 200000, 100000, 50000];
const img_of_items = [img_fresh,img_clean,img_coffee,img_wind, img_healthy];
var total_cost = 0;



class Buylist extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    buy_less=()=>{
        if(this.state.count!=0){
            this.setState({count:this.state.count-1});
            this.props.setState({total_cost: this.props.state.total_cost- cost_of_items[Number(this.props.index)]});

        }
    }
    
    buy_more=()=>{
        this.setState({count:this.state.count+1});
        this.props.setState({total_cost: this.props.state.total_cost+ cost_of_items[Number(this.props.index)]});
    }
    render(){
        return(
            <div>
                <img src = {img_of_items[Number(this.props.index)]} alt="item_image" width ="100px"/>
                <div>{list_of_items[Number(this.props.index)]}</div>
                <div>{cost_of_items[Number(this.props.index)]} </div>
                <div>
                    <button onClick={this.buy_less}>-</button>
                    <p>{this.state.count}</p>
                    <button onClick={this.buy_more}>+</button>
                </div>
            </div> 
        )
    }
}


class Buyview extends Component {
    constructor(props){
        super(props);
        this.state = {
            total_cost:0
        }
        this.setState = this.setState.bind(this); 
    }
    
    render(){
        return(
            <div>
                <div>{this.state.total_cost}</div>
                <Buylist index="0" state={this.state} setState={this.setState}/>
                <Buylist index="1"state={this.state} setState={this.setState}/>
                <Buylist index="2"state={this.state} setState={this.setState}/>
                <Buylist index="3"state={this.state} setState={this.setState}/>
                <Buylist index="4"state={this.state} setState={this.setState}/>
                
            </div>
        );
    }
    
}

export default Buyview;