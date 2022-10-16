import React from 'react';
import {useForm} from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import "./styles.css";

const Form = ({comments, setComments}) => {
  const {
    register,
    onChange,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit'
  });

  const onSubmit = ({comment}) => {
    setComments(
      [{
        id: uuidv4(),
        text: comment,
      }, ...comments]
    );
    reset();  
  }

  return (
    <section>
      <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} className='form'>
      <h3>Add a comment:</h3>
        <label>
          <textarea rows="4" cols="30" placeholder="Please, add a comment..." 
          {...register('comment', {
              required: "Пожалуйста, заполните поле",
              maxLength: {
                value: 50,
                message: "Максимальная длина комментария - 50 символов!",
              },
              setValueAs: value => value.replace(/viagra/gi, '***').replace(/XXX/gi, '***')
            })
          }
          autoFocus
          onChange={onChange}
          />
        </label>
        <div className='red'>
          {errors.comment && <p>{errors.comment.message || "Что-то пошло не так... :("}</p>}
        </div>
        <label>
          <input className='btn' type="submit" value='add' />
        </label>     
      </form>
    </section>
  )
}

export default Form