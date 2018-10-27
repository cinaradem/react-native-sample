import React, {Component} from 'react';
import {Text, TextInput, Picker} from 'react-native';
import {connect} from 'react-redux';
import {Button, Card, CardSection, Spinner} from "./common";
import {studentDelete, studentUpdate} from '../actions';

class StudentUpdate extends Component {

    state = {isim: '', soyisim: '', ogrencinumara: '', sube: ''}

    componentWillMount() {
        const {isim, soyisim, ogrencinumara, sube} = this.props.student;
        this.setState({isim, soyisim, ogrencinumara, sube});
    }

    clickUpdate() {
        const {isim, soyisim, ogrencinumara, sube} = this.state;

        this.props.studentUpdate({isim, soyisim, ogrencinumara, sube, uid: this.props.student.uid});

    }

    clickDelete() {
        this.props.studentDelete({uid: this.props.student.uid});
    }

    renderButton() {
        if (!this.props.loadingUpdate) {
            return <Button onPress={this.clickUpdate.bind(this)}>Güncelle</Button>
        }
        return <Spinner size="small"/>
    }

    renderDeleteButton() {
        if (!this.props.loadingDelete) {
            return <Button onPress={this.clickDelete.bind(this)}>Sil</Button>
        }
        return <Spinner size="small"/>
    }

    render() {
        const {inputSyle} = styles;
        return (
            <Card>
                <CardSection>
                    <TextInput
                        placeholder="İsim"
                        style={inputSyle}
                        value={this.state.isim}
                        onChangeText={isim => this.setState({isim})}
                    />
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="Sosisim"
                        style={inputSyle}
                        value={this.state.soyisim}
                        onChangeText={soyisim => this.setState({soyisim})}
                    />
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="Öğrenci Numarası"
                        style={inputSyle}
                        value={this.state.ogrencinumara}
                        onChangeText={ogrencinumara => this.setState({ogrencinumara})}
                    />
                </CardSection>
                <CardSection>
                    <Text>Şube</Text>
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.state.sube}
                        onValueChange={sube => this.setState({sube})}>
                        <Picker.Item label="A Şubesi" value="asube"/>
                        <Picker.Item label="B Şubesi" value="bsube"/>
                        <Picker.Item label="C Şubesi" value="csube"/>
                        <Picker.Item label="D Şubesi" value="dsube"/>
                    </Picker>
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
                <CardSection>
                    {this.renderDeleteButton()}
                </CardSection>
            </Card>

        );
    }
}

const styles = {
    inputStyle: {
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        flex: 1
    }
}

const mapStateToProps = ({studentsUpdateReponse,studentsDeleteReponse}) => {
    const {loadingUpdate} = studentsUpdateReponse;
    const {loadingDelete} = studentsDeleteReponse;
    return {loadingUpdate,loadingDelete};
}

export default connect(mapStateToProps, {studentDelete, studentUpdate})(StudentUpdate);