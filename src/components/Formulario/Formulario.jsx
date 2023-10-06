import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';
import FormBs from 'react-bootstrap/Form';
import * as Yup from 'yup';
import "./formulario.css";
import { axiosInstance } from '../../services/axios.config';


const FormCreateProduct = () => {

    const initialValues = {
        name: '',
        description: '',
        image: '',
        stock: '',
        price: '',
        category: ''
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(5, 'Nombre demasiado corto')
            .max(20, 'Nombre demasiado largo')
            .required('El campo es obligatorio'),
        description: Yup.string()
            .min(10, 'Descripcion demasiado corta')
            .required('El campo es obligatorio'),
        image: Yup.string()
            .required('El campo es obligatorio'),
        stock: Yup.number()
            .required('El campo es obligatorio'),
        price: Yup.number()
            .required('El campo es obligatorio'),
        category: Yup.string()
            .oneOf(['Cuadro', 'Sofa', 'Sillon', 'Dormitorio', 'Living', 'Mesa', 'Decorado', 'Hogar','Comedor'], 'Ingrese una categoría válida. Ejemplo: "Cuadro", "Sofa", "Sillon", "Dormitorio", "Living", "Mesa", "Decorado"')
            .required('El campo es obligatorio')
    })



    return (
        <section className='section__formulario'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    axiosInstance.post('/', values)
                        .then(response => {
                            if (response.status === 201) {
                                setSubmitting(false);
                                resetForm();

                            } else {
                                throw new Error(`[${response.status}] error en la solicitud`)
                            }
                        })
                        .catch(err => console.error(err))

                }}
            >
                {
                    ({ errors, isSubmitting, touched }) => (
                        <FormBs as={Form} className='formulario'>
                            <FormBs.Group className="mb-3 form-floating formField">
                                <FormBs.Control as={Field} id='name' type='text' placeholder='' name='name' className='input formulario__input mb-3' />
                                <FormBs.Label htmlFor="name">Nombre del producto</FormBs.Label>
                                {
                                    errors.name && touched.name && (<ErrorMessage name='name' component='div' className='error'></ErrorMessage>)
                                }
                            </FormBs.Group>
                            <FormBs.Group className="mb-3 form-floating formField">

                                <FormBs.Control as={Field} id='description' type='text' placeholder='' name='description' className='input formulario__input' />
                                <FormBs.Label htmlFor="description">Descripcion del producto</FormBs.Label>
                                {
                                    errors.description && touched.description && (<ErrorMessage name='description' component='div' className='error'></ErrorMessage>)
                                }
                            </FormBs.Group>
                            <FormBs.Group className="mb-3 form-floating formField">
                                <FormBs.Control as={Field} id='image' type='text' placeholder='' name='image' className='input formulario__input' />
                                <FormBs.Label htmlFor="image">Imagen del producto</FormBs.Label>
                                {
                                    errors.image && touched.image && (<ErrorMessage name='image' component='div' className='error'></ErrorMessage>)
                                }
                            </FormBs.Group>
                            <FormBs.Group className="mb-3 form-floating formField">
                                <FormBs.Control as={Field} id='stock' type='number' placeholder='' name='stock' className='input formulario__input' />
                                <FormBs.Label htmlFor="stock">Stock del producto</FormBs.Label>
                                {
                                    errors.stock && touched.stock && (<ErrorMessage name='stock' component='div' className='error'></ErrorMessage>)
                                }
                            </FormBs.Group>
                            <FormBs.Group className="mb-3 form-floating formField">
                                <FormBs.Control as={Field} id='price' type='number' placeholder='' name='price' className='input formulario__input' />
                                <FormBs.Label htmlFor="price">Precio del producto</FormBs.Label>
                                {
                                    errors.price && touched.price && (<ErrorMessage name='price' component='div' className='error'></ErrorMessage>)
                                }
                            </FormBs.Group>
                            <FormBs.Group className="mb-3 form-floating formField">
                                <FormBs.Control as={Field} id='category' type='text' placeholder='' name='category' className='input formulario__input' />
                                <FormBs.Label htmlFor="price">Categoria del producto</FormBs.Label>
                                {
                                    errors.category && touched.category && (<ErrorMessage name='category' component='div' className='error'></ErrorMessage>)
                                }
                            </FormBs.Group>
                            <Button
                                type='submit'
                                className='btn btn-dark formulario__btn'
                            >
                                Cargar producto
                            </Button>
                            {
                                isSubmitting && (<p className='submit__p'>Enviando nuevo producto</p>)
                            }

                        </FormBs>
                    )
                }
            </Formik>


        </section>
    )
}

export default FormCreateProduct