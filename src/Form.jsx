import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const Form = ({comments, setComments}) => {
  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit'
  });

  const onSubmit = () => {
    setComments(
      [{
        id: uuidv4(),
        text: value,
      }, ...comments]
    );
    reset();  
  }

  const [value, setValue] = useState('');

  return (
    <section>
      <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <label> Comment:
          <textarea placeholder="Please, add a comment..." 
          {...register('comment', {
              required: "Пожалуйста, заполните поле",
              maxLength: {
                value: 50,
                message: "Максимальная длина комментария - 50 символов!",
                setValueAs: value => value.replace(/viagra/gi, '***').replace(/XXX/gi, '***')
              }
            })
          }
          autoFocus
          onChange={e => setValue(e.target.value)}
          />
        </label>
        <div>
          {errors.comment && <p>{errors.comment.message || "Что-то пошло не так... :("}</p>}
        </div>
        <label>
          <input type="submit" value='add' />
        </label>     
      </form>
    </section>
  )
}

export default Form