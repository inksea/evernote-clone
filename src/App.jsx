import React from 'react';
import './App.css';
import firebase from 'firebase';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedNoteIndex: null,
			selectedNote: null,
			notes: null
		};
	}

	componentDidMount = () => {
		firebase
			.firestore()
			.collection('notes')
			.onSnapshot(serverUpdate => {
				const notes = serverUpdate.docs.map(_doc => {
					const data = _doc.data();

					data['id'] = _doc.id;

					return data;
				});

				console.log(notes);
				this.setState({ notes: notes });
			});
	};

	render() {
		return (
			<>
				<p>Hello world</p>
			</>
		);
	}
}
