import { Redirect } from "react-router";
import { UserContext } from "../contexts";
import Page from './Page';
import  {useContext} from 'react';
import { LOGIN_PATH } from "../routes";

export default function GuardedPage(props){
    const userContext = useContext(UserContext);
    return (
    <Page>
    {!(userContext.loggedIn) && <Redirect to={LOGIN_PATH}/>}
    {props.children}
    </Page>)
}