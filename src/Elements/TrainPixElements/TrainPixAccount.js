import React from 'react';
import TrainPixAPI from "../../API/TrainPixAPI";
import './TrainPixAccount.css';
import {PersonFill} from "react-bootstrap-icons";
import Input from "../Input";
import LanguageManager from "../../API/LanguageManager";
import Text from "../Text";
import Button from "../Button";
import {Link} from "react-router-dom";

function AccountContLogin() {
    let login = '';
    let password = '';
    return (
        <div className="accountItem">
            <Text type="Bold" value={LanguageManager.getString("login")}/>
            <Input placeholder={LanguageManager.getString("login_input")} onValueChange={(event)=>login=event.value}/>
            <Input placeholder={LanguageManager.getString("password")} onValueChange={(event)=>login=event.value}/>
            <div className="accountItemGrid">
                <Button defaultText={<Text value={LanguageManager.getString("login")}/>} onClick={()=>TrainPixAPI.login({login: login, password: password})}/>
                <Button defaultText={<Text value={LanguageManager.getString("register")}/>} onClick={()=>TrainPixAPI.register({login: login, password: password})}/>
            </div>
        </div>
    );
}
function AccountCont({id}) {
    let account = TrainPixAPI.author({id: id});
    return (
        <div className="accountItem">
            <div className="accountItemGrid">
                <img src={account.avatar} alt={account.nickname}/>
                <div className="accountItem">
                    <Text type="Strong" value={LanguageManager.getString("nickname")}/>
                    <Link to={"/author/"+account.id}>
                        <Text type="Inline" value={account.nickname}/>
                    </Link>
                    <Button defaultText={LanguageManager.getString("logout")} onClick={TrainPixAPI.logout}/>
                </div>
            </div>
        </div>
    );
}

function TrainPixAccount() {
    let id = TrainPixAPI.loginID();
    return (
        <div className="account" style={{flexGrow: 1}}>
            <div className="accountVisible">
                <div id="accountCurrent">
                    <PersonFill size="20"/>
                </div>
            </div>
            <div className="accountContent">
                {
                    (id === "Unauthorized")?<AccountContLogin/> : <AccountCont id={id}/>
                }
            </div>
        </div>
    );
}

export default TrainPixAccount;