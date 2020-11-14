import React from 'react'
import Checkbox from '../Controls/Checkbox/Checkbox'
import Dropdown from '../Controls/Dropdown/Dropdown'
import Button from '../Controls/Button/Button'
import Input from '../Controls/TextField/Input'
import Form from '../Form/Form'

export default function Main() {
  return (
    <main className="main main--registration">
      <Form>
        <div className="form__row--header">
          <h1 className="text text--header form__text form__text--header">Регистрация</h1>
          <p className="text text--regular form__text form__text--regular">
            Уже есть аккаунт? <a href="/" className="text--link">Войти</a>
          </p>
        </div>

        <div className="form__row">
          <Input 
            id="form-name" 
            label="Имя" 
            placeholder="Введите Ваше имя" 
            type="text" 
          />
        </div>

        <div className="form__row">
          <Input 
            id="form-mail" 
            label="Email" 
            placeholder="Введите Ваш email" 
            type="email" 
          />
        </div>

        <div className="form__row">
          <Input 
            id="form-phone" 
            label="Номер телефона" 
            placeholder="Ваш номер телефона" 
            type="phone" 
          /> 
        </div>

        <div className="form__row">
          <Dropdown 
            id="form-languages" 
            values={['Русский', 'Английский', 'Китайский', 'Испанский']} 
            defaultValue='Язык'
          />
        </div>

        <div className="form__row">
          <Checkbox 
            id="form-agreement" 
            label={ <>Принимаю <a href="#" className="text--link">условия</a> соглашения</> }
          />
        </div>

        <div className="form__row">
          <Button 
            text="Зарегистрироваться"
            type="submit"
            isFluid
          />
        </div>
      </Form>
    </main>
  )
}