import React from 'react';
import {connect} from "react-redux";
import buyCake from '../redux/cake/cakeActions';

interface cakeContainer {
    numberOfCakes: number;
    buyCake: () => void;
}

function CakeContainer(props: cakeContainer){
    return (
        <div>
            <h2> Number of cakes -- {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}> Buy Cake</button>
        </div>
    )
}


const mapStateToProps = (state:any)=>{
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);