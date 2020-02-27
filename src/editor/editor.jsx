import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EditorComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			text: '',
			title: '',
			id: ''
		};
	}

	updateBody = async value => {
		console.log('updating');
		// Set the state.
		await this.setState({ text: value });

		// Debounce the update before sending to firebase.
		this.update();
	};

	update = debounce(() => {
		console.log('updating db');
		// TODO:
	}, 1875);

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.editorContainer}>
				<ReactQuill value={this.state.text} onChange={this.updateBody}></ReactQuill>
			</div>
		);
	}
}

export default withStyles(styles)(EditorComponent);
