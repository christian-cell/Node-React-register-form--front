import React from 'react';
import { useForm } from 'react-hook-form';
import { API } from '../shared/Api';

export default function Formulario() {
    const { register, handleSubmit } = useForm();

    const onSubmit = formData => {
        console.log(formData);

        API.post('formulario', formData)
            .then(res => {
                console.log('te has registrado en mi app')
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="nombre y apellidos" name="nombreApellidos"
                    ref={register({ required: true })} /><br></br>
                <input type="text" placeholder="password" ref={register({ required: true })}
                    name="password" />
                    <br></br>
                <button>Regístrate</button>
            </form>
        </div>
    )
}
