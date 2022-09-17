import React from "react";
import { 
    AddFriendButton, 
    Company, 
    CompanyObjectOfNumber, 
    CounterDisplay, 
    Lamp, 
    List, 
    ListOfString,
    NavigationHeader, User,
    Screen } from "./AllPropTypes";
import SayHello from "./SayHello";

function LearnPropTypes(){
    return (
        <>
        <SayHello name={["Dede"]} />
        <CounterDisplay count={"0"} />
        <Lamp isDark={true} />
        <Lamp isDark={"false"} />
        <List data={["hello", "hi", "dede"]}  />
        <ListOfString data={["1", 2, 5]} />
        <Company data={{ 
            name: "Dicoding",
            city: "Bandung",
            since: 2005
        }} />
        <CompanyObjectOfNumber data={{ 
            numOne: 1,
            numTwo: "2",
            numThree: 3
        }} />
        <AddFriendButton onAdd={(event) => {
            alert("adding a friend");
        }} />
        <NavigationHeader user={new User('Dicoding')} />
        <NavigationHeader user={{ name: 'Dicoding' }} />
        <Screen mode="dark" />
        <Screen mode="light" />
        <Screen mode="default" />
        </>
    );
}

export default LearnPropTypes;