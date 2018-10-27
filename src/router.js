import React from 'react';
import {Scene, Router,Actions} from 'react-native-router-flux';
import LoginForm from './components/login/LoginForm';
import StudentsList from "./components/StudentsList";
import StudentCreate from "./components/StudentCreate";
import StudentUpdate from "./components/StudentUpdate";

const RouterComponent = () => {
    return (
        <Router sceneStyle={{backgroundColor: '#f3f3f3'}}>
            <Scene key="root">
                <Scene key="loginScreen" component={LoginForm} title="Giriş Ekranı"/>
                <Scene
                    rightTitle="Yeni"
                    onRight={() => Actions.studentCreate()}
                    key="studentList"
                    component={StudentsList}
                    title="Öğrenci Liste"/>

                <Scene
                    rightTitle="Öğrenci Güncelle"
                    key="studentUpdate"
                    component={StudentUpdate}
                    title="Öğrenci Güncelle"/>
            <Scene
                rightTitle="Yeni"
                onRight={() => console.log(("tıklandı."))}
                key="studentCreate"
                component={StudentCreate}
                title="Öğrenci Kaydet"/>

            </Scene>
        </Router>
    );
}
export default RouterComponent;