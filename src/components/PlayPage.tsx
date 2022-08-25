import { useEffect, useState } from "react";
import { ChessBoard } from "./ChessBoard";

import { Hedaer } from "./Header";
import { LeftMenu } from "./LeftMenu";
import { RightMenu } from "./RightMenu";

export function PlayPage({user}:any){
    const[tabel , setTabel] = useState([
        [{figure:"♜", name:"rook",color:"black",canMove:false,enemy:false,selected:false},
        {figure:"♞", name:"knight",color:"black",canMove:false,enemy:false,selected:false},
        {figure:"♝", name:"bishop",color:"black",canMove:false,enemy:false,selected:false},
        {figure:"♛", name:"queen",color:"black",canMove:false,enemy:false,selected:false},
        {figure:"♚", name:"king",color:"black",canMove:false,enemy:false,selected:false},
        {figure:"♝", name:"bishop",color:"black",canMove:false,enemy:false,selected:false},
        {figure:"♞", name:"knight",color:"black",canMove:false,enemy:false,selected:false},
        {figure:"♜", name:"rook",color:"black",canMove:false,enemy:false,selected:false}],
     
        [{figure:"♟", name:"pawn",color:"black",firstTimeMove:false,canMove:false,enemy:false,selected:false},
        {figure:"♟", name:"pawn",color:"black",firstTimeMove:false,canMove:false,enemy:false,selected:false},
        {figure:"♟", name:"pawn",color:"black",firstTimeMove:false,canMove:false,enemy:false,selected:false},
        {figure:"♟", name:"pawn",color:"black",firstTimeMove:false,canMove:false,enemy:false,selected:false},
        {figure:"♟", name:"pawn",color:"black",firstTimeMove:false,canMove:false,enemy:false,selected:false},
        {figure:"♟", name:"pawn",color:"black",firstTimeMove:false,canMove:false,enemy:false,selected:false},
        {figure:"♟", name:"pawn",color:"black",firstTimeMove:false,canMove:false,enemy:false,selected:false},
        {figure:"♟", name:"pawn",color:"black",firstTimeMove:false,canMove:false,enemy:false,selected:false}],
     
       [{figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false}],
     
       [{figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false}],
     
       [{figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false}],
     
       [{figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
       {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false}],
     
      
       [{figure:"♙", name:"pawn",color:"white",firstTimeMove:true,canMove:false,enemy:false,selected:false},
       {figure:"♙", name:"pawn",color:"white",firstTimeMove:true,canMove:false,enemy:false,selected:false},
       {figure:"♙", name:"pawn",color:"white",firstTimeMove:true,canMove:false,enemy:false,selected:false},
       {figure:"♙", name:"pawn",color:"white",firstTimeMove:true,canMove:false,enemy:false,selected:false},
       {figure:"♙", name:"pawn",color:"white",firstTimeMove:true,canMove:false,enemy:false,selected:false},
       {figure:"♙", name:"pawn",color:"white",firstTimeMove:true,canMove:false,enemy:false,selected:false},
       {figure:"♙", name:"pawn",color:"white",firstTimeMove:true,canMove:false,enemy:false,selected:false},
       {figure:"♙", name:"pawn",color:"white",firstTimeMove:true,canMove:false,enemy:false,selected:false}],
     
       [{figure:"♖", name:"rook",color:"white",canMove:false,enemy:false,selected:false},
       {figure:"♘", name:"knight",color:"white",canMove:false,enemy:false,selected:false},
       {figure:"♗", name:"bishop",color:"white",canMove:false,enemy:false,selected:false},
       {figure:"♕", name:"queen",color:"white",canMove:false,enemy:false,selected:false},
       {figure:"♔", name:"king",color:"white",canMove:false,enemy:false,selected:false},
       {figure:"♗", name:"bishop",color:"white",canMove:false,enemy:false,selected:false},
       {figure: "♘", name:"knight",color:"white",canMove:false,enemy:false,selected:false},
       {figure:"♖", name:"rook",color:"white",canMove:false,enemy:false,selected:false}],
      ])
    const[usehint,setUseHint]=useState(false)
    const[userssignin,setUsersSignin]=useState([])
    useEffect(() => {
      setInterval(() => {
        fetch(`http://localhost:3005/sign_in`)
        .then((response)=>response.json())
        .then(usersFromServer=>setUsersSignin(usersFromServer))
      }, 1000);
    }, []);

    return (
        <>
        {userssignin.length===2 ?
          <>
        <Hedaer user={user}/>
      <div className='main'>
          <LeftMenu setUseHint={setUseHint}/>
          <ChessBoard tabel={tabel} setTabel={setTabel} usehint={usehint} setUseHint={setUseHint} userssignin={userssignin} user={user}/>
          <RightMenu/>
      </div>
      </> : <h1>Waitinggg for your friend</h1>
}
      </>
    )
}