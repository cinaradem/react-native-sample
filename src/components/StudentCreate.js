import React, {Component} from 'react';
import {Text, TextInput, Picker} from 'react-native';
import {connect} from 'react-redux';
import {Button, Card, CardSection, Spinner} from "./common";
import {studentChange, studentCreate} from '../actions';

class StudentCreate extends Component {
    clickSave() {
        const {isim, soyisim, ogrencinumara, sube} = this.props;

        this.props.studentCreate({isim, soyisim, ogrencinumara, sube});

    }

    renderButton() {
        if (!this.props.loading) {
            return <Button onPress={this.clickSave.bind(this)}>Kaydet</Button>
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
                        value={this.props.isim}
                        onChangeText={isim => this.props.studentChange({props: 'isim', value: isim})}
                    />
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="Sosisim"
                        style={inputSyle}
                        value={this.props.soyisim}
                        onChangeText={soyisim => this.props.studentChange({props: 'soyisim', value: soyisim})}
                    />
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="Öğrenci Numarası"
                        style={inputSyle}
                        value={this.props.ogrencinumara}
                        onChangeText={ogrencinumara => this.props.studentChange({
                            props: 'ogrencinumara',
                            value: ogrencinumara
                        })}
                    />
                </CardSection>
                <CardSection>
                    <Text>Şube</Text>
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.props.sube}
                        onValueChange={sube => this.props.studentChange({props: 'sube', value: sube})}>
                        <Picker.Item label="A Şubesi" value="asube"/>
                        <Picker.Item label="B Şubesi" value="bsube"/>
                        <Picker.Item label="C Şubesi" value="csube"/>
                        <Picker.Item label="D Şubesi" value="dsube"/>
                    </Picker>
                </CardSection>
                <CardSection>
                    {this.renderButton()}
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

const mapStateToProps = ({studentsCreateResponse}) => {
    const {isim, soyisim, ogrencinumara, sube, loading} = studentsCreateResponse;
    return {isim, soyisim, ogrencinumara, sube, loading};
}

export default connect(mapStateToProps, {studentChange, studentCreate})(StudentCreate);