import React, { Component } from 'react';
import { Header, Form } from '../../component';
import styles from './home.module.scss';

type OnChange = ( event: React.ChangeEvent<HTMLInputElement> ) => void;
type State = { tasks: string };

export class Home extends Component {
	state: State = {
		tasks: '',
	}

	handleChange: OnChange = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
		this.setState( {
			tasks: event.target.value,
		} );
	}

	render(): React.ReactNode {
		const { tasks } = this.state;

		return (
			<>
				<Header />

				<main className={styles.main}>
					<h1>Lista de Tarefas</h1>

					<Form
						onChange={ this.handleChange }
					/>

					<span> { tasks } </span>
				</main>
			</>
		)
	}
}
