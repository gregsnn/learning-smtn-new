import React from "react";
import styles from './form.module.scss';

type OnChange = ( event: React.ChangeEvent<HTMLInputElement> ) => void;

export function Form( { onChange }: { onChange: OnChange } ) {
	return (
		<>
			<form action="#" className={ styles.form }>
				<div className={styles.form__input}>
					<input onChange={ onChange } type="text" name="text" placeholder="task" />
					<button type="submit">Submit</button>
				</div>
			</form>
		</>
	);
}
